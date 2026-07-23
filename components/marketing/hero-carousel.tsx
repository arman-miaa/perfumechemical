"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

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
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const plugin = useRef(Autoplay({ delay: 5200, stopOnInteraction: false }));

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const getThemeBg = (theme: string) => {
    switch (theme) {
      case "violet":
        return "bg-[radial-gradient(circle_at_74%_21%,#f7dfff_0_5%,transparent_27%),linear-gradient(105deg,#4a194b,#982a83_58%,#e58ac8)]";
      case "green":
        return "bg-[radial-gradient(circle_at_78%_28%,#efffe6_0_7%,transparent_25%),linear-gradient(105deg,#0b5344,#178568_57%,#9ad8a8)]";
      default: // pink
        return "bg-[radial-gradient(circle_at_80%_30%,#fff7fa_0_8%,transparent_28%),linear-gradient(105deg,#f9cad9,#fff1f4_55%,#fac3d9)]";
    }
  };

  return (
    <section className="relative overflow-hidden min-h-[580px] md:min-h-[680px] lg:min-h-[740px] bg-[#f7d6df]" aria-label="Featured offers">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        opts={{ loop: true }}
        className="w-full h-full"
      >
        <CarouselContent className="-ml-0">
          {slides.map((slide, index) => (
            <CarouselItem
              key={`${slide.theme}-${index}`}
              className="pl-0 min-w-full min-h-[580px] md:min-h-[680px] lg:min-h-[740px] grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] items-center px-6 md:px-[max(8vw,70px)] py-16 md:py-24 relative overflow-hidden"
            >
              {/* Background slide */}
              <div className={`absolute inset-0 ${getThemeBg(slide.theme)}`} />

              {/* Decorative shapes */}
              <div className="absolute w-[400px] md:w-[620px] h-[400px] md:h-[620px] -right-[100px] md:right-[5%] -top-[180px] rounded-full bg-white/30 blur-[2px] pointer-events-none" />
              <div className="absolute w-[300px] h-[300px] right-0 -bottom-[120px] rounded-full bg-white/30 pointer-events-none" />

              {/* Copy section */}
              <div className="relative z-10 max-w-[650px] py-4">
                <p className={`uppercase tracking-[0.16em] text-[10px] md:text-xs font-extrabold mb-5 ${slide.theme === "pink" ? "text-[#a93169]" : "text-[#e9d4e8]"}`}>
                  {slide.eyebrow}
                </p>
                <h1 className={`font-bold text-[48px] md:text-[clamp(52px,5.8vw,86px)] leading-[1.02] tracking-[-0.06em] m-0 ${slide.theme === "pink" ? "text-[#f01275]" : "text-white"}`}>
                  {slide.title.split("\n").map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </h1>
                <Link
                  href="#products"
                  className={`inline-flex items-center gap-[8px] mt-6 md:mt-[34px] px-6 py-4 uppercase text-xs font-extrabold tracking-[0.09em] rounded-md transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${
                    slide.theme === "pink"
                      ? "bg-[#9a1956] text-white hover:bg-[#801245]"
                      : slide.theme === "violet"
                      ? "bg-white text-[#742362] hover:bg-slate-50"
                      : "bg-white text-[#17684e] hover:bg-slate-50"
                  }`}
                >
                  {slide.label} <ChevronRight size={18} />
                </Link>
              </div>

              {/* Product graphic */}
              <div className="relative z-10 h-[240px] md:h-[440px] mt-4 md:mt-0 scale-[0.75] md:scale-110 origin-right-bottom md:origin-center">
                <div className="absolute w-[380px] h-[380px] rounded-full bg-white/35 right-[5%] top-[10px]" />

                {/* Back box */}
                <div
                  className={`flex flex-col justify-center absolute w-[180px] h-[165px] border-2 border-white/70 shadow-[20px_24px_28px_rgba(76,18,46,0.19)] p-4 right-[36%] top-[68px] rotate-7 opacity-80 rounded-sm ${
                    slide.product === "cleaner"
                      ? "bg-gradient-to-br from-[#e8fff0] to-[#b8efca] text-[#187550]"
                      : "bg-gradient-to-br from-white to-[#ffe1ec] text-[#e62378]"
                  }`}
                >
                  <b className="font-serif text-[30px] tracking-[-0.08em]">manola</b>
                  <span className="whitespace-pre-line uppercase leading-[1.35] text-[10px] font-bold mt-[7px]">
                    {slide.product === "cream" ? "Brightening\nskin cream" : slide.product === "lotion" ? "Silk bloom\nbody lotion" : "Fresh home\ncleaner"}
                  </span>
                </div>

                {/* Front box */}
                <div
                  className={`flex flex-col justify-center absolute border-2 border-white/70 shadow-[20px_24px_28px_rgba(76,18,46,0.19)] p-4 -rotate-2 w-[205px] h-[185px] rounded-sm ${
                    slide.product === "lotion"
                      ? "right-[6%] top-[124px] bg-gradient-to-br from-white to-[#ffe1ec] text-[#e62378]"
                      : slide.product === "cleaner"
                      ? "right-[13%] top-[138px] bg-gradient-to-br from-[#e8fff0] to-[#b8efca] text-[#187550]"
                      : "right-[13%] top-[138px] bg-gradient-to-br from-white to-[#ffe1ec] text-[#e62378]"
                  }`}
                >
                  <b className="font-serif text-[30px] tracking-[-0.08em]">manola</b>
                  <span className="whitespace-pre-line uppercase leading-[1.35] text-[10px] font-bold mt-[7px]">
                    {slide.product === "cream" ? "Brightening\nskin cream" : slide.product === "lotion" ? "Silk bloom\nbody lotion" : "Fresh home\ncleaner"}
                  </span>
                </div>

                {/* Bottle if lotion or cleaner */}
                {slide.product !== "cream" && (
                  <div
                    className={`absolute top-[35px] shadow-[18px_22px_26px_rgba(76,18,46,0.2)] pt-[115px] text-center before:content-[''] before:absolute before:w-[62px] before:h-[70px] before:rounded-[10px_10px_2px_2px] before:-top-[58px] before:left-[35px] before:bg-gradient-to-r before:from-[#c59b5d] before:via-[#f7e5a2] before:to-[#9c7030] ${
                      slide.product === "lotion"
                        ? "right-[43%] w-[135px] h-[300px] rounded-[30px_30px_26px_26px] bg-gradient-to-r from-[#dbb0ed] via-white to-[#9148aa] text-[#673274]"
                        : "right-[43%] w-[155px] h-[300px] rounded-[18px_18px_32px_32px] bg-gradient-to-r from-[#75d39a] via-[#e7ffed] to-[#39a66a] text-[#17734d]"
                    }`}
                  >
                    <b className="font-serif text-[30px] tracking-[-0.08em]">manola</b>
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Previous Navigation Arrow */}
        <button
          onClick={() => api?.scrollPrev()}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-[40px] md:w-[48px] h-[54px] md:h-[64px] border-0 bg-white/45 hover:bg-white text-[#463936] flex items-center justify-center cursor-pointer transition-all opacity-80 hover:opacity-100 shadow-md"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Navigation Arrow */}
        <button
          onClick={() => api?.scrollNext()}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-[40px] md:w-[48px] h-[54px] md:h-[64px] border-0 bg-white/45 hover:bg-white text-[#463936] flex items-center justify-center cursor-pointer transition-all opacity-80 hover:opacity-100 shadow-md"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-[16px] md:bottom-[22px] left-1/2 -translate-x-1/2 z-20 flex items-center gap-[8px]">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-[8px] p-0 border rounded-full transition-all duration-300 cursor-pointer ${
                index === current
                  ? "w-[24px] bg-[#9d1c56] border-[#9d1c56]"
                  : "w-[8px] bg-transparent border-[#d85c95]"
              }`}
              aria-label={`Show slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
}
