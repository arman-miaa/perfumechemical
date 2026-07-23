"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Sparkles,
  Star,
  ShoppingBag,
  Heart,
  ShieldCheck,
  Award,
  Truck,
  Leaf,
  RefreshCw,
  SlidersHorizontal,
  ChevronRight,
  Quote,
} from "lucide-react";
import { HeroCarousel } from "./hero-carousel";
import { SectionHeading } from "./section-heading";

const categoryCards = [
  {
    title: "Luxury Fragrances",
    description: "Formulated for lasting allure",
    image: "/images/perfume_hero.png",
    href: "/product?category=fragrance",
    tag: "Signature Line",
  },
  {
    title: "Personal & Body Care",
    description: "Nourishing daily skin rituals",
    image: "/images/body_care.png",
    href: "/product?category=body-care",
    tag: "Derm Tested",
  },
  {
    title: "Home Care Essentials",
    description: "Freshness for every corner",
    image: "/images/home_care.png",
    href: "/product?category=home-care",
    tag: "Eco Friendly",
  },
  {
    title: "Specialty Chemicals",
    description: "Industry-grade pure formulations",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
    href: "/portfolio",
    tag: "B2B Solutions",
  },
];

const bestSellerProducts = [
  {
    id: "1",
    name: "Manola Velvet Rose Perfume",
    category: "Fragrance",
    type: "fragrance",
    price: "৳ 2,450",
    rating: 4.9,
    reviews: 148,
    image: "/images/perfume_hero.png",
    badge: "Bestseller",
  },
  {
    id: "2",
    name: "Silk Bloom Moisturizing Body Lotion",
    category: "Body Care",
    type: "body-care",
    price: "৳ 850",
    rating: 4.8,
    reviews: 96,
    image: "/images/body_care.png",
    badge: "New Formula",
  },
  {
    id: "3",
    name: "Fresh Home Botanical Cleaner",
    category: "Home Care",
    type: "home-care",
    price: "৳ 420",
    rating: 4.9,
    reviews: 210,
    image: "/images/home_care.png",
    badge: "Eco Pick",
  },
  {
    id: "4",
    name: "Golden Oud Eau de Parfum",
    category: "Fragrance",
    type: "fragrance",
    price: "৳ 3,200",
    rating: 5.0,
    reviews: 84,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80",
    badge: "Luxury Edition",
  },
  {
    id: "5",
    name: "Hydrating Aloe Skin Cream",
    category: "Body Care",
    type: "body-care",
    price: "৳ 680",
    rating: 4.7,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1608248597261-8332586b9a84?auto=format&fit=crop&w=600&q=80",
    badge: "Organic",
  },
  {
    id: "6",
    name: "Aroma Lavender Room Diffuser",
    category: "Home Care",
    type: "home-care",
    price: "৳ 1,150",
    rating: 4.8,
    reviews: 73,
    image: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=600&q=80",
    badge: "Popular",
  },
];

const testimonials = [
  {
    quote: "Manola Perfumes have completely changed my fragrance game. The Velvet Rose lasts all day long with an enchanting scent!",
    author: "Nusrat Jahan",
    role: "Verified Buyer, Dhaka",
    rating: 5,
    product: "Velvet Rose Perfume",
  },
  {
    quote: "The Silk Bloom Body Lotion is ultra-nourishing without feeling greasy. Highly recommended for daily skin hydration.",
    author: "Dr. Farhana Ahmed",
    role: "Dermatology Enthusiast",
    rating: 5,
    product: "Silk Bloom Lotion",
  },
  {
    quote: "Fast delivery, premium packaging, and superior chemical purity. Manola Chemical is our trusted partner.",
    author: "Sabbir Hossain",
    role: "Corporate Client",
    rating: 5,
    product: "Specialty Formulations",
  },
];

