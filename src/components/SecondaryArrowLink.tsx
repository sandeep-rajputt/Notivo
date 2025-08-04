"use client";
import React, { memo } from "react";
import { TiArrowRightThick } from "react-icons/ti";
import Link from "next/link";

interface SecondaryArrowLinkProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  link: string;
  external?: boolean;
}

function SecondaryArrowLink({
  children,
  title,
  className = "",
  link,
  external = false,
}: SecondaryArrowLinkProps) {
  const href = external ? link : `/${link}`;
  const ariaLabel = title || (typeof children === "string" ? children : "Link");

  return (
    <Link
      href={href}
      title={ariaLabel}
      aria-label={ariaLabel}
      className={`w-fit text-primary relative hover:bg-primary hover:text-white flex items-center gap-2 px-8 py-1.5 text-base font-semibold rounded-full
        bg-transparent border border-primary
        transition-all duration-300 ease-out
        hover:shadow-lg hover:scale-105 active:scale-95
        group ${className}`}
    >
      <span className="relative z-10">{children}</span>

      <TiArrowRightThick className="relative z-10 transition-transform duration-300 ease-out transform group-hover:translate-x-1 -rotate-45 group-hover:rotate-0" />
    </Link>
  );
}

export default memo(SecondaryArrowLink);
