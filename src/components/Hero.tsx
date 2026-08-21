"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/Spotlight";
import { GridPattern } from "@/components/ui/GridPattern";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ArrowDown, ArrowUpRight, FileText, Send, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white dark:bg-[#0B0F1A] transition-colors duration-300">
      {/* Aceternity Spotlight Lighting */}
      <Spotlight
        className="-top-40 left-0 md:left-48 md:-top-20"
        fill="#7C3AED"
      />
      <Spotlight
        className="top-10 right-0 md:right-20 opacity-30"
        fill="#F97316"
      />

      {/* Aceternity Subtle Grid and Dot Background */}
      <GridPattern showDots={true} />

      {/* Ambient background glow accents */}
      <div className="absolute top-[25%] left-[-5%] w-[450px] h-[450px] bg-violet-600/10 dark:bg-violet-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[450px] h-[450px] bg-orange-500/10 dark:bg-orange-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 relative z-10 w-full">
        <div className="max-w-4xl">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-[#151B2A] border border-black/[0.06] dark:border-white/[0.08] text-xs font-mono font-medium text-neutral-700 dark:text-slate-300 mb-6 shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for Select Freelance &amp; Full-time Roles</span>
          </motion.div>

          {/* Designer Name & Identity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mb-3"
          >
            <span className="type-eyebrow text-violet-600 dark:text-violet-400">
              Akash Dholiya
            </span>
          </motion.div>

          {/* Main Hero Headline */}
          <motion.h1
            className="type-hero text-neutral-950 dark:text-slate-50 mb-6"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            UI/UX Designer &amp;{" "}
            <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-400 bg-clip-text text-transparent">
              Web Designer
            </span>
          </motion.h1>

          {/* Supporting Statement */}
          <motion.p
            className="type-body-lg text-neutral-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          >
            Designing thoughtful, modern and user-focused digital experiences with high fidelity and structural precision.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            {/* Primary CTA - View Work */}
            <MagneticButton strength={20}>
              <Link
                href="#projects"
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>View My Work</span>
                <div className="w-6 h-6 rounded-full bg-white/20 dark:bg-black/10 flex items-center justify-center group-hover:translate-y-0.5 transition-transform">
                  <ArrowDown className="w-3.5 h-3.5" />
                </div>
              </Link>
            </MagneticButton>

            {/* Secondary CTA - Let's Talk */}
            <MagneticButton strength={20}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-black/[0.08] dark:border-white/[0.12] bg-white dark:bg-[#151B2A] backdrop-blur-sm text-neutral-800 dark:text-slate-200 text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-neutral-100 dark:hover:bg-[#1A2233] transition-colors duration-300 shadow-xs"
              >
                <Send className="w-3.5 h-3.5 text-violet-500" />
                <span>Let's Talk</span>
              </Link>
            </MagneticButton>

            {/* Download Resume / CV */}
            <a
              href="/Akash-CV.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-600 dark:text-slate-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <FileText className="w-4 h-4 opacity-70" />
              <span>Download CV</span>
            </a>
          </motion.div>

          {/* Quick Metrics Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-12 mt-12 border-t border-black/[0.06] dark:border-white/[0.08] max-w-2xl"
          >
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-slate-50">
                3.5+
              </div>
              <div className="text-xs text-neutral-500 dark:text-slate-400 mt-0.5">
                Years Design &amp; Dev Experience
              </div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-slate-50">
                20+
              </div>
              <div className="text-xs text-neutral-500 dark:text-slate-400 mt-0.5">
                Shipped UI &amp; Web Projects
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="font-display text-2xl sm:text-3xl font-bold text-violet-600 dark:text-violet-400">
                100%
              </div>
              <div className="text-xs text-neutral-500 dark:text-slate-400 mt-0.5">
                User-Centric &amp; Pixel Precision
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
