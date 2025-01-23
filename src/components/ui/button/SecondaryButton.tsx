import { motion } from "framer-motion";
import React from "react";
import { VscLoading } from "react-icons/vsc";

type Props = {
  loading?: boolean;
  children: React.ReactNode;
  type?: "submit" | "button" | "reset";
  className?: string;
  isDisabled?: boolean;
  onClick?: () => void;
};

export default function SecondaryButton({
  loading = false,
  children,
  type = "button",
  className = "",
  isDisabled = false,
  onClick = () => null,
}: Props) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`flex-1 rounded-full w-full border border-primary py-3 text-primary  ${className} ${
        loading
          ? "cursor-wait"
          : isDisabled
          ? "cursor-not-allowed"
          : "cursor-pointer hover:bg-primary-light hover:text-white"
      }`}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      aria-label={`${children}`}
    >
      {loading ? (
        <VscLoading className="animate-spin h-6 w-6 text-primary mx-auto" />
      ) : (
        children
      )}
    </motion.button>
  );
}
