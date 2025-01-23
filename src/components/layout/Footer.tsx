"use client";

import { useState } from "react";
import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import Image from "next/image";
import React from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="bg-primary-light lg:mt-10 mt-20 pt-10">
      <div className="p-6 max-w-7xl mx-auto   lg:mt-0">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex gap-2">
              <Image
                src="/whitelogo.svg"
                alt="Notivo Logo"
                width={30}
                height={30}
                draggable="false"
                className="select-none"
              />
              <Link href="/" className="text-2xl font-bold text-white">
                Notivo
              </Link>
            </div>
            <p className="text-sm text-white/80">
              Notivo helps you stay on top of important tasks and events with
              reminders sent through Discord, Telegram, email, and more!
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-md bg-white px-4 py-2 text-primary-word"
                required
              />
              <button
                type="submit"
                className="rounded-md bg-tertiary px-4 py-2 text-white transition-colors hover:bg-tertiary-light"
                aria-label="subscribe"
              >
                <HiOutlineMail className="h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Useful Links</h3>
            <ul className="space-y-3">
              {["Home", "About us", "Pricing", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-white/90 hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help & Support */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Help & Support</h3>
            <ul className="space-y-3">
              {[
                "Privacy Policy",
                "Terms & Conditions",
                "Cancellation/Refund Policies.",
                "Faqs",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                    className="text-white/90 hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Contact us</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <HiOutlineMail className="h-5 w-5 text-white" />
                <div className="text-sm text-white/90">
                  <Link
                    href="mailto:contact@notivo.in"
                    className=" hover:text-white"
                  >
                    contact@notivo.in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-white/50" />
        {/* Copyright */}
        <div className="mt-6 text-center">
          <p className="text-sm text-white/80">
            © Copyrights 2025 Notivo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
