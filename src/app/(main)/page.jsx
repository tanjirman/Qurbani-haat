import FeaturedAnimals from "@/components/homePage/FeatureAnimal";
import Hero from "@/components/homePage/hero";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    {/* <Navbar/> */}
    <Hero/>
    <FeaturedAnimals/>
    </>
  );
}
