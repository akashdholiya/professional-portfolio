"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface ElectricBorderProps {
  children: React.ReactNode;
  className?: string;
  cornerRadius?: number;
}

export default function ElectricBorder({
  children,
  className,
  cornerRadius = 15,
}: ElectricBorderProps) {
  return (
    <div
      className={cn("relative overflow-hidden p-[2px]", className)}
      style={{ borderRadius: cornerRadius }}
    >
      <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <div
        className="relative h-full w-full bg-inherit"
        style={{ borderRadius: cornerRadius ? cornerRadius - 2 : 13 }}
      >
        {children}
      </div>
    </div>
  );
}
