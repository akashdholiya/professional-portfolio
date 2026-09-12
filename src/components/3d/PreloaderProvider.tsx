"use client";

import React, { useEffect, useState } from "react";
import { Loader3D } from "./Loader3D";

interface PreloaderProviderProps {
  children: React.ReactNode;
}

export function PreloaderProvider({ children }: PreloaderProviderProps) {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Prevent body scroll during initial loading
    if (loading) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [loading]);

  const handleComplete = () => {
    setLoading(false);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      {mounted && loading && (
        <Loader3D onComplete={handleComplete} minDuration={2200} />
      )}
      <div
        className={`transition-opacity duration-700 ${
          mounted && loading ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </>
  );
}

export default PreloaderProvider;
