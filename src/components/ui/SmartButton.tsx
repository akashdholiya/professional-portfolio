"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SmartButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  download?: boolean;
}

export const SmartButton = ({
  children,
  className,
  href,
  download,
  onClick,
  ...props
}: SmartButtonProps) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: Event) => {
      const element = btnRef.current || linkRef.current;
      if (!element) return;

      const mouseEvent = e as MouseEvent;

      const rect = element.getBoundingClientRect();
      const x = mouseEvent.clientX - rect.left;
      const y = mouseEvent.clientY - rect.top;

      element.style.setProperty("--x", `${x}px`);
      element.style.setProperty("--y", `${y}px`);
    };

    const element = btnRef.current || linkRef.current;
    if (element) {
        element.addEventListener("mousemove", handleMouseMove);
    }
    
    return () => {
        if(element) {
            element.removeEventListener("mousemove", handleMouseMove);
        }
    }
  }, []);

  const baseStyles = cn(
    "relative overflow-hidden px-8 py-3 rounded-full border border-gray-600 dark:border-gray-400 text-black dark:text-white font-bold uppercase tracking-widest text-sm transition-all duration-300 isolate group cursor-none hover:border-black dark:hover:border-white",
    className
  );

  const innerSpan = (
    <span className="relative z-10 mix-blend-difference text-white dark:text-black group-hover:text-white dark:group-hover:text-black">
        {children}
    </span>
    // Just children with z-10 is enough if we rely on pseudo element for bg
  );
  
  const content = (
      <>
        <span className="relative z-10 transition-colors duration-300 group-hover:text-white dark:group-hover:text-black">
            {children}
        </span>
        <span 
            className="absolute inset-0 z-0 bg-black dark:bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
               maskImage: `radial-gradient(circle at var(--x, 50%) var(--y, 50%), black 0%, transparent 100%)`, 
               WebkitMaskImage: `radial-gradient(circle at var(--x, 50%) var(--y, 50%), black 0%, transparent 100%)`,
               maskSize: "0% 0%",
               WebkitMaskSize: "0% 0%", 
               // Wait, mask approach creates a spotlight. For fill from cursor, we simple need a Pseudo element that grows.
               // Let's use the standard "ripple" effect approach which is basically a pseudo element positioned at --x, --y that scales up.
            }}
        />
        {/* Let's try a simpler Approach 2: Radial Gradient Background on hover that follows mouse */}
        <span 
            className="absolute inset-0 z-0 block rounded-full transition-transform duration-500 ease-out origin-center scale-0 group-hover:scale-[3.5]"
            style={{
                background: "var(--bg-hover, black)",
                left: "var(--x)",
                top: "var(--y)",
                width: "0px",
                height: "0px",
                transform: "translate(-50%, -50%) scale(0)",
                padding: "50%", // Make it big circle
            }}
        />
      </>
  );
  
  // Re-thinking styling to match "Still in View" + "Position Aware".
  // Position Aware Fill:
  // We use a ::before or span that is positioned at --x, --y.
  
  const HoverEffect = () => (
      <span 
        className="absolute w-0 h-0 rounded-full bg-black dark:bg-white transition-all duration-500 ease-out group-hover:w-[300%] group-hover:h-[300%]"
        style={{
            left: "var(--x, 50%)",
            top: "var(--y, 50%)",
            transform: "translate(-50%, -50%)",
            zIndex: -1,
        }}
      />
  );

  if (href) {
    if (download) {
         return (
            <a
                ref={linkRef}
                href={href}
                download
                className={baseStyles}
                {...props as any}
            >
             <span className="relative z-10 group-hover:text-white dark:group-hover:text-black transition-colors duration-300">{children}</span>
             <HoverEffect />
            </a>
         )
    }
    return (
      <Link ref={linkRef} href={href} className={baseStyles} {...props as any}>
         <span className="relative z-10 group-hover:text-white dark:group-hover:text-black transition-colors duration-300">{children}</span>
         <HoverEffect />
      </Link>
    );
  }

  return (
    <button ref={btnRef} className={baseStyles} onClick={onClick} {...props}>
      <span className="relative z-10 group-hover:text-white dark:group-hover:text-black transition-colors duration-300">{children}</span>
       <HoverEffect />
    </button>
  );
};