export function HomePage() {
  const [productTab, setProductTab] = useState("all");
  const [wishlist, setWishlist] = useState<string[]>([]);

  // Scent Finder State
  const [quizMood, setQuizMood] = useState("daily");
  const [quizNote, setQuizNote] = useState("floral");

  const toggleWishlist = (id: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredProducts =
    productTab === "all"
      ? bestSellerProducts
      : bestSellerProducts.filter((p) => p.type === productTab);

  return (
    <main className="bg-[#fffdf9] text-stone-800">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Trust & Guarantee Strip */}
      <section className="bg-gradient-to-r from-stone-900 via-pink-950 to-stone-900 text-stone-200 py-6 px-4">
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="flex items-center justify-center gap-2.5">
            <Sparkles className="text-pink-400 size-5 shrink-0" />
            <span className="text-xs md:text-sm font-semibold tracking-wide">100% Pure Formulations</span>
          </div>
          <div className="flex items-center justify-center gap-2.5">
            <Leaf className="text-emerald-400 size-5 shrink-0" />
            <span className="text-xs md:text-sm font-semibold tracking-wide">Kind & Dermatologist Approved</span>
          </div>
          <div className="flex items-center justify-center gap-2.5">
            <Award className="text-amber-400 size-5 shrink-0" />
            <span className="text-xs md:text-sm font-semibold tracking-wide">Made in Bangladesh</span>
          </div>
          <div className="flex items-center justify-center gap-2.5">
            <Truck className="text-rose-400 size-5 shrink-0" />
            <span className="text-xs md:text-sm font-semibold tracking-wide">Fast Nationwide Shipping</span>
          </div>
        </div>
      </section>

      {/* Category Showcase Grid */}
      <section id="products" className="max-w-[1280px] mx-auto px-5 sm:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-pink-700 text-xs uppercase font-extrabold tracking-widest bg-pink-100/70 px-3 py-1 rounded-full">
            Curated Collections
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-stone-900 mt-4 mb-3">
            Care & Fragrance for Every Routine
          </h2>
          <p className="text-stone-600 text-base leading-relaxed">
            From signature perfumes to everyday body care, discover thoughtful formulations crafted for perfection.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryCards.map((category) => (
            <Link
              href={category.href}
              className="group relative h-[380px] rounded-2xl overflow-hidden shadow-lg border border-stone-200/80 flex flex-col justify-end p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl"
              key={category.title}
            >
              <img
                src={category.image}
                alt={category.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent transition-opacity duration-300" />
              
              <div className="relative z-10">
                <span className="inline-block px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-bold uppercase tracking-wider mb-2.5">
                  {category.tag}
                </span>
                <p className="text-stone-300 text-xs tracking-wider uppercase m-0 mb-1">
                  {category.description}
                </p>
                <h3 className="font-serif text-2xl text-white font-medium tracking-tight mb-3">
                  {category.title}
                </h3>
                <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-pink-300 group-hover:text-white transition-colors">
                  Explore Range <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Tabbed Bestsellers & Featured Products Section */}
      <section className="bg-stone-50 py-20 border-y border-stone-200/80">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-pink-700 text-xs uppercase font-extrabold tracking-widest">
                Customer Favourites
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-stone-900 mt-2">
                Most-Loved Formulations
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {[
                { label: "All Items", value: "all" },
                { label: "Fragrances", value: "fragrance" },
                { label: "Body Care", value: "body-care" },
                { label: "Home Care", value: "home-care" },
              ].map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setProductTab(tab.value)}
                  className={`px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                    productTab === tab.value
                      ? "bg-pink-800 text-white shadow-md shadow-pink-900/20"
                      : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const isWished = wishlist.includes(product.id);
              return (
                <article
                  key={product.id}
                  className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="h-[300px] relative overflow-hidden bg-stone-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Badge */}
                    <span className="absolute top-4 left-4 bg-pink-700 text-white text-[10px] uppercase font-extrabold tracking-wider px-2.5 py-1 rounded-md shadow-md">
                      {product.badge}
                    </span>

                    {/* Wishlist Button */}
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className={`absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-stone-200 flex items-center justify-center transition-all cursor-pointer ${
                        isWished ? "text-rose-600 bg-rose-50" : "text-stone-400 hover:text-rose-600"
                      }`}
                      aria-label="Add to wishlist"
                    >
                      <Heart size={18} fill={isWished ? "currentColor" : "none"} />
                    </button>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-pink-700">
                        {product.category}
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                        <Star size={14} fill="currentColor" />
                        <span>{product.rating}</span>
                        <span className="text-stone-400 font-normal">({product.reviews})</span>
                      </div>
                    </div>

                    <h3 className="font-serif text-xl font-medium text-stone-900 mb-4 line-clamp-1">
                      {product.name}
                    </h3>

                    <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                      <span className="text-lg font-bold text-stone-900">{product.price}</span>
                      <Link
                        href={`/product`}
                        className="px-4 py-2 rounded-xl bg-stone-900 hover:bg-pink-800 text-white text-xs font-extrabold uppercase tracking-wider transition-colors flex items-center gap-1.5"
                      >
                        <ShoppingBag size={14} /> Buy Now
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* Interactive Scent & Care Quiz Section (NEW) */}
      <section className="max-w-[1280px] mx-auto px-5 sm:px-8 py-20">
        <div className="bg-gradient-to-r from-pink-950 via-stone-900 to-stone-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-pink-900/30 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 items-center">
          
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs font-bold uppercase tracking-wider mb-4 border border-pink-500/30">
              <SlidersHorizontal size={14} /> Scent & Routine Quiz
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight mb-4">
              Discover Your Signature Match
            </h2>
            <p className="text-stone-300 text-base leading-relaxed mb-6">
              Not sure which fragrance or skincare formulation fits your personal style? Select your mood and scent notes to get an instant recommendation.
            </p>

            {/* Quiz Step 1: Mood */}
            <div className="mb-6">
              <label className="block text-xs uppercase font-extrabold tracking-wider text-pink-300 mb-2">
                1. Select Your Preferred Mood:
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: "daily", label: "✨ Daily Elegance" },
                  { id: "night", label: "🌙 Evening Allure" },
                  { id: "fresh", label: "🌿 Natural Refresh" },
                ].map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setQuizMood(m.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      quizMood === m.id
                        ? "bg-pink-600 text-white shadow-md"
                        : "bg-stone-800/80 text-stone-300 border border-stone-700 hover:bg-stone-800"
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quiz Step 2: Note */}
            <div>
              <label className="block text-xs uppercase font-extrabold tracking-wider text-pink-300 mb-2">
                2. Preferred Scent Family:
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: "floral", label: "🌹 Rose & Floral" },
                  { id: "citrus", label: "🍋 Fresh Citrus" },
                  { id: "woody", label: "🪵 Warm Amber & Oud" },
                ].map((n) => (
                  <button
                    key={n.id}
                    onClick={() => setQuizNote(n.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      quizNote === n.id
                        ? "bg-pink-600 text-white shadow-md"
                        : "bg-stone-800/80 text-stone-300 border border-stone-700 hover:bg-stone-800"
                    }`}
                  >
                    {n.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quiz Result Match Card */}
          <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-xl">
            <div className="flex items-center justify-between text-xs text-pink-400 font-extrabold uppercase tracking-widest mb-3">
              <span>Recommended Match</span>
              <span className="px-2 py-0.5 rounded bg-pink-500/20 border border-pink-500/30">98% Match</span>
            </div>
            
            <div className="flex items-center gap-5 my-4">
              <img
                src={quizNote === "woody" ? "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=300&q=80" : quizNote === "citrus" ? "/images/body_care.png" : "/images/perfume_hero.png"}
                alt="Product match"
                className="w-24 h-24 rounded-xl object-cover border border-stone-700 shrink-0 shadow-md"
              />
              <div>
                <h3 className="font-serif text-xl font-medium text-white mb-1">
                  {quizNote === "woody"
                    ? "Golden Oud Eau de Parfum"
                    : quizNote === "citrus"
                    ? "Silk Bloom Body Lotion"
                    : "Manola Velvet Rose Perfume"}
                </h3>
                <p className="text-stone-400 text-xs leading-relaxed mb-2">
                  {quizNote === "woody"
                    ? "A rich blend of warm amber, royal oud, and subtle floral spices."
                    : quizNote === "citrus"
                    ? "Infused with refreshing botanical extracts for silk-soft skin."
                    : "A romantic bouquet of damask rose, vanilla, and sweet nectar."}
                </p>
                <span className="text-pink-400 text-sm font-bold">
                  {quizNote === "woody" ? "৳ 3,200" : quizNote === "citrus" ? "৳ 850" : "৳ 2,450"}
                </span>
              </div>
            </div>

            <Link
              href="/product"
              className="w-full py-3 bg-pink-700 hover:bg-pink-600 text-white text-xs font-extrabold uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 mt-4"
            >
              Explore Recommendation <ChevronRight size={16} />
            </Link>
          </div>

        </div>
      </section>

      {/* Brand Excellence & Story Section */}
      <section id="about" className="bg-[#f7f3ee] py-20 border-y border-stone-200/80">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="relative">
            <div className="relative h-[460px] rounded-3xl overflow-hidden shadow-2xl border border-stone-200">
              <img
                src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1000&q=85"
                alt="Formulation excellence"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Glassmorphic Badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-stone-200/80 max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center font-bold text-lg">
                  ★
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">4.9 / 5.0 Rating</h4>
                  <p className="text-stone-500 text-xs">From 5,000+ Verified Buyers</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-pink-700 text-xs uppercase font-extrabold tracking-widest bg-pink-100 px-3 py-1 rounded-full">
              Our Point of View
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-stone-900 leading-tight">
              Care Should Feel Like a Small Celebration
            </h2>
            <p className="text-stone-600 text-base leading-relaxed">
              We believe everyday products can be effective, thoughtful, and a delight to use. That&apos;s why we put meticulous scientific care into every detail—from the ethically sourced ingredients to the captivating sensory moments they create.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-stone-300/70">
              <div>
                <h3 className="font-serif text-3xl font-bold text-pink-800">50K+</h3>
                <p className="text-stone-600 text-xs font-semibold uppercase tracking-wider mt-1">Happy Customers</p>
              </div>
              <div>
                <h3 className="font-serif text-3xl font-bold text-pink-800">100%</h3>
                <p className="text-stone-600 text-xs font-semibold uppercase tracking-wider mt-1">Cruelty Free & Safe</p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs uppercase font-extrabold tracking-wider bg-stone-900 hover:bg-pink-800 text-white px-6 py-4 rounded-xl transition-colors shadow-lg"
              >
                Meet Our Story <ArrowRight size={16} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="max-w-[1280px] mx-auto px-5 sm:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-pink-700 text-xs uppercase font-extrabold tracking-widest">
            Real Experiences
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-stone-900 mt-2 mb-3">
            Loved in Every Routine
          </h2>
          <p className="text-stone-600 text-base">
            Read what our community has to say about our signature scents and skin care products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-stone-200/90 shadow-sm hover:shadow-xl transition-all relative flex flex-col justify-between"
            >
              <div>
                <Quote className="text-pink-200 size-10 mb-4" />
                <div className="flex gap-1 text-amber-500 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-stone-700 text-sm leading-relaxed mb-6 font-normal italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">{t.author}</h4>
                  <p className="text-stone-400 text-xs">{t.role}</p>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-pink-700 bg-pink-50 px-2.5 py-1 rounded-md">
                  {t.product}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
