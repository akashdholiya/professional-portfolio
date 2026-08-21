"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Experience } from "@/components/Experience";
import { BentoSkills } from "@/components/BentoSkills";
import { Spotlight } from "@/components/ui/Spotlight";
import { GridPattern } from "@/components/ui/GridPattern";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { FileText, Sparkles, GraduationCap, MapPin, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0F1A] text-neutral-900 dark:text-slate-100 font-sans selection:bg-violet-500 selection:text-white transition-colors duration-300">
      <Header />

      <main className="pt-28 md:pt-36">
        {/* HERO SECTION */}
        <section className="relative py-8 md:py-16 mb-16 md:mb-24 overflow-hidden">
          <Spotlight className="-top-30 left-10 md:left-40" fill="#7C3AED" />
          <GridPattern showDots={true} />

          <Container className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left: Heading & Intro */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-7 space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 dark:bg-violet-500/15 border border-violet-500/20 text-xs font-mono font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">
                  <Sparkles className="w-4 h-4" />
                  <span>Designer Story</span>
                </div>

                <h1 className="type-h1 text-neutral-900 dark:text-slate-50 leading-[1.1]">
                  Designing Thoughtful, Human-Centered Digital Products
                </h1>

                <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-slate-400 font-mono">
                  <MapPin className="w-4 h-4 text-violet-500" />
                  <span>Based in Surat, Gujarat, India • Available Globally</span>
                </div>

                <p className="type-body-lg text-neutral-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                  Starting out in visual design, I found myself drawn to understanding how people perceive and navigate interfaces. Over the last 3.5+ years, I’ve specialized in Figma, Design Systems, and frontend architectures to craft digital experiences that are intuitive, beautiful, and scalable.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <a
                    href="/Akash-CV.pdf"
                    download
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-bold uppercase tracking-wider shadow-lg hover:scale-105 transition-transform"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Download Full Resume</span>
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-black/[0.08] dark:border-white/[0.12] text-xs font-bold uppercase tracking-wider hover:bg-neutral-100 dark:hover:bg-[#151B2A] transition-colors"
                  >
                    <span>Get In Touch</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

              {/* Right: Portrait Image */}
              <motion.div
                className="lg:col-span-5 flex justify-center lg:justify-end"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-[24px] overflow-hidden border-2 border-black/[0.08] dark:border-white/[0.10] shadow-2xl">
                  <Image
                    src="/Akash.jpg"
                    fill
                    alt="Akash Dholiya"
                    className="object-cover transition-all duration-500"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* BIO & PHILOSOPHY */}
        <section className="py-16 border-t border-black/[0.06] dark:border-white/[0.08]">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
              <div className="md:col-span-4">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 dark:text-slate-400">
                  Philosophy
                </span>
                <h3 className="font-display text-2xl font-bold text-neutral-900 dark:text-slate-50 mt-2">
                  Simplicity Meets Purpose
                </h3>
              </div>
              <div className="md:col-span-8 space-y-4 type-body text-neutral-600 dark:text-slate-300 leading-relaxed">
                <p>
                  I believe great design is invisible. It solves user friction before it occurs, guides attention with deliberate hierarchy, and adheres to accessibility standards without sacrificing aesthetic excellence.
                </p>
                <p>
                  Whether building a multi-tier design system in Figma or structuring front-end components in React and Next.js, my focus remains constant: delivering delightful, measurable outcomes.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* SKILLS BENTO GRID */}
        <BentoSkills />

        {/* EDUCATION SECTION */}
        <section className="py-20 border-t border-black/[0.06] dark:border-white/[0.08]">
          <Container>
            <SectionHeading
              eyebrow="Academic Background"
              icon={<GraduationCap className="w-4 h-4" />}
              title="Education &amp; Certifications"
            />

            <div className="max-w-3xl mx-auto space-y-4">
              <div className="p-6 rounded-[20px] bg-neutral-50 dark:bg-[#151B2A] border border-black/[0.08] dark:border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-display text-lg font-bold text-neutral-900 dark:text-slate-50">
                    Graphic &amp; Web Designing Certification
                  </h4>
                  <p className="type-body-sm text-neutral-500 dark:text-slate-400 mt-1">
                    Creative Design &amp; Multimedia Institute (CDMI)
                  </p>
                </div>
                <Badge variant="outline">2022</Badge>
              </div>

              <div className="p-6 rounded-[20px] bg-neutral-50 dark:bg-[#151B2A] border border-black/[0.08] dark:border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-display text-lg font-bold text-neutral-900 dark:text-slate-50">
                    Bachelor of Commerce (B.Com)
                  </h4>
                  <p className="type-body-sm text-neutral-500 dark:text-slate-400 mt-1">
                    RV Patel College of Commerce
                  </p>
                </div>
                <Badge variant="outline">2018 — 2020</Badge>
              </div>
            </div>
          </Container>
        </section>

        {/* EXPERIENCE TIMELINE */}
        <Experience />
      </main>

      <Footer />
    </div>
  );
}
