"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import animals from "../../../../../public/data/animals.json";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";

const AnimalDetails = ({ params }) => {
  const router = useRouter();

  // ✅ unwrap params (Next.js 16)
  const resolvedParams = React.use(params);
  const animalId = parseInt(resolvedParams.id);

  // ✅ session
  const { data: session, isPending } = authClient.useSession();

  // ✅ ALL hooks must be here (TOP)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  // 🔐 redirect if not logged in
  useEffect(() => {
    if (!isPending && !session?.user) {
      toast.error("Please login/register to view details");

      setTimeout(() => {
        router.push("/register");
      }, 1200);
    }
  }, [session, isPending, router]);

  // ⏳ loader
  if (isPending) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin h-12 w-12 border-4 border-green-600 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  // ⛔ block page if not logged in
  if (!session?.user) {
    return null;
  }

  // ✅ get animal
  const animal = animals.find((item) => item.id === animalId);

  if (!animal) {
    return (
      <h2 className="text-center mt-10 font-black text-2xl">
        Animal not found
      </h2>
    );
  }

  // ✅ handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBooking = (e) => {
    e.preventDefault();

    toast.success(`Booking for ${animal.name} sent!`, {
      icon: "🐄",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 min-h-screen">
      <Toaster position="top-center" />

      <div className="grid md:grid-cols-2 gap-8 bg-white shadow-2xl rounded-3xl p-8">

        {/* Left */}
        <div>
          <Image
            src={animal.image}
            alt={animal.name}
            width={500}
            height={400}
            className="w-full h-112.5 object-cover rounded-xl"
          />
        </div>

        {/* Right */}
        <div>
          <h1 className="text-4xl font-black mb-3">{animal.name}</h1>

          <p className="text-gray-500 mb-6">{animal.description}</p>

          <div className="grid grid-cols-2 gap-4 text-sm mb-6">
            <p><strong>Breed:</strong> {animal.breed}</p>
            <p><strong>Weight:</strong> {animal.weight} kg</p>
            <p><strong>Age:</strong> {animal.age} yrs</p>
            <p><strong>Type:</strong> {animal.type}</p>
          </div>

          <h2 className="text-3xl font-black text-green-600 mb-6">
            ৳ {animal.price.toLocaleString()}
          </h2>

          {/* Form */}
          <form onSubmit={handleBooking} className="space-y-3">
            <input
              required
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full bg-gray-100 px-4 py-2 rounded"
            />

            <input
              required
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-gray-100 px-4 py-2 rounded"
            />

            <input
              required
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full bg-gray-100 px-4 py-2 rounded"
            />

            <textarea
              required
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full bg-gray-100 px-4 py-2 rounded"
            />

            <button className="w-full bg-green-600 text-white py-3 rounded">
              Book Now
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default AnimalDetails;