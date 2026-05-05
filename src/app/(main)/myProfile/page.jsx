"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaBoxOpen } from "react-icons/fa";

export default function MyProfile() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  const user = session?.user;

  const [bookings, setBookings] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("bookings")) || [];
    }
    return [];
  });

  useEffect(() => {
    if (!isPending && !user) {
      router.push("/login");
    }
  }, [isPending, user, router]);

  const handleCancel = (id) => {
    const updated = bookings.filter((item) => item.id !== id);

    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));

    setTimeout(() => {
    toast.success("Booking cancelled ❌");
  }, 1000);
  };

  if (isPending) {
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">

      {/* Profile */}
      <div className="bg-white shadow-xl rounded-2xl p-8 text-center">
        <Image
          src={user.image}
          alt="user"
          width={100}
          height={100}
          className="rounded-full mx-auto"
        />

        <h2 className="text-2xl font-bold mt-3">{user.name}</h2>
        <p className="text-gray-500">{user.email}</p>

         <Link href="/myProfile/update">
    <button className="mt-5 bg-slate-800 text-white px-6 py-2 rounded hover:bg-blue-700">
      Update Profile
    </button>
  </Link>
      </div>

      {/* Bookings */}
      <div>
        <h2 className="text-2xl font-bold mb-4">My Bookings</h2>

        {bookings.length === 0 ? (
          <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-2xl p-10 text-center">

            <FaBoxOpen className="text-6xl text-gray-400 mb-4" />

            <h3 className="text-xl font-semibold">
              No Bookings Yet
            </h3>

            <p className="text-gray-500 mb-4">
              Start booking your favorite animals now
            </p>

            <Link href="/animals">
              <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
                Browse Animals
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-5">
            {bookings.map((item) => (
              <div
                key={item.id}
                className="border rounded-xl p-4 shadow bg-white"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={200}
                  className="rounded"
                />

                <h3 className="font-bold mt-2">{item.name}</h3>
                <p className="text-green-600 font-bold">
                  ৳ {item.price}
                </p>

                <button
                  onClick={() => handleCancel(item.id)}
                  className="mt-3 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
                >
                  Cancel Booking
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}