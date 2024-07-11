"use client";

import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="w-64 text-start">
        <h1 className="text-xl mb-3">500 Internal Server Error</h1>
        <Link href="/" className="text-blue-400 hover:underline">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
