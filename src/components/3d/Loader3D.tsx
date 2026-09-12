"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Loader3DProps {
  onComplete?: () => void;
  minDuration?: number; // Duration in ms, default ~2200ms
}

const statusSteps = [
  { threshold: 0, text: "INITIALIZING 3D VIEWPORT & TOKENS" },
  { threshold: 28, text: "LOADING FIGMA DESIGN SYSTEMS & ASSETS" },
  { threshold: 60, text: "COMPILING INTERACTIVE UI COMPONENTS" },
  { threshold: 88, text: "SYNCHRONIZING DIGITAL EXPERIENCES" },
  { threshold: 99, text: "SYSTEM READY // WELCOME" },
];

export function Loader3D({ onComplete, minDuration = 2000 }: Loader3DProps) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse parallax effect for 3D depth
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 30; // -15deg to +15deg
      const y = (e.clientY / innerHeight - 0.5) * -30;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Smooth progress increment
  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(100, Math.floor((elapsed / minDuration) * 100));

      // Nonlinear smooth easing
      setProgress(rawProgress);

      if (rawProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsFinished(true);
          if (onComplete) onComplete();
        }, 350);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [minDuration, onComplete]);

  // Determine current status message based on progress
  const currentStatus =
    [...statusSteps].reverse().find((s) => progress >= s.threshold)?.text ||
    statusSteps[0].text;

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="3d-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: "blur(12px)",
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-[#080B14] text-slate-100 overflow-hidden select-none"
        >
          {/* Ambient Background Radial Lights */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-violet-600/20 rounded-full blur-[140px] animate-pulse" />
            <div className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-600/15 rounded-full blur-[130px]" />
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
                backgroundSize: "28px 28px",
              }}
            />
          </div>

          {/* Top Bar: Brand & Tech Indicators */}
          <div className="relative z-10 w-full max-w-6xl px-6 sm:px-10 pt-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/30 flex items-center justify-center">
                <span className="font-display font-bold text-violet-400 text-sm">A</span>
              </div>
              <div>
                <span className="font-display font-bold text-sm tracking-wider text-white">
                  AKASH DHOLIYA
                </span>
                <span className="block font-mono text-[10px] text-slate-400 tracking-widest uppercase">
                  UI/UX &amp; Web Designer
                </span>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                SURAT, IN // 2026
              </span>
            </div>
          </div>

          {/* Center 3D Stage */}
          <div
            ref={containerRef}
            className="relative z-10 flex flex-col items-center justify-center my-auto w-full"
            style={{ perspective: "1100px" }}
          >
            {/* 3D Scene Wrapper with Interactive Tilt */}
            <motion.div
              className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center"
              style={{
                transformStyle: "preserve-3d",
                transform: `rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)`,
                transition: "transform 0.15s ease-out",
              }}
            >
              {/* Outer 3D Gyro Ring 1 (X-Axis Heavy) */}
              <div
                className="absolute inset-0 rounded-full border border-violet-500/30 border-t-violet-400 animate-[spin_8s_linear_infinite]"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "rotateX(70deg) rotateZ(0deg)",
                  boxShadow: "0 0 25px rgba(124, 58, 237, 0.2)",
                }}
              />

              {/* Outer 3D Gyro Ring 2 (Y-Axis Heavy) */}
              <div
                className="absolute inset-0 rounded-full border border-cyan-500/30 border-b-cyan-400 animate-[spin_10s_linear_infinite_reverse]"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "rotateY(70deg) rotateZ(45deg)",
                  boxShadow: "0 0 25px rgba(6, 182, 212, 0.2)",
                }}
              />

              {/* Outer 3D Gyro Ring 3 (Z-Diagonal Orbit) */}
              <div
                className="absolute inset-3 rounded-full border border-dashed border-white/20 animate-[spin_16s_linear_infinite]"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "rotateX(45deg) rotateY(45deg)",
                }}
              />

              {/* 3D Rotating Isometric Cube */}
              <div
                className="relative w-28 h-28 sm:w-32 sm:h-32 animate-[spinCube_12s_linear_infinite]"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Cube Faces (56px translation for 112px cube) */}
                {/* Front Face */}
                <div
                  className="absolute inset-0 rounded-xl bg-violet-950/40 backdrop-blur-md border border-violet-500/50 flex flex-col items-center justify-center p-3 shadow-[0_0_15px_rgba(124,58,237,0.3)]"
                  style={{
                    transform: "translateZ(56px)",
                    backfaceVisibility: "visible",
                  }}
                >
                  <div className="w-4 h-4 border-t border-l border-violet-400 absolute top-2 left-2" />
                  <div className="w-4 h-4 border-b border-r border-violet-400 absolute bottom-2 right-2" />
                  <span className="font-display font-black text-xl text-violet-300">UX</span>
                </div>

                {/* Back Face */}
                <div
                  className="absolute inset-0 rounded-xl bg-cyan-950/40 backdrop-blur-md border border-cyan-500/50 flex flex-col items-center justify-center p-3 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                  style={{
                    transform: "rotateY(180deg) translateZ(56px)",
                    backfaceVisibility: "visible",
                  }}
                >
                  <div className="w-4 h-4 border-t border-r border-cyan-400 absolute top-2 right-2" />
                  <div className="w-4 h-4 border-b border-l border-cyan-400 absolute bottom-2 left-2" />
                  <span className="font-display font-black text-xl text-cyan-300">UI</span>
                </div>

                {/* Right Face */}
                <div
                  className="absolute inset-0 rounded-xl bg-purple-950/40 backdrop-blur-md border border-purple-500/50 flex flex-col items-center justify-center p-3"
                  style={{
                    transform: "rotateY(90deg) translateZ(56px)",
                    backfaceVisibility: "visible",
                  }}
                >
                  <span className="font-mono text-xs font-bold text-purple-300 tracking-wider">
                    FIGMA
                  </span>
                </div>

                {/* Left Face */}
                <div
                  className="absolute inset-0 rounded-xl bg-indigo-950/40 backdrop-blur-md border border-indigo-500/50 flex flex-col items-center justify-center p-3"
                  style={{
                    transform: "rotateY(-90deg) translateZ(56px)",
                    backfaceVisibility: "visible",
                  }}
                >
                  <span className="font-mono text-xs font-bold text-indigo-300 tracking-wider">
                    REACT
                  </span>
                </div>

                {/* Top Face */}
                <div
                  className="absolute inset-0 rounded-xl bg-violet-900/30 backdrop-blur-md border border-violet-400/40 flex items-center justify-center"
                  style={{
                    transform: "rotateX(90deg) translateZ(56px)",
                    backfaceVisibility: "visible",
                  }}
                >
                  <div className="w-3 h-3 rounded-full bg-violet-400/80 animate-ping" />
                </div>

                {/* Bottom Face */}
                <div
                  className="absolute inset-0 rounded-xl bg-slate-900/60 backdrop-blur-md border border-slate-700/50 flex items-center justify-center"
                  style={{
                    transform: "rotateX(-90deg) translateZ(56px)",
                    backfaceVisibility: "visible",
                  }}
                >
                  <span className="font-mono text-[10px] text-slate-400">3D CORE</span>
                </div>
              </div>

              {/* Glowing Center Core Light Bulb */}
              <div
                className="absolute w-8 h-8 rounded-full bg-violet-400 blur-[6px] animate-pulse pointer-events-none"
                style={{
                  transform: "translateZ(0px)",
                  boxShadow:
                    "0 0 30px #7C3AED, 0 0 60px #06B6D4, 0 0 90px rgba(124, 58, 237, 0.8)",
                }}
              />
            </motion.div>

            {/* Live Percentage Counter & Status */}
            <div className="mt-10 sm:mt-12 flex flex-col items-center text-center px-4">
              {/* Digital Big Counter */}
              <div className="flex items-baseline gap-1">
                <span className="font-display font-extrabold text-5xl sm:text-6xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-violet-300 bg-clip-text text-transparent">
                  {progress}
                </span>
                <span className="font-mono font-bold text-xl sm:text-2xl text-violet-400">
                  %
                </span>
              </div>

              {/* Status Message */}
              <div className="mt-3 flex items-center gap-2 font-mono text-xs sm:text-sm tracking-wider text-slate-400 uppercase">
                <span className="w-2 h-2 rounded-full bg-violet-400 animate-ping" />
                <span className="transition-all duration-200 min-h-[20px]">
                  {currentStatus}
                </span>
              </div>

              {/* Progress Bar Container */}
              <div className="mt-6 w-64 sm:w-80 h-1.5 rounded-full bg-white/10 p-[1px] overflow-hidden relative shadow-inner">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-violet-600 via-indigo-400 to-cyan-400 shadow-[0_0_12px_rgba(124,58,237,0.8)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
            </div>
          </div>

          {/* Bottom Bar: Interactive skip & copyright hint */}
          <div className="relative z-10 w-full max-w-6xl px-6 sm:px-10 pb-8 flex items-center justify-between text-xs font-mono text-slate-500">
            <span>PORTFOLIO // V2.0</span>
            <button
              onClick={() => {
                setIsFinished(true);
                if (onComplete) onComplete();
              }}
              className="px-3 py-1 rounded border border-white/10 hover:border-violet-500/40 hover:text-slate-200 transition-colors cursor-pointer uppercase tracking-widest text-[11px]"
            >
              Skip [ESC] &rarr;
            </button>
          </div>

          {/* CSS 3D Keyframe Animations */}
          <style jsx>{`
            @keyframes spinCube {
              0% {
                transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
              }
              100% {
                transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader3D;
