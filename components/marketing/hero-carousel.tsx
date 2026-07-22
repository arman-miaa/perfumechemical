"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  { theme: "pink", eyebrow: "Manola brightening skin cream", title: "Bright and smooth\nskin, every day", label: "Discover the range", product: "cream" },
  { theme: "violet", eyebrow: "Freshness that stays with you", title: "A fresh feeling\nfor every ritual", label: "Shop personal care", product: "lotion" },
  { theme: "green", eyebrow: "A cleaner home, naturally", title: "A cleaner and\nfresher home", label: "Explore home care", product: "cleaner" },
  { theme: "pink", eyebrow: "Everyday glow starts here", title: "A little glow\nfor every day", label: "Explore skin care", product: "cream" },
  { theme: "green", eyebrow: "Fresh home, happy moments", title: "Bring a fresh\nfeel to your home", label: "Discover cleaners", product: "cleaner" },
  { theme: "violet", eyebrow: "Softness in every drop", title: "Love your\ndaily ritual", label: "Explore body care", product: "lotion" },
  { theme: "pink", eyebrow: "Made to make you smile", title: "Care that feels\nbeautiful", label: "Shop Manola", product: "cream" },
  { theme: "green", eyebrow: "Clean laundry, lasting freshness", title: "Fresh fabrics,\nfresh beginnings", label: "Explore laundry care", product: "cleaner" },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const goTo = (index: number) => setCurrent((index + slides.length) % slides.length);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => goTo(current + 1), 5200);
    return () => window.clearInterval(timer);
  }, [current, paused]);

  return <section className="hero-carousel" aria-roledescription="carousel" aria-label="Featured offers" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
    <div className="carousel-track" style={{ transform: `translateX(-${current * 100}%)` }}>
      {slides.map((slide, index) => <article className={`carousel-slide ${slide.theme}`} key={`${slide.theme}-${index}`} aria-hidden={current !== index}>
        <div className="carousel-copy"><p>{slide.eyebrow}</p><h1>{slide.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h1><Link href="#products" className="carousel-cta">{slide.label} <ChevronRight size={17}/></Link></div>
        <div className={`carousel-product ${slide.product}`} aria-hidden="true"><div className="product-halo"/><div className="product-box box-back"/><div className="product-box box-front"><b>manola</b><span>{slide.product === "cream" ? "Brightening\nskin cream" : slide.product === "lotion" ? "Silk bloom\nbody lotion" : "Fresh home\ncleaner"}</span></div>{slide.product !== "cream" && <div className="product-bottle"><b>manola</b></div>}</div>
      </article>)}
    </div>
    <button className="carousel-arrow previous" onClick={() => goTo(current - 1)} aria-label="Previous slide"><ChevronLeft /></button><button className="carousel-arrow next" onClick={() => goTo(current + 1)} aria-label="Next slide"><ChevronRight /></button>
    <div className="carousel-dots">{slides.map((slide, index) => <button onClick={() => goTo(index)} className={index === current ? "active" : ""} key={`${slide.theme}-${index}`} aria-label={`Show slide ${index + 1}`} aria-current={index === current}/>)}</div>
  </section>;
}
