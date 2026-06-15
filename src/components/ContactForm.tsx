import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Terminal, Mail, CheckCircle2, AlertTriangle, RefreshCw, Layers } from "lucide-react";

interface FormFields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

interface ServerNotification {
  id: string;
  type: string;
  title: string;
  sender: string;
  recipient: string;
  timestamp: string;
  body: string;
}

export default function ContactForm() {
  const [fields, setFields] = useState<FormFields>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [serverNotifications, setServerNotifications] = useState<ServerNotification[]>([]);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "mta_socket initialized on port 587",
    "ready to connect to smtp.najmul-hasan.shihab.dev",
    "secured ssl connection with cipher ECDHE-RSA-AES256-GCM-SHA384",
    "listening for direct routing payloads..."
  ]);

  // Read notification stream queue from custom Express database
  const fetchNotifications = async () => {
    try {
      const response = await fetch("/api/notifications");
      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          setServerNotifications(result.data);
        }
      }
    } catch (e) {
      console.warn("Failed to reach notification api:", e);
    }
  };

  useEffect(() => {
    // Notification polling disabled for Vercel deployment
    // fetchNotifications();
    // // Poll notifications every 5 seconds to show newly arriving emails if multiple tabs submit them
    // const timer = setInterval(() => {
    //   fetchNotifications();
    // }, 5000);
    // return () => clearInterval(timer);
  }, []);

  // Form input validation rules
  const validateForm = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!fields.name.trim()) {
      tempErrors.name = "Full name is required";
    } else if (fields.name.trim().length < 2) {
      tempErrors.name = "Must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!fields.email) {
      tempErrors.email = "Email address is required";
    } else if (!emailRegex.test(fields.email)) {
      tempErrors.email = "Invalid email format (e.g., name@domain.com)";
    }

    if (!fields.subject.trim()) {
      tempErrors.subject = "Subject is required";
    } else if (fields.subject.trim().length < 3) {
      tempErrors.subject = "Subject must be at least 3 characters";
    }

    if (!fields.message.trim()) {
      tempErrors.message = "Message details are required";
    } else if (fields.message.trim().length < 10) {
      tempErrors.message = "Details must be at least 10 characters";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as they type
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleClearLogs = async () => {
    try {
      await fetch("/api/notifications", { method: "DELETE" });
      setServerNotifications([]);
      setTerminalLogs([
        "notifications queue flushed dynamically",
        "mta_socket listening on port 587...",
      ]);
    } catch {
      // Ignore
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setFormState("submitting");
    setErrorMessage("");

    // Append connecting status logs to terminal
    setTerminalLogs((prev) => [
      ...prev,
      `mta_tx requested by client node ${fields.email}`,
      "sending payload block...",
      "validating request auth, content integrity, and types filters...",
    ]);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setFormState("success");
        setTerminalLogs((prev) => [
          ...prev,
          "✔ status 200: transactional insert into DB completed",
          "⚡ server dispatched mail trigger: smtp-relay.google.com outbound authorized",
          "📧 email envelope formatted and routed successfully",
          `📥 notification queued for recipient: hasannajmul559@gmail.com`,
          `📜 TRANSACTION_ID: ${result.data.id}`
        ]);
        // Trigger immediate pull to render their email log!
        fetchNotifications();
        // Clear forms
        setFields({ name: "", email: "", subject: "", message: "" });
      } else {
        setFormState("error");
        setErrorMessage(result.error || "Transactional database validation failure.");
        setTerminalLogs((prev) => [
          ...prev,
          `⛔ TX_REJECTED: ${result.error || "validation error"}`,
        ]);
      }
    } catch (e) {
      setFormState("error");
      setErrorMessage("Full-stack service temporarily offline. Please verify endpoint compilation.");
      setTerminalLogs((prev) => [
        ...prev,
        "⛔ network_fail: failed to connect to express backend server API.",
      ]);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#FBFBF9] dark:bg-[#0A0A0A] border-y border-black/5 dark:border-white/5 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#C5A47E]/10 dark:bg-[#C5A47E]/5 text-[#C5A47E] font-mono text-[10px] uppercase tracking-[0.3em] font-bold border border-[#C5A47E]/20 mb-3.5 rounded-none"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Outbound Channels</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-serif italic font-light text-black dark:text-white tracking-tight mb-4">
            Validated Lead Gateway & Mail Dispatcher
          </h2>
          <p className="text-sm tracking-wide text-gray-500 dark:text-white/60">
            Send a validated direct query to my inbox. Watch the real-time SMTP and database transaction pipelines in the backend log console alongside the form.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* LEFT SIDE: SECURE CONTACT FORM */}
          <div className="lg:col-span-6 bg-white dark:bg-[#0A0A0A] border border-black/10 dark:border-white/10 rounded-none p-6 md:p-8 shadow-none text-left">
            <h3 className="text-sm font-bold text-gray-950 dark:text-white mb-6 uppercase tracking-widest flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#C5A47E]" />
              <span>Direct Lead Channels</span>
            </h3>

            {formState === "success" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-5 rounded-none bg-[#C5A47E]/5 border border-[#C5A47E]/30 text-[#C5A47E] mb-6"
              >
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-[#C5A47E] mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[10px] uppercase tracking-wider">Message Saved Dynamically!</h4>
                    <p className="text-xs font-serif italic text-[#C5A47E]/80 mt-1 leading-relaxed">
                      Your query has bypassed our filters, saved to the database, and triggered an outbound SMTP email dispatch simulator as logged in the console.
                    </p>
                    <button
                      id="contact-form-reset-btn"
                      onClick={() => setFormState("idle")}
                      className="mt-3 text-[10px] uppercase font-bold tracking-wider underline cursor-pointer hover:text-black dark:hover:text-white transition-colors"
                    >
                      Compose Another Query
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {formState === "error" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-4 rounded-none bg-rose-500/5 text-rose-500 border border-rose-500/20 mb-6 flex gap-2.5 items-start"
              >
                <AlertTriangle className="w-4 h-4 shrink-0 text-rose-500 mt-0.5" />
                <div className="text-[10px] font-mono uppercase tracking-wide">
                  <span className="font-bold">Transaction Failed:</span> {errorMessage}
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* SENDER NAME */}
              <div className="space-y-2 text-left">
                <label className="text-[10px] font-bold text-gray-500 dark:text-white/40 uppercase tracking-[0.25em] font-mono">My Name</label>
                <input
                  id="contact-form-name-input"
                  name="name"
                  type="text"
                  placeholder="e.g. Professor John Doe"
                  value={fields.name}
                  onChange={handleChange}
                  disabled={formState === "submitting"}
                  className={`w-full p-3.5 rounded-none text-xs font-mono tracking-wider bg-transparent text-gray-900 dark:text-white border ${
                    errors.name 
                      ? "border-rose-500" 
                      : "border-black/5 dark:border-white/5 bg-black/[0.015] dark:bg-white/[0.01] focus:border-[#C5A47E] dark:focus:border-[#C5A47E]"
                  } outline-none transition-colors duration-200`}
                />
                {errors.name && <p className="text-[9px] uppercase tracking-wider font-mono text-rose-500">{errors.name}</p>}
              </div>

              {/* SENDER EMAIL */}
              <div className="space-y-2 text-left">
                <label className="text-[10px] font-bold text-gray-500 dark:text-white/40 uppercase tracking-[0.25em] font-mono">My Email</label>
                <input
                  id="contact-form-email-input"
                  name="email"
                  type="text"
                  placeholder="e.g. contact@gmail.com"
                  value={fields.email}
                  onChange={handleChange}
                  disabled={formState === "submitting"}
                  className={`w-full p-3.5 rounded-none text-xs font-mono tracking-wider bg-transparent text-gray-900 dark:text-white border ${
                    errors.email 
                      ? "border-rose-500" 
                      : "border-black/5 dark:border-white/5 bg-black/[0.015] dark:bg-white/[0.01] focus:border-[#C5A47E] dark:focus:border-[#C5A47E]"
                  } outline-none transition-colors duration-200`}
                />
                {errors.email && <p className="text-[9px] uppercase tracking-wider font-mono text-rose-500">{errors.email}</p>}
              </div>

              {/* QUERY SUBJECT */}
              <div className="space-y-2 text-left">
                <label className="text-[10px] font-bold text-gray-500 dark:text-white/40 uppercase tracking-[0.25em] font-mono">Disclosing Subject</label>
                <input
                  id="contact-form-subject-input"
                  name="subject"
                  type="text"
                  placeholder="e.g. Research Collaboration / Research Staging"
                  value={fields.subject}
                  onChange={handleChange}
                  disabled={formState === "submitting"}
                  className={`w-full p-3.5 rounded-none text-xs font-mono tracking-wider bg-transparent text-gray-900 dark:text-white border ${
                    errors.subject 
                      ? "border-rose-500" 
                      : "border-black/5 dark:border-white/5 bg-black/[0.015] dark:bg-white/[0.01] focus:border-[#C5A47E] dark:focus:border-[#C5A47E]"
                  } outline-none transition-colors duration-200`}
                />
                {errors.subject && <p className="text-[9px] uppercase tracking-wider font-mono text-rose-500">{errors.subject}</p>}
              </div>

              {/* MESSAGE DETAILS */}
              <div className="space-y-2 text-left">
                <label className="text-[10px] font-bold text-gray-500 dark:text-white/40 uppercase tracking-[0.25em] font-mono">Detailed Inquiry</label>
                <textarea
                  id="contact-form-message-input"
                  name="message"
                  rows={4}
                  placeholder="Tell, how could I contribute in your research paper or tech development model..."
                  value={fields.message}
                  onChange={handleChange}
                  disabled={formState === "submitting"}
                  className={`w-full p-3.5 rounded-none text-xs font-mono tracking-wider bg-transparent text-gray-900 dark:text-white border ${
                    errors.message 
                      ? "border-rose-500" 
                      : "border-black/5 dark:border-white/5 bg-black/[0.015] dark:bg-white/[0.01] focus:border-[#C5A47E] dark:focus:border-[#C5A47E]"
                  } outline-none transition-colors duration-200 resize-none`}
                />
                {errors.message && <p className="text-[9px] uppercase tracking-wider font-mono text-rose-500">{errors.message}</p>}
              </div>

              {/* TRIGGER SUBMIT */}
              <button
                id="contact-form-submit-btn"
                type="submit"
                disabled={formState === "submitting"}
                className={`w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-none bg-[#C5A47E] text-[#0A0A0A] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer border border-[#C5A47E] font-bold text-[10px] uppercase tracking-[0.25em] disabled:opacity-40`}
              >
                {formState === "submitting" ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-black" />
                    <span>Executing Transactional Pipelines...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-black" />
                    <span>Dispatched Outbound Query</span>
                  </>
                )}
              </button>

            </form>
          </div>

          {/* RIGHT SIDE: MTA/SMTP REAL-TIME DEPARTURE DISPLAY LOGS */}
          <div className="lg:col-span-6 flex flex-col justify-between overflow-hidden bg-[#0A0A0A] border border-black/10 dark:border-white/10 rounded-none p-5 md:p-6 shadow-none text-left min-h-[480px]">
            <div>
              {/* Terminal Title Bar decoration */}
              <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#C5A47E]" />
                  <span className="font-mono text-[9px] uppercase tracking-widest font-bold text-white/50">SMTP Outbound MTA Dispatch console</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-red-500/60 rounded-none"></span>
                  <span className="w-1.5 h-1.5 bg-yellow-500/60 rounded-none"></span>
                  <span className="w-1.5 h-1.5 bg-[#C5A47E]/60 rounded-none animate-pulse"></span>
                </div>
              </div>

              {/* Dynamic Terminal Streams logs */}
              <div className="space-y-1.5 h-48 overflow-y-auto font-mono text-[10px] leading-relaxed select-text pr-2 scrollbar-thin scrollbar-thumb-white/5">
                {terminalLogs.map((log, index) => (
                  <div key={index} className="flex gap-2">
                    <span className="text-white/20">[{new Date().toLocaleTimeString()}]</span>
                    {log.startsWith("⛔") || log.startsWith("FAIL") ? (
                      <span className="text-rose-400">{log}</span>
                    ) : log.startsWith("✔") || log.startsWith("⚡") ? (
                      <span className="text-[#C5A47E] font-bold">{log}</span>
                    ) : (
                      <span className="text-white/60">{log}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* REAL-TIME SMTP NOTIFICATION DRAWER PREVIEW */}
              <div className="mt-4 pt-4 border-t border-white/5">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-bold text-[8px] font-mono text-[#C5A47E] uppercase tracking-widest flex items-center gap-1.5">
                    <span>Simulated Mail Servers Inbox</span>
                    <span className="inline-flex w-1.5 h-1.5 bg-[#C5A47E] animate-ping"></span>
                  </h4>
                  <button
                    id="contact-form-clear-logs"
                    onClick={handleClearLogs}
                    className="text-[8px] uppercase tracking-wider font-mono text-white/40 hover:text-[#C5A47E] font-semibold underline cursor-pointer"
                  >
                    Flush Database Queue
                  </button>
                </div>

                <div className="h-48 overflow-y-auto bg-black rounded-none p-3 border border-white/5">
                  <AnimatePresence>
                    {serverNotifications.length === 0 ? (
                      <div className="h-full flex items-center justify-center text-center text-white/20 text-[9px] font-mono py-8 select-none">
                        <div>
                          <p>No queries dispatched yet.</p>
                          <p className="mt-1 text-[8px] text-white/40 leading-relaxed max-w-sm mx-auto">Submit the contact form on research papers and watch the generated JSON and SMTP payload show up here in real-time!</p>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4 font-sans text-left">
                        {[...serverNotifications].reverse().map((notif) => (
                          <motion.div
                            key={notif.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-left font-mono text-[9px] leading-snug p-3 rounded-none bg-white/[0.01] border border-white/5 hover:border-[#C5A47E]/30"
                          >
                            <div className="flex justify-between items-start text-[#C5A47E] mb-1.5 border-b border-white/5 pb-1 uppercase tracking-wider font-bold text-[8px]">
                              <span>📬 Outbound Mail #{notif.id}</span>
                              <span className="text-white/30">{new Date(notif.timestamp).toLocaleTimeString()}</span>
                            </div>
                            <div className="space-y-0.5 text-white/60">
                              <div><span className="text-white/20">FROM:</span> {notif.sender}</div>
                              <div><span className="text-white/20">TO:</span> {notif.recipient}</div>
                              <div><span className="text-white/20">SUBJ:</span> {notif.title}</div>
                            </div>
                            <div className="mt-2 text-[11px] font-sans italic text-white/80 select-all border-t border-white/5 pt-2 whitespace-pre-wrap leading-relaxed max-h-32 overflow-y-auto">
                              {notif.body}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </AnimatePresence>
                </div>

              </div>

            </div>

            {/* Simulated Server Info Footer */}
            <div className="flex items-center justify-between text-[8px] text-white/30 font-mono border-t border-white/5 pt-3 mt-4">
              <span className="flex items-center gap-1.5 uppercase tracking-wider hover:text-emerald-400 transition-colors cursor-pointer text-white/40 text-[7px]">
                <span className="w-1.5 h-1.5 bg-emerald-500"></span>
                <span>Relay Online</span>
              </span>
              <span className="uppercase tracking-wider">TLSv1.3 • AES-256</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
