import { getBillboards } from "@/actions/getBillboards";
import { getCategories } from "@/actions/getCategories";
import { Featured } from "@/components/featured";

import { Hero } from "@/components/hero";

import { Services } from "@/components/services";
import { Showcase } from "@/components/showcase";
import {
  brandedTshirts,
  brandedHatsToppers,
  brandedHoodies,
} from "@/data/products";

export default async function Home() {
 

  return (
    <>
      <Hero />
      <Services />
      <Featured />
      <Showcase
        data={brandedTshirts}
        header="Cool dope T-shirts"
        sub="Get some cool t-shirts"
      />
      <Showcase
        data={brandedHatsToppers}
        header={"Fry toppers"}
        sub="Get some hot toppers that make you stand out of the crowd"
      />
      <Showcase
        data={brandedHoodies}
        header="Branded hot hoodies"
        sub="Get branded hoodies with your custom messages.."
      />
    </>
  );
}
