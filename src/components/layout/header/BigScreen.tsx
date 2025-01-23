"use client";
import React from "react";
import PrimaryArrowButton from "@components/ui/PrimaryArrowButton";
import Link from "next/link";
import { RootState } from "@store/index";
import { useSelector } from "react-redux";

const BigScreen: React.FC = () => {
  const { data } = useSelector((state: RootState) => state.userData);
  return (
    <div className="flex items-center gap-6 text-purple-text">
      <nav>
        <ul className="flex gap-6 text-primary-word">
          <li>
            <Link
              href="/"
              className="px-6 py-3 hover:text-purple-600 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about-us"
              className="px-6 py-3 hover:text-purple-600 transition-colors"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/pricing"
              className="px-6 py-3 hover:text-purple-600 transition-colors"
            >
              Pricing
            </Link>
          </li>

          <li>
            <Link
              href="/contact-us"
              className="px-6 py-3 hover:text-purple-600 transition-colors"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <PrimaryArrowButton
          shine={true}
          href={data ? "/dashboard" : "/signup"}
          className="px-6 py-3"
        >
          {data ? "Dashboard" : "TRY IT FREE"}
        </PrimaryArrowButton>
      </div>
    </div>
  );
};

export default BigScreen;
