import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GraduationCap, Briefcase, Users, MapPin, Calendar, ArrowRight } from "lucide-react";
import { EDUCATION_DATA, EXPERIENCE_DATA, LEADERSHIP_DATA } from "../data";

type TimelineTab = "education" | "experience" | "leadership";

export default function Timeline() {
  const [activeTab, setActiveTab] = useState<TimelineTab>("experience");

  const tabs = [
    { id: "experience", label: "Professional Experience", icon: Briefcase },
    { id: "education", label: "Education & Academy", icon: GraduationCap },
    { id: "leadership", label: "Leadership & Service", icon: Users },
  ];

  const getActiveData = () => {
    switch (activeTab) {
      case "education":
        return EDUCATION_DATA.map(item => ({
          id: item.id,
          title: item.degree,
          subtitle: item.institution,
          location: item.location,
          period: item.period,
          details: [`Grade: ${item.cgpa}`]
        }));
      case "experience":
        return EXPERIENCE_DATA.map(item => ({
          id: item.id,
          title: item.role,
          subtitle: item.company,
          location: item.location,
          period: item.period,
          details: item.details
        }));
      case "leadership":
        return LEADERSHIP_DATA.map(item => ({
          id: item.id,
          title: item.role,
          subtitle: item.organization,
          location: item.period, // Storing period/event description here
          period: item.period === "Co-founded" || item.period === "Ongoing" ? "Active" : "Disaster Relief",
          details: item.details
        }));
    }
  };

  const activeCategoryData = getActiveData();

  return (
    <section id="timeline" className="py-24 bg-[#FBFBF9] dark:bg-[#0A0A0A] border-y border-black/5 dark:border-white/5 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#C5A47E]/10 dark:bg-[#C5A47E]/5 text-[#C5A47E] font-mono text-[10px] uppercase tracking-[0.3em] font-bold border border-[#C5A47E]/20 mb-3.5 rounded-none"
          >
            <span>Journeys & Milestones</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-serif italic font-light text-black dark:text-white tracking-tight mb-4">
            Interactive Academic & Pro Timeline
          </h2>
          <p className="text-sm font-sans tracking-wide text-gray-500 dark:text-white/60">
            Switch between professional records, higher academy milestones, and co-founding student organizations to track my career journey.
          </p>
        </div>

        {/* CONTROLS (TABS) */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mb-16 max-w-2xl mx-auto p-1.5 rounded-none bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`timeline-tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id as TimelineTab)}
                className={`relative flex items-center justify-center gap-2.5 w-full sm:w-auto flex-1 py-3 px-5 transition-all cursor-pointer font-sans text-[10px] uppercase tracking-[0.2em] font-bold rounded-none ${
                  isSelected 
                    ? "text-[#0A0A0A] bg-[#C5A47E] dark:text-black dark:bg-[#C5A47E] shadow-none" 
                    : "text-gray-500 hover:text-black dark:text-white/60 dark:hover:text-white"
                }`}
              >
                <IconComponent className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TIMELINE TRACK */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical core line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-black/10 dark:bg-white/10 transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            <AnimatePresence mode="wait">
              {activeCategoryData.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={`${activeTab}-${item.id}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -25 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative flex flex-col md:flex-row md:items-center"
                  >
                    {/* Event Circular Pin Node */}
                    <div className="absolute left-4 md:left-1/2 w-4.5 h-4.5 rounded-full bg-[#C5A47E] border-4 border-[#FBFBF9] dark:border-[#0A0A0A] shadow-none transform -translate-x-1/2 z-10 flex items-center justify-center">
                    </div>
 
                    {/* Timeline card container */}
                    <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? "md:pr-12 md:text-right md:order-1" : "md:pl-12 md:text-left md:order-2"}`}>
                      <div className="relative p-6 rounded-none bg-white dark:bg-white/[0.01] border border-black/10 dark:border-white/10 shadow-none hover:border-[#C5A47E] transition-all">
                        
                        {/* Period & Metadata Headers */}
                        <div className={`flex flex-wrap items-center gap-3 mb-4 text-[10px] uppercase tracking-wider font-mono text-gray-400 dark:text-gray-500 ${isEven ? "md:justify-end" : "justify-start"}`}>
                          <span className="flex items-center gap-1 bg-black/[0.02] dark:bg-white/[0.02] px-2 py-0.5 border border-black/5 dark:border-white/5 rounded-none text-[#C5A47E] font-semibold text-[9px]">
                            <Calendar className="w-3 h-3 text-[#C5A47E]" />
                            <span>{item.period}</span>
                          </span>
                          <span className="flex items-center gap-1 bg-black/[0.02] dark:bg-white/[0.02] px-2 py-0.5 border border-black/5 dark:border-white/5 rounded-none test-xs">
                            <MapPin className="w-3 h-3 text-gray-400" />
                            <span>{item.location}</span>
                          </span>
                        </div>
 
                        {/* Title of active item */}
                        <h3 className="text-base md:text-lg font-bold text-gray-950 dark:text-white leading-tight mb-1 font-sans">
                          {item.title}
                        </h3>
                        
                        {/* Subtitle / Company context */}
                        <div className="text-xs font-serif italic text-[#C5A47E] mb-4">
                          {item.subtitle}
                        </div>
 
                        {/* Bullet point disclosure details */}
                        <ul className="space-y-2.5 text-left">
                          {item.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-600 dark:text-white/60">
                              <ArrowRight className="w-3 h-3 text-[#C5A47E] mt-0.5 shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
 
                      </div>
                    </div>
 
                    {/* Empty placeholder spacer to force layout grid alignment on desktop */}
                    <div className={`hidden md:block w-1/2 ${isEven ? "md:order-2" : "md:order-1"}`}></div>
 
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
 
        </div>
 
      </div>
    </section>
  );
}
