"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button as MovingBorderButton } from "@/components/ui/MovingBorder";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Figma, ArrowUpRight, Box, Layers, Compass } from "lucide-react";

export function FigmaShowcase() {
  return (
    <section className="py-24 md:py-32 transition-colors">
      <Container>
        <div className="relative rounded-[24px] p-8 sm:p-12 md:p-16 bg-gradient-to-br from-[#101522] via-[#151B2A] to-[#0B0F1A] border border-white/[0.08] overflow-hidden shadow-2xl text-white">
          {/* Ambient background decoration */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-600/15 rounded-full blur-[110px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-orange-500/10 rounded-full blur-[110px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold uppercase tracking-widest text-violet-400">
                <Figma className="w-4 h-4 text-purple-400" />
                <span>Figma Community Creator</span>
              </div>

              <h2 className="type-h2 text-white leading-tight">
                Explore My Figma Community &amp; UI Resources
              </h2>

              <p className="type-body text-slate-300 leading-relaxed max-w-xl">
                I share production-ready UI kits, design systems, wireframe templates, and interactive component libraries for the global design community.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                  <div className="font-display text-2xl font-bold text-white">100%</div>
                  <div className="text-xs text-slate-400 mt-0.5">Auto Layout &amp; Tokens</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                  <div className="font-display text-2xl font-bold text-violet-400">Figma</div>
                  <div className="text-xs text-slate-400 mt-0.5">High-Fidelity Kits</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 col-span-2 sm:col-span-1">
                  <div className="font-display text-2xl font-bold text-fuchsia-400">Free</div>
                  <div className="text-xs text-slate-400 mt-0.5">Community Access</div>
                </div>
              </div>

              {/* CTA with Moving Border */}
              <div className="pt-4">
                <a
                  href="https://www.figma.com/@akashdholiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <MovingBorderButton
                    borderRadius="9999px"
                    duration={3500}
                    className="px-8 py-4 bg-[#0B0F1A] text-white font-bold uppercase tracking-widest text-xs sm:text-sm flex items-center gap-3 group"
                  >
                    <Figma className="w-4 h-4 text-violet-400 group-hover:scale-110 transition-transform" />
                    <span>Explore My Figma Community</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </MovingBorderButton>
                </a>
              </div>
            </div>

            {/* Right visual card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-[24px] p-6 bg-white/[0.03] border border-white/10 backdrop-blur-xl space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                      <Figma className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">@akashdholiya</div>
                      <div className="text-xs text-slate-400">Community Profile</div>
                    </div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                </div>

                <div className="space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <Box className="w-4 h-4 text-violet-400 shrink-0" />
                    <span>Mobile &amp; Web UI Systems</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <Layers className="w-4 h-4 text-fuchsia-400 shrink-0" />
                    <span>Reusable Component Tokens</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <Compass className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Wireframing &amp; Flow Templates</span>
                  </div>
                </div>

                <div className="pt-2 text-center text-[11px] font-mono text-slate-400">
                  figma.com/@akashdholiya
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FigmaShowcase;
