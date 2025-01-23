"use client";
import React, { FC } from "react";
import { TiArrowRightThick } from "react-icons/ti";
import Link from "next/link";

interface SecondaryArrowButtonProps {
  children: React.ReactNode;
  className?: string;
  handleClick?: () => void;
  href?: string;
}

const SecondaryArrowButton: FC<SecondaryArrowButtonProps> = ({
  children,
  className = "",
  handleClick = () => {},
  href = "",
}) => {
  const baseClass = `flex transition-colors duration-300 items-center gap-2 bg-transparent border border-primary hover:bg-primary px-8 py-2 text-base text-white font-semibold rounded-full group `;
  if (href) {
    return (
      <Link href={href} className={`${baseClass} ${className}`}>
        <span className="text-primary transition-colors duration-300 group-hover:text-white">
          {children}
        </span>
        <TiArrowRightThick className="transition-all duration-300 text-primary transform group-hover:rotate-0 group-hover:text-white -rotate-45" />
      </Link>
    );
  }
  return (
    <button
      onClick={handleClick}
      className={`${baseClass} ${className}`}
      aria-label={`${children}`}
    >
      <span className="text-primary transition-colors duration-300 group-hover:text-white">
        {children}
      </span>
      <TiArrowRightThick className="transition-all duration-300 text-primary transform group-hover:rotate-0 group-hover:text-white -rotate-45" />
    </button>
  );
};

export default React.memo(SecondaryArrowButton);
