"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Search, ChevronRight } from "lucide-react";

const articles = [
  {
    title: "The Signature Secret: Decoding True Craftsmanship",
    date: "July 24, 2026",
    category: "Fragrance",
    image: "/images/article_1.png",
    readTime: "5 min read",
    excerpt: "Discover the intricate process behind creating our most iconic scents, from sourcing raw materials to the final bottle.",
  },
  {
    title: "Daily Rituals: How to Maximize Skin Hydration",
    date: "July 18, 2026",
    category: "Skin Care",
    image: "/images/article_2.png",
    readTime: "4 min read",
    excerpt: "Unlock the secrets of lasting hydration with our expert guide to layering lotions and body oils effectively.",
  },
  {
    title: "Healthy Home: Safe Formulas for Family Living",
    date: "July 12, 2026",
    category: "Home Care",
    image: "/images/article_3.png",
    readTime: "6 min read",
    excerpt: "Learn why choosing eco-friendly and non-toxic home care products is essential for a safe family environment.",
  },
  {
    title: "The Art of Layering Fragrances",
    date: "August 02, 2026",
    category: "Fragrance",
    image: "/images/perfume_hero.png",
    readTime: "7 min read",
    excerpt: "Master the delicate art of combining different perfumes to create a unique scent that is entirely your own.",
  },
  {
    title: "Sustainable Packaging: Our Green Initiative",
    date: "August 15, 2026",
    category: "Corporate",
    image: "/images/specialty_chemicals.png",
    readTime: "4 min read",
    excerpt: "A deep dive into our new eco-friendly packaging solutions and how we are reducing our carbon footprint.",
  },
  {
    title: "Winter Skincare: Protect and Nourish",
    date: "September 05, 2026",
    category: "Skin Care",
    image: "/images/body_care.png",
    readTime: "5 min read",
    excerpt: "As the temperature drops, your skin needs extra care. Explore our top tips for maintaining a healthy glow all winter.",
  }
];

export function BlogPage() {
  return (
    <main className="bg-[#fffdf9] text-stone-800 pb-24 pt-8">
      {/* Breadcrumbs */}
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 mb-8">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500">
          <Link href="/" className="hover:text-pink-700 transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-stone-900">The Journal</span>
        </div>
      </div>

      {/* Header Section */}
      <section className="max-w-[1280px] mx-auto px-5 sm:px-8 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-stone-200 pb-12">
          <div className="max-w-2xl">
            <span className="text-pink-700 text-xs uppercase font-extrabold tracking-widest block mb-3">
              Editorial
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-stone-900 mb-4">
              The Manola Journal
            </h1>
            <p className="text-stone-600 text-lg leading-relaxed">
              Dive into a world of sensory delights, expert formulation tips, and inspiring stories from the heart of our perfumery.
            </p>
          </div>
          
          <div className="relative w-full md:w-auto md:min-w-[300px]">
            <input 
              type="text"
              placeholder="Search articles..."
              className="w-full bg-white border border-stone-200 rounded-xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-pink-300 focus:ring-4 focus:ring-pink-100 transition-all"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-pink-600 transition-colors">
              <Search size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="max-w-[1280px] mx-auto px-5 sm:px-8 mb-20">
        <div className="group relative rounded-3xl overflow-hidden bg-stone-900 text-white min-h-[400px] md:min-h-[500px] flex items-end shadow-xl">
          <img 
            src="/images/brand_excellence.png" 
            alt="Featured Article" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/50 to-transparent" />
          
          <div className="relative z-10 p-8 sm:p-12 max-w-3xl">
            <div className="flex items-center gap-3 mb-4 text-xs font-extrabold uppercase tracking-widest text-pink-300">
              <span className="bg-pink-600/20 px-3 py-1 rounded-md border border-pink-500/30">Spotlight</span>
              <span>•</span>
              <span>10 min read</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight mb-4">
              The Science of Scent: How Perfumes Influence Mood and Memory
            </h2>
            <p className="text-stone-300 text-base sm:text-lg mb-8 max-w-2xl leading-relaxed">
              Explore the fascinating neurological connection between the olfactory system and our emotional centers, and discover why certain fragrances feel like a warm embrace.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-pink-700 hover:bg-pink-600 text-white text-sm font-extrabold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(190,24,93,0.3)]"
            >
              Read Full Story <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between mb-10">
          <h3 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900">Latest Updates</h3>
          <div className="flex gap-2">
            {['All', 'Fragrance', 'Skin Care', 'Home Care'].map((filter) => (
              <button key={filter} className={`px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all hidden sm:block ${filter === 'All' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}>
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {articles.map((article, index) => (
            <Link href="#" key={index} className="group block flex flex-col h-full">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-6 border border-stone-100 shadow-sm">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between text-[11px] font-extrabold uppercase tracking-widest text-stone-400 mb-3">
                <span className="text-pink-700 bg-pink-50 px-2.5 py-1 rounded-md">{article.category}</span>
                <div className="flex items-center gap-1.5"><BookOpen size={14}/> {article.readTime}</div>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-stone-900 leading-snug group-hover:text-pink-700 transition-colors mb-3">
                {article.title}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-4 flex-grow">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-stone-900 group-hover:text-pink-700 uppercase tracking-widest mt-auto">
                Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
        
        {/* Load More Button */}
        <div className="mt-16 text-center">
          <button className="px-8 py-3.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-sm font-extrabold uppercase tracking-wider transition-all border border-stone-200 cursor-pointer">
            Load More Articles
          </button>
        </div>
      </section>
    </main>
  );
}
