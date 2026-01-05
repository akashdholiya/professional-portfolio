"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  animateBy?: "words" | "letters";
}

export function BlurText({
  text,
  className,
  delay = 0,
  animateBy = "words",
}: BlurTextProps) {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");

  return (
    <div className={cn("inline-block", className)}>
      {elements.map((el, i) => (
        <motion.span
          key={i}
          initial={{ filter: "blur(10px)", opacity: 0 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: delay + i * 0.05,
            ease: "easeOut",
          }}
          className="inline-block"
        >
          {el}
          {animateBy === "words" && i !== elements.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </div>
  );
}
