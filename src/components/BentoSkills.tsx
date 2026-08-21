"use client";

import React from "react";
import { BentoGrid } from "@/components/ui/BentoGrid";
import { CardSpotlight } from "@/components/ui/CardSpotlight";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import {
  Figma,
  Layout,
  Smartphone,
  Code2,
  Sparkles,
  Layers,
  Palette,
  Workflow,
} from "lucide-react";

export function BentoSkills() {
  return (
    <section id="skills" className="py-24 md:py-32 transition-colors">
      <Container>
        <SectionHeading
          eyebrow="Core Capabilities & Stack"
          icon={<Sparkles className="w-4 h-4" />}
          title="Crafting Digital Products from Concept to Code"
          subtitle="A balanced blend of user experience strategy, design systems, and frontend implementation."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Feature Card 1: UI/UX & Product Design (Col Span 2) */}
          <CardSpotlight className="md:col-span-2 min-h-[300px] flex flex-col justify-between p-6 sm:p-8" color="#7C3AED">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-2xl bg-violet-500/10 dark:bg-violet-500/15 border border-violet-500/20 flex items-center justify-center text-violet-600 dark:text-violet-400">
                <Layout className="w-6 h-6" />
              </div>
              <Badge variant="accent">Primary Craft</Badge>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-slate-50">
                UI/UX Design &amp; Product Strategy
              </h3>
              <p className="type-body text-neutral-600 dark:text-slate-300 leading-relaxed max-w-xl">
                End-to-end interface design prioritizing user empathy, intuitive navigation, accessibility compliance (WCAG), and frictionless task flows.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "User Research",
                  "Wireframing",
                  "Information Architecture",
                  "User Journeys",
                  "Usability Testing",
                  "Heuristic Evaluation",
                ].map((item) => (
                  <Badge key={item} variant="default">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </CardSpotlight>

          {/* Medium Card 2: Figma & Design Systems (Col Span 1) */}
          <CardSpotlight className="md:col-span-1 min-h-[300px] flex flex-col justify-between p-6 sm:p-8" color="#A855F7">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 dark:bg-purple-500/15 border border-purple-500/20 flex items-center justify-center text-purple-500">
                <Figma className="w-6 h-6" />
              </div>
              <Badge variant="accent">Advanced</Badge>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 dark:text-slate-50">
                Figma &amp; Design Systems
              </h3>
              <p className="type-body-sm text-neutral-600 dark:text-slate-300 leading-relaxed">
                Building scalable design tokens, multi-tier component libraries, auto layout systems, and variant architectures.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Tokens", "Variants", "Auto Layout", "Variables", "UI Kits"].map((tag) => (
                  <Badge key={tag} variant="outline" size="sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </CardSpotlight>

          {/* Medium Card 3: Responsive Web & Mobile (Col Span 1) */}
          <CardSpotlight className="md:col-span-1 min-h-[280px] flex flex-col justify-between p-6 sm:p-8" color="#3B82F6">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/20 flex items-center justify-center text-blue-500">
                <Smartphone className="w-6 h-6" />
              </div>
              <Badge variant="default">Cross-Platform</Badge>
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-xl font-bold text-neutral-900 dark:text-slate-50">
                Responsive &amp; Adaptive Design
              </h3>
              <p className="type-body-sm text-neutral-600 dark:text-slate-300 leading-relaxed">
                Designing flexible layouts that gracefully scale from 375px mobile viewports to ultra-wide 4K desktop screens.
              </p>
            </div>
          </CardSpotlight>

          {/* Medium Card 4: Frontend Collaboration (Col Span 2) */}
          <CardSpotlight className="md:col-span-2 min-h-[280px] flex flex-col justify-between p-6 sm:p-8" color="#10B981">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                <Code2 className="w-6 h-6" />
              </div>
              <Badge variant="emerald">Design &lt;&gt; Code Handoff</Badge>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-2xl font-bold text-neutral-900 dark:text-slate-50">
                Frontend Collaboration &amp; Implementation
              </h3>
              <p className="type-body text-neutral-600 dark:text-slate-300 leading-relaxed">
                Deep understanding of frontend architectures ensuring seamless developer handoffs with pixel-perfect accuracy and zero design debt.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {["Next.js", "React.js", "Tailwind CSS", "Angular", "HTML5 & CSS3/SCSS", "JavaScript"].map((tech) => (
                  <Badge key={tech} variant="default">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </CardSpotlight>
        </div>
      </Container>
    </section>
  );
}

export default BentoSkills;
