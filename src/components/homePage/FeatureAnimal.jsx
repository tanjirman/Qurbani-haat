import Link from "next/link";
import animals from "../../../public/data/animals.json";
import Image from "next/image";

const FeaturedAnimals = () => {
  const featuredItems = animals.slice(0, 4);

  return (
    <section className="py-20 bg-slate-50"> 
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
            Premium <span className="text-green-600">Livestock</span> Selection
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredItems.map((animal) => (
            <div
              key={animal.id}
              className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col border border-slate-100"
            >
              {/* Image Container with Gradient Overlay */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={animal.image}
                  alt={animal.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Subtle Gradient for premium feel */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-green-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                  {animal.category}
                </span>
              </div>

              {/* Content Area */}
              <div className="p-6 grow flex flex-col">
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-green-700 transition-colors">
                    {animal.name}
                  </h3>
                  <p className="text-slate-500 text-sm font-medium flex items-center gap-1">
                    <span className="text-green-600">●</span> {animal.breed}
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Price</p>
                        <p className="text-2xl font-black text-slate-900">
                          ৳{animal.price.toLocaleString()}
                        </p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-slate-400 font-medium">{animal.location}</p>
                    </div>
                  </div>

                  <div className="flex gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-6">
                    <span className="bg-slate-100 px-2 py-1 rounded">{animal.weight} KG</span>
                    <span className="bg-slate-100 px-2 py-1 rounded">{animal.age} YRS</span>
                  </div>

                  <Link
                    href={`/animals/${animal.id}`}
                    className="flex items-center justify-center w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-green-600 transform transition-all active:scale-95 shadow-lg shadow-slate-200 hover:shadow-green-200"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/animals"
            className="group inline-flex items-center gap-2 bg-white border-2 border-slate-900 text-slate-900 px-10 py-3 rounded-full font-bold hover:bg-slate-900 hover:text-white transition-all shadow-md"
          >
            Explore Full Collection
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAnimals;