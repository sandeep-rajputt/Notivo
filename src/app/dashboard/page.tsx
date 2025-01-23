"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Loader from "@components/ui/Loader";

export default function Page() {
  const { data: session, status } = useSession();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const getDashboardData = async () => {
      try {
        const res = await fetch("/api/dashboard");
        if (!res.ok) {
          throw new Error(`Error! status: ${res.status}`);
        }
        const data = await res.json();
        setEmail(data.email);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };
    getDashboardData();
  }, []);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader />
      </div>
    );
  }

  if (!session) {
    return <p>Access Denied</p>;
  }

  if (email) {
    return <p>email : {email}</p>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Loader />
    </div>
  );
}
