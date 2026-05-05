"use client";
import Link from "next/link";
import React, { useState } from "react";
import animals from "../../../../public/data/animals.json";
import Image from "next/image";

const AnimalPage = () => {
  const [sortOrder, setSortOrder] = useState("default");

  // sorting by price
  const sortedAnimals = [...animals].sort((a, b) => {
    if (sortOrder === "asc") return a.price - b.price;
    if (sortOrder === "desc") return b.price - a.price;
    return 0; 
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header & Sort Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              All Available Livestock
            </h1>
            <p className="text-gray-600 mt-2">
              Browse through our complete collection of 11+ premium animals.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <label className="font-medium text-gray-700">Sort by Price:</label>
            <select
              className="border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-green-500 outline-none"
              onChange={(e) => setSortOrder(e.target.value)}
              value={sortOrder}
            >
              <option value="default">Default</option>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </div>
        </div>

        {/* Animals Grid - Shows all 12 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedAnimals.map((animal) => (
            <div
              key={animal.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col group hover:shadow-md transition-shadow"
            >
              {/* Image with Category Badge */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={animal.image}
                  alt={animal.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute top-3 left-3 bg-green-700 text-white text-xs font-bold px-3 py-1 rounded-md">
                  {animal.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 grow">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-bold text-gray-900">
                    {animal.name}
                  </h2>
                  <span className="text-green-700 font-bold text-lg">
                    ৳{animal.price.toLocaleString()}
                  </span>
                </div>

                <p className="text-gray-500 text-sm mb-4">
                  <span className="font-semibold">{animal.breed}</span> •{" "}
                  {animal.location}
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900">Weight:</span>{" "}
                    {animal.weight}kg
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900">Age:</span>{" "}
                    {animal.age} yrs
                  </div>
                </div>
              </div>

              {/* Footer Button - Navigation to Details */}
              <div className="p-6 pt-0">
                <Link
                  href={`/animalDetails/${animal.id}`}
                  className="block w-full text-center bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  See Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimalPage;