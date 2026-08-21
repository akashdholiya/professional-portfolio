"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 md:py-16 border-t border-black/[0.06] dark:border-white/[0.08] bg-neutral-50 dark:bg-[#080B14] text-neutral-600 dark:text-slate-400 text-sm transition-colors">
      <Container className="flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left identity */}
        <div className="text-center md:text-left space-y-1">
          <div className="font-display font-bold text-base text-neutral-900 dark:text-slate-100">
            Akash Dholiya
          </div>
          <div className="text-xs text-neutral-500 dark:text-slate-400">
            UI/UX Designer | Web Designer • Surat, Gujarat, India
          </div>
          <div className="text-xs text-neutral-400 dark:text-slate-500 pt-1">
            &copy; {new Date().getFullYear()} Akash Dholiya. All rights reserved.
          </div>
        </div>

        {/* Center / Right Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-mono font-semibold uppercase tracking-wider">
          <Link
            href="/about"
            className="hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            About
          </Link>
          <Link
            href="/work"
            className="hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            Work
          </Link>
          <a
            href="https://www.figma.com/@akashdholiya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            Figma
          </a>
          <a
            href="mailto:akashdholiya5570@gmail.com"
            className="hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            Email
          </a>
          <a
            href="/Akash-CV.pdf"
            download
            className="hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            CV
          </a>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-full border border-neutral-300 dark:border-slate-800 flex items-center justify-center text-neutral-700 dark:text-slate-300 hover:bg-neutral-900 hover:text-white dark:hover:bg-[#151B2A] dark:hover:text-white transition-all ml-2"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
