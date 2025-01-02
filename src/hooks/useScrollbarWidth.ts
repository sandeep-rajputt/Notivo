import { useEffect, useState } from "react";

function useScrollbarWidth(): number {
  const [scrollbarWidth, setScrollbarWidth] = useState<number>(0);

  useEffect(() => {
    // Skip calculation on mobile devices where scrollbar doesn't take space
    if (typeof window === "undefined" || !window.matchMedia) return;
    const isTouchDevice: boolean =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      setScrollbarWidth(0);
      return;
    }

    // Create a temporary div to measure the scrollbar width
    const scrollDiv = document.createElement("div");
    scrollDiv.style.width = "100px";
    scrollDiv.style.height = "100px";
    scrollDiv.style.overflow = "scroll";
    scrollDiv.style.position = "absolute";
    scrollDiv.style.top = "-9999px";
    document.body.appendChild(scrollDiv);

    // Calculate scrollbar width by subtracting the clientWidth from offsetWidth
    const width = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    setScrollbarWidth(width);

    // Clean up the div after calculation
    document.body.removeChild(scrollDiv);
  }, []);

  return scrollbarWidth;
}

export default useScrollbarWidth;
