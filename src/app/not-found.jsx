"use client";

import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white px-4">
      
      <div className="text-center bg-white shadow-2xl rounded-3xl p-10 max-w-md w-full animate__animated animate__fadeIn">

        {/* Icon */}
        <div className="flex justify-center mb-5">
          <FaExclamationTriangle className="text-6xl text-red-500" />
        </div>

        {/* Title */}
        <h1 className="text-5xl font-extrabold text-gray-800 mb-3">
          404
        </h1>

        <h2 className="text-xl font-semibold mb-2">
          Page Not Found
        </h2>

        <p className="text-gray-500 mb-6">
          Oops! The page you are looking for does not exist or has been moved.
        </p>

        {/* Button */}
        <Link href="/">
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
            ⬅ Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
}