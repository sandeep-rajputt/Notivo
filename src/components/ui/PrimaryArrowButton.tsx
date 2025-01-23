"use client";
import React, { FC } from "react";
import { TiArrowRightThick } from "react-icons/ti";
import Link from "next/link";

interface PrimaryArrowButtonProps {
  children: React.ReactNode;
  shine?: boolean;
  className?: string;
  handleClick?: () => void;
  href?: string;
}

const PrimaryArrowButton: FC<PrimaryArrowButtonProps> = ({
  children,
  shine = false,
  className = "",
  handleClick = () => {},
  href = "",
}) => {
  const baseClass = `${
    shine && "relative overflow-hidden"
  } flex items-center gap-2 bg-gradient-to-r from-tertiary to-tertiary-light px-8 py-2 text-base text-white font-semibold rounded-full group`;
  const shineEffect = shine ? (
    <p className="absolute bg-gradient-to-r w-full from-[#ffffff00] to-[#ffffff32] -top-[50%] rotate-6 h-[200%] animate-shine"></p>
  ) : null;

  if (href) {
    return (
      <Link href={href} className={`${baseClass} ${className}`}>
        {shineEffect}
        <span>{children}</span>
        <TiArrowRightThick className="transition-transform duration-300 transform group-hover:rotate-0 -rotate-45" />
      </Link>
    );
  }
  return (
    <button onClick={handleClick} className={`${baseClass} ${className}`}>
      {shineEffect}
      <span>{children}</span>
      <TiArrowRightThick className="transition-transform duration-300 transform group-hover:rotate-0 -rotate-45" />
    </button>
  );
};

export default React.memo(PrimaryArrowButton);
