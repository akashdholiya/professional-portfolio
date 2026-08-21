"use client";

import React from "react";
import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { Timeline, TimelineEntry } from "@/components/ui/timeline";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Briefcase, Building2, MapPin, CheckCircle2 } from "lucide-react";

export function Experience() {
  const timelineData: TimelineEntry[] = experiences.map((exp) => ({
    title: exp.duration,
    content: (
      <div className="p-6 md:p-8 rounded-[20px] bg-white dark:bg-[#151B2A] border border-black/[0.08] dark:border-white/[0.08] shadow-sm hover:border-black/[0.16] dark:hover:border-white/[0.16] transition-all duration-300">
        {/* Role & Company Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-black/[0.06] dark:border-white/[0.08]">
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <h4 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 dark:text-slate-50">
                {exp.role}
              </h4>
              {exp.current && (
                <Badge variant="emerald">Active Role</Badge>
              )}
            </div>
            <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-500 dark:text-slate-400 mt-1">
              <span className="font-semibold text-neutral-700 dark:text-slate-300 flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5" />
                {exp.company}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {exp.location}
              </span>
            </div>
          </div>
        </div>

        {/* Responsibilities list */}
        <ul className="space-y-3 type-body-sm text-neutral-600 dark:text-slate-300">
          {exp.responsibilities.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-violet-500 mt-0.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Technology & Tool Badges */}
        <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
          {exp.technologies.map((tech) => (
            <Badge key={tech} variant="default" size="sm">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <section id="experience" className="py-24 md:py-32 transition-colors">
      <Container>
        <SectionHeading
          eyebrow="Work History"
          icon={<Briefcase className="w-4 h-4" />}
          title="Professional Experience"
          subtitle="Over 3.5 years of delivering high-quality UI/UX designs and collaborative frontend engineering."
        />

        <div className="max-w-4xl mx-auto">
          <Timeline data={timelineData} />
        </div>
      </Container>
    </section>
  );
}

export default Experience;
