"use client";

import { useState } from "react";
import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="bg-primary-light lg:mt-0 mt-20">
      {/* Support Banner */}
      <div className="relative w-full">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-xl bg-primary p-8 xl:w-[80%] w-[90%] mx-auto -translate-y-1/2">
            <div className="flex lg:flex-row flex-col  items-center justify-between gap-4 md:flex-row">
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-white lg:text-start text-center md:text-2xl">
                  Need support ? contact our team
                </h2>
                <p className="text-white/90 lg:text-start text-center">
                  Mon - Fri: 9 am to 5 pm
                </p>
              </div>
              <div className="flex lg:flex-row flex-col items-center gap-4">
                <Link
                  href="mailto:support@notivo.in"
                  className="rounded-full bg-tertiary px-6 py-2.5 font-medium text-white transition-colors hover:bg-tertiary-light"
                >
                  support@notivo.in
                </Link>
                <Link href="/faqs" className="text-sm text-white underline">
                  Read The FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="p-6 max-w-7xl mx-auto pb-12 -mt-20 lg:mt-0">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold text-white">
              Notivo
            </Link>
            <p className="text-sm text-white/80">
              Notivo helps you stay on top of important tasks and events with
              reminders sent through WhatsApp, Telegram, email, and more!
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
            © Copyrights 2024 Notivo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}