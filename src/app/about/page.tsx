"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
      <Header />

      <main className="pt-24 md:pt-32 max-w-7xl mx-auto px-6 sm:px-12 md:px-20">
        {/* HERO SECTION */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center mb-12 md:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="col-span-2"
          >
            <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6">
              UX/UI Designer with a background in UI/UX & Web Design. <br />
              Based in Surat, Gujarat, India.
            </h1>
          </motion.div>
          <motion.div
            className="relative flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl transition-all">
              {/* Using logo.jpg as placeholder profile image or a gradient if preferable */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-300 via-pink-400 to-purple-500 opacity-80 mix-blend-multiply"></div>
              <Image
                src="/Akash.jpg"
                fill
                alt="Akash Dholiya"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>
        </section>

        {/* BIO SECTION */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 mb-8 border-t border-gray-100 dark:border-gray-800 pt-8 transition-colors"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="md:col-span-3 pt-1">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 transition-colors">
              Bio
            </h3>
          </div>
          <div className="md:col-span-9">
            <p className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 max-w-3xl transition-colors">
              Starting out in graphic design, I always had a passion for
              creating visually appealing work. But I wanted more than just
              aesthetics—I wanted to understand how people interact with what I
              create. That curiosity led me to UX design, where I've found the
              perfect blend of creativity and problem-solving.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 max-w-3xl mt-6 transition-colors">
              Now, I design digital experiences that are not only beautiful but
              also intuitive and user-focused. With over 3.5 years of experience
              specializing in Figma, HTML, CSS & SCSS, Bootstrap, Tailwind CSS I transform concepts into
              user-friendly interfaces.
            </p>
          </div>
        </motion.div>

        {/* SKILLS SECTION */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 mb-8 border-t border-gray-100 dark:border-gray-800 pt-8 transition-colors"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="md:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 transition-colors">
              Skills
            </h3>
          </div>
          <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-10">
            <div>
              <h4 className="font-display text-lg font-bold mb-6 text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-800 pb-2 transition-colors">
                Design & Tools
              </h4>
              <ul className="space-y-3 sm:space-y-4 text-gray-500 dark:text-gray-400 transition-colors">
                <li>Figma (Wireframing & Prototyping)</li>
                <li>User Interface (UI) Design</li>
                <li>User Experience (UX) Design</li>
                <li>Responsive Design</li>
                <li>Website Optimization</li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-lg font-bold mb-6 text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-800 pb-2 transition-colors">
                Development
              </h4>
              <ul className="space-y-3 sm:space-y-4 text-gray-500 dark:text-gray-400 transition-colors">
                <li>HTML5, CSS3, SCSS, LESS</li>
                <li>Tailwind CSS, Bootstrap</li>
                <li>JavaScript (ES6+)</li>
                <li>Angular framework</li>
                <li>React JS & Next.js</li>
                <li>React Native (Mobile)</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* EDUCATION SECTION */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 mb-8 border-t border-gray-100 dark:border-gray-800 pt-8 transition-colors"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="md:col-span-3 pt-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 transition-colors">
              Education
            </h3>
          </div>
          <div className="md:col-span-9 space-y-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 border-b border-gray-100 dark:border-gray-800 group hover:bg-gray-50 dark:hover:bg-white/5 transition-colors px-4 -mx-4 rounded-lg">
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 transition-colors">
                  Graphic & Web Designing Certification
                </h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm transition-colors">
                  Creative Design & Multimedia Institute (CDMI)
                </p>
              </div>
              <span className="text-gray-400 dark:text-gray-500 text-sm font-mono mt-2 sm:mt-0 transition-colors">
                2022
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 border-b border-gray-100 dark:border-gray-800 group hover:bg-gray-50 dark:hover:bg-white/5 transition-colors px-4 -mx-4 rounded-lg">
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 transition-colors">
                  Bachelor of Commerce
                </h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm transition-colors">
                  RV Patel College of Commerce
                </p>
              </div>
              <span className="text-gray-400 dark:text-gray-500 text-sm font-mono mt-2 sm:mt-0 transition-colors">
                2018 - 2020
              </span>
            </div>
          </div>
        </motion.div>

        {/* DOWNLOAD CV CTA */}
        <motion.div
          className="flex justify-start md:justify-center pb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="/AkashDholiyaCV.pdf"
            download
            className="group relative inline-flex items-center gap-4 px-8 py-3.5 bg-black dark:bg-white text-white dark:text-black rounded-full overflow-hidden transition-all hover:scale-105 shadow-xl"
          >
            <span className="relative z-10 text-sm font-bold uppercase tracking-widest">
              Download CV
            </span>
            <div className="w-2 h-2 bg-white dark:bg-black rounded-full group-hover:bg-orange-400 transition-colors"></div>
          </a>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
