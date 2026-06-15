import { motion } from "motion/react";
import { Award, Code, CheckCircle, Flame, Star } from "lucide-react";
import { SKILLS_DATA, PERSONAL_INFO } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#FBFBF9] dark:bg-[#0A0A0A] border-y border-black/5 dark:border-white/5 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#C5A47E]/10 dark:bg-[#C5A47E]/5 text-[#C5A47E] font-mono text-[10px] uppercase tracking-[0.3em] font-bold border border-[#C5A47E]/20 mb-3.5 rounded-none"
          >
            <span>Core Competencies</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-serif italic font-light text-black dark:text-white tracking-tight mb-4">
            Specialized Skill Metrics
          </h2>
          <p className="text-sm tracking-wide text-gray-500 dark:text-white/60">
            Evaluating math logic capacities, framework efficiencies, and verified algorithmic performance indices from globally renowned platforms.
          </p>
        </div>

        {/* HIGHLIGHT OVERLAYS: COMPETITIVE PROGRAMMING RATINGS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* CODEFORCES CARD */}
          <motion.div
            whileHover={{ y: -3 }}
            className="p-6 rounded-none bg-white dark:bg-[#0A0A0A]/50 border border-black/10 dark:border-white/10 shadow-none flex flex-col justify-between transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 text-[#C5A47E] rounded-none">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-950 dark:text-white text-base font-sans uppercase tracking-wider">Codeforces</h3>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[#A0A0A0]">Verified CP Handle</p>
                </div>
              </div>
              <span className="px-2.5 py-1 text-[9px] font-bold font-mono uppercase tracking-[0.2em] bg-transparent text-[#C5A47E] border border-[#C5A47E]/35 rounded-none">
                Specialist
              </span>
            </div>
            
            <p className="text-xs font-sans font-normal text-gray-650 dark:text-white/70 mb-6 leading-relaxed">
              Active participant in global programming contests, solving advanced time-constrained algorithmic puzzles. Secured a rating peaks of <strong>1439</strong> as a certified Specialist.
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-black/10 dark:border-white/10">
              <span className="text-[10px] font-mono text-[#A0A0A0] uppercase tracking-wide">Handle: Najmul-Hasan-Shihab</span>
              <a
                id="skill-codeforces-link"
                href="https://codeforces.com/profile/Najmul-Hasan-Shihab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[9px] uppercase tracking-[0.2em] font-bold text-black dark:text-white hover:text-[#C5A47E] dark:hover:text-[#C5A47E] inline-flex items-center gap-1.5 cursor-pointer transition-colors"
              >
                <span>View Ratings</span>
                <Award className="w-3.5 h-3.5 text-[#C5A47E]" />
              </a>
            </div>
          </motion.div>

          {/* CODECHEF CARD */}
          <motion.div
            whileHover={{ y: -3 }}
            className="p-6 rounded-none bg-white dark:bg-[#0A0A0A]/50 border border-black/10 dark:border-white/10 shadow-none flex flex-col justify-between transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 text-[#C5A47E] rounded-none">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-950 dark:text-white text-base font-sans uppercase tracking-wider">CodeChef</h3>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[#A0A0A0]">Verified Platform Rank</p>
                </div>
              </div>
              <span className="px-2.5 py-1 text-[9px] font-bold font-mono col bg-transparent text-[#C5A47E] border border-[#C5A47E]/35 uppercase tracking-[0.2em] rounded-none">
                2 Stars ★ ★
              </span>
            </div>

            <p className="text-xs font-sans font-normal text-gray-650 dark:text-white/70 mb-6 leading-relaxed">
              Regular division competitor tracking algorithms speed, data structures optimizations, and code verification. Earned a peak rating of <strong>1564</strong> out of global competitors.
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-black/10 dark:border-white/10">
              <span className="text-[10px] font-mono text-[#A0A0A0] uppercase tracking-wide">Current Rating: 1564</span>
              <a
                id="skill-codechef-link"
                href="https://codechef.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[9px] uppercase tracking-[0.2em] font-bold text-black dark:text-white hover:text-[#C5A47E] dark:hover:text-[#C5A47E] inline-flex items-center gap-1.5 cursor-pointer transition-colors"
              >
                <span>Platform Portal</span>
                <Star className="w-3.5 h-3.5 text-[#C5A47E]" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* DETAILED SKILLS GRID WITH GAUGES */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SKILLS_DATA.map((cat, catIdx) => (
            <div 
              key={cat.id} 
              className="p-6 md:p-8 rounded-none bg-white dark:bg-white/[0.01] border border-black/10 dark:border-white/10 shadow-none"
            >
              <h3 className="text-sm font-bold text-gray-950 dark:text-white mb-6 border-b border-black/10 dark:border-white/10 pb-3 flex items-center justify-between uppercase tracking-widest">
                <span>{cat.category}</span>
                <span className="text-[9px] font-mono uppercase text-[#C5A47E]">Group {catIdx + 1}</span>
              </h3>

              <div className="space-y-6">
                {cat.items.map((skill) => (
                  <div key={skill.name} className="space-y-2.5">
                    <div className="flex justify-between items-end text-xs">
                      <span className="font-sans font-medium text-gray-800 dark:text-white/85">{skill.name}</span>
                      <span className="text-[9px] font-bold text-[#C5A47E] font-mono uppercase tracking-widest">
                        {skill.level}
                      </span>
                    </div>

                    {/* Progress Track */}
                    <div className="h-[3px] w-full rounded-none bg-black/5 dark:bg-white/5 overflow-hidden relative">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-full rounded-none bg-[#C5A47E]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
