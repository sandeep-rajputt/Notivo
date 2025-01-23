"use client";
import { useEffect, useState } from "react";
import { z } from "zod";
import { useRouter, useSearchParams } from "next/navigation";
import CustomBox from "@components/ui/Custom-box";
import Loader from "@components/ui/Loader";
import { useForm, Controller } from "react-hook-form";
import Image from "next/image";
import PrimaryLink from "@components/ui/button/PrimaryLink";
import PasswordRequirements from "@components/utility/PasswordRequirements";
import isValidToken from "@utils/isValidToken";
import axios from "axios";
import changePasswordSchema from "@schemas/changePasswordSchema";
import PrimaryButtton from "@components/ui/button/PrimaryButtton";
import FormError from "@components/ui/FormError";

type ChangePasswodSchema = z.infer<typeof changePasswordSchema>;
import { zodResolver } from "@hookform/resolvers/zod";
import PassIconInput from "@components/ui/input/PassIconInput";

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [step, setStep] = useState<
    "validating" | "invalid" | "form" | "success"
  >("validating");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ChangePasswodSchema>({
    resolver: zodResolver(changePasswordSchema),
  });

  async function handleVerification(token: string) {
    const validToken = isValidToken(token);
    if (!validToken) {
      setStep("invalid");
    }
    await axios
      .post("/api/auth/checkForgotPasswordToken", { token })
      .then(() => {
        setStep("form");
      })
      .catch(() => {
        setStep("invalid");
      });
  }

  useEffect(() => {
    if (!token) {
      router.push("/forgot-password");
      return;
    }

    handleVerification(token);
  }, [token, router]);

  const onSubmit = async (data: ChangePasswodSchema) => {
    setLoading(true);
    setError("");
    if (data.password !== data.confirmPassword) {
      setError("Password and confirm password do not match.");
      setLoading(false);
      return;
    }
    if (!token) {
      setLoading(false);
      setStep("invalid");
      return;
    }
    const validToken = isValidToken(token);
    if (!validToken) {
      setLoading(false);
      setStep("invalid");
      return;
    }
    await axios
      .post("/api/auth/changePassword", {
        token,
        password: data.password,
        confirmPassword: data.confirmPassword,
      })
      .then(() => {
        setStep("success");
      })
      .catch(() => {
        if (axios.isAxiosError(error)) {
          setError(error.response?.data?.error || "Something went wrong.");
        } else {
          setError("An unexpected error occurred.");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (step === "validating") {
    return (
      <div className="flex items-center flex-col gap-7 justify-center min-h-screen">
        <Loader />
        <p className="text-xl font-semibold text-primary-dark">Verifying...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-28">
      <CustomBox>
        {step === "invalid" && (
          <div className="space-y-6 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-primary-dark">
                Link Expired
              </h2>
              <Image
                src="/broken_link.svg"
                width={150}
                height={150}
                alt="Email Icon"
                className="mx-auto mb-5"
              />
              <p className="text-primary-word">
                The password reset link has expired or is invalid. Please
                request a new one.
              </p>
            </div>

            <PrimaryLink href="/forgot-password">Request New Link</PrimaryLink>
          </div>
        )}

        {step === "form" && (
          <div className="space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold text-primary-dark">
                Change Password
              </h1>
              <p className="text-primary-word">
                Please enter your new password
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <PassIconInput
                    placeholder="New Password"
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    error={errors.password?.message}
                  />
                )}
              />

              <Controller
                name="confirmPassword"
                control={control}
                render={({ field }) => (
                  <PassIconInput
                    placeholder="Confirm New Password"
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    error={errors.confirmPassword?.message}
                  />
                )}
              />
              <PasswordRequirements />
              {error && <FormError>{error}</FormError>}
              <PrimaryButtton
                loading={loading}
                type="submit"
                isDisabled={loading}
              >
                Change Password
              </PrimaryButtton>
            </form>
          </div>
        )}
        {step === "success" && (
          <div className="space-y-6 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-secondary">
                Password Changed!
              </h2>
              <div className="py-5">
                <Image
                  src={"/sucess.svg"}
                  width={100}
                  height={100}
                  alt={""}
                  className="mx-auto"
                />
              </div>
              <p className="text-primary-word">
                Your password has been successfully changed. You can now log in
                with your new password.
              </p>
            </div>
            <PrimaryLink href="/login">Go to login</PrimaryLink>
          </div>
        )}
      </CustomBox>
    </div>
  );
}
