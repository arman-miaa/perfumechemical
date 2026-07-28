/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ChevronRight, Filter, SlidersHorizontal, SearchX, Sparkles, Droplets, Home, Flame, ChevronDown, Check, ChevronLeft, Shirt } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/src/data/mockProducts";
import { ProductCard } from "@/components/shared/ProductCard";

function ProductCatalog() {
  const searchParams = useSearchParams();
  const categoryQuery = searchParams.get("category");
  const searchQuery = searchParams.get("search");

  const [activeCategory, setActiveCategory] = useState<string>(categoryQuery || "all");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [sortBy, setSortBy] = useState("recommended");
  const [priceRange, setPriceRange] = useState<string>("all");
  const [customMinPrice, setCustomMinPrice] = useState<string>("");
  const [customMaxPrice, setCustomMaxPrice] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 9;

  useEffect(() => {
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeCategory, searchQuery, priceRange, customMinPrice, customMaxPrice, sortBy]);

  const filteredProducts = React.useMemo(() => {
    let result = [...products];

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

    if (priceRange === "under_1000") {
      result = result.filter(p => p.priceRaw < 1000);
    } else if (priceRange === "1000_2000") {
      result = result.filter(p => p.priceRaw >= 1000 && p.priceRaw <= 2000);
    } else if (priceRange === "2000_5000") {
      result = result.filter(p => p.priceRaw >= 2000 && p.priceRaw <= 5000);
    } else if (priceRange === "above_5000") {
      result = result.filter(p => p.priceRaw > 5000);
    } else if (priceRange === "custom") {
      const min = customMinPrice ? parseFloat(customMinPrice) : 0;
      const max = customMaxPrice ? parseFloat(customMaxPrice) : Infinity;
      result = result.filter(p => p.priceRaw >= min && p.priceRaw <= max);
    }

    if (sortBy === "price_low") {
      result.sort((a, b) => a.priceRaw - b.priceRaw);
    } else if (sortBy === "price_high") {
      result.sort((a, b) => b.priceRaw - a.priceRaw);
    } else if (sortBy === "newest") {
      result.reverse();
    }

    return result;
  }, [activeCategory, searchQuery, priceRange, customMinPrice, customMaxPrice, sortBy]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const categories = [
    { id: "all", label: "All Products", icon: Sparkles },
    { id: "personal-care", label: "Personal Care", icon: Droplets },
    { id: "home-cleaning", label: "Home Cleaning", icon: Home },
    { id: "laundry-care", label: "Laundry & Fabric Care", icon: Shirt },
    { id: "beauty-fragrance", label: "Beauty & Fragrance", icon: Flame },
  ];

  return (
    <main className="bg-[#fbf9f6] min-h-screen pb-24">
      {/* Modern Header Section */}
      <div className="bg-linear-to-b from-stone-100 to-[#fbf9f6] pt-12 pb-10 border-b border-stone-200/80 mb-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-stone-400 mb-6">
            <Link href="/" className="hover:text-pink-700 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-stone-900">Collections</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-[10px] font-bold uppercase tracking-wider mb-4 border border-pink-200">
                <Sparkles size={12} /> Shop Online
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-stone-900 mb-4">
                {searchQuery ? `Results for "${searchQuery}"` : "Our Collections"}
              </h1>
              <p className="text-stone-500 text-base max-w-2xl leading-relaxed">
                Explore our ethically sourced and meticulously crafted formulations, designed to elevate your everyday routines with unparalleled quality.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col lg:flex-row gap-10">
        
        {/* Modern Sidebar Filters */}
        <aside className={`lg:w-72 shrink-0 transition-all ${isSidebarOpen ? "block" : "hidden lg:block"}`}>
          <div className="sticky top-28 self-start space-y-6 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2" style={{ scrollbarWidth: 'thin' }}>
            {/* Categories Card */}
            <div className="bg-white rounded-4xl border border-stone-200/80 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-stone-900 mb-6">
                <SlidersHorizontal size={16} className="text-pink-600" />
                Category
              </div>

              <div className="flex flex-col gap-1.5">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`group flex items-center justify-between px-4 py-3.5 rounded-2xl text-sm font-bold transition-all cursor-pointer ${
                        activeCategory === cat.id
                          ? "bg-stone-900 text-white shadow-md shadow-stone-900/20"
                          : "bg-transparent text-stone-600 hover:bg-stone-100 hover:text-stone-900"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={16} className={activeCategory === cat.id ? "text-pink-400" : "text-stone-400 group-hover:text-stone-700 transition-colors"} />
                        {cat.label}
                      </div>
                      {activeCategory === cat.id && <ChevronRight size={14} className="text-pink-400" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Price Filter */}
            <div className="bg-white rounded-4xl border border-stone-200/80 p-6 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-stone-900 mb-6">
                Price Range
              </div>
              <div className="space-y-4 mb-6">
                {[
                  { id: 'all', label: 'All Prices' },
                  { id: 'under_1000', label: 'Under ৳1,000' },
                  { id: '1000_2000', label: '৳1,000 - ৳2,000' },
                  { id: '2000_5000', label: '৳2,000 - ৳5,000' },
                  { id: 'above_5000', label: 'Above ৳5,000' },
                ].map((price) => (
                  <label key={price.id} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="radio"
                      name="priceRange"
                      className="hidden"
                      checked={priceRange === price.id}
                      onChange={() => setPriceRange(price.id)}
                    />
                    <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors ${priceRange === price.id ? 'border-pink-500 bg-pink-500' : 'border-stone-300 group-hover:border-pink-400'}`}>
                      {priceRange === price.id && <Check size={12} className="text-white" />}
                    </div>
                    <span className={`text-sm font-medium transition-colors ${priceRange === price.id ? 'text-stone-900 font-bold' : 'text-stone-600 group-hover:text-stone-900'}`}>
                      {price.label}
                    </span>
                  </label>
                ))}
              </div>
              
              {/* Custom Price Range */}
              <div className="pt-4 border-t border-stone-100">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-stone-400 block mb-3">Custom Range</span>
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 text-sm">৳</span>
                    <input 
                      type="number"
                      placeholder="Min"
                      value={customMinPrice}
                      onChange={(e) => { setCustomMinPrice(e.target.value); setPriceRange("custom"); }}
                      className="w-full pl-7 pr-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-200 transition-colors"
                    />
                  </div>
                  <span className="text-stone-400">-</span>
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 text-sm">৳</span>
                    <input 
                      type="number"
                      placeholder="Max"
                      value={customMaxPrice}
                      onChange={(e) => { setCustomMaxPrice(e.target.value); setPriceRange("custom"); }}
                      className="w-full pl-7 pr-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-200 transition-colors"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid Area */}
        <div className="flex-1">
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 bg-white p-4 rounded-2xl border border-stone-200/80 shadow-sm">
            <span className="text-sm font-bold text-stone-500">
              Showing <span className="text-stone-900 font-extrabold">{filteredProducts.length}</span> curated results
            </span>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 text-xs font-extrabold uppercase tracking-wider text-stone-700 transition-colors"
              >
                <Filter size={14} /> Filter
              </button>

              <div className="relative flex-1 sm:flex-none">
                <button
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  onBlur={() => setTimeout(() => setIsSortOpen(false), 200)}
                  className="w-full sm:w-56 flex items-center justify-between bg-stone-50 hover:bg-stone-100 border border-stone-200 text-stone-700 text-xs font-extrabold uppercase tracking-wider rounded-xl py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-pink-200 transition-colors cursor-pointer"
                >
                  <span className="truncate">
                    {sortBy === "recommended" ? "Recommended" : 
                     sortBy === "newest" ? "Newest Arrivals" :
                     sortBy === "price_low" ? "Price: Low to High" : "Price: High to Low"}
                  </span>
                  <ChevronDown size={14} className={`text-stone-500 shrink-0 transition-transform ${isSortOpen ? "rotate-180" : ""}`} />
                </button>
                
                {isSortOpen && (
                  <div className="absolute z-50 top-full mt-2 w-full bg-white border border-stone-200 rounded-xl shadow-lg py-1.5 overflow-hidden flex flex-col">
                    {[
                      { id: "recommended", label: "Recommended" },
                      { id: "newest", label: "Newest Arrivals" },
                      { id: "price_low", label: "Price: Low to High" },
                      { id: "price_high", label: "Price: High to Low" },
                    ].map(option => (
                      <button
                        key={option.id}
                        onClick={() => { setSortBy(option.id); setIsSortOpen(false); }}
                        className={`text-left px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider transition-colors cursor-pointer ${sortBy === option.id ? 'bg-pink-50 text-pink-700' : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'}`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Grid */}
          {currentProducts.length > 0 ? (
            <>
              <AnimatePresence mode="wait">
                <motion.div 
                  key={`${currentPage}-${activeCategory}-${sortBy}-${priceRange}-${customMinPrice}-${customMaxPrice}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8"
                >
                  {currentProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-16 border-t border-stone-200/80 pt-8">
                  <button 
                    onClick={() => {
                      setCurrentPage(prev => Math.max(1, prev - 1));
                      window.scrollTo({ top: 400, behavior: 'smooth' });
                    }}
                    disabled={currentPage === 1}
                    className="w-10 h-10 flex items-center justify-center bg-white rounded-xl border border-stone-200 text-stone-600 hover:border-pink-300 hover:text-pink-700 hover:bg-pink-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => {
                        setCurrentPage(i + 1);
                        window.scrollTo({ top: 400, behavior: 'smooth' });
                      }}
                      className={`w-10 h-10 flex items-center justify-center rounded-xl text-sm font-bold transition-all cursor-pointer ${
                        currentPage === i + 1
                          ? "bg-pink-700 text-white shadow-md shadow-pink-700/20"
                          : "bg-white border border-stone-200 text-stone-600 hover:border-pink-300 hover:text-pink-700 hover:bg-pink-50"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}

                  <button 
                    onClick={() => {
                      setCurrentPage(prev => Math.min(totalPages, prev + 1));
                      window.scrollTo({ top: 400, behavior: 'smooth' });
                    }}
                    disabled={currentPage === totalPages}
                    className="w-10 h-10 flex items-center justify-center bg-white rounded-xl border border-stone-200 text-stone-600 hover:border-pink-300 hover:text-pink-700 hover:bg-pink-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-32 bg-white rounded-3xl border border-stone-200/80 shadow-sm text-center px-4">
              <div className="w-24 h-24 bg-stone-50 rounded-full flex items-center justify-center text-stone-300 mb-6 border border-stone-100">
                <SearchX size={40} />
              </div>
              <h2 className="font-serif text-3xl font-medium text-stone-900 mb-3">No formulations found</h2>
              <p className="text-stone-500 mb-8 max-w-md leading-relaxed">
                We couldn&ops;t find any products matching your current filters. Try exploring other categories or clearing your search.
              </p>
              <button
                onClick={() => setActiveCategory("all")}
                className="px-8 py-3.5 rounded-xl bg-stone-900 hover:bg-pink-800 text-white text-sm font-extrabold uppercase tracking-wider transition-colors shadow-lg shadow-stone-900/20 cursor-pointer"
              >
                Clear All Filters
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
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-serif text-2xl text-stone-400">Loading formulations...</div>}>
      <ProductCatalog />
    </Suspense>
  );
}
