"use client";
import { Suspense } from "react";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import CustomBox from "@components/ui/Custom-box";
import PasswordInput from "@components/ui/Password-input";
import Skeleton from "@components/ui/Skeleton";

export default function Page() {
  return (
    <Suspense
      fallback={
        <CustomBox className="flex items-center justify-center py-12">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        </CustomBox>
      }
    >
      <PasswordReset />
    </Suspense>
  );
}

function PasswordReset() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [step, setStep] = useState<
    "validating" | "invalid" | "form" | "loading" | "success"
  >("validating");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!token) {
      router.push("/forgot-password");
      return;
    }

    // Simulate token validation
    const validateToken = setTimeout(() => {
      // For demo purposes, consider token "expired" if it contains the word "expired"
      if (token.includes("expired")) {
        setStep("invalid");
      } else {
        setStep("form");
      }
    }, 1500);

    return () => clearTimeout(validateToken);
  }, [token, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setStep("loading");

    // Simulate API call
    setTimeout(() => {
      setStep("success");
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center py-28">
      <AnimatePresence mode="wait">
        {step === "validating" && (
          <Skeleton className=" h-80 max-w-96 rounded-2xl" />
        )}
        {step === "invalid" && (
          <CustomBox>
            <div className="space-y-6 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-primary-dark">
                  Link Expired
                </h2>
                <p className="text-primary-word">
                  The password reset link has expired or is invalid. Please
                  request a new one.
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push("/forgot-password")}
                className="w-full rounded-full bg-primary py-3 text-white hover:bg-primary-light"
              >
                Request New Link
              </motion.button>
            </div>
          </CustomBox>
        )}

        {step === "form" && (
          <CustomBox>
            <div className="space-y-6">
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold text-primary-dark">
                  Change Password
                </h1>
                <p className="text-primary-word">
                  Please enter your new password
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <PasswordInput
                  id="password"
                  label="New Password"
                  value={password}
                  onChange={setPassword}
                  error={
                    error && error.includes("8 characters") ? error : undefined
                  }
                />

                <PasswordInput
                  id="confirmPassword"
                  label="Confirm New Password"
                  value={confirmPassword}
                  onChange={setConfirmPassword}
                  error={error && error.includes("match") ? error : undefined}
                />

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full rounded-full bg-primary py-3 text-white hover:bg-primary-light"
                >
                  Change Password
                </motion.button>
              </form>
            </div>
          </CustomBox>
        )}

        {step === "loading" && (
          <CustomBox className="flex items-center justify-center py-12">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          </CustomBox>
        )}

        {step === "success" && (
          <CustomBox>
            <div className="space-y-6 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-secondary">
                  Password Changed!
                </h2>
                <p className="text-primary-word">
                  Your password has been successfully changed. You can now log
                  in with your new password.
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push("/login")}
                className="w-full rounded-full bg-primary py-3 text-white hover:bg-primary-light"
              >
                Go to Login
              </motion.button>
            </div>
          </CustomBox>
        )}
      </AnimatePresence>
    </div>
  );
}
