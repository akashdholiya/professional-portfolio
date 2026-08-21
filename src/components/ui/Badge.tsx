import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "default" | "accent" | "amber" | "emerald" | "outline";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  size = "sm",
  className,
  ...props
}: BadgeProps) {
  const variantClasses = {
    default:
      "bg-neutral-100 dark:bg-slate-800/80 text-neutral-700 dark:text-slate-300 border-neutral-200 dark:border-slate-700/60",
    accent:
      "bg-violet-500/10 dark:bg-violet-500/15 text-violet-600 dark:text-violet-400 border-violet-500/20",
    amber:
      "bg-orange-500/10 dark:bg-orange-500/15 text-orange-600 dark:text-orange-400 border-orange-500/20",
    emerald:
      "bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    outline:
      "bg-transparent text-neutral-600 dark:text-slate-400 border-neutral-200 dark:border-slate-800 hover:border-neutral-400 dark:hover:border-slate-600",
  };

  const sizeClasses = {
    sm: "text-[11px] px-2.5 py-0.5",
    md: "text-xs px-3.5 py-1",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-mono font-medium rounded-full border transition-colors",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export default Badge;
