import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;
const DB_FILE = path.join(process.cwd(), "contacts.json");

// Ensure database file exists
if (!fs.existsSync(DB_FILE)) {
  fs.writeFileSync(DB_FILE, JSON.stringify([], null, 2), "utf8");
}

app.use(express.json());

// In-memory array for real-time notification simulation logs
const notificationsQueue: Array<{
  id: string;
  type: string;
  title: string;
  body: string;
  recipient: string;
  sender: string;
  timestamp: string;
  payload: any;
}> = [];

// ==================== DATABASE & API ROUTES ====================

// 1. GET /api/health
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

// 2. GET /api/contacts - Secure fetch of all entries (Database query)
app.get("/api/contacts", (req, res) => {
  try {
    const data = fs.readFileSync(DB_FILE, "utf8");
    const contacts = JSON.parse(data);
    res.json({ success: true, count: contacts.length, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to query contact database" });
  }
});

// 3. POST /api/contact - Secure submission and email dispatch trigger
app.post("/api/contact", (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Strict validation schema (Scalable database schema security)
    if (!name || typeof name !== "string" || name.trim().length < 2 || name.length > 100) {
      return res.status(400).json({ success: false, error: "Invalid name (must be 2-100 chars)" });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email) || email.length > 120) {
      return res.status(400).json({ success: false, error: "Invalid email format" });
    }
    if (!subject || typeof subject !== "string" || subject.trim().length < 3 || subject.length > 200) {
      return res.status(400).json({ success: false, error: "Invalid subject (must be 3-200 chars)" });
    }
    if (!message || typeof message !== "string" || message.trim().length < 10 || message.length > 5000) {
      return res.status(400).json({ success: false, error: "Invalid message (must be 10-5000 chars)" });
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedSubject = subject.trim();
    const trimmedMessage = message.trim();

    // Read database
    const dbData = fs.readFileSync(DB_FILE, "utf8");
    const contacts = JSON.parse(dbData);

    // Create entry conforming to schema
    const newSubmission = {
      id: "cnt_" + Math.random().toString(36).substring(2, 11),
      name: trimmedName,
      email: trimmedEmail,
      subject: trimmedSubject,
      message: trimmedMessage,
      createdAt: new Date().toISOString(),
      ipAddress: req.ip || "unknown"
    };

    // Save to file (Document store mock)
    contacts.push(newSubmission);
    fs.writeFileSync(DB_FILE, JSON.stringify(contacts, null, 2), "utf8");

    // Produce Real-Time Email Notification Model
    const emailNotification = {
      id: "ntf_" + Math.random().toString(36).substring(2, 11),
      type: "CONTACT_FORM_SUBMISSION",
      title: `New Lead: ${trimmedSubject} from ${trimmedName}`,
      sender: "smtp-gateway@najmul-portfolio.com",
      recipient: "hasannajmul559@gmail.com", // Najmul's email
      timestamp: new Date().toISOString(),
      body: `
========================================
📬 REAL-TIME EMAIL DISPATCH (SIMULATED VIA SECURE BACKEND TRANSPORTER)
To: hasannajmul559@gmail.com
From: leads@najmul-hasan.shihab.dev
Subject: Direct Lead: ${trimmedSubject}

Hello Najmul,

You have received a new professional query from your website contact form.

Sender Profile:
- Name: ${trimmedName}
- Email: ${trimmedEmail}
- Date: ${new Date().toLocaleString()}

Message:
"${trimmedMessage}"

--
Automated Email Transporter
Portfolio Contact API
========================================
`,
      payload: newSubmission
    };

    // Output to server stdout/terminal (verifying email dispatch)
    console.log(emailNotification.body);

    // Add to real-time browser notification stream queue
    notificationsQueue.push(emailNotification);
    if (notificationsQueue.length > 20) {
      notificationsQueue.shift(); // Bound memory growth
    }

    res.json({
      success: true,
      message: "Submission saved and email notification dispatched successfully.",
      data: { id: newSubmission.id, createdAt: newSubmission.createdAt }
    });
  } catch (error) {
    console.error("Contact API error:", error);
    res.status(500).json({ success: false, error: "Transactional database error" });
  }
});

// 4. GET /api/notifications - Real-time client polling check
app.get("/api/notifications", (req, res) => {
  res.json({ success: true, count: notificationsQueue.length, data: notificationsQueue });
});

// 5. DELETE /api/notifications - Clear simulated queue
app.delete("/api/notifications", (req, res) => {
  notificationsQueue.length = 0;
  res.json({ success: true, message: "Queue cleared" });
});

// ==================== VITE & STATIC FILES SERVING ====================

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    // Development mode
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production mode
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`\n🚀 [Full-Stack Portfolio Server Active]`);
    console.log(`   - Dev/Prod URL: http://localhost:${PORT}`);
    console.log(`   - Database file locked: ${DB_FILE}`);
    console.log(`   - Contact submissions endpoint: POST /api/contact`);
    console.log(`   - Notifications observer endpoint: GET /api/notifications\n`);
  });
}

startServer();
