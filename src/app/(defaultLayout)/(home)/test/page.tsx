"use client";

import { ProductCard } from "@/components/shared/ProductCard";
import { products } from "@/src/data/mockProducts";

const Home: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 bg-[#fffdf9] min-h-screen">
      {products.slice(0, 3).map((product) => (
        <div key={product.id} className="w-[300px]">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default Home;
