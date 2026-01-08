"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  wordAnimation?: boolean;
}

export const ScrollReveal = ({
  children,
  className,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  wordAnimation = true,
}: ScrollRevealProps) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  if (!wordAnimation || typeof children !== "string") {
    return (
        <motion.div
            ref={element}
            style={{
                opacity: useTransform(scrollYProgress, [0, 1], [baseOpacity, 1]),
                filter: enableBlur 
                    ? useTransform(scrollYProgress, [0, 1], [`blur(10px)`, `blur(0px)`])
                    : "none",
            }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    )
  }

  const words = children.split(" ");

  return (
    <p ref={element} className={cn("flex flex-wrap", className)}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        
        return (
          <Word
            key={i}
            progress={scrollYProgress}
            range={[start, end]}
            enableBlur={enableBlur}
            baseOpacity={baseOpacity}
            baseRotation={baseRotation}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
};

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  enableBlur: boolean;
  baseOpacity: number;
  baseRotation: number;
}

const Word = ({ children, progress, range, enableBlur, baseOpacity, baseRotation }: WordProps) => {
  const opacity = useTransform(progress, range, [baseOpacity, 1]);
  const blur = useTransform(progress, range, [enableBlur ? 10 : 0, 0]);
  const rotate = useTransform(progress, range, [baseRotation, 0]);

  return (
    <span className="relative inline-block mr-[0.25em]">
      <span className="absolute opacity-0 select-none">{children}</span>
      <motion.span
        style={{
          opacity,
          filter: enableBlur ? useTransform(blur, (v) => `blur(${v}px)`) : "none",
          rotate: rotate,
        }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
};

export default ScrollReveal;
