"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { VscLoading } from "react-icons/vsc";

type Props = {
  onClick: () => void;
  isDisabled: boolean;
  loading: boolean;
  children: React.ReactNode;
  img: string;
};

export default function AuthButton({
  onClick,
  isDisabled,
  loading,
  children,
  img,
}: Props) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      disabled={isDisabled}
      aria-label={"Auth Button"}
      className={`flex w-full items-center justify-center gap-3 rounded-full border border-gray-200 py-3 hover:bg-gray-50 ${
        loading
          ? "cursor-wait"
          : isDisabled
          ? "cursor-not-allowed"
          : "cursor-pointer"
      }`}
    >
      {loading ? (
        <VscLoading className="animate-spin h-6 w-6 text-primary mx-auto" />
      ) : (
        <>
          <Image src={img} alt="Auth Logo" width={20} height={20} />
          <span>{children}</span>
        </>
      )}
    </motion.button>
  );
}
