"use client";

import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { products } from "@/src/data/mockProducts";
import { ProductCard } from "@/components/shared/ProductCard";
import { HeartCrack, ChevronRight } from "lucide-react";

export default function WishlistPage() {
  const wishlistIds = useSelector((state: RootState) => state.wishlist.items);
  const bookmarkedProducts = products.filter((p) => wishlistIds.includes(p.id));

  return (
    <main className="bg-[#fffdf9] min-h-screen pb-20 pt-8">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 mb-12">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500 mb-6">
          <Link href="/" className="hover:text-pink-700 transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-stone-900">Wishlist</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-stone-900 mb-4">
          Your Saved Items
        </h1>
        <p className="text-stone-600 text-base">
          {bookmarkedProducts.length} {bookmarkedProducts.length === 1 ? "formulation" : "formulations"} saved for later.
        </p>
      </div>

      <section className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {bookmarkedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bookmarkedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-stone-200 shadow-sm text-center px-4">
            <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center text-rose-300 mb-6">
              <HeartCrack size={32} />
            </div>
            <h2 className="font-serif text-2xl font-medium text-stone-900 mb-3">Your wishlist is empty</h2>
            <p className="text-stone-500 mb-8 max-w-md">
              You haven't saved any formulations yet. Explore our collections and find your new signature scent or daily care essential.
            </p>
            <Link
              href="/#products"
              className="px-8 py-4 rounded-xl bg-stone-900 hover:bg-pink-800 text-white text-sm font-extrabold uppercase tracking-wider transition-colors shadow-lg"
            >
              Explore Collections
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}
