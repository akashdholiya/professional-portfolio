"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "/about", label: "About Me" },
  { href: "/work", label: "Work" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <header className="max-w-7xl mx-auto fixed top-2 left-0 right-0 z-50 px-6 py-4 bg-white/30 dark:bg-black/30 backdrop-blur-lg border-b border-white/20 dark:border-white/10 shadow-sm transition-all duration-300 rounded-4xl text-black dark:text-white">
        <div className="w-full mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={45}
              height={45}
              className="rounded-full invert dark:invert-0 hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                  pathname === link.href ? "text-black dark:text-white" : "text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                pathname === "/contact"
                  ? "text-black dark:text-white"
                  : "text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
              }`}
            >
              Contact
            </Link>

            <ThemeToggle />

            <a
              href="/AkashDholiyaCV.pdf"
              download
              className="px-6 py-2.5 rounded-full border border-black dark:border-white bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 text-xs font-bold uppercase tracking-widest"
            >
              Download CV
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5 group"
            aria-label="Toggle Menu"
          >
            <motion.span
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
              className="w-8 h-0.5 bg-black dark:bg-white block transition-colors"
            />
            <motion.span
              animate={{ opacity: isOpen ? 0 : 1 }}
              className="w-8 h-0.5 bg-black dark:bg-white block transition-colors"
            />
            <motion.span
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
              className="w-8 h-0.5 bg-black dark:bg-white block transition-colors"
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white dark:bg-black flex flex-col items-center justify-center md:hidden"
          >
            <nav className="flex flex-col items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-display font-bold text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="text-3xl font-display font-bold text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                Contact
              </Link>
              
              <div className="scale-150">
                <ThemeToggle />
              </div>

              <a
                href="/AkashDholiyaCV.pdf"
                download
                className="mt-8 px-8 py-4 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform"
              >
                Download CV
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
