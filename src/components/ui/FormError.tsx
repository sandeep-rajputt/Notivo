"use client";

import React from "react";
import { motion } from "framer-motion";
import { IoCloseCircle } from "react-icons/io5";

interface FormErrorProps {
  className?: string;
  children: React.ReactNode;
}

const FormError: React.FC<FormErrorProps> = ({ className = "", children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex items-center p-3 bg-gradient-to-r from-red-400 to-rose-400  rounded-lg shadow-lg w-full mx-auto overflow-hidden ${className}`}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="flex-shrink-0 mr-4"
      >
        <IoCloseCircle className="w-6 h-6 text-white" />
      </motion.div>
      <p
        className="text-base font-medium text-white flex-grow "
        style={{ overflowWrap: "anywhere" }}
      >
        {children}
      </p>
    </motion.div>
  );
};

export default FormError;
