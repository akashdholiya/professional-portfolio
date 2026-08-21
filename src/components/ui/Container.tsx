import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

export function Container({
  children,
  className,
  size = "default",
  ...props
}: ContainerProps) {
  const sizeClasses = {
    narrow: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-[1400px]",
  };

  return (
    <div
      className={cn(
        "w-full mx-auto px-6 sm:px-10 md:px-16 lg:px-20",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Container;
