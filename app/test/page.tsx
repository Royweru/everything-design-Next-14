

import { getProducts } from "@/actions/getProducts";

import React from "react";
import { ProductTestCard } from "./product-test-card";

const TestPage = async () => {
  const products = await getProducts();
  const productsData = products.data;

  return (
    <div className=" w-full h-full p-20 grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 gap-4">
      {productsData.map((item) => {
        const prod = item.attributes;
    
        return (
         <ProductTestCard 
         key={item.id}
          prod={prod}
          item={item}
         />
        );
      })}
    </div>
  );
};

export default TestPage;
