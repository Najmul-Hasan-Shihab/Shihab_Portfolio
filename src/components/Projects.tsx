import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Layers, Bot, Cpu, Smartphone, Shield, Gamepad2 } from "lucide-react";
import { PROJECTS_DATA } from "../data";

type ProjectCategory = "All" | "AI & ML" | "Mobile & Game" | "Cyber & Core";

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>("All");

  const categories: ProjectCategory[] = ["All", "AI & ML", "Mobile & Game", "Cyber & Core"];

  // Mapping tags to filter categorizations
  const getFilteredProjects = () => {
    if (filter === "All") return PROJECTS_DATA;
    return PROJECTS_DATA.filter(proj => {
      if (filter === "AI & ML") {
        return proj.tags.includes("Artificial Intelligence") || proj.tags.includes("Machine Learning");
      }
      if (filter === "Mobile & Game") {
        return proj.tags.includes("Mobile App") || proj.tags.includes("Game Development");
      }
      if (filter === "Cyber & Core") {
        return proj.tags.includes("Cybersecurity") || proj.tags.includes("Networking") || proj.tags.includes("Systems");
      }
      return true;
    });
  };

  const filtered = getFilteredProjects();

  // Pick suitable Lucide icons for project descriptors
  const getProjectIcon = (tags: string[]) => {
    if (tags.includes("Artificial Intelligence")) return <Bot className="w-5 h-5 text-purple-500" />;
    if (tags.includes("Machine Learning")) return <Cpu className="w-5 h-5 text-blue-500" />;
    if (tags.includes("Mobile App")) return <Smartphone className="w-5 h-5 text-teal-400" />;
    if (tags.includes("Cybersecurity")) return <Shield className="w-5 h-5 text-rose-500" />;
    if (tags.includes("Game Development")) return <Gamepad2 className="w-5 h-5 text-amber-500" />;
    return <Layers className="w-5 h-5 text-blue-400" />;
  };

  return (
    <section id="projects" className="py-24 bg-[#FBFBF9] dark:bg-[#0A0A0A] transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#C5A47E]/10 dark:bg-[#C5A47E]/5 text-[#C5A47E] font-mono text-[10px] uppercase tracking-[0.3em] font-bold border border-[#C5A47E]/20 mb-3.5 rounded-none"
            >
              <span>Project Showcases</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-serif italic font-light text-black dark:text-white tracking-tight mb-4">
              Featured Software & Systems
            </h2>
            <p className="text-sm tracking-wide text-gray-500 dark:text-white/60">
              A curated selection of machine learning networks, native multiplatform apps, secure routers simulations, and graphic engines engineered throughout my computer science degree.
            </p>
          </div>
 
          {/* PROJECT FILTERS */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-none bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 self-start md:self-auto shrink-0">
            {categories.map(cat => (
              <button
                key={cat}
                id={`project-filter-${cat.replace(/\s+/g, "-")}`}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-none text-[10px] uppercase tracking-[0.15em] font-bold transition-all cursor-pointer ${
                  filter === cat
                    ? "bg-[#C5A47E] text-[#0A0A0A] shadow-none"
                    : "text-gray-500 hover:text-black dark:text-white/60 dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
 
        {/* PROJECTS BENTO GRID */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((proj, idx) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-none bg-white dark:bg-white/[0.01] border border-black/10 dark:border-white/10 hover:border-[#C5A47E] dark:hover:border-[#C5A47E] transition-all duration-300"
              >
                <div className="p-6">
                  {/* Card Header metadata */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-none bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 text-[#C5A47E]">
                      {getProjectIcon(proj.tags)}
                    </div>
                    <div className="flex flex-wrap gap-1.5 justify-end max-w-[70%]">
                      {proj.tags.map(t => (
                        <span key={t} className="text-[8px] font-mono uppercase bg-black/[0.02] dark:bg-white/[0.02] text-gray-500 dark:text-white/40 px-2 py-0.5 rounded-none border border-black/10 dark:border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
 
                  {/* Title & description details */}
                  <h3 className="text-base font-bold text-gray-950 dark:text-white leading-snug mb-2 group-hover:text-[#C5A47E] dark:group-hover:text-[#C5A47E] transition-colors font-sans uppercase tracking-wider">
                    {proj.title}
                  </h3>
                  
                  <p className="text-xs font-sans font-normal text-gray-600 dark:text-white/70 leading-relaxed mb-6 line-clamp-4">
                    {proj.details[0]}
                  </p>
                </div>
 
                {/* Footer Section holding stack & links */}
                <div className="px-6 pb-6 pt-0 border-t border-black/10 dark:border-white/10 mt-auto bg-black/[0.01] dark:bg-white/[0.01]">
                  <div className="flex flex-wrap gap-1.5 mb-4 mt-3">
                    {proj.technologies.slice(0, 5).map(tech => (
                      <span key={tech} className="text-[9px] font-mono font-medium text-[#C5A47E] lowercase tracking-wider">
                        #{tech}
                      </span>
                    ))}
                    {proj.technologies.length > 5 && (
                      <span className="text-[9px] font-mono text-gray-400">
                        +{proj.technologies.length - 5}
                      </span>
                    )}
                  </div>
 
                  <div className="flex justify-between items-center bg-transparent">
                    <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#C5A47E] font-mono">
                      VCS Source Verified
                    </span>
                    <a
                      id={`project-link-${proj.id}`}
                      href="https://github.com/Najmul-Hasan-Shihab"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[9px] uppercase tracking-[0.25em] font-bold text-black dark:text-white/80 hover:text-[#C5A47E] dark:hover:text-[#C5A47E] cursor-pointer"
                    >
                      <span>Repository</span>
                      <ExternalLink className="w-3 h-3 text-[#C5A47E]" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
 
      </div>
    </section>
  );
}
