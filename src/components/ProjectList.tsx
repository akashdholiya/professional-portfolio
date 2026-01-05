"use client";

import Image from "next/image";
import Link from "next/link";
import TiltedCard from "./ui/TiltedCard";
import { motion } from "framer-motion";
import { projects as defaultProjects, Project } from "@/lib/data";

interface ProjectListProps {
  limit?: number;
  showViewMore?: boolean;
  layout?: 'alternating' | 'grid';
  projects?: Project[];
}

export function ProjectList({ limit, showViewMore = false, layout = 'alternating', projects = defaultProjects }: ProjectListProps) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 py-10 md:py-16 transition-colors">
      
      <div className={layout === 'grid' ? "grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-6 gap-y-8 md:gap-y-10" : "flex flex-col gap-6 md:gap-8"}>
        {displayedProjects.map((project, index) => {
           // Alternating logic only for 'alternating' layout
           const isEven = index % 2 === 0;
           const flexDirection = layout === 'alternating' 
             ? (isEven ? 'md:flex-row' : 'md:flex-row-reverse') 
             : 'flex-col';

           return (
            <motion.div 
              key={index} 
              className={`flex flex-col ${flexDirection} gap-6 ${layout === 'alternating' ? 'items-center' : ''} group`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Image Side */}
              <div className={`w-full ${layout === 'alternating' ? 'md:w-1/2' : ''}`}>
                 <TiltedCard
                    imageSrc={project.image}
                    altText={project.title}
                    captionText={project.title}
                    containerHeight="300px" // Adjust based on your design needs or make responsive if possible
                    containerWidth="100%"
                    imageHeight="100%"
                    imageWidth="100%"
                    rotateAmplitude={10}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={false}
                    displayOverlayContent={true}
                    overlayContent={null}
                 />
              </div>

              {/* Content Side */}
              <div className={`w-full ${layout === 'alternating' ? 'md:w-1/2 flex flex-col justify-center' : ''}`}>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-gray-300 dark:border-gray-700 text-[10px] md:text-xs font-bold tracking-widest uppercase text-gray-500 dark:text-gray-400 transition-colors">
                    {project.category}
                  </span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-tight text-black dark:text-white transition-colors">
                  {project.title}
                </h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed max-w-md transition-colors">
                  {project.description}
                </p>
                <Link href={project.href} className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:gap-4 transition-all duration-300 group-hover:text-gray-900 dark:group-hover:text-white border-b border-transparent group-hover:border-black dark:group-hover:border-white pb-1 text-black dark:text-gray-300">
                  View Case Study
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>

      {showViewMore && (
        <div className="mt-10 md:mt-14 flex justify-center">
          <Link 
            href="/work" 
            className="group relative inline-flex items-center gap-4 px-6 py-3.5 md:px-8 md:py-4 bg-black dark:bg-white text-white dark:text-black rounded-full overflow-hidden transition-all hover:scale-105 shadow-xl"
          >
            <span className="relative z-10 text-xs md:text-sm font-bold uppercase tracking-widest">View More Work</span>
            <div className="w-6 h-6 md:w-8 md:h-8 bg-white dark:bg-black rounded-full flex items-center justify-center transition-transform group-hover:rotate-45">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-black dark:text-white" />
              </svg>
            </div>
          </Link>
        </div>
      )}
    </section>
  );
}
