"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CustomBoxProps {
  children: ReactNode;
  className?: string;
}

export default function Page({ children, className = "" }: CustomBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`w-full max-w-md rounded-2xl bg-white p-8 shadow-lg ${className}`}
    >
      {children}
    </motion.div>
  );
}
