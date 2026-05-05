"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import animals from "../../../../../public/data/animals.json";
import toast from "react-hot-toast";
import Image from "next/image";

const AnimalDetails = ({ params }) => {
  const router = useRouter();

  const resolvedParams = React.use(params);
  const animalId = parseInt(resolvedParams.id);

  const animal = animals.find((item) => item.id === animalId);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  if (!animal) {
    return (
      <h2 className="text-center mt-10 text-2xl font-bold">
        Animal not found
      </h2>
    );
  }

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleBooking = (e) => {
    e.preventDefault();

    const bookingData = {
      id: crypto.randomUUID(),
      ...animal,
      customer: formData,
      bookedAt: new Date().toISOString(),
    };

    const existing =
      JSON.parse(localStorage.getItem("bookings")) || [];

    localStorage.setItem(
      "bookings",
      JSON.stringify([...existing, bookingData])
    );

    toast.success("Booking successful! Redirecting... 🐄");

    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
    });

    setTimeout(() => {
      router.push("/myProfile");
    }, 1200);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8 bg-white shadow-xl rounded-2xl p-8">

        {/* Image */}
        <Image
          src={animal.image}
          alt={animal.name}
          width={500}
          height={400}
          className="rounded-xl object-cover"
        />

        {/* Details */}
        <div>
          <h1 className="text-3xl font-bold">{animal.name}</h1>
          <p className="text-gray-500 mt-2">{animal.description}</p>

          <h2 className="text-2xl font-bold text-green-600 mt-4">
            ৳ {animal.price.toLocaleString()}
          </h2>

          {/* Form */}
          <form onSubmit={handleBooking} className="mt-5 space-y-3">
            <input
              name="name"
              required
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-100 rounded"
            />

            <input
              name="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-100 rounded"
            />

            <input
              name="phone"
              required
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-100 rounded"
            />

            <textarea
              name="address"
              required
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-100 rounded"
            />

            <button className="w-full bg-green-600 text-white py-2 rounded">
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetails;