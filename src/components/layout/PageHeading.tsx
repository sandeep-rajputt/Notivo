"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PageHeading({ children }: { children: string }) {
  return (
    <section className="pb-8 pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {children}
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm text-primary-word">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>»</span>
            <span>{children}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
