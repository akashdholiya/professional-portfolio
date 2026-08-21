"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { X, ExternalLink, Layers, Sparkles, CheckCircle2 } from "lucide-react";

interface CaseStudyModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CaseStudyModal({ project, isOpen, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0B0F1A]/85 backdrop-blur-md transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#151B2A] rounded-[24px] border border-black/[0.08] dark:border-white/[0.08] shadow-2xl z-10 text-neutral-900 dark:text-slate-100"
          >
            {/* Header / Close button */}
            <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/85 dark:bg-[#151B2A]/85 backdrop-blur-md border-b border-black/[0.06] dark:border-white/[0.08]">
              <div className="flex items-center gap-3">
                <Badge variant="accent">{project.category}</Badge>
                <h3 className="font-display text-lg font-bold text-neutral-900 dark:text-white">
                  {project.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full flex items-center justify-center bg-neutral-100 dark:bg-[#1A2233] text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-[#222d42] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 md:p-10 space-y-10">
              {/* Project Hero Image */}
              <div className="relative w-full aspect-[16/10] rounded-[16px] overflow-hidden border border-black/[0.06] dark:border-white/[0.08] bg-neutral-100 dark:bg-[#101522]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Overview & High-level summary */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-violet-500">
                  <Sparkles className="w-4 h-4" />
                  <span>Project Overview</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
                  {project.title} — Digital Experience Design
                </h2>
                <p className="type-body-lg text-neutral-600 dark:text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Case Study Structured Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
                {/* Problem */}
                <div className="p-6 rounded-[16px] bg-neutral-50 dark:bg-[#101522] border border-black/[0.06] dark:border-white/[0.06] space-y-3">
                  <div className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-500 dark:text-slate-400">
                    01. Problem &amp; Challenge
                  </div>
                  <p className="type-body-sm text-neutral-600 dark:text-slate-300 leading-relaxed">
                    Users require a streamlined, intuitive interface with clear visual hierarchy, frictionless interactions, and immediate clarity without overwhelming cognitive load.
                  </p>
                </div>

                {/* Goals */}
                <div className="p-6 rounded-[16px] bg-neutral-50 dark:bg-[#101522] border border-black/[0.06] dark:border-white/[0.06] space-y-3">
                  <div className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-500 dark:text-slate-400">
                    02. Goals &amp; Objectives
                  </div>
                  <p className="type-body-sm text-neutral-600 dark:text-slate-300 leading-relaxed">
                    Deliver a high-fidelity user journey, accessible color contrast, structured design tokens, and seamless responsiveness across desktop, tablet, and mobile screens.
                  </p>
                </div>

                {/* Design Approach */}
                <div className="p-6 rounded-[16px] bg-neutral-50 dark:bg-[#101522] border border-black/[0.06] dark:border-white/[0.06] space-y-3">
                  <div className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-500 dark:text-slate-400">
                    03. UI &amp; Design System
                  </div>
                  <p className="type-body-sm text-neutral-600 dark:text-slate-300 leading-relaxed">
                    Built using cohesive typography, modular component variants, Auto Layout in Figma, and reusable UI foundations aligned with modern design systems.
                  </p>
                </div>

                {/* Execution & Handoff */}
                <div className="p-6 rounded-[16px] bg-neutral-50 dark:bg-[#101522] border border-black/[0.06] dark:border-white/[0.06] space-y-3">
                  <div className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-500 dark:text-slate-400">
                    04. Result &amp; Developer Handoff
                  </div>
                  <p className="type-body-sm text-neutral-600 dark:text-slate-300 leading-relaxed">
                    Structured specifications and interactive prototypes bridging the gap between product design and frontend engineering with zero friction.
                  </p>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="p-6 rounded-[16px] bg-neutral-50 dark:bg-[#101522] border border-black/[0.06] dark:border-white/[0.06] space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-neutral-700 dark:text-slate-300">
                  <Layers className="w-4 h-4 text-violet-500" />
                  <span>Key Deliverables &amp; Methodologies</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Figma High-Fidelity UI Design",
                    "User Flow & Wireframing",
                    "Responsive Breakpoints (Mobile, Tablet, Desktop)",
                    "Design System & Component Library",
                    "Interactive Prototyping",
                    "Frontend Ready Layout & Specs",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 type-body-sm text-neutral-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
                <a
                  href="https://www.figma.com/@akashdholiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
                >
                  <span>Explore on Figma</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded-full border border-neutral-300 dark:border-slate-700 text-neutral-700 dark:text-slate-300 text-xs font-bold uppercase tracking-widest hover:bg-neutral-100 dark:hover:bg-[#1A2233] transition-colors"
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default CaseStudyModal;
