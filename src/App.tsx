import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Research from "./components/Research";
import ContactForm from "./components/ContactForm";
import ThemeToggle from "./components/ThemeToggle";
import { Menu, X, ArrowUp, Github, Mail, Phone, ExternalLink } from "lucide-react";
import { PERSONAL_INFO } from "./data";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle navbar blur style
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Toggle scroll to top button
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const menuItems = [
    { label: "Home", target: "hero" },
    { label: "Timeline", target: "timeline" },
    { label: "Projects", target: "projects" },
    { label: "Skills", target: "skills" },
    { label: "Research", target: "research" },
    { label: "Contact", target: "contact" }
  ];

  return (
    <div className="min-h-screen bg-[#FBFBF9] text-gray-900 dark:bg-[#0A0A0A] dark:text-[#F4F4F4] transition-colors duration-300 antialiased font-sans">
      
      {/* HEADER / NAVIGATION BAR */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? "bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur-md border-[#C5A47E]/10 dark:border-white/10 py-4 shadow-none" 
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* BRAND NAME LOGO */}
          <button 
            id="nav-logo-btn"
            onClick={() => scrollToSection("hero")}
            className="text-xs tracking-[0.4em] font-extrabold text-black dark:text-white hover:text-[#C5A47E] dark:hover:text-[#C5A47E] transition-colors cursor-pointer flex items-center gap-1.5 uppercase font-sans"
          >
            <span>NHS • PORTFOLIO</span>
          </button>

          {/* DESKTOP MENU ITEMS */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.target}
                id={`nav-item-${item.target}`}
                onClick={() => scrollToSection(item.target)}
                className="text-[11px] tracking-[0.25em] uppercase font-semibold text-gray-500 hover:text-black dark:text-white/60 dark:hover:text-white transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* ACTION BUTTON CONTROLS AND TOGGLES */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            
            {/* MOBILE HAMBURGER BUTTON */}
            <button
              id="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-none border border-black/10 dark:border-white/10 bg-white/5 text-gray-700 dark:text-gray-300 cursor-pointer"
              aria-label="Toggle structural drawer menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 text-[#C5A47E]" /> : <Menu className="w-4 h-4 text-[#C5A47E]" />}
            </button>
          </div>

        </div>
      </header>

      {/* MOBILE DRAWER PORTAL */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden bg-white/98 dark:bg-[#0A0A0A]/98 backdrop-blur-lg pt-28 px-6 border-b border-black/10 dark:border-white/10"
          >
            <nav className="flex flex-col gap-6 text-left text-sm font-bold uppercase tracking-[0.2em]">
              {menuItems.map((item) => (
                <button
                  key={item.target}
                  id={`mobile-nav-item-${item.target}`}
                  onClick={() => scrollToSection(item.target)}
                  className="py-3 border-b border-black/5 dark:border-white/5 hover:text-[#C5A47E] dark:hover:text-[#C5A47E] flex items-center justify-between cursor-pointer text-gray-600 dark:text-white/70"
                >
                  <span>{item.label}</span>
                  <span className="text-[#C5A47E] font-serif italic font-normal">→</span>
                </button>
              ))}
            </nav>
            <div className="mt-12 space-y-4">
              <div className="text-[10px] text-[#C5A47E] uppercase tracking-[0.3em] font-mono">Let's Connect</div>
              <div className="flex gap-4">
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="p-3 border border-black/10 dark:border-white/10 hover:border-[#C5A47E] text-black dark:text-white rounded-none">
                  <Github className="w-4 h-4" />
                </a>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="p-3 border border-black/10 dark:border-white/10 hover:border-[#C5A47E] text-black dark:text-white rounded-none">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* RENDER BODY BLOCKS */}
      <main className="pt-20">
        <Hero onContactClick={() => scrollToSection("contact")} />
        <Timeline />
        <Projects />
        <Skills />
        <Research />
        <ContactForm />
      </main>

      {/* CORE FOOTER SECTION */}
      <footer className="bg-white dark:bg-[#0A0A0A] border-t border-black/10 dark:border-white/10 py-16 transition-colors duration-300">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            
            {/* BRAND STATMENT */}
            <div className="md:col-span-2 space-y-6 text-left">
              <div className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A47E]">
                {PERSONAL_INFO.name}
              </div>
              <p className="text-xs font-serif italic text-gray-500 dark:text-white/60 max-w-sm leading-relaxed text-[15px]">
                Empowering clinical diagnosis with demographics-fair calibrated machine learning models and engineering high-fidelity Flutter applications.
              </p>
              <div className="flex items-center gap-3.5 pt-2">
                <a 
                  id="footer-github-shortcut"
                  href={PERSONAL_INFO.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-transparent hover:bg-black hover:text-white dark:hover:bg-[#C5A47E] dark:hover:text-black border border-black/10 dark:border-white/10 text-gray-700 dark:text-white/60 transition-colors rounded-none"
                  title="GitHub Profile"
                >
                  <Github className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>

            {/* QUICK LINK SHORTCUTS */}
            <div className="text-left space-y-4">
              <h4 className="text-[10px] font-bold font-mono uppercase text-[#C5A47E] tracking-[0.3em]">Quick Shortcuts</h4>
              <ul className="space-y-2 text-[11px] uppercase tracking-wider font-semibold text-gray-550 dark:text-white/50">
                {menuItems.slice(1).map((item) => (
                  <li key={item.target}>
                    <button 
                      id={`footer-link-${item.target}`}
                      onClick={() => scrollToSection(item.target)} 
                      className="hover:text-[#C5A47E] dark:hover:text-[#C5A47E] hover:underline transition-colors cursor-pointer"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* DIRECT METADATA CONTACTS */}
            <div className="text-left space-y-4">
              <h4 className="text-[10px] font-bold font-mono uppercase text-[#C5A47E] tracking-[0.3em]">Inbox Delivery</h4>
              <ul className="space-y-4 text-[11px] font-medium text-gray-650 dark:text-white/50">
                <li className="flex items-center gap-2.5">
                  <Mail className="w-3.5 h-3.5 text-[#C5A47E]" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-[#C5A47E] hover:underline break-all uppercase tracking-wider text-[10px]">
                    {PERSONAL_INFO.email}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-3.5 h-3.5 text-[#C5A47E]" />
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-[#C5A47E] hover:underline tracking-wider">
                    {PERSONAL_INFO.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2.5 pt-1">
                  <a 
                    id="footer-github-portal"
                    href={PERSONAL_INFO.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 text-[9px] font-bold font-mono text-gray-400 hover:text-[#C5A47E] dark:hover:text-[#C5A47E] uppercase tracking-widest"
                  >
                    <span>GITHUB WORKSPACE</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* LOWER LEAF DIVIDER */}
          <div className="border-t border-black/10 dark:border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[9px] text-[#A0A0A0] dark:text-white/30 uppercase tracking-[0.2em]">
            <div>
              © {new Date().getFullYear()} Md. Najmul Hasan Shihab Studio
            </div>
            <div>
              Optimized for Premium High-Resolution Displays
            </div>
            <div className="flex items-center gap-1.5">
              <span>Built with Intentionality</span>
              <span className="w-1.5 h-1.5 bg-[#C5A47E]"></span>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOAT SCROLL TO TOP TRANSITIONAL BUTTON */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            id="scroll-to-top-btn"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-11 h-11 rounded-none bg-black text-[#C5A47E] dark:bg-[#C5A47E] dark:text-[#0A0A0A] shadow-md hover:bg-[#C5A47E] hover:text-black dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer border border-[#C5A47E]/20"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
