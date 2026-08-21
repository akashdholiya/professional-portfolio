"use client";

import React from "react";
import { Timeline, TimelineEntry } from "@/components/ui/timeline";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Search,
  BookOpen,
  Target,
  LayoutTemplate,
  Palette,
  PlayCircle,
  Code2,
  Workflow,
} from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Discover",
    icon: <Search className="w-5 h-5 text-violet-500" />,
    summary: "Understanding business goals, target audience needs, and project constraints through stakeholder alignment.",
  },
  {
    step: "02",
    title: "Research",
    icon: <BookOpen className="w-5 h-5 text-fuchsia-500" />,
    summary: "Analyzing user behavior, market patterns, competitive landscapes, and identifying core friction points.",
  },
  {
    step: "03",
    title: "Define",
    icon: <Target className="w-5 h-5 text-purple-500" />,
    summary: "Synthesizing problem statements, user personas, information architecture, and defining key user journeys.",
  },
  {
    step: "04",
    title: "Wireframe",
    icon: <LayoutTemplate className="w-5 h-5 text-blue-500" />,
    summary: "Creating low-fidelity wireframes and structural layouts to rapidly iterate and validate usability flow.",
  },
  {
    step: "05",
    title: "UI Design",
    icon: <Palette className="w-5 h-5 text-cyan-500" />,
    summary: "Crafting high-fidelity, polished visual designs with harmonious typography, accessible colors, and design tokens.",
  },
  {
    step: "06",
    title: "Prototype",
    icon: <PlayCircle className="w-5 h-5 text-emerald-500" />,
    summary: "Building interactive, high-fidelity prototypes in Figma to test transitions, micro-interactions, and real flows.",
  },
  {
    step: "07",
    title: "Development / Handoff",
    icon: <Code2 className="w-5 h-5 text-amber-500" />,
    summary: "Delivering organized Figma component specs, design tokens, and collaborating closely with engineers for pixel-perfect build.",
  },
];

export function DesignProcess() {
  const timelineData: TimelineEntry[] = processSteps.map((step) => ({
    title: `Step ${step.step}`,
    content: (
      <div className="p-6 rounded-[20px] bg-white dark:bg-[#151B2A] border border-black/[0.08] dark:border-white/[0.08] shadow-sm hover:border-black/[0.16] dark:hover:border-white/[0.16] transition-all duration-300">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-[#1A2233] flex items-center justify-center">
            {step.icon}
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 dark:text-slate-400">
              Phase {step.step}
            </span>
            <h4 className="font-display text-xl font-bold text-neutral-900 dark:text-slate-50">
              {step.title}
            </h4>
          </div>
        </div>
        <p className="type-body-sm text-neutral-600 dark:text-slate-300 leading-relaxed">
          {step.summary}
        </p>
      </div>
    ),
  }));

  return (
    <section id="process" className="py-24 md:py-32 transition-colors">
      <Container>
        <SectionHeading
          eyebrow="Design Methodology"
          icon={<Workflow className="w-4 h-4" />}
          title="A Proven, Structured Design Process"
          subtitle="From initial discovery to engineering handoff, every step is deliberate, collaborative, and focused on user success."
        />

        <div className="max-w-4xl mx-auto">
          <Timeline data={timelineData} />
        </div>
      </Container>
    </section>
  );
}

export default DesignProcess;
