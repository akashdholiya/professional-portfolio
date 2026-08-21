"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GridPatternProps {
  className?: string;
  gridClassName?: string;
  showDots?: boolean;
}

export function GridPattern({
  className,
  gridClassName,
  showDots = false,
}: GridPatternProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]",
        className
      )}
      aria-hidden="true"
    >
      <div
        className={cn(
          "absolute inset-0 h-full w-full",
          showDots
            ? "bg-[radial-gradient(#000000_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 dark:opacity-15"
            : "bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 dark:opacity-25",
          gridClassName
        )}
      />
    </div>
  );
}

export default GridPattern;
