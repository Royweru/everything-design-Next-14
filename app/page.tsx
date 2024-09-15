import { Featured } from "@/components/featured";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/nav";
import { SectionHeader } from "@/components/section-header";
import { Services } from "@/components/services";
import { Showcase } from "@/components/showcase";
import { brandedTshirts } from "@/data/products";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Featured />
      <Showcase data={brandedTshirts} />
    </>
  );
}
