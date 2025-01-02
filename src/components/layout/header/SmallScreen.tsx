// src/components/SmallScreen.tsx
"use client";
import React, { FC } from "react";
import { AnimatePresence } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { toggleHeader } from "@store/slices/headerSlice";
import Overlay from "./Overlay";
import { RootState } from "@store/index"; // Import RootState for type safety

const SmallScreen: FC = () => {
  // Accessing Redux state with type safety
  const { showHeader } = useSelector((state: RootState) => state.header); // Use RootState here
  const dispatch = useDispatch();

  const closeOverlay = () => {
    dispatch(toggleHeader());
  };

  return (
    <div>
      <button
        className="text-dark-purple"
        onClick={() => dispatch(toggleHeader())}
        aria-label="Toggle Header"
      >
        {showHeader ? (
          <IoCloseSharp className="text-2xl" />
        ) : (
          <RxHamburgerMenu className="text-2xl" />
        )}
      </button>
      <AnimatePresence>
        {showHeader && <Overlay closeOverlay={closeOverlay} />}
      </AnimatePresence>
    </div>
  );
};

export default SmallScreen;
