"use client";
import Image from "next/image";
import { useState } from "react";
import { FiMail, FiArrowLeft, FiCheck } from "react-icons/fi";
import PrimaryIconInput from "@/components/inputs/PrimaryIconInput";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import Link from "next/link";

type Step = "email" | "success";

export default function ForgotPasswordPage() {
  const [currentStep, setCurrentStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setCurrentStep("success");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setCurrentStep("email");
    setEmail("");
    setError("");
  };

  return (
    <main className="pt-28 text-primary-word flex h-full items-center justify-center w-full">
      <div className="grid grid-cols-[1fr_1fr] rounded-2xl overflow-hidden shadow-md">
        <div className="flex w-full items-center justify-center bg-white">
          <div className="w-full max-w-lg space-y-8 py-10 base:px-10 px-8 mx-auto">
            {currentStep === "email" ? (
              <EmailStep
                email={email}
                setEmail={setEmail}
                onSubmit={handleSubmit}
                loading={loading}
                error={error}
              />
            ) : (
              <SuccessStep email={email} onReset={resetForm} />
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full bg-primary-background block">
          <div className="relative flex h-full items-center justify-center">
            <Image
              src="/Forgot-Password-Illustration.svg"
              alt="Forgot Password Illustration"
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

function EmailStep({
  email,
  setEmail,
  onSubmit,
  loading,
  error,
}: {
  email: string;
  setEmail: (email: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  loading: boolean;
  error: string;
}) {
  return (
    <>
      <div className="space-y-2 mb-9">
        <h1 className="text-4xl font-bold text-primary">Forgot Password?</h1>
        <p className="text-gray-600">
          No worries! Enter your email address and we&apos;ll send you a reset
          link.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        <PrimaryIconInput
          onChange={(value) => setEmail(value as string)}
          placeholder="Enter your email address"
          required={true}
          label="Email Address"
          title="email"
          icon={FiMail}
          type="email"
          value={email}
          error={error}
        />

        <PrimaryButton type="submit" loading={loading} className="mt-8">
          {loading ? "Sending Reset Link..." : "Send Reset Link"}
        </PrimaryButton>
      </form>

      <div className="text-center mt-8">
        <Link
          href="/login"
          className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-light transition-colors"
        >
          <FiArrowLeft className="w-4 h-4" />
          Back to Login
        </Link>
      </div>
    </>
  );
}

function SuccessStep({
  email,
  onReset,
}: {
  email: string;
  onReset: () => void;
}) {
  return (
    <>
      <div className="text-center space-y-6 mb-9">
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <FiCheck className="w-8 h-8 text-green-600" />
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-primary">Check Your Inbox</h1>
          <p className="text-gray-600">
            We&apos;ve sent a password reset link to
          </p>
          <p className="font-semibold text-primary-dark">{email}</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-800">
            <strong>Didn&apos;t receive the email?</strong> Check your spam
            folder or wait a few minutes for the email to arrive.
          </p>
        </div>

        <div className="space-y-4">
          <PrimaryButton
            type="button"
            handleClick={onReset}
            className="bg-gray-600 hover:bg-gray-700"
          >
            Try Another Email
          </PrimaryButton>

          <div className="text-center">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-light transition-colors"
            >
              <FiArrowLeft className="w-4 h-4" />
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
