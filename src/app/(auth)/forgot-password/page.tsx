"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { FiMail } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import OtpInput from "@components/ui/Otp-input";
import CustomBox from "@components/ui/Custom-box";

export default function ForgotPasswordPage() {
  const [step, setStep] = useState<"form" | "loading" | "success" | "otp">(
    "form"
  );
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState<string[]>(Array(4).fill(""));

  const handleOtpChange = useCallback((newOtp: string[]) => {
    setOtp(newOtp);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep("loading");
    // Simulate API call
    setTimeout(() => {
      setStep("otp");
    }, 2000);
  };

  const handleVerifyOtp = () => {
    setStep("loading");
    // Simulate API call
    setTimeout(() => {
      setStep("success");
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center py-28">
      <AnimatePresence mode="wait">
        {step === "form" && (
          <CustomBox>
            <div className="space-y-6">
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold text-primary-dark">
                  Forgot Password
                </h1>
                <p className="text-gray-600">
                  Enter your email and we&apos;ll send you a verification code
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full rounded-full border border-gray-200 px-6 py-3 pl-12 focus:border-primary focus:outline-none"
                  />
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 transform text-gray-400" />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full rounded-full bg-primary py-3 text-white hover:bg-primary-light"
                  type="submit"
                >
                  Send Verification Code
                </motion.button>
              </form>

              <div className="text-center text-sm">
                Remember your password?{" "}
                <Link
                  href="/login"
                  className="text-primary hover:text-primary-light"
                >
                  Back to login
                </Link>
              </div>
            </div>
          </CustomBox>
        )}

        {step === "loading" && (
          <CustomBox className="flex items-center justify-center py-12">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          </CustomBox>
        )}

        {step === "otp" && (
          <CustomBox>
            <div className="space-y-6">
              <div className="space-y-2 text-center">
                <h2 className="text-2xl font-bold text-primary-dark">
                  Enter Verification Code
                </h2>
                <p className="text-gray-600">
                  We&apos;ve sent a verification code to
                  <br />
                  <span className="font-medium text-primary">{email}</span>
                </p>
              </div>

              <div className="py-4">
                <OtpInput value={otp} onChange={handleOtpChange} />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleVerifyOtp}
                className="w-full rounded-full bg-primary py-3 text-white hover:bg-primary-light"
              >
                Verify Code
              </motion.button>

              <p className="text-center text-sm text-gray-500">
                Didn&apos;t receive the code?{" "}
                <button
                  onClick={() => setStep("form")}
                  className="text-primary hover:text-primary-light"
                >
                  Send again
                </button>
              </p>
            </div>
          </CustomBox>
        )}

        {step === "success" && (
          <CustomBox>
            <div className="space-y-6 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-primary-dark">
                  Verification Successful
                </h2>
                <p className="text-gray-600">
                  You can now reset your password using the link sent to
                  <br />
                  <span className="font-medium text-primary">{email}</span>
                </p>
              </div>

              <Link
                href="/login"
                className="inline-block w-full rounded-full bg-primary py-3 text-center text-white hover:bg-primary-light"
              >
                Back to Login
              </Link>
            </div>
          </CustomBox>
        )}
      </AnimatePresence>
    </div>
  );
}
