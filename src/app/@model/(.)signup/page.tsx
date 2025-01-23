"use client";

import SignUpForm from "@components/forms/SignupForm";
import { useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { RootState } from "@store/index";
import { useSelector } from "react-redux";

export default function Page() {
  const elem = useRef(null);
  const router = useRouter();
  const pathname = usePathname();
  const { data } = useSelector((state: RootState) => state.userData);

  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (e.target === elem.current) {
      router.push("/");
    }
  }

  if (pathname !== "/signup") {
    return null;
  }

  if (data?.email) {
    router.push("/dashboard");
    return null;
  }

  return (
    <div
      onClick={(e) => {
        handleClick(e);
      }}
      ref={elem}
      className="h-screen w-screen fixed top-0 left-0 z-[9999] bg-black/80 overflow-y-scroll base:px-10 px-5 py-20"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-xl bg-white rounded-xl mx-auto"
      >
        <SignUpForm />
      </div>
    </div>
  );
}
