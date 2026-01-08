"use client";

import Image from "next/image";
import Link from "next/link";
import TiltedCard from "./ui/TiltedCard";
import ScrollReveal from "./ui/ScrollReveal";
import { SmartButton } from "./ui/SmartButton";
import { motion } from "framer-motion";
import { projects as defaultProjects, Project } from "@/lib/data";

interface ProjectListProps {
  limit?: number;
  showViewMore?: boolean;
  layout?: "alternating" | "grid";
  projects?: Project[];
}

export function ProjectList({
  limit,
  showViewMore = false,
  layout = "alternating",
  projects = defaultProjects,
}: ProjectListProps) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 py-10 md:py-16 transition-colors"
    >
      <div
        className={
          layout === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-6 gap-y-8 md:gap-y-10"
            : "flex flex-col gap-6 md:gap-8"
        }
      >
        {displayedProjects.map((project, index) => {
          // Alternating logic only for 'alternating' layout
          const isEven = index % 2 === 0;
          const flexDirection =
            layout === "alternating"
              ? isEven
                ? "md:flex-row"
                : "md:flex-row-reverse"
              : "flex-col";

          return (
            <ScrollReveal
              key={index}
              wordAnimation={false}
              enableBlur={false}
              baseOpacity={0.4}
            >
              <motion.div
                className={`flex flex-col ${flexDirection} gap-6 ${
                  layout === "alternating" ? "items-center" : ""
                } group`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Image Side */}
                <div
                  className={`w-full ${
                    layout === "alternating" ? "md:w-1/2" : ""
                  }`}
                >
                  <TiltedCard
                    imageSrc={project.image}
                    altText={project.title}
                    captionText={project.title}
                    containerHeight={undefined}
                    containerWidth="100%"
                    imageHeight="100%"
                    imageWidth="100%"
                    rotateAmplitude={10}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={false}
                    displayOverlayContent={true}
                    overlayContent={null}
                    className="h-[250px] sm:h-[300px] md:h-[400px] w-full"
                  />
                </div>

                {/* Content Side */}
                <div
                  className={`w-full ${
                    layout === "alternating"
                      ? "md:w-1/2 flex flex-col justify-center"
                      : ""
                  }`}
                >
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-gray-300 dark:border-gray-700 text-[10px] md:text-xs font-bold tracking-widest uppercase text-gray-500 dark:text-gray-400 transition-colors">
                      {project.category}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-tight text-black dark:text-white transition-colors">
                    {project.title}
                  </h2>
                  <div className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-md transition-colors">
                    {project.description}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          );
        })}
      </div>

      {showViewMore && (
        <div className="mt-10 md:mt-14 flex justify-center">
          <SmartButton
            href="/work"
            className="px-6 py-3.5 md:px-8 md:py-4 bg-black dark:bg-white text-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white"
          >
            <span className="flex items-center gap-4">
            <span className="relative z-10 text-xs md:text-sm font-bold uppercase tracking-widest">
              View More Work
            </span>
            <div className="w-6 h-6 md:w-8 md:h-8 bg-white dark:bg-black rounded-full flex items-center justify-center transition-transform group-hover:rotate-45">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-black dark:text-white"
                />
              </svg>
            </div>
            </span>
          </SmartButton>
        </div>
      )}
    </section>
  );
}
