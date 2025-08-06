"use client";
import PasswordInput from "@/components/inputs/PasswordInput";
import PrimaryIconInput from "@/components/inputs/PrimaryIconInput";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { useState } from "react";
import { FiUser, FiMail } from "react-icons/fi";
import AuthButton from "@/components/buttons/AuthButton";
import Link from "next/link";

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

function SignUpForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(label: string, value: string) {
    console.log(label + " : " + value);
    setFormData((prev) => {
      return { ...prev, [label]: value };
    });
  }
  return (
    <div className="w-full max-w-lg space-y-8 py-10 base:px-10 px-8 mx-auto">
      <div>
        <div className="space-y-2 mb-9">
          <h1 className="text-4xl font-bold text-primary">Sign up</h1>
          <p className="text-gray-600">Create your account to get started</p>
        </div>
        <form className="space-y-6">
          <PrimaryIconInput
            onChange={(value) => handleChange("name", value as string)}
            value={formData.name}
            placeholder="Enter your Name"
            required={true}
            label="Name"
            title="name"
            icon={FiUser}
            type="text"
          />
          {/* email */}
          <PrimaryIconInput
            onChange={(value) => handleChange("email", value as string)}
            placeholder="Enter your email"
            required={true}
            label="Email"
            title="email"
            icon={FiMail}
            type="email"
            value={formData.email}
          />
          <PasswordInput
            value={formData.password}
            onChange={(value) => handleChange("password", value as string)}
            required={true}
            label="Password"
            title="password"
            placeholder="Enter your password"
          />
          <PasswordInput
            value={formData.confirmPassword}
            onChange={(value) =>
              handleChange("confirmPassword", value as string)
            }
            required={true}
            label="Confirm Password"
            title="confirmPassword"
            placeholder="Confirm your password"
          />
          <PrimaryButton type="submit" className="mt-5">
            Continue
          </PrimaryButton>
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
            isDisabled={false}
            loading={false}
            onClick={() => {}}
            img="/google.svg"
          >
            Continue with Google
          </AuthButton>
          <AuthButton
            isDisabled={false}
            loading={false}
            onClick={() => {}}
            img="/github.svg"
          >
            Continue with Github
          </AuthButton>
        </div>
        <div className="text-center text-sm mt-5">
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:text-primary-light">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
