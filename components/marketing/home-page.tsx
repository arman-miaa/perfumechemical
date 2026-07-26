"use client";

import React, { useState, useEffect } from "react";
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
  Clock,
  Crown,
  BookOpen,
} from "lucide-react";
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { HeroCarousel } from "./hero-carousel";
import { SectionHeading } from "./section-heading";
import { products } from "@/src/data/mockProducts";
import { ProductCard } from "@/components/shared/ProductCard";

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
    image: "/images/specialty_chemicals.png",
    href: "/portfolio",
    tag: "B2B Solutions",
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
  {
    quote: "The Midnight Oud is incredibly rich and exotic. It's my go-to evening fragrance now.",
    author: "Tanvir Hasan",
    role: "Verified Buyer, Sylhet",
    rating: 5,
    product: "Midnight Oud",
  },
  {
    quote: "A perfect blend of citrus and floral notes. The Ocean Breeze scent is so refreshing for summer.",
    author: "Sadia Rahman",
    role: "Verified Buyer, Chittagong",
    rating: 4,
    product: "Ocean Breeze",
  },
  {
    quote: "Their industrial grade ethanol is top notch. Highly reliable supplier for our manufacturing needs.",
    author: "Abdul Karim",
    role: "Production Manager",
    rating: 5,
    product: "Industrial Solvents",
  },
  {
    quote: "I've tried many local brands, but Manola's quality truly rivals international luxury brands.",
    author: "Jannatul Ferdous",
    role: "Beauty Blogger",
    rating: 5,
    product: "Signature Collection",
  },
  {
    quote: "The home care line is amazing. The lavender room spray makes my house feel like a spa.",
    author: "Kamrul Islam",
    role: "Verified Buyer",
    rating: 5,
    product: "Lavender Room Spray",
  },
  {
    quote: "Excellent customer service and prompt responses to formulation queries. A great B2B partner.",
    author: "Md. Shafiqur Rahman",
    role: "Procurement Officer",
    rating: 5,
    product: "Custom Formulations",
  },
  {
    quote: "Absolutely love the packaging and the scent profile of their floral range. Makes a perfect gift!",
    author: "Ayesha Siddiqa",
    role: "Verified Buyer, Rajshahi",
    rating: 5,
    product: "Floral Bouquet",
  }
];

const articles = [
  {
    title: "The Signature Secret: Decoding True Craftsmanship",
    date: "July 24, 2026",
    category: "Fragrance",
    image: "/images/article_1.png",
    readTime: "5 min read",
  },
  {
    title: "Daily Rituals: How to Maximize Skin Hydration",
    date: "July 18, 2026",
    category: "Skin Care",
    image: "/images/article_2.png",
    readTime: "4 min read",
  },
  {
    title: "Healthy Home: Safe Formulas for Family Living",
    date: "July 12, 2026",
    category: "Home Care",
    image: "/images/article_3.png",
    readTime: "6 min read",
  },
];

