"use client";

import Image from "next/image";
import SignUpForm from "@components/forms/SignupForm";

export default function Page() {
  return (
    <main className="lg:py-28 py-12 text-primary-word">
      <div className="grid xl:grid-cols-[1fr_1fr] grid-cols-[1fr] bg-white rounded-2xl overflow-hidden shadow-md">
        <div className="flex w-full items-center justify-center ">
          <SignUpForm />
        </div>

        {/* Right Section */}
        <div className="hidden w-full bg-primary-background xl:block">
          <div className="relative flex h-full items-center justify-center">
            <Image
              src="/Analytics Illustration.svg"
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
