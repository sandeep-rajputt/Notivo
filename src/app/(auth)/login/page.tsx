"use client";

import Image from "next/image";
import Link from "next/link";
import { FiUser, FiLock } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";
import { VscLoading } from "react-icons/vsc";

export default function Page() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setTimeout(() => {
      setLoading(false);
      setError("Invalid email or password");
    }, 2000);
  };

  return (
    <main className="lg:py-28 py-12 text-primary-word">
      <div className="flex bg-white rounded-2xl overflow-hidden shadow-md">
        <div className="flex w-full items-center justify-center px-6 py-12 lg:w-1/2 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-primary">Log in</h1>
              <p className="text-primary-word">
                Access your Notivo account to stay on top of your schedule.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full rounded-full border border-gray-200 px-6 py-3 pl-12 focus:border-primary focus:outline-none"
                />
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 transform text-primary-word" />
              </div>

              <div className="relative">
                <input
                  type="password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full rounded-full border border-gray-200 px-6 py-3 pl-12 focus:border-primary focus:outline-none"
                />
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 transform text-primary-word" />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                type="submit"
                className="w-full rounded-full bg-primary py-3 text-white hover:bg-primary-light"
              >
                {loading ? (
                  <VscLoading className="animate-spin h-6 w-6 text-white mx-auto" />
                ) : (
                  "Log in"
                )}
              </motion.button>
              {error && (
                <span className="text-red-500 text-center block">{error}</span>
              )}
            </form>

            <div className="text-center">
              <Link
                href="/forgot-password"
                className="text-sm text-primary hover:text-primary-light"
              >
                Forgot your password?
              </Link>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-4 text-primary-word">or</span>
              </div>
            </div>

            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex w-full items-center justify-center gap-3 rounded-full border border-gray-200 py-3 hover:bg-gray-50"
              >
                <Image
                  src="/google.svg"
                  alt="Google Logo"
                  width={20}
                  height={20}
                />
                <span>Log in with Google</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex w-full items-center justify-center gap-3 rounded-full border border-gray-200 py-3 hover:bg-gray-50"
              >
                <Image
                  src="/github.svg"
                  alt="Github Logo"
                  width={20}
                  height={20}
                />

                <span>Log in with Github</span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden w-1/2 bg-primary-background lg:block">
          <div className="relative flex h-full items-center justify-center">
            <Image
              src="/Analytics Illustration.svg"
              alt="Analytics Illustration"
              width={600}
              height={600}
              className="object-contain p-8"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
