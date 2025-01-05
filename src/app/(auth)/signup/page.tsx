"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiUser, FiLock, FiMail, FiEye, FiEyeOff } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Page() {
  const [step, setStep] = useState<"form" | "loading" | "otp">("form");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep("loading");
    // Simulate loading
    setTimeout(() => {
      setStep("otp");
    }, 2000);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value && index < 3) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  return (
    <main className="lg:py-28 py-12 text-primary-word">
      <div className="flex bg-white rounded-2xl overflow-hidden shadow-md">
        <div className="flex w-full items-center justify-center px-6 py-12 lg:w-1/2 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-primary">Sign up</h1>
              <p className="text-gray-600">
                Create your account to get started
              </p>
            </div>

            <AnimatePresence mode="wait">
              {step === "form" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Full Name"
                        required
                        className="w-full rounded-full border border-gray-200 px-6 py-3 pl-12 focus:border-primary focus:outline-none"
                      />
                      <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 transform text-gray-400" />
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Email"
                        required
                        className="w-full rounded-full border border-gray-200 px-6 py-3 pl-12 focus:border-primary focus:outline-none"
                      />
                      <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 transform text-gray-400" />
                    </div>

                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Create Password"
                        required
                        className="w-full rounded-full border border-gray-200 px-6 py-3 pl-12 focus:border-primary focus:outline-none"
                      />
                      <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 transform text-gray-400" />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 transform text-gray-400"
                      >
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                      </button>
                    </div>

                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        required
                        className="w-full rounded-full border border-gray-200 px-6 py-3 pl-12 focus:border-primary focus:outline-none"
                      />
                      <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 transform text-gray-400" />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2 transform text-gray-400"
                      >
                        {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                      </button>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="remember"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label
                        htmlFor="remember"
                        className="ml-2 text-sm text-gray-600"
                      >
                        Remember password
                      </label>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full rounded-full bg-primary py-3 text-white hover:bg-primary-light"
                      type="submit"
                    >
                      Continue
                    </motion.button>
                  </form>

                  <div className="relative mt-8">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-white px-4 text-gray-500">
                        or continue with
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
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
                      <span>Continue with Google</span>
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
                      <span>Continue with GitHub</span>
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {step === "loading" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center py-20"
                >
                  <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
                </motion.div>
              )}

              {step === "otp" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  <p className="text-center text-gray-600">
                    We&apos;ve sent a verification code to your email
                  </p>

                  <div className="flex justify-center space-x-4">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleOtpKeyDown(index, e)}
                        className="h-12 w-12 rounded-lg border border-gray-200 text-center text-lg focus:border-primary focus:outline-none"
                      />
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full rounded-full bg-primary py-3 text-white hover:bg-primary-light"
                  >
                    Verify
                  </motion.button>

                  <p className="text-center text-sm text-gray-600">
                    Didn&apos;t receive the code?{" "}
                    <button className="text-primary hover:text-primary-light">
                      Resend
                    </button>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-primary hover:text-primary-light"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden w-1/2 bg-primary-background md:block">
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
