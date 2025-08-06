"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { FiAlertTriangle, FiCheck, FiArrowLeft } from "react-icons/fi";
import PasswordInput from "@/components/inputs/PasswordInput";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import Link from "next/link";

type Step = "validating" | "invalid" | "form" | "success";

export default function ChangePasswordPage() {
  const [currentStep, setCurrentStep] = useState<Step>("validating");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const validateToken = async () => {
    if (!token) {
      setCurrentStep("invalid");
      return;
    }

    try {
      // Simulate token validation API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // For demo, randomly decide if token is valid
      const isValid = Math.random() > 0.3; // 70% chance of valid token

      if (isValid) {
        setCurrentStep("form");
      } else {
        setCurrentStep("invalid");
      }
    } catch {
      setCurrentStep("invalid");
    }
  };

  useEffect(() => {
    validateToken();
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation
    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

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

  return (
    <main className="pt-28 text-primary-word flex h-full items-center justify-center w-full">
      <div className="grid grid-cols-[1fr_1fr] rounded-2xl overflow-hidden shadow-md">
        <div className="flex w-full items-center justify-center bg-white">
          <div className="w-full max-w-lg space-y-8 py-10 base:px-10 px-8 mx-auto">
            {currentStep === "validating" && <ValidatingStep />}
            {currentStep === "invalid" && <InvalidTokenStep />}
            {currentStep === "form" && (
              <FormStep
                newPassword={newPassword}
                setNewPassword={setNewPassword}
                confirmPassword={confirmPassword}
                setConfirmPassword={setConfirmPassword}
                onSubmit={handleSubmit}
                loading={loading}
                error={error}
              />
            )}
            {currentStep === "success" && <SuccessStep />}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full bg-primary-background block">
          <div className="relative flex h-full items-center justify-center">
            <Image
              src="/change-password-illustration.svg"
              alt="Change Password Illustration"
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

function ValidatingStep() {
  return (
    <>
      <div className="text-center space-y-6 mb-9">
        <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-primary">Validating Link</h1>
          <p className="text-gray-600">
            Please wait while we verify your password reset link...
          </p>
        </div>
      </div>
    </>
  );
}

function InvalidTokenStep() {
  return (
    <>
      <div className="text-center space-y-6 mb-9">
        <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
          <FiAlertTriangle className="w-8 h-8 text-red-600" />
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-red-600">
            Invalid or Expired Link
          </h1>
          <p className="text-gray-600">
            This password reset link is invalid or has expired. Please request a
            new one.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-sm text-red-800">
            <strong>What happened?</strong> Password reset links expire after 24
            hours for security reasons, or this link may have already been used.
          </p>
        </div>

        <div className="space-y-4">
          <Link href="/forgot-password">
            <PrimaryButton type="button" className="w-full">
              Request New Reset Link
            </PrimaryButton>
          </Link>

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

function FormStep({
  newPassword,
  setNewPassword,
  confirmPassword,
  setConfirmPassword,
  onSubmit,
  loading,
  error,
}: {
  newPassword: string;
  setNewPassword: (password: string) => void;
  confirmPassword: string;
  setConfirmPassword: (password: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  loading: boolean;
  error: string;
}) {
  return (
    <>
      <div className="space-y-2 mb-9">
        <h1 className="text-4xl font-bold text-primary">Create New Password</h1>
        <p className="text-gray-600">
          Choose a strong password to secure your account.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        <PasswordInput
          value={newPassword}
          onChange={(value) => setNewPassword(value as string)}
          required={true}
          label="New Password"
          title="newPassword"
          placeholder="Enter your new password"
          showStrength={true}
        />

        <PasswordInput
          value={confirmPassword}
          onChange={(value) => setConfirmPassword(value as string)}
          required={true}
          label="Confirm New Password"
          title="confirmPassword"
          placeholder="Confirm your new password"
          error={
            confirmPassword && newPassword !== confirmPassword
              ? "Passwords do not match"
              : ""
          }
        />

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <p className="text-sm text-red-800">{error}</p>
          </div>
        )}

        <PrimaryButton
          type="submit"
          loading={loading}
          disabled={
            !newPassword || !confirmPassword || newPassword !== confirmPassword
          }
          className="mt-8"
        >
          {loading ? "Updating Password..." : "Update Password"}
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

function SuccessStep() {
  return (
    <>
      <div className="text-center space-y-6 mb-9">
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <FiCheck className="w-8 h-8 text-green-600" />
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-primary">Password Updated!</h1>
          <p className="text-gray-600">
            Your password has been successfully updated. You can now log in with
            your new password.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm text-green-800">
            <strong>Security tip:</strong> Make sure to keep your new password
            safe and don&apos;t share it with anyone.
          </p>
        </div>

        <div className="space-y-4">
          <Link href="/login">
            <PrimaryButton type="button" className="w-full">
              Continue to Login
            </PrimaryButton>
          </Link>
        </div>
      </div>
    </>
  );
}