export function HomePage() {
  const [productTab, setProductTab] = useState("all");

  // Scent Finder State
  const [quizMood, setQuizMood] = useState("daily");
  const [quizNote, setQuizNote] = useState("floral");

  // Countdown Timer State
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23; // Loop back
            }
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const filteredProducts =
    productTab === "all"
      ? products
      : products.filter((p) => p.type === productTab);

  return (
    <main className="bg-[#fffdf9] text-stone-800">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Infinite Value Marquee */}
      <div className="bg-pink-700 text-white py-3 border-y border-pink-800 shadow-inner overflow-hidden">
        <Marquee speed={40} gradient={false} autoFill={true}>
          <div className="flex items-center mx-4 gap-8">
            <span className="text-xs uppercase font-extrabold tracking-[0.2em] flex items-center gap-2"><Sparkles size={14} className="text-pink-300"/> 100% ORGANIC FORMULATIONS</span>
            <span className="text-xs uppercase font-extrabold tracking-[0.2em] flex items-center gap-2"><Sparkles size={14} className="text-pink-300"/> DERMATOLOGIST TESTED</span>
            <span className="text-xs uppercase font-extrabold tracking-[0.2em] flex items-center gap-2"><Sparkles size={14} className="text-pink-300"/> PREMIUM GRADE QUALITY</span>
            <span className="text-xs uppercase font-extrabold tracking-[0.2em] flex items-center gap-2"><Sparkles size={14} className="text-pink-300"/> ISO 9001 CERTIFIED</span>
          </div>
        </Marquee>
      </div>

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

      {/* Flash Sale / Combo Offer Section */}
      <section className="bg-stone-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-500 via-transparent to-transparent" />
        
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs font-bold uppercase tracking-wider mb-6 border border-pink-500/30">
              <Clock size={14} /> Limited Time Only
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-white mb-4">
              Signature Combo Offer
            </h2>
            <p className="text-stone-400 text-lg mb-8 max-w-md leading-relaxed">
              Experience the perfect layering routine. Get the Velvet Rose Eau de Parfum & Silk Bloom Body Lotion together and save 25%.
            </p>
            
            <div className="flex gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 text-center min-w-[80px]">
                <span className="block text-3xl font-serif text-white font-medium">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-pink-300">Hours</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 text-center min-w-[80px]">
                <span className="block text-3xl font-serif text-white font-medium">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-pink-300">Minutes</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 text-center min-w-[80px]">
                <span className="block text-3xl font-serif text-white font-medium">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-pink-300">Seconds</span>
              </div>
            </div>

            <Link
              href="/product"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-pink-700 hover:bg-pink-600 text-white text-sm font-extrabold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(190,24,93,0.3)] hover:shadow-[0_0_30px_rgba(190,24,93,0.5)]"
            >
              Shop The Combo <ArrowRight size={18} />
            </Link>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-600/30 blur-[100px] rounded-full" />
            <img 
              src="/images/perfume_hero.png" 
              alt="Combo Offer" 
              className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl"
            />
            <div className="absolute top-4 right-10 bg-yellow-400 text-stone-900 rounded-full w-24 h-24 flex items-center justify-center flex-col shadow-xl rotate-12 z-20 border-4 border-stone-900">
              <span className="text-sm font-bold leading-none">SAVE</span>
              <span className="text-3xl font-black font-serif leading-none">25%</span>
            </div>
          </div>

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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link 
              href="/product"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-stone-900 hover:bg-pink-800 text-white text-sm font-extrabold uppercase tracking-wider transition-colors shadow-lg cursor-pointer"
            >
              View All Collections <ArrowRight size={16} />
            </Link>
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
                src={quizNote === "woody" ? "/images/quiz_woody.png" : quizNote === "citrus" ? "/images/body_care.png" : "/images/perfume_hero.png"}
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
              href={`/product/${quizNote === "woody" ? "4" : quizNote === "citrus" ? "2" : "1"}`}
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
                src="/images/brand_excellence.png"
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
      <section className="px-5 sm:px-8 py-20 overflow-hidden bg-[#fbf9f6]">
        <div className="max-w-[1280px] mx-auto">
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

          <div className="w-full relative pb-12">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              loop={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 20,
                stretch: 0,
                depth: 150,
                modifier: 1,
                slideShadows: false,
              }}
              pagination={{ clickable: true, dynamicBullets: true }}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="w-full !overflow-visible"
              style={{ paddingBottom: '3rem' }}
            >
              {testimonials.map((t, index) => (
                <SwiperSlide key={index} className="max-w-md w-[85%] sm:w-[420px]">
                  <div className="bg-white p-8 sm:p-10 rounded-3xl border border-stone-200/90 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] h-full min-h-[300px] flex flex-col justify-between transform transition-all duration-300">
                    <div>
                      <Quote className="text-pink-200 size-12 mb-5" />
                      <div className="flex gap-1 text-amber-500 mb-5">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} size={18} fill="currentColor" />
                        ))}
                      </div>
                      <p className="text-stone-700 text-base leading-relaxed mb-8 font-normal italic">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                    </div>
                    <div className="pt-5 border-t border-stone-100 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <img 
                          src={`https://api.dicebear.com/9.x/glass/svg?seed=${t.author}&backgroundColor=fbcfe8`} 
                          alt={t.author}
                          className="w-10 h-10 rounded-full border border-pink-200 shadow-sm shrink-0"
                        />
                        <div>
                          <h4 className="font-bold text-stone-900 text-base leading-none">{t.author}</h4>
                          <p className="text-stone-400 text-[11px] mt-1">{t.role}</p>
                        </div>
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-pink-700 bg-pink-50 px-2 py-1 rounded-md text-right max-w-[100px] leading-tight shrink-0">
                        {t.product}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Manola Loyalty Club Section */}
      <section className="py-24 border-y border-stone-200/80 bg-white relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
          <div className="bg-pink-50 rounded-3xl overflow-hidden border border-pink-100 flex flex-col md:flex-row items-center relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#be185d 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            
            <div className="md:w-1/2 p-10 sm:p-16 relative z-10">
              <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center text-pink-700 mb-6">
                <Crown size={24} />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-stone-900 mb-4">
                Introducing the Manola Loyalty Club
              </h2>
              <p className="text-stone-600 text-base leading-relaxed mb-8 max-w-md">
                Unlock exclusive savings, early access to new collections, and free shipping on all orders. Join our inner circle today and elevate your self-care routine.
              </p>
              <ul className="space-y-3 mb-10">
                <li className="flex items-center gap-3 text-sm font-semibold text-stone-700">
                  <Check size={18} className="text-pink-600" /> Earn points on every purchase
                </li>
                <li className="flex items-center gap-3 text-sm font-semibold text-stone-700">
                  <Check size={18} className="text-pink-600" /> Exclusive member-only discounts
                </li>
                <li className="flex items-center gap-3 text-sm font-semibold text-stone-700">
                  <Check size={18} className="text-pink-600" /> Birthday surprises and gifts
                </li>
              </ul>
              <Link
                href="/register"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-stone-900 hover:bg-pink-800 text-white text-sm font-extrabold uppercase tracking-wider transition-all shadow-lg"
              >
                Join For Free <ArrowRight size={18} />
              </Link>
            </div>

            <div className="md:w-1/2 relative p-10 flex items-center justify-center min-h-[400px]">
              {/* 3D Floating Cards Effect */}
              <div className="relative w-full max-w-sm aspect-[1.6/1] rounded-2xl bg-gradient-to-br from-pink-600 to-rose-900 p-6 text-white shadow-2xl shadow-pink-900/30 transform -rotate-6 transition-transform hover:rotate-0 duration-500 z-20">
                <div className="flex justify-between items-start">
                  <span className="font-serif text-2xl font-black">Manola</span>
                  <Crown size={24} className="text-pink-300" />
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-pink-200 mb-1">Cardholder</p>
                      <p className="font-bold tracking-wider">MEMBER NAME</p>
                    </div>
                    <span className="text-xl font-medium opacity-80">0000 0000</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm aspect-[1.6/1] rounded-2xl bg-stone-800 p-6 shadow-xl transform rotate-3 z-10 opacity-70">
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Journal / Articles Section */}
      <section className="bg-[#fffdf9] py-24">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-14">
            <div>
              <span className="text-pink-700 text-xs uppercase font-extrabold tracking-widest">
                The Journal
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-stone-900 mt-2">
                Latest Insights & Advice
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-stone-900 hover:text-pink-700 transition-colors group"
            >
              View All Articles <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Link href="/blog" key={index} className="group block">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-5">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
                  <span className="text-pink-700">{article.category}</span>
                  <div className="flex items-center gap-1"><BookOpen size={14}/> {article.readTime}</div>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-stone-900 leading-snug group-hover:text-pink-700 transition-colors">
                  {article.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
