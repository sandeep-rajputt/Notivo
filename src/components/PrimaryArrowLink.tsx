"use client";
import React, { memo } from "react";
import { TiArrowRightThick } from "react-icons/ti";
import Link from "next/link";

interface PrimaryArrowLinkProps {
  children: React.ReactNode;
  shine?: boolean;
  title?: string;
  className?: string;
  link: string;
  external?: boolean;
}

function PrimaryArrowLink({
  children,
  shine = false,
  title,
  className = "",
  link,
  external = false,
}: PrimaryArrowLinkProps) {
  const href = external ? link : `/${link}`;
  const ariaLabel = title || (typeof children === "string" ? children : "Link");

  return (
    <Link
      href={href}
      title={ariaLabel}
      aria-label={ariaLabel}
      className={`w-fit relative flex items-center gap-2 px-8 py-2 text-base font-semibold rounded-full
        bg-gradient-to-r from-tertiary to-tertiary-light text-white
        transition-all duration-300 ease-out
        hover:shadow-lg hover:scale-105 active:scale-95
        group
        ${shine ? "overflow-hidden" : ""}
        ${className}
      `}
    >
      {shine && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out skew-x-12" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
        </>
      )}

      <span className="relative z-10">{children}</span>

      <TiArrowRightThick className="relative z-10 transition-transform duration-300 ease-out transform group-hover:translate-x-1 -rotate-45 group-hover:rotate-0" />
    </Link>
  );
}

export default memo(PrimaryArrowLink);
