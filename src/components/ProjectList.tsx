"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CardSpotlight } from "@/components/ui/CardSpotlight";
import { CaseStudyModal } from "@/components/CaseStudyModal";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { projects as defaultProjects, Project } from "@/lib/data";
import { ArrowUpRight, Sparkles, Layers, Eye } from "lucide-react";

interface ProjectListProps {
  limit?: number;
  showViewMore?: boolean;
  layout?: "alternating" | "grid";
  projects?: Project[];
  title?: string;
  subtitle?: string;
}

export function ProjectList({
  limit,
  showViewMore = false,
  layout = "grid",
  projects = defaultProjects,
  title = "Selected Projects",
  subtitle = "Featured UI/UX, Web Design, and Mobile Application case studies.",
}: ProjectListProps) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 transition-colors">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 dark:bg-violet-500/15 border border-violet-500/20 text-xs font-mono font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-3.5 shadow-xs">
              <Sparkles className="w-4 h-4" />
              <span>Portfolio Showcase</span>
            </div>
            <h2 className="type-h2 text-neutral-900 dark:text-slate-50">
              {title}
            </h2>
            <p className="type-body text-neutral-600 dark:text-slate-400 mt-2 max-w-xl">
              {subtitle}
            </p>
          </div>

          {showViewMore && (
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white hover:text-violet-500 dark:hover:text-violet-400 transition-colors group"
            >
              <span>View All {defaultProjects.length} Projects</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8">
          {displayedProjects.map((project, index) => {
            return (
              <motion.div
                key={project.title + index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
              >
                <CardSpotlight
                  className="h-full flex flex-col justify-between p-0 overflow-hidden cursor-pointer group rounded-[20px]"
                  onClick={() => setSelectedProject(project)}
                  color="#7C3AED"
                >
                  {/* Image Container with Consistent Aspect Ratio */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-[#101522]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* Category Pill floating on Image */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-black/60 dark:bg-[#0B0F1A]/80 backdrop-blur-md text-white border border-white/15">
                        {project.category}
                      </span>
                    </div>

                    {/* Quick Action Overlay on hover */}
                    <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-neutral-900 text-xs font-bold uppercase tracking-wider shadow-lg hover:scale-105 transition-transform"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Case Study</span>
                      </button>
                    </div>
                  </div>

                  {/* Project Info & Description */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 dark:text-slate-50 group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors">
                          {project.title}
                        </h3>
                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-neutral-100 dark:bg-[#1A2233] text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-white group-hover:bg-neutral-200 dark:group-hover:bg-[#20293d] transition-colors shrink-0">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                      <p className="type-body-sm text-neutral-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech stack & Action link */}
                    <div className="flex items-center justify-between pt-4 border-t border-black/[0.06] dark:border-white/[0.08] text-xs">
                      <div className="flex items-center gap-2 text-neutral-500 dark:text-slate-400">
                        <Layers className="w-3.5 h-3.5" />
                        <span>UI/UX Architecture</span>
                      </div>
                      <span className="font-mono font-semibold uppercase tracking-wider text-violet-500 dark:text-violet-400 group-hover:underline">
                        Explore Details →
                      </span>
                    </div>
                  </div>
                </CardSpotlight>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA for Work Page */}
        {showViewMore && (
          <div className="mt-14 md:mt-18 text-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 text-xs sm:text-sm font-bold uppercase tracking-widest shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <span>Explore All 22 Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {/* Interactive Case Study Modal */}
        <CaseStudyModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </Container>
    </section>
  );
}

export default ProjectList;
