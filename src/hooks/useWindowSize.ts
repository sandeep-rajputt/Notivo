"use client";
import { useState, useEffect } from "react";

// Extend the Window interface to include resizeTimeout for debouncing
declare global {
  interface Window {
    resizeTimeout: ReturnType<typeof setTimeout> | undefined;
  }
}

interface WindowSize {
  width: number;
  height: number;
}

export default function useWindowSize() {
  // State for storing window dimensions
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  // State to track component mount status (for SSR compatibility)
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);

    // Exit early during SSR
    if (typeof window === "undefined") return;

    // Handle resize with debounce
    const handleResize = () => {
      if (window.resizeTimeout) clearTimeout(window.resizeTimeout);
      window.resizeTimeout = setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 200); // 200ms debounce
    };

    window.addEventListener("resize", handleResize);

    // Initial resize on mount
    handleResize();

    // Cleanup: remove event listener and timeout
    return () => {
      window.removeEventListener("resize", handleResize);
      if (window.resizeTimeout) clearTimeout(window.resizeTimeout);
    };
  }, []); // Empty array to run once on mount

  // Return default size until the component mounts
  if (!isMounted) {
    return windowSize;
  }

  return windowSize;
}
