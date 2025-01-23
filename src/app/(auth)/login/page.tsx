"use client";

import Image from "next/image";
import Link from "next/link";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import logInSchema from "@schemas/logInSchema";
import PrimaryIconInput from "@components/ui/input/PrimaryIconInput";
import PassIconInput from "@components/ui/input/PassIconInput";
import { FiUser } from "react-icons/fi";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import FormError from "@components/ui/FormError";
import AuthButton from "@components/ui/button/AuthButton";
import PrimaryButtton from "@components/ui/button/PrimaryButtton";

type LoginFormData = z.infer<typeof logInSchema>;

export default function Page() {
  const [loading, setLoading] = useState<boolean>(false);
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [googleLoading, setGoogleLoading] = useState<boolean>(false);
  const [googleBtnDisabled, setGoogleBtnDisable] = useState<boolean>(true);
  const [githubLoading, setGithubLoading] = useState<boolean>(false);
  const [githubBtnDisabled, setGithubBtnDisable] = useState<boolean>(true);
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: zodResolver(logInSchema) });

  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);
    setSubmitDisabled(true);
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
      action: "login",
    });
    if (result?.error) {
      setCustomError(result.error);
      setLoading(false);
      setSubmitDisabled(false);
    } else {
      setLoading(false);
      setErrorMessage("");
      router.push("/dashboard");
    }
  };

  async function googleSignIn() {
    setErrorMessage("");
    setGoogleLoading(true);
    setGoogleBtnDisable(true);
    setGithubBtnDisable(true);
    setSubmitDisabled(true);
    await signIn("google", {
      redirect: false,
      callbackUrl: "/signup",
    });
  }

  async function githubSignIn() {
    setErrorMessage("");
    setGithubLoading(true);
    setGoogleBtnDisable(true);
    setGithubBtnDisable(true);
    setSubmitDisabled(true);
    await signIn("github", {
      redirect: false,
      callbackUrl: "/signup",
    });
  }

  function setCustomError(error: string | null) {
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
        setErrorMessage(
          error || "An unknown error occurred. Please try again later"
        );
    }
  }

  useEffect(() => {
    if (githubBtnDisabled) {
      setGithubBtnDisable(false);
    }
    if (googleBtnDisabled) {
      setGoogleBtnDisable(false);
    }
    if (error) {
      setCustomError(error);
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
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-primary">Log in</h1>
              <p className="text-primary-word">
                Access your Notivo account to stay on top of your schedule.
              </p>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <PassIconInput
                    placeholder="Password"
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    error={errors.password?.message}
                  />
                )}
              />

              {errorMessage && <FormError>{errorMessage}</FormError>}
              <PrimaryButtton
                loading={loading}
                type="submit"
                isDisabled={submitDisabled}
              >
                Log in
              </PrimaryButtton>
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
              <AuthButton
                isDisabled={googleBtnDisabled}
                loading={googleLoading}
                onClick={() => googleSignIn()}
                img="/google.svg"
              >
                Log in with Google
              </AuthButton>
              <AuthButton
                isDisabled={githubBtnDisabled}
                loading={githubLoading}
                onClick={() => githubSignIn()}
                img="/github.svg"
              >
                Log in with Github
              </AuthButton>
            </div>
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="text-primary hover:text-primary-light"
              >
                Sign up
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Section */}
        <div className="hidden w-1/2 bg-primary-background lg:block">
          <div className="relative flex h-full items-center justify-center">
            <Image
              src="/Login Illustration.svg"
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
