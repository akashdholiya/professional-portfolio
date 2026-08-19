"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 mb-8 border-t border-gray-100 dark:border-gray-800 pt-8 transition-colors"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* SECTION TITLE (LEFT) */}
      <div className="md:col-span-3 pt-4">
        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 transition-colors">
          Experience
        </h3>
      </div>

      {/* EXPERIENCE LIST (RIGHT) */}
      <div className="md:col-span-9 space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="py-5 border-b border-gray-100 dark:border-gray-800 group hover:bg-gray-50 dark:hover:bg-white/5 transition-colors px-4 -mx-4 rounded-lg"
          >
            {/* Header: Role, Company, Location & Duration */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 transition-colors">
                    {exp.role}
                  </h4>
                  {exp.current && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Present
                    </span>
                  )}
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-0.5 transition-colors">
                  {exp.company} • {exp.location}
                </p>
              </div>

              <span className="text-gray-400 dark:text-gray-500 text-sm font-mono mt-1 sm:mt-0 transition-colors shrink-0">
                {exp.duration}
              </span>
            </div>

            {/* Responsibilities list */}
            <ul className="mt-4 space-y-2.5 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400 transition-colors">
              {exp.responsibilities.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600 mt-2 shrink-0 group-hover:bg-black dark:group-hover:bg-white transition-colors" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Technology & Tool Badges */}
            <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-gray-100 dark:border-gray-800/70">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 group-hover:border-gray-300 dark:group-hover:border-gray-700 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Experience;
