"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/Spotlight";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Container } from "@/components/ui/Container";
import { ArrowRight, Mail, Sparkles } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="py-24 md:py-36 relative overflow-hidden bg-[#0B0F1A] text-white transition-colors">
      {/* Spotlight Effect */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#7C3AED"
      />

      {/* Ambient background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <Container className="relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 backdrop-blur-md border border-violet-500/20 text-xs font-mono font-bold uppercase tracking-widest text-violet-400"
          >
            <Sparkles className="w-4 h-4" />
            <span>Ready for the Next Chapter</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="type-h1 text-white leading-tight"
          >
            Let's Create Something Great Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="type-body-lg text-slate-300 font-light leading-relaxed max-w-2xl mx-auto"
          >
            Have a project in mind? Let's build a thoughtful digital experience together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-6"
          >
            <MagneticButton strength={20}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-neutral-950 text-xs sm:text-sm font-bold uppercase tracking-widest shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </MagneticButton>

            <MagneticButton strength={20}>
              <a
                href="mailto:akashdholiya5570@gmail.com"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border border-white/15 bg-[#151B2A]/80 backdrop-blur-md text-white text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-[#1A2233] hover:border-white/30 transition-colors duration-300"
              >
                <Mail className="w-4 h-4 text-violet-400" />
                <span>Email Me</span>
              </a>
            </MagneticButton>
          </motion.div>

          <div className="pt-8 text-xs font-mono text-slate-500">
            Surat, Gujarat, India • +91 88661-11829
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactCTA;
