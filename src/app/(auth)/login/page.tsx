import Image from "next/image";
import LoginForm from "@/app/(auth)/login/components/LoginForm";

export default function Page() {
  return (
    <main className="pt-28 text-primary-word flex h-full items-center justify-center w-full">
      <div className="grid grid-cols-[1fr_1fr] rounded-2xl overflow-hidden shadow-md">
        <div className="flex w-full items-center justify-center bg-white  ">
          <LoginForm />
        </div>

        {/* Right Section */}
        <div className=" w-full bg-primary-background block">
          <div className="relative flex h-full items-center justify-center">
            <Image
              src="/Login-Illustration.svg"
              alt="Login Illustration"
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
