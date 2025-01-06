"use client";

import { ReactNode } from "react";

interface CustomBoxProps {
  children: ReactNode;
  className?: string;
}

export default function Page({ children, className = "" }: CustomBoxProps) {
  return (
    <div
      className={`w-full max-w-md rounded-2xl bg-white p-8 shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}
