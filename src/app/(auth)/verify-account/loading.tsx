"use client";

import Loader from "@components/ui/Loader";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Loader />
    </div>
  );
}
