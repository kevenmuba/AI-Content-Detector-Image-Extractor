// src/app/error.tsx
"use client";

import { useEffect, useState } from "react";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  const [hasError, setHasError] = useState(true);

  useEffect(() => {
    console.error("Global error caught:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 p-4">
      <h1 className="text-2xl font-bold text-red-700 mb-2">Something went wrong!</h1>
      <p className="text-red-600 mb-4">{error.message}</p>
      <button
        onClick={() => {
          setHasError(false);
          reset(); // Reset Next.js error boundary
        }}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
      >
        Try Again
      </button>
    </div>
  );
}
