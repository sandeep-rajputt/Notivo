"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-2xl font-bold text-primary-dark mb-4">
        Something went wrong!
      </h2>
      <p className="text-primary-word mb-6 text-center max-w-md">
        We apologize for the inconvenience. Please try again.
      </p>
      <button
        onClick={reset}
        className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-light transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
