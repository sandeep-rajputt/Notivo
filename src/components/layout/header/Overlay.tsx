"use client";
import { useState, useRef, useEffect, FC } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import Link from "next/link";
import PrimaryArrowButton from "@components/ui/PrimaryArrowButton";
import useScrollbarWidth from "@hooks/useScrollbarWidth";
import { RootState } from "@store/index";
import { useSelector } from "react-redux";

interface OverlayProps {
  closeOverlay: () => void;
}

const Overlay: FC<OverlayProps> = ({ closeOverlay }) => {
  const { data } = useSelector((state: RootState) => state.userData);
  const [overlayRoot, setOverlayRoot] = useState<HTMLElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const scrollbarWidth = useScrollbarWidth();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        overlayRef.current &&
        !overlayRef.current.contains(event.target as Node)
      ) {
        closeOverlay();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [closeOverlay]);

  useEffect(() => {
    const header = document.querySelector(".main-header") as HTMLElement;
    if (header) {
      header.style.padding = `24px ${24 + scrollbarWidth}px 24px 24px`;
    }
    document.body.style.padding = `0 ${scrollbarWidth}px 0 0`;

    return () => {
      document.body.style.padding = "0px";
      if (header) header.style.padding = "24px";
    };
  }, [scrollbarWidth]);

  useEffect(() => {
    const overlayDiv = document.createElement("div");
    overlayDiv.id = "overlay-root";
    document.body.appendChild(overlayDiv);
    setOverlayRoot(overlayDiv);
    document.body.style.overflow = "hidden";

    return () => {
      document.body.removeChild(overlayDiv);
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!overlayRoot) return null;

  const overlayVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: "0%",
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      x: "-100%",
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  return createPortal(
    <motion.div
      ref={overlayRef}
      className="fixed left-0 bottom-0 px-20 bg-background/70 backdrop-blur shadow z-[999] overflow-y-scroll pb-5 small-scrollbar"
      style={{ height: "calc(100dvh - 84px)" }}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={overlayVariants}
    >
      <div className="flex flex-col items-center gap-10 ">
        <nav>
          <ul className="flex flex-col gap-10 mt-10 text-primary-word">
            <li className="text-center">
              <Link
                href="/"
                onClick={closeOverlay}
                className="px-4 py-2 hover:text-primary"
              >
                Home
              </Link>
            </li>
            <li className="text-center">
              <Link
                href="/about-us"
                onClick={closeOverlay}
                className="px-4 py-2 hover:text-primary"
              >
                About Us
              </Link>
            </li>
            <li className="text-center">
              <Link
                href="/pricing"
                onClick={closeOverlay}
                className="px-4 py-2 hover:text-primary"
              >
                Pricing
              </Link>
            </li>
            <li className="text-center">
              <Link
                href="/contact-us"
                onClick={closeOverlay}
                className="px-4 py-2 hover:text-primary"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <div className="rounded-full" onClick={closeOverlay}>
          <PrimaryArrowButton
            shine={true}
            href={data ? "/dashboard" : "/signup"}
          >
            {data ? "Dashboard" : "TRY IT FREE"}
          </PrimaryArrowButton>
        </div>
      </div>
    </motion.div>,
    overlayRoot
  );
};

export default Overlay;
