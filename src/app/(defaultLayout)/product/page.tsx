"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ChevronRight, Filter, SlidersHorizontal, SearchX } from "lucide-react";
import { products, Product } from "@/src/data/mockProducts";
import { ProductCard } from "@/components/shared/ProductCard";

function ProductCatalog() {
  const searchParams = useSearchParams();
  const categoryQuery = searchParams.get("category");
  const searchQuery = searchParams.get("search");

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [activeCategory, setActiveCategory] = useState<string>(categoryQuery || "all");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    let result = products;

    if (activeCategory !== "all") {
      result = result.filter(p => p.type === activeCategory);
    }

    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(lowerQuery) || 
        p.category.toLowerCase().includes(lowerQuery)
      );
    }

    setFilteredProducts(result);
  }, [activeCategory, searchQuery]);

  const categories = [
    { id: "all", label: "All Products" },
    { id: "fragrance", label: "Luxury Fragrances" },
    { id: "body-care", label: "Body & Personal Care" },
    { id: "home-care", label: "Home Care Essentials" },
  ];

  return (
    <main className="bg-[#fffdf9] min-h-screen pb-20 pt-8">
      {/* Header & Breadcrumbs */}
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 mb-8">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500 mb-6">
          <Link href="/" className="hover:text-pink-700 transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-stone-900">Products</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200 pb-8">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-stone-900 mb-3">
              {searchQuery ? `Search: "${searchQuery}"` : "Our Collections"}
            </h1>
            <p className="text-stone-600 text-base max-w-2xl">
              Discover our meticulously crafted formulations, designed to elevate your everyday routines with unparalleled quality and sensory delight.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-stone-500">
              Showing <span className="text-stone-900">{filteredProducts.length}</span> results
            </span>
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-xl border border-stone-200 text-sm font-bold uppercase tracking-wider text-stone-700"
            >
              <Filter size={16} /> Filters
            </button>
          </div>
        </div>
      </div>

      <section className="max-w-[1280px] mx-auto px-5 sm:px-8 flex flex-col lg:flex-row gap-10">
        
        {/* Sidebar Filters */}
        <aside className={`lg:w-64 shrink-0 transition-all ${isSidebarOpen ? "block" : "hidden lg:block"}`}>
          <div className="sticky top-24 bg-white rounded-3xl border border-stone-200 p-6 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-stone-900 mb-6">
              <SlidersHorizontal size={18} className="text-pink-600" />
              Categories
            </div>

            <div className="flex flex-col gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? "bg-rose-50 text-rose-700 border border-rose-200/50"
                      : "text-stone-600 hover:bg-stone-50 hover:text-stone-900 border border-transparent"
                  }`}
                >
                  {cat.label}
                  {activeCategory === cat.id && <ChevronRight size={14} />}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-32 bg-white rounded-3xl border border-stone-200 shadow-sm text-center px-4">
              <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center text-stone-400 mb-6">
                <SearchX size={32} />
              </div>
              <h2 className="font-serif text-2xl font-medium text-stone-900 mb-3">No products found</h2>
              <p className="text-stone-500 mb-8 max-w-md">
                We couldn't find any formulations matching your current filters or search query. Try adjusting your criteria.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("all");
                  // Optional: clear search query from URL, but requiring router push.
                }}
                className="px-8 py-3 rounded-xl bg-stone-900 hover:bg-pink-800 text-white text-sm font-extrabold uppercase tracking-wider transition-colors shadow-lg cursor-pointer"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

      </section>
    </main>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ProductCatalog />
    </Suspense>
  );
}
