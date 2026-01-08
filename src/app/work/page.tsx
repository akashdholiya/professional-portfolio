"use client";

import { useState } from "react";
import { ProjectList } from "@/components/ProjectList";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SmartButton } from "@/components/ui/SmartButton";

const tabs = ["All", "Figma", "Angular", "React"];

export default function AllProjects() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = projects.filter((project) => {
    if (activeTab === "All") return true;
    if (activeTab === "React") {
      // Include React, React Native, and Next.js under "React"
      return (
        project.category.includes("REACT") || 
        project.category.includes("NEXT")
      );
    }
    return project.category.includes(activeTab.toUpperCase());
  });

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
      <Header />

      <main className="pt-24 md:pt-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 mb-8 md:mb-12 text-center">
             <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold mb-4">Selected Work</h1>
             <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto transition-colors">
               A comprehensive collection of my work in UI/UX Design, Web Development, and Mobile Applications.
             </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-1.5 md:gap-4 px-4">
          {tabs.map((tab) => (
            <SmartButton
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm ${
                activeTab === tab
                  ? "bg-black dark:bg-white text-white dark:text-black border-black dark:border-white"
                  : "bg-gray-100 dark:bg-gray-800 border-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {tab}
            </SmartButton>
          ))}
        </div>

        {/* Filtered Project List */}
        <motion.div
           key={activeTab} // smooth transition when switching tabs
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.4 }}
        >
           <ProjectList layout="grid" projects={filteredProjects} />
        </motion.div>
        
        {filteredProjects.length === 0 && (
            <div className="text-center text-gray-400 dark:text-gray-500 py-20 transition-colors">
                No work found for {activeTab}.
            </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
