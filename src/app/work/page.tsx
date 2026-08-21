"use client";

import { useState, useMemo } from "react";
import { ProjectList } from "@/components/ProjectList";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Spotlight } from "@/components/ui/Spotlight";
import { GridPattern } from "@/components/ui/GridPattern";
import { Container } from "@/components/ui/Container";
import { Sparkles, Search } from "lucide-react";

const tabs = ["All", "Figma", "React / Next.js", "Angular"];

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Tab matching
      let matchesTab = true;
      if (activeTab === "Figma") {
        matchesTab = project.category.includes("FIGMA");
      } else if (activeTab === "React / Next.js") {
        matchesTab =
          project.category.includes("REACT") ||
          project.category.includes("NEXT");
      } else if (activeTab === "Angular") {
        matchesTab = project.category.includes("ANGULAR");
      }

      // Search matching
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0F1A] text-neutral-900 dark:text-slate-100 font-sans selection:bg-violet-500 selection:text-white transition-colors duration-300">
      <Header />

      <main className="pt-28 md:pt-36">
        {/* Header with Spotlight */}
        <section className="relative mb-12 md:mb-16 text-center overflow-hidden">
          <Spotlight className="-top-30 left-1/4" fill="#7C3AED" />
          <GridPattern showDots={true} />

          <Container className="relative z-10 max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 dark:bg-violet-500/15 border border-violet-500/20 text-xs font-mono font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">
              <Sparkles className="w-4 h-4" />
              <span>Full Portfolio Archive</span>
            </div>

            <h1 className="type-h1 text-neutral-900 dark:text-slate-50">
              Selected Work &amp; Case Studies
            </h1>

            <p className="type-body-lg text-neutral-600 dark:text-slate-300 leading-relaxed">
              A comprehensive showcase of 20+ digital products spanning UI/UX design, design systems, mobile apps, and responsive web applications.
            </p>
          </Container>
        </section>

        {/* Filter Controls: Tabs & Search */}
        <Container className="mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Tabs */}
          <div className="flex justify-center flex-wrap gap-1.5 p-1.5 rounded-full bg-neutral-100 dark:bg-[#151B2A] border border-black/[0.06] dark:border-white/[0.08]">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-neutral-900 dark:bg-[#1A2233] text-white shadow-xs"
                    : "text-neutral-600 dark:text-slate-400 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs rounded-full bg-neutral-100 dark:bg-[#151B2A] border border-black/[0.06] dark:border-white/[0.08] text-neutral-900 dark:text-slate-100 placeholder-neutral-400 focus:outline-none focus:border-violet-500 transition-colors"
            />
          </div>
        </Container>

        {/* Filtered Project List */}
        <motion.div
          key={activeTab + searchQuery}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ProjectList
            projects={filteredProjects}
            title={`${activeTab === "All" ? "All" : activeTab} Projects (${filteredProjects.length})`}
            subtitle="Click any project to explore structured case study details."
            showViewMore={false}
          />
        </motion.div>

        {filteredProjects.length === 0 && (
          <Container className="text-center py-20 text-neutral-400 dark:text-slate-500 font-mono text-sm">
            No projects matched your criteria.
          </Container>
        )}
      </main>

      <Footer />
    </div>
  );
}
