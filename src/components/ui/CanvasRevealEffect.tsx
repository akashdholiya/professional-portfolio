"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

export const CanvasRevealEffect = ({
  animationSpeed = 1.5,
  opacities = [0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.8, 0.8, 1],
  colors = [[255, 140, 66], [168, 85, 247], [59, 130, 246]],
  containerClassName,
  dotSize = 3,
  showGradient = true,
}: {
  animationSpeed?: number;
  opacities?: number[];
  colors?: number[][];
  containerClassName?: string;
  dotSize?: number;
  showGradient?: boolean;
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 300);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 300);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    const spacing = 16;
    let time = 0;

    const render = () => {
      time += 0.02 * animationSpeed;
      ctx.clearRect(0, 0, width, height);

      const cols = Math.ceil(width / spacing);
      const rows = Math.ceil(height / spacing);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing;
          const y = j * spacing;

          // Wave function based on coordinates and time
          const dist = Math.sin(i * 0.2 + time) + Math.cos(j * 0.2 + time);
          const normalized = (dist + 2) / 4; // 0 to 1
          const opacityIndex = Math.floor(normalized * (opacities.length - 1));
          const opacity = opacities[Math.max(0, Math.min(opacityIndex, opacities.length - 1))];

          const colorIndex = (i + j) % colors.length;
          const [r, g, b] = colors[colorIndex];

          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity * 0.7})`;
          ctx.beginPath();
          ctx.arc(x, y, dotSize * (0.6 + normalized * 0.6), 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [animationSpeed, colors, dotSize, opacities]);

  return (
    <div className={cn("h-full relative bg-transparent w-full overflow-hidden", containerClassName)}>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full pointer-events-none" />
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
      )}
    </div>
  );
};

export default CanvasRevealEffect;
