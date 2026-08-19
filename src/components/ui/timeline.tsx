"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export function Timeline({ data }: { data: TimelineEntry[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 70%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <div className="w-full font-sans" ref={containerRef}>
      <div ref={ref} className="relative pb-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-start pt-6 md:pt-10 md:gap-8 first:pt-0"
          >
            {/* Sticky Marker and Title */}
            <div className="sticky flex items-center top-28 md:top-36 self-start z-20 md:w-52 shrink-0">
              <div className="h-9 w-9 absolute left-1 md:left-2 rounded-full bg-white dark:bg-black flex items-center justify-center border border-gray-200 dark:border-gray-800 shadow-sm transition-colors">
                <div className="h-2.5 w-2.5 rounded-full bg-black dark:bg-white transition-colors" />
              </div>
              <h3 className="hidden md:block pl-14 text-xs font-mono font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider transition-colors">
                {item.title}
              </h3>
            </div>

            {/* Content Area */}
            <div className="relative pl-12 pr-1 md:pl-2 w-full mt-[-2.25rem] md:mt-0">
              <h3 className="md:hidden block text-xs font-mono font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* Vertical Track & Animated Beam */}
        <div
          style={{
            height: height > 0 ? `${height}px` : "100%",
          }}
          className="absolute left-[1.35rem] md:left-[1.6rem] top-2 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-gray-200 dark:via-gray-800 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] pointer-events-none"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-black via-gray-500 to-transparent dark:from-white dark:via-gray-400 dark:to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Timeline;
