"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { ArrowUpRight, Menu, X, FileText } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/about#experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 sm:px-10 md:px-16 lg:px-20 py-3.5 sm:py-4 ${
          scrolled
            ? "bg-white/85 dark:bg-[#0B0F1A]/85 backdrop-blur-xl border-b border-black/[0.06] dark:border-white/[0.08] shadow-sm dark:shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-full"
            aria-label="Akash Dholiya Home"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-black/[0.08] dark:border-white/[0.10] shadow-xs group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/logo.jpg"
                alt="Akash Dholiya Logo"
                fill
                className="object-cover invert dark:invert-0"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-display font-bold text-sm text-neutral-900 dark:text-slate-100 tracking-tight">
                Akash Dholiya
              </span>
              <span className="text-[11px] font-mono text-neutral-500 dark:text-slate-400">
                UI/UX &amp; Web Designer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-1.5 px-3 py-1.5 rounded-full bg-neutral-100/90 dark:bg-[#151B2A]/90 backdrop-blur-md border border-black/[0.06] dark:border-white/[0.08] shadow-xs"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href.split("#")[0]);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-white bg-neutral-900 dark:bg-[#1A2233] dark:text-white shadow-xs"
                      : "text-neutral-600 dark:text-slate-400 hover:text-neutral-900 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://www.figma.com/@akashdholiya"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-slate-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <span>Figma</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>

            <ThemeToggle />

            <a
              href="/Akash-CV.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-900 dark:border-white/20 bg-neutral-900 dark:bg-[#151B2A] text-white hover:bg-neutral-800 dark:hover:bg-[#1A2233] transition-all duration-300 text-xs font-bold uppercase tracking-wider shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full border border-neutral-200 dark:border-slate-800 bg-white dark:bg-[#151B2A] text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-[#1A2233] transition-colors"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white/95 dark:bg-[#0B0F1A]/95 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-12 px-8 md:hidden"
          >
            <nav className="flex flex-col gap-6 items-start">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 dark:text-slate-100 hover:text-violet-500 transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              <a
                href="https://www.figma.com/@akashdholiya"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 text-2xl sm:text-3xl font-display font-bold text-neutral-600 dark:text-slate-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                <span>Figma Community</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </nav>

            <div className="flex flex-col gap-4 pt-8 border-t border-neutral-200 dark:border-slate-800">
              <a
                href="/Akash-CV.pdf"
                download
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3.5 rounded-full bg-neutral-900 dark:bg-violet-600 text-white text-xs font-bold uppercase tracking-widest shadow-lg hover:bg-neutral-800 dark:hover:bg-violet-700 transition-colors"
              >
                Download CV / Resume
              </a>
              <div className="text-center text-xs text-neutral-500 dark:text-slate-400 font-mono">
                Surat, Gujarat, India • akashdholiya5570@gmail.com
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
