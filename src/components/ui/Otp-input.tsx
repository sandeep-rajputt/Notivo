"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface OtpInputProps {
  length?: number;
  value: string[];
  onChange: (value: string[]) => void;
}

export default function Page({
  length = 4,
  value = [],
  onChange,
}: OtpInputProps) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>(
    Array(length).fill(null)
  );

  // Ensure value array has correct length
  useEffect(() => {
    if (value.length !== length) {
      // Create a new array with the correct length
      const newValue = Array(length).fill("");
      // Copy over any existing values
      value.slice(0, length).forEach((v, i) => {
        newValue[i] = v;
      });
      onChange(newValue);
    }
  }, [length, value.length, onChange]);

  const handleChange = (index: number, digit: string) => {
    if (digit.length <= 1 && /^[0-9]*$/.test(digit)) {
      const newValue = [...value];
      newValue[index] = digit;
      onChange(newValue);

      // Auto-focus next input
      if (digit && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !value[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex justify-center space-x-4">
      {Array.from({ length }, (_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <input
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            required
            maxLength={1}
            value={value[index] || ""}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="h-14 w-14 rounded-xl border-2 border-gray-200 text-center text-xl focus:border-primary focus:outline-none"
          />
        </motion.div>
      ))}
    </div>
  );
}
