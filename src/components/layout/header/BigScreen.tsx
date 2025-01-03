"use client";
import React from "react";
import OrangeButton from "../../ui/OrangeButton";
import Link from "next/link";

const BigScreen: React.FC = () => {
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
        <OrangeButton shine={true} className="px-6 py-3">
          TRY IT FREE
        </OrangeButton>
      </div>
    </div>
  );
};

export default BigScreen;
