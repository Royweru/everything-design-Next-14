import { Hero } from "@/components/hero";
import { Navbar } from "@/components/nav";
import { Services } from "@/components/services";
import { Showcase } from "@/components/showcase";
import { brandedTshirts } from "@/data/products";

export default function Home() {
  
  return (
    <>
    <Navbar />
    <Hero />
    <Services />
    <Showcase data={brandedTshirts} />
    </>
  );
}
