import { useState } from "react";
import Link from "next/link";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import signUpSchema from "@schemas/signUpSchema";
import PrimaryIconInput from "@components/ui/input/PrimaryIconInput";
import PassIconInput from "@components/ui/input/PassIconInput";
import { FiUser, FiMail } from "react-icons/fi";
import { signIn } from "next-auth/react";
import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import FormError from "@components/ui/FormError";
import PrimaryButtton from "@components/ui/button/PrimaryButtton";
import AuthButton from "@components/ui/button/AuthButton";
import PasswordRequirements from "@components/utility/PasswordRequirements";

type SignupFormData = z.infer<typeof signUpSchema>;

export default function SignUpForm() {
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
  } = useForm<SignupFormData>({ resolver: zodResolver(signUpSchema) });

  const onSubmit = async (data: SignupFormData) => {
    if (data.password !== data.confirmPassword) {
      setErrorMessage("Password and confirm password do not match.");
      return;
    }
    setErrorMessage("");
    setLoading(true);
    setSubmitDisabled(true);
    setGithubBtnDisable(true);
    setGoogleBtnDisable(true);
    const result = await signIn("credentials", {
      email: data.email,
      password: data.email,
      name: data.name,
      action: "signup",
      redirect: false,
    });
    if (result?.error) {
      if (result.error.startsWith("connect EHOSTUNREACH")) {
        setErrorMessage(
          "There was a network issue. Please check your internet connection and try again."
        );
        return;
      }
      setErrorMessage(result.error);
      setLoading(false);
      setSubmitDisabled(false);
      setGithubBtnDisable(false);
      setGoogleBtnDisable(false);
    } else {
      setLoading(false);
      setSubmitDisabled(false);
      setGithubBtnDisable(false);
      setGoogleBtnDisable(false);
      router.push("/verify-account");
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
    <div className="w-full max-w-lg space-y-8 py-10 base:px-10 px-5 mx-auto">
      <div>
        <div className="space-y-2 mb-9">
          <h1 className="text-4xl font-bold text-primary">Sign up</h1>
          <p className="text-gray-600">Create your account to get started</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <PrimaryIconInput
                type={"text"}
                placeholder="Name"
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                error={errors.name?.message}
                icon={FiUser}
              />
            )}
          />
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
                icon={FiMail}
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

          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <PassIconInput
                placeholder="Confirm Password"
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                error={errors.confirmPassword?.message}
              />
            )}
          />
          <PasswordRequirements />
          {errorMessage && (
            <FormError className="my-5">{errorMessage}</FormError>
          )}
          <PrimaryButtton
            loading={loading}
            type="submit"
            isDisabled={submitDisabled}
          >
            Continue
          </PrimaryButtton>
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
          <AuthButton
            isDisabled={googleBtnDisabled}
            loading={googleLoading}
            onClick={() => googleSignIn()}
            img="/google.svg"
          >
            Continue with Google
          </AuthButton>
          <AuthButton
            isDisabled={githubBtnDisabled}
            loading={githubLoading}
            onClick={() => githubSignIn()}
            img="/github.svg"
          >
            Continue with Github
          </AuthButton>
        </div>
      </div>
      <div className="text-center text-sm">
        Already have an account?{" "}
        <Link href="/login" className="text-primary hover:text-primary-light">
          Log in
        </Link>
      </div>
    </div>
  );
}
