import { useState } from "react";
import { motion } from "motion/react";
import { BookOpen, FileText, Check, Award, Compass, Info } from "lucide-react";
import { RESEARCH_DATA } from "../data";

export default function Research() {
  const [draftRequested, setDraftRequested] = useState(false);
  const paper = RESEARCH_DATA[0];

  return (
    <section id="research" className="py-24 bg-[#FBFBF9] dark:bg-[#0A0A0A] transition-colors duration-300 border-b border-black/5 dark:border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#C5A47E]/10 dark:bg-[#C5A47E]/5 text-[#C5A47E] font-mono text-[10px] uppercase tracking-[0.3em] font-bold border border-[#C5A47E]/20 mb-3.5 rounded-none"
          >
            <span>Scientific Publications</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-serif italic font-light text-black dark:text-white tracking-tight mb-4">
            Published Research & Scholarly Works
          </h2>
          <p className="text-sm tracking-wide text-gray-500 dark:text-white/60">
            Pioneering clinical AI systems addressing structural data leakages, calibrating model trust, and enforcing algorithmic fairness in diagnostic screening.
          </p>
        </div>

        {/* RESEARCH SPOTLIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto rounded-none bg-white dark:bg-[#0A0A0A] border border-black/10 dark:border-white/10 p-6 md:p-10 shadow-none relative overflow-hidden"
        >
          {/* Top category label & conference flag */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/10 dark:border-white/10 pb-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 text-[#C5A47E] rounded-none">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold font-mono text-[#C5A47E] uppercase tracking-[0.2em]">Conference Paper [In Press]</span>
                <span className="block text-[9px] text-[#A0A0A0] font-mono uppercase tracking-wide mt-1">{paper.period}</span>
              </div>
            </div>

            <span className="px-3.5 py-1.5 rounded-none text-[10px] font-bold bg-[#C5A47E] text-[#0A0A0A] font-mono self-start sm:self-auto border border-[#C5A47E] flex items-center gap-2 uppercase tracking-widest">
              <Award className="w-3.5 h-3.5" />
              <span>ECCT 2026</span>
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* PAPER CITATION COLUMN: Title, journal, authors */}
            <div className="lg:col-span-12">
              <h3 className="text-xl md:text-2xl font-serif text-gray-950 dark:text-white leading-tight mb-3">
                “{paper.title}”
              </h3>
              
              <div className="text-xs font-semibold text-[#C5A47E] mb-2 font-mono uppercase tracking-wider">
                Published In: <span className="italic font-serif normal-case tracking-normal">{paper.journal}</span>
              </div>

              <div className="text-[10px] font-mono text-gray-500 dark:text-gray-400 mb-8 flex flex-wrap items-center gap-2 uppercase tracking-wide">
                <span>By:</span>
                <span className="font-bold text-gray-950 dark:text-white bg-black/[0.02] dark:bg-white/[0.02] px-2 py-0.5 rounded-none border border-black/5 dark:border-white/5">{paper.authors}</span>
                <span>•</span>
                <span className="text-[#A0A0A0]">{paper.location}</span>
              </div>
            </div>

            {/* ABSTRACT METHODOLOGY WORKSHOPPED GRIDS */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-4">
                <h4 className="text-[10px] uppercase font-bold text-[#C5A47E] tracking-[0.2em] font-mono flex items-center gap-2">
                  <Info className="w-4 h-4" />
                  <span>Key Research Contributions</span>
                </h4>
                
                <ul className="space-y-4">
                  {paper.details.map((detail, idx) => (
                    <li key={idx} className="flex gap-3">
                      <div className="mt-1 shrink-0 w-5 h-5 rounded-none bg-[#C5A47E]/10 border border-[#C5A47E]/20 text-[#C5A47E] flex items-center justify-center">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-xs font-serif italic text-gray-650 dark:text-white/70 leading-relaxed">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RESEARCH BLOCK INTERACTIVE SPECS: Models & parities cards */}
            <div className="lg:col-span-5 space-y-6 bg-black/[0.01]/50 dark:bg-white/[0.01] p-6 rounded-none border border-black/10 dark:border-white/10">
              <h4 className="text-[10px] uppercase font-bold text-gray-500 dark:text-white/50 tracking-[0.25em] font-mono flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#C5A47E]" />
                <span>Methodology & Classifiers</span>
              </h4>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-white dark:bg-white/[0.01] border border-black/10 dark:border-white/10 rounded-none">
                  <div className="text-[8px] font-mono text-[#A0A0A0] uppercase tracking-wider">Frameworks</div>
                  <div className="text-[10px] font-bold text-gray-800 dark:text-[#F4F4F4] mt-1 font-sans">LightGBM, XGBoost</div>
                </div>

                <div className="p-3 bg-white dark:bg-white/[0.01] border border-black/10 dark:border-white/10 rounded-none">
                  <div className="text-[8px] font-mono text-[#A0A0A0] uppercase tracking-wider">Audit Parity</div>
                  <div className="text-[10px] font-bold text-gray-800 dark:text-[#F4F4F4] mt-1 font-sans">Demographic Parity</div>
                </div>

                <div className="p-3 bg-white dark:bg-white/[0.01] border border-black/10 dark:border-white/10 rounded-none">
                  <div className="text-[8px] font-mono text-[#A0A0A0] uppercase tracking-wider">Data Source</div>
                  <div className="text-[10px] font-bold text-gray-800 dark:text-[#F4F4F4] mt-1 font-sans">CDC NHANES Sets</div>
                </div>

                <div className="p-3 bg-white dark:bg-white/[0.01] border border-black/10 dark:border-white/10 rounded-none">
                  <div className="text-[8px] font-mono text-[#A0A0A0] uppercase tracking-wider">Staging Accuracy</div>
                  <div className="text-[10px] font-bold text-gray-800 dark:text-[#F4F4F4] mt-1 font-sans">94.8% Peak</div>
                </div>
              </div>

              {/* state based manuscript simulator trigger */}
              <button
                id="research-paper-trigger"
                onClick={() => {
                  setDraftRequested(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-none bg-[#C5A47E] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-black font-bold uppercase text-[10px] tracking-[0.25em] border border-[#C5A47E] transition-all cursor-pointer mt-4"
              >
                <FileText className="w-4 h-4" />
                <span>Request Manuscript Draft</span>
              </button>

              {draftRequested && (
                <motion.div 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3.5 p-3 border border-[#C5A47E]/30 bg-[#C5A47E]/5 text-[10px] font-mono text-[#C5A47E] uppercase tracking-wider text-center"
                >
                  ✓ Manuscript Request Simulated. Draft sent to scholar inbox.
                </motion.div>
              )}
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
