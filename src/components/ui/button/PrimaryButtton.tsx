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

export default function PrimaryButtton({
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
      aria-label={`${children}`}
      className={`w-full rounded-full bg-primary py-3 text-white hover:bg-primary-light ${className} ${
        loading
          ? "cursor-wait"
          : isDisabled
          ? "cursor-not-allowed"
          : "cursor-pointer"
      }`}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
    >
      {loading ? (
        <VscLoading className="animate-spin h-6 w-6 text-white mx-auto" />
      ) : (
        children
      )}
    </motion.button>
  );
}
