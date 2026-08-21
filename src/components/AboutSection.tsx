"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Sparkles, Compass } from "lucide-react";

const keyExpertise = [
  "UI/UX Design",
  "Web Design",
  "Figma",
  "Design Systems",
  "Responsive Design",
  "Prototyping",
  "Frontend Collaboration",
];

export function AboutSection() {
  const [hovered, setHovered] = useState(false);

  return (
    <section id="about" className="py-24 md:py-32 transition-colors">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Professional Introduction */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 dark:bg-violet-500/15 border border-violet-500/20 text-xs font-mono font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">
              <Compass className="w-4 h-4" />
              <span>About The Designer</span>
            </div>

            <h2 className="type-h2 text-neutral-900 dark:text-slate-50">
              Bridging Creative Design with Scalable Digital Experiences
            </h2>

            <p className="type-body-lg text-neutral-600 dark:text-slate-300 leading-relaxed">
              With over 3.5 years of hands-on experience across UI/UX design and frontend development, I specialize in crafting clean, high-impact interfaces in Figma and translating them into robust, responsive digital products.
            </p>

            <p className="type-body text-neutral-600 dark:text-slate-400 leading-relaxed">
              My approach blends user psychology, structured design systems, and rapid prototyping to solve complex product challenges and deliver delightful user journeys.
            </p>

            {/* Key Expertise Chips */}
            <div className="pt-2">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 dark:text-slate-400 mb-3">
                Core Expertise
              </div>
              <div className="flex flex-wrap gap-2.5">
                {keyExpertise.map((skill) => (
                  <Badge key={skill} variant="default" size="md">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTA Link */}
            <div className="pt-4 flex items-center gap-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white hover:text-violet-500 dark:hover:text-violet-400 transition-colors group"
              >
                <span>Learn More About My Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Interactive Card with Canvas Reveal Effect */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="relative h-[420px] sm:h-[480px] w-full rounded-[24px] overflow-hidden border border-black/[0.08] dark:border-white/[0.08] bg-[#151B2A] flex flex-col justify-between p-8 shadow-2xl group cursor-pointer"
            >
              {/* Background Canvas Reveal Animation */}
              <AnimatePresence>
                {hovered ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full w-full absolute inset-0"
                  >
                    <CanvasRevealEffect
                      animationSpeed={3}
                      containerClassName="bg-black"
                      colors={[
                        [124, 58, 237],
                        [249, 115, 22],
                        [59, 130, 246],
                      ]}
                      dotSize={2.5}
                    />
                  </motion.div>
                ) : (
                  <div className="h-full w-full absolute inset-0 bg-gradient-to-br from-[#101522] via-[#151B2A] to-[#0B0F1A] opacity-90" />
                )}
              </AnimatePresence>

              {/* Content Overlays */}
              <div className="relative z-10 flex justify-between items-start">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-white/20 shadow-lg">
                  <Image
                    src="/Akash.jpg"
                    alt="Akash Dholiya"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md text-white border border-white/15">
                  <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                  <span>Designer Touch</span>
                </span>
              </div>

              <div className="relative z-10 space-y-3">
                <div className="text-xs font-mono font-semibold uppercase tracking-widest text-violet-400">
                  Design Philosophy
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-snug">
                  "Intuitive interfaces happen when empathy meets systematic craft."
                </h3>
                <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-white/10">
                  <span>Surat, Gujarat, India</span>
                  <span className="font-mono text-slate-300 group-hover:text-white transition-colors">
                    Hover to illuminate →
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default AboutSection;
