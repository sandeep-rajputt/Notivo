"use client";

import { useState } from "react";
import Link from "next/link";
import CustomBox from "@components/ui/Custom-box";
import FormError from "@components/ui/FormError";
import PrimaryButtton from "@components/ui/button/PrimaryButtton";
import PrimaryIconInput from "@components/ui/input/PrimaryIconInput";
import emailSchema from "@schemas/emailSchema";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FiUser } from "react-icons/fi";
import axios from "axios";
import Image from "next/image";
import PrimaryLink from "@components/ui/button/PrimaryLink";

type SendOtpData = z.infer<typeof emailSchema>;

export default function ForgotPasswordPage() {
  const [step, setStep] = useState<"form" | "success">("form");
  const [email, setEmail] = useState("");
  const [otpBtnLoading, setOtpButtonLoading] = useState<boolean>(false);
  const [otpError, setOtpError] = useState<string>("");
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SendOtpData>({ resolver: zodResolver(emailSchema) });

  const onEmailSubmit = async (data: SendOtpData) => {
    setOtpError("");
    setOtpButtonLoading(true);
    await axios
      .post("/api/auth/requestForgotPasswordLink", { email: data.email })
      .then(() => {
        setStep("success");
        setEmail(data.email);
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          setOtpError(error.response?.data?.error || "Something went wrong.");
        } else {
          setOtpError("An unexpected error occurred.");
        }
      })
      .finally(() => {
        setOtpButtonLoading(false);
      });
  };

  return (
    <div className="flex items-center justify-center py-28">
      <CustomBox>
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl text-center font-bold text-primary-dark">
              Forgot Password
            </h1>
            {step === "form" && (
              <div className="flex flex-col gap-6">
                <p className="text-gray-600 text-center">
                  Enter your email and we&apos;ll send you a verification code
                </p>
                <form
                  onSubmit={handleSubmit(onEmailSubmit)}
                  className="space-y-6"
                >
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <PrimaryIconInput
                        type={"text"}
                        placeholder="Email"
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        error={errors.email?.message}
                        icon={FiUser}
                      />
                    )}
                  />
                  {otpError && <FormError>{otpError}</FormError>}
                  <PrimaryButtton
                    loading={otpBtnLoading}
                    type="submit"
                    isDisabled={otpBtnLoading}
                  >
                    Send OTP
                  </PrimaryButtton>
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
            )}
            {step === "success" && (
              <div className="pt-5">
                <Image
                  src="/email-icon.svg"
                  width={150}
                  height={150}
                  alt="Email Icon"
                  className="mx-auto mb-5"
                />
                <h2 className="text-2xl font-semibold mb-2 text-primary-dark text-center">
                  Check Your Inbox
                </h2>
                <p className="text-gray-600 text-center">
                  You can now reset your password using the link sent to
                  <span className="font-medium text-primary pl-1">{email}</span>
                </p>

                <PrimaryLink href="/login" className="mt-7">
                  Back to Log in
                </PrimaryLink>
              </div>
            )}
          </div>
        </div>
      </CustomBox>
    </div>
  );
}
