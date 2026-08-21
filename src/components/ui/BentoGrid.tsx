"use client";

import { cn } from "@/lib/utils";
import React from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[19rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  badge,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  badge?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-[20px] group/bento hover:shadow-xl transition duration-300 p-6 md:p-8 bg-white dark:bg-[#151B2A] border border-black/[0.08] dark:border-white/[0.08] justify-between flex flex-col space-y-4 hover:border-black/[0.16] dark:hover:border-white/[0.16] relative overflow-hidden",
        className
      )}
    >
      {header && <div className="w-full flex-1">{header}</div>}
      <div className="group-hover/bento:translate-x-0.5 transition duration-200">
        <div className="flex items-center justify-between gap-2 mb-3">
          {icon && <div className="text-violet-600 dark:text-violet-400">{icon}</div>}
          {badge && (
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-[#1A2233] text-neutral-600 dark:text-slate-400 border border-neutral-200 dark:border-slate-700/60">
              {badge}
            </span>
          )}
        </div>
        <div className="font-display font-bold text-neutral-900 dark:text-slate-50 text-xl md:text-2xl mb-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
