"use";
import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  href: string;
};

export default function PrimaryLink({ children, className = "", href }: Props) {
  return (
    <Link
      href={href}
      className={`w-full rounded-full bg-primary py-3 text-white hover:bg-primary-light block hover:scale-[1.03] transition-all duration-200 text-center ${className}`}
    >
      {children}
    </Link>
  );
}
