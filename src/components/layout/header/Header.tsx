"use client";
import React, { useEffect, useState } from "react";
import useWindowSize from "@hooks/useWindowSize";
import BigScreen from "./BigScreen";
import SmallScreen from "./SmallScreen";
import Image from "next/image";

const Header: React.FC = () => {
  const { width }: { width: number } = useWindowSize();
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [location, setLocation] = useState<string>("");

  const handleScroll = () => {
    if (location === "/") {
      const isScrolling = window.scrollY > 20;
      setScrolling(isScrolling);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLocation(window.location.pathname);

      if (window.location.pathname === "/") {
        window.addEventListener("scroll", handleScroll);
        if (window.scrollY > 20) {
          console.log("scroll");
          setScrolling(true);
        }
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }
    }
  }, [location]);

  if (width === 0) return null;

  return (
    <header
      className={`fixed flex flex-col w-full transition-all duration-200 ease-out top-0 z-[99999999] ${
        location === "/"
          ? scrolling
            ? "bg-background/70 backdrop-blur shadow"
            : "pt-5"
          : "bg-background/70 backdrop-blur shadow"
      }`}
    >
      <div className="main-header flex justify-between w-full items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Notivo Logo"
            width={32}
            height={32}
            draggable="false"
            className="select-none"
          />
          <p className="text-3xl font-extrabold tracking-tighter bg-gradient-to-r from-primary-dark to-primary bg-clip-text text-transparent">
            <span>
              <span className="pr-0.5">Notivo </span>
            </span>
          </p>
        </div>

        {width > 969 ? <BigScreen /> : <SmallScreen />}
      </div>
    </header>
  );
};

export default Header;
