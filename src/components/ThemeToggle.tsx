import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "motion/react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") return stored;
      // If none, default to dark theme for premium developer feel
      return "dark";
    }
    return "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <motion.button
      id="theme-toggle-btn"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-10 h-10 rounded-none bg-black/[0.02] hover:bg-black/[0.06] dark:bg-white/[0.02] dark:hover:bg-white/[0.06] border border-black/15 dark:border-white/15 text-gray-800 dark:text-[#C5A47E] cursor-pointer transition-all focus:outline-none focus:ring-1 focus:ring-[#C5A47E]"
      aria-label="Toggle theme mode"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === "dark" ? 0 : 180,
          scale: theme === "dark" ? 0 : 1,
          opacity: theme === "dark" ? 0 : 1,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="absolute"
      >
        <Sun className="w-4 h-4 text-[#C5A47E]" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          rotate: theme === "dark" ? 0 : -180,
          scale: theme === "dark" ? 1 : 0,
          opacity: theme === "dark" ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="absolute"
      >
        <Moon className="w-4 h-4 text-[#C5A47E]" />
      </motion.div>
    </motion.button>
  );
}
