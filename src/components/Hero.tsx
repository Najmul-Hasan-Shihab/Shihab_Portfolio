import { motion } from "motion/react";
import { Github, Mail, FileText, MapPin, Award, Terminal, Code } from "lucide-react";
import { PERSONAL_INFO } from "../data";

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  // Simple simulator to download CV
  const handleDownloadCV = () => {
    // Generate a beautiful simulated resume downloading experience
    const resumeText = `MD. NAJMUL HASAN SHIHAB - CURRICULUM VITAE\n\nEmail: ${PERSONAL_INFO.email}\nPhone: ${PERSONAL_INFO.phone}\nLinkedIn: ${PERSONAL_INFO.location}\n\nDownload full PDF in production release.`;
    const blob = new Blob([resumeText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Md_Najmul_Hasan_Shihab_CV.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center py-12 md:py-24 overflow-hidden bg-[#FBFBF9] dark:bg-[#0A0A0A] transition-colors duration-300 border-b border-black/5 dark:border-white/5">
      {/* Dynamic Background Grid Ornamentation */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#C5A47E_1px,transparent_1px),linear-gradient(to_bottom,#C5A47E_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: INTRODUCTORY COPY */}
          <div className="lg:col-span-7 text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-[#C5A47E]/10 dark:bg-[#C5A47E]/5 text-[#C5A47E] font-mono text-[10px] uppercase tracking-[0.3em] font-bold border border-[#C5A47E]/20 mb-8 rounded-none"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Available for Technical Collaborations</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-sans font-light tracking-tighter leading-[0.9] mb-4 text-black dark:text-[#F4F4F4]"
            >
              Hi, I'm <br />
              <span className="font-serif italic text-[#C5A47E] block mt-2">{PERSONAL_INFO.name}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-wrap items-center gap-2.5 mb-8 text-[11px] uppercase tracking-[0.2em] font-medium text-gray-500 dark:text-white/40"
            >
              {PERSONAL_INFO.subtitles.map((sub, i) => (
                <span 
                  key={i} 
                  className="flex items-center border-r border-[#C5A47E]/20 dark:border-white/10 pr-3 last:border-r-0 last:pr-0"
                >
                  {sub}
                </span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-serif italic text-base md:text-lg text-gray-600 dark:text-white/70 leading-relaxed mb-10 max-w-2xl"
            >
              {PERSONAL_INFO.bio}
            </motion.p>
 
            {/* KEY ACHIEVEMENTS (Replacing traditional key badges with clean structured stats) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 mb-10 max-w-xl border-t border-black/10 dark:border-white/10 pt-8"
            >
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#C5A47E] mb-2">01 • CGPA</div>
                <div className="flex items-baseline space-x-1">
                  <span className="text-3xl font-light text-black dark:text-white font-sans">3.68</span>
                  <span className="text-[9px] uppercase tracking-tighter text-gray-400">/4.00</span>
                </div>
              </div>

              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#C5A47E] mb-2">02 • Codeforces</div>
                <div className="flex items-baseline space-x-1">
                  <span className="text-3xl font-light text-black dark:text-white font-sans">1439</span>
                  <span className="text-[9px] uppercase tracking-tighter text-gray-400">Spec</span>
                </div>
              </div>

              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#C5A47E] mb-2">03 • CodeChef</div>
                <div className="flex items-baseline space-x-1">
                  <span className="text-3xl font-light text-black dark:text-white font-sans">1564</span>
                  <span className="text-[9px] uppercase tracking-tighter text-gray-[#C5A47E]">★★</span>
                </div>
              </div>
            </motion.div>

            {/* ACTION TRIGGERS */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 border-t border-black/5 dark:border-white/5 pt-8"
            >
              <button
                id="hero-contact-btn"
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#C5A47E] text-black font-semibold text-[10px] uppercase tracking-[0.3em] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer rounded-none border border-[#C5A47E]"
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
              </button>

              <button
                id="hero-download-cv-btn"
                onClick={handleDownloadCV}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-transparent hover:border-[#C5A47E] hover:text-[#C5A47E] border border-black/20 dark:border-white/20 text-black dark:text-white font-semibold text-[10px] uppercase tracking-[0.3em] transition-all cursor-pointer rounded-none"
              >
                <FileText className="w-4 h-4 text-[#C5A47E]" />
                <span>Download CV</span>
              </button>

              <a
                id="hero-github-link"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 border border-black/20 dark:border-white/20 hover:border-[#C5A47E] hover:text-[#C5A47E] text-black dark:text-white transition-all cursor-pointer rounded-none"
                title="View GitHub profile"
              >
                <Github className="w-4.5 h-4.5" />
              </a>
            </motion.div>

            {/* LOCATION FOOTER */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-2 mt-8 text-[9px] text-[#A0A0A0] uppercase tracking-[0.2em]"
            >
              <MapPin className="w-3.5 h-3.5 text-[#C5A47E]" />
              <span>{PERSONAL_INFO.location}</span>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: PORTRAIT IMAGE FRAME */}
          <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
              className="relative w-72 h-85 sm:w-85 sm:h-100 lg:w-90 lg:h-110"
            >
              {/* Fine Editorial Framing */}
              <div className="absolute inset-0 border border-black/10 dark:border-white/10 scale-102 pointer-events-none"></div>
              <div className="absolute -inset-4 border border-[#C5A47E]/15 dark:border-[#C5A47E]/10 pointer-events-none"></div>

              {/* Pure Portrait Image Card */}
              <div className="relative w-full h-full overflow-hidden rounded-none bg-[#0A0A0A] border border-black/10 dark:border-white/10 shadow-xl flex items-center justify-center">
                
                {/* Background ambient pattern */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay"></div>
                
                {/* Portrait */}
                <img
                  id="najmul-portrait-image"
                  src={PERSONAL_INFO.images.portrait}
                  alt={PERSONAL_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover relative z-10 select-none opacity-90 hover:opacity-100 dark:brightness-95 hover:scale-101 transition-all duration-500"
                />

                {/* Ambient vignette shield */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-15 pointer-events-none opacity-60"></div>

                {/* Overlay Badge inside port */}
                <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col gap-1 pointer-events-none">
                  <span className="text-white text-md font-sans uppercase tracking-[0.1em] font-extrabold leading-none">{PERSONAL_INFO.name}</span>
                  <span className="text-[#C5A47E] text-[10px] font-mono tracking-widest uppercase">BSc. CSE Research Scholar</span>
                </div>
              </div>

              {/* Bottom Decorative Label Badge */}
              <div className="absolute -bottom-3 -right-3 z-30 flex items-center gap-2 px-3 py-1.5 bg-[#0A0A0A] border border-[#C5A47E]/30 text-[#C5A47E] text-[8px] font-mono font-semibold uppercase tracking-[0.25em] shadow-lg rounded-none">
                <span className="w-1.5 h-1.5 bg-[#C5A47E]"></span>
                <span>Active Scholar</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
