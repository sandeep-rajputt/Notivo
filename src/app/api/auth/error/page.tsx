"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FormError from "@components/ui/FormError";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    if (error) {
      switch (error) {
        case "OAuthCallback":
          setErrorMessage("You canceled the Google login.");
          break;
        case "AccessDenied":
          setErrorMessage("Access was denied.");
          break;
        case "Configuration":
          setErrorMessage(
            "There is a configuration issue. Please contact support."
          );
          break;
        case "Callback":
          setErrorMessage("Login was canceled or failed. Please try again.");
          break;
        default:
          setErrorMessage("An unexpected error occurred. Please try again.");
      }
    }
  }, [error]);

  return (
    <main className="lg:py-28 py-12 text-primary-word">
      <div className="flex bg-white rounded-2xl overflow-hidden shadow-md">
        <div className="flex w-full items-center justify-center px-6 py-12 lg:w-1/2 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-md space-y-8"
          >
            <div className="space-y-4 pt-8">
              <h1 className="text-4xl font-bold text-primary">
                Authentication Error
              </h1>
              {errorMessage && <FormError>{errorMessage}</FormError>}
            </div>
            <div>
              <p className="text-primary-word">
                We encountered an error while trying to authenticate you. Please
                try logging in again or create a new account if you don&apos;t
                have one yet.
              </p>
            </div>
            <div className="space-y-4 pt-8">
              <Link
                href="/login"
                className="flex items-center justify-center w-full px-4 py-3 text-white bg-primary rounded-full hover:bg-primary-light transition-colors"
              >
                Back to Login
              </Link>

              <Link
                href="/signup"
                className="flex items-center justify-center w-full px-4 py-3 text-[#6C63FF] bg-white border-2 border-primary rounded-full hover:bg-gray-50 transition-colors"
              >
                Create New Account
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="hidden w-1/2 bg-primary-background lg:block">
          <div className="relative flex h-full items-center justify-center">
            <Image
              src="/Error Illustration.svg"
              alt="Error Illustration"
              width={500}
              height={500}
              className="object-contain p-8"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
