"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  heading: string;
  disc: string;
};

export default function SectionsTemplate({ children, heading, disc }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      className="py-24 flex flex-col gap-16"
      aria-labelledby="section-heading"
    >
      <div className="flex flex-col items-center">
        <h2
          id="section-heading"
          className="text-center md:text-5xl text-4xl font-bold mb-4 text-primary-dark"
        >
          {heading}
        </h2>
        <p className="text-center w-full text-primary-word mb-8 max-w-2xl">
          {disc}
        </p>
      </div>
      <div>{children}</div>
    </motion.section>
  );
}
