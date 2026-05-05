import Image from "next/image";
import Link from "next/link";
import banner from "@/assets/banner.jpg"

const Hero = () => {
  return (
    <section className="h-[90vh]  relative bg-gray-900 text-white">
      {/* 1. Background Image Section */}
      <div className="absolute inset-0 z-0">
        <Image src={banner}
         alt="Banner image" 
        fill 
    className="object-cover opacity-50"
         />
        
      </div>

      {/* 2. Content Section over the background */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[70vh] text-center">
        {/* Pre-title/Badge (Optional, adds unique flair) */}
        <span className="inline-flex items-center rounded-full bg-green-100 px-4 py-1.5 text-xs font-semibold text-green-700 mt-8 mb-8">
          Eid-ul-Adha Special
        </span>

        {/* The Main Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl">
          Your Trusted <span className="text-green-400">Digital Hat</span> for
          Healthy Qurbani Animals
        </h1>

        {/* The Description */}
        <p className="mt-6 text-xl md:text-2xl text-gray-200 max-w-3xl font-light">
          Skip the hassle. Explore a wide selection of verified cows and goats
          from across the country. Book your perfect animal with confidence.
        </p>

        {/* The Browse Button */}
        <div className="mt-15">
          <Link
            href="/animals"
            className="inline-block rounded-xl bg-green-600 px-10 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-green-700 hover:shadow-green-900/50 hover:scale-105 active:scale-95"
          >
            Browse Livestock
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;