"use client";

import { BlurText } from "@/components/ui/BlurText";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-24 overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      {/* Background Gradients - Matched to Screenshot */}
      {/* Orange blob centered behind text */}
      <div className="absolute top-[20%] left-[-10%] z-0 w-[600px] h-[600px] md:w-[900px] md:h-[900px] bg-[#ff8c42] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-70 dark:opacity-40 animate-blob"></div>
      
      {/* Purple/Blue blob top right */}
      <div className="absolute top-[-20%] right-[-10%] z-0 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-[#a855f7] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-70 dark:opacity-40 animate-blob animation-delay-2000"></div>
      
      {/* Pink blob bottom right/center */}
      <div className="absolute top-[30%] right-[0%] z-0 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-[#ec4899] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-70 dark:opacity-40 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 relative z-10">
        <div className="max-w-4xl">
           <motion.h1 
             className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight tracking-tight text-black dark:text-white transition-colors"
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
           >
            UX/UI & Web Designer
          </motion.h1>
          <div className="text-lg md:text-2xl leading-relaxed font-light mb-8 max-w-2xl text-black dark:text-gray-200 transition-colors">
             <BlurText
              text="with a passion for creating thoughtful and visually stunning digital experiences."
              delay={0.5}
            />
          </div>
          
          <motion.div 
            className="flex items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          >
            <Link href="#projects" className="group flex items-center gap-4 text-black dark:text-white">
              <div className="w-16 h-16 border border-black dark:border-white rounded-full flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform rotate-45 group-hover:rotate-90 transition-transform duration-300 text-black dark:text-white"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="uppercase tracking-widest text-sm font-medium">View Works</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
