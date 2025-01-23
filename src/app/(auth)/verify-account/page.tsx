"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import FormError from "@components/ui/FormError";
import FormSuccess from "@components/ui/FormSuccess";
import Loader from "@components/ui/Loader";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@store/index";
import { userVerifyied } from "@store/slices/userDataSlice";
import { useSession } from "next-auth/react";
import { jwtVerify } from "jose";
import isValidToken from "@utils/isValidToken";
import SecondaryButton from "@components/ui/button/SecondaryButton";

export default function Page() {
  const searchParams: URLSearchParams = useSearchParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const { data } = useSelector((state: RootState) => state.userData);
  const token: string = searchParams.get("token") || "";
  const [loadingMessage, setLoadingMessage] = useState<string>();
  const [showPage, setShowPage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [redirectCountdown, setRedirectCountdown] = useState<number>(3);
  const [buttonText, setButtonText] = useState<string>(
    "Resend Verification Email"
  );
  const [buttonDisable, setButtonDisable] = useState<boolean>(false);
  const [resendSucessMessage, setResendSucessMessage] = useState<string>("");
  const [resendErrorMessage, setResendErrorMessage] = useState<string>("");

  const verifyEmail = async () => {
    if (token) {
      setErrorMessage("");
      setLoadingMessage("Verifying your email...");
      const isTokenValid = await isValidToken(token);
      if (!isTokenValid) {
        setErrorMessage(
          "Oops! This link has expired or is invalid. Please request a new one to proceed."
        );
        setLoadingMessage("");
        return;
      }
      try {
        await axios.post("/api/auth/verifyuseraccount", { token });
        if (session?.user && process.env.JWT_SECRET) {
          const encoder = new TextEncoder();
          const { payload } = await jwtVerify(
            token,
            encoder.encode(process.env.JWT_SECRET)
          );
          const tokenEmail = payload.email;
          if (tokenEmail === session.user.email) {
            dispatch(userVerifyied());
          }
        }
        setSuccessMessage("Your email has been successfully verified.");
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          setErrorMessage(
            error.response?.data?.error || "Something went wrong."
          );
        } else {
          setErrorMessage("An unexpected error occurred.");
        }
      } finally {
        setLoadingMessage("");
      }
    }
  };

  useEffect(() => {
    if (successMessage) {
      const interval = setInterval(() => {
        setRedirectCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            router.push("/login");
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [successMessage, router]);

  async function resendVerificationEmail() {
    if (buttonText === "Sent") {
      return;
    }
    setErrorMessage("");
    setSuccessMessage("");
    setResendSucessMessage("");
    setResendErrorMessage("");
    setButtonText("Sending...");
    setButtonDisable(true);
    try {
      await axios.post("/api/auth/resendverificationemail");
      setResendSucessMessage(
        "A new verification email has been sent. Please check your inbox."
      );
      setButtonText("Sent");
      setButtonDisable(false);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setResendErrorMessage(
          error.response?.data?.error || "Something went wrong."
        );
      } else {
        setResendErrorMessage("An unexpected error occurred.");
      }
      setButtonText("Resend Verification Email");
      setButtonDisable(false);
    }
  }
  useEffect(() => {
    if (session === undefined) {
      return;
    }
    if (session?.user && data && data.verified === true) {
      setLoadingMessage("Redirecting to your dashboard...");
      router.push("/dashboard");
      return;
    }
    if (!session?.user && !token) {
      setLoadingMessage("Redirecting to login page...");
      router.push("/login");
      return;
    }
    if (token) {
      verifyEmail();
      setLoadingMessage("Verifying your email...");
      return;
    }
    if (session?.user && data?.verified === false) {
      setShowPage(true);
      return;
    }
    if (!token && session === null) {
      router.push("/login");
      setLoadingMessage("Redirecting to login page...");
      return;
    }
  }, [session, data, router, token]);

  if (loadingMessage) {
    return <LoaderWithMessage message={loadingMessage} />;
  }

  if (errorMessage) {
    return (
      <div className="max-w-lg mx-auto my-20">
        <div className="space-y-6 my-10 w-full">
          <div className="text-center">
            <Image
              src="/email-icon.svg"
              width={150}
              height={150}
              alt="Email Icon"
              className="mx-auto mb-5"
            />
            <h2 className="text-2xl font-semibold mb-2 text-primary-dark">
              Email Verification Failed
            </h2>
            <p className="text-primary-word/80 mb-4">
              There was an error verifying your email address. Please check the
              email address you used to sign up and try again. If the problem
              persists, please contact support.
            </p>
          </div>
          <div className="flex space-x-4">
            <FormError>{errorMessage}</FormError>
          </div>
          <p className="text-center text-sm text-gray-600">
            Need assistance?{" "}
            <a
              href="/contact-us"
              className="text-primary hover:text-primary-light"
            >
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    );
  }

  if (successMessage) {
    return (
      <motion.div
        className="max-w-lg mx-auto my-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-6 my-10 w-full">
          <div className="text-center">
            <Image
              src="/email-icon.svg"
              width={150}
              height={150}
              alt="Email Icon"
              className="mx-auto mb-5"
            />
            <h2 className="text-2xl font-semibold mb-2 text-primary-dark">
              Email Verified Successfully
            </h2>
            <p className="text-primary-word/80 mb-4">
              Your email address has been successfully verified. You can now log
              in to your Notivo account.
            </p>
            <div className="text-lg font-medium text-primary mt-5">
              Redirecting in {redirectCountdown}...
            </div>
          </div>
          <div className="flex space-x-4">
            <FormSuccess>{successMessage}</FormSuccess>
          </div>
        </div>
      </motion.div>
    );
  }

  if (showPage) {
    return (
      <div className="max-w-lg mx-auto my-20">
        <div className="space-y-6 my-10 w-full">
          <div className="text-center">
            <Image
              src="/email-icon.svg"
              width={150}
              height={150}
              alt="Email Icon"
              className="mx-auto mb-5"
            />
            <h2 className="text-2xl font-semibold mb-2 text-primary-dark">
              Verify Your Email Address
            </h2>
            <p className="text-primary-word/80 mb-4">
              We&apos;ve sent a verification email to your inbox. To complete
              your registration and secure your account, follow these steps:
            </p>
            <ol className="text-left text-primary-word space-y-2 my-10">
              <li>1. Open your email inbox.</li>
              <li>
                2. Look for an email from{" "}
                <span className="font-bold">NOTIVO</span>.
              </li>
              <li>3. Click on the verification link in the email.</li>
            </ol>
            <p className="text-primary-word/80">
              If you don’t see the email, please check your spam folder.
            </p>
          </div>
          {resendErrorMessage && <FormError>{resendErrorMessage}</FormError>}
          {resendSucessMessage && (
            <FormSuccess>{resendSucessMessage}</FormSuccess>
          )}
          <div className="flex space-x-4">
            <SecondaryButton
              loading={buttonDisable}
              isDisabled={buttonDisable}
              onClick={resendVerificationEmail}
            >
              {buttonText}
            </SecondaryButton>
          </div>
          <p className="text-center text-sm text-gray-600">
            Need assistance?{" "}
            <a
              href="/contact-us"
              className="text-primary hover:text-primary-light"
            >
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center flex-col gap-7 justify-center min-h-screen">
      <Loader />
    </div>
  );
}

function LoaderWithMessage({ message }: { message: string }) {
  return (
    <div className="flex items-center flex-col gap-7 justify-center min-h-screen">
      <Loader />
      <p className="text-xl font-semibold text-primary-dark">{message}</p>
    </div>
  );
}
