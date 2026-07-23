import { ArrowRight, Check, Sparkles } from "lucide-react";
import Link from "next/link";
import { categories, products } from "@/src/data/site-content";
import { HeroCarousel } from "./hero-carousel";
import { SectionHeading } from "./section-heading";

export function HomePage() {
  return (
    <main>
      <HeroCarousel />

      {/* Trust Strip */}
      <section className="flex flex-wrap justify-center items-center gap-3 md:gap-7 p-5 bg-[#f6efe8] text-[#73645c] text-[9px] md:text-xs tracking-widest font-bold uppercase">
        <span>Feel-good formulations</span>
        <i className="w-1 h-1 rounded-full bg-[#df6496] not-italic" />
        <span>Kind to skin</span>
        <i className="w-1 h-1 rounded-full bg-[#df6496] not-italic" />
        <span>Made in Bangladesh</span>
        <i className="w-1 h-1 rounded-full bg-[#df6496] not-italic" />
        <span>Thoughtful everyday care</span>
      </section>

      {/* Categories Section */}
      <section id="products" className="max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-[120px]">
        <SectionHeading eyebrow="Find your everyday" title="Care for every corner of life">
          Whether it&apos;s a moment for yourself or a home that feels like you, our products bring a little more joy to the routine.
        </SectionHeading>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 md:gap-4 mt-8 md:mt-[48px]">
          {categories.map((category) => (
            <Link
              href="#"
              className={`min-h-[260px] md:min-h-[365px] overflow-hidden relative flex items-end p-4 md:p-6 text-white rounded-lg group`}
              key={category.title}
            >
              <img
                src={category.image}
                alt={category.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c100e]/80 via-transparent to-transparent" />
              <div className="relative z-10">
                <p className="text-[10px] md:text-[11px] tracking-wider uppercase m-0 mb-[7px] opacity-90">
                  {category.description}
                </p>
                <h3 className="font-serif font-medium text-[22px] md:text-[29px] tracking-tight m-0 mb-[18px]">
                  {category.title}
                </h3>
                <span className="inline-flex gap-1.5 items-center text-xs font-bold uppercase tracking-wider">
                  Explore <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section id="about" className="grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] bg-[#f6f0eb] items-center">
        <div className="min-h-[400px] md:min-h-[590px] relative">
          <img
            src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1100&q=85"
            alt="A flower and fragrance bottle"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="w-[116px] md:w-[150px] h-[116px] md:h-[150px] rounded-full grid place-content-center text-center gap-2 absolute right-4 md:right-[-50px] top-4 md:top-[70px] bg-[#e95d9c] text-white font-serif text-sm md:text-lg rotate-[13deg] shadow-lg z-10">
            <Sparkles size={20} className="mx-auto" />
            <span>Made with<br />a little magic</span>
          </div>
        </div>
        <div className="p-8 md:p-[8vw]">
          <SectionHeading eyebrow="Our point of view" title="Care should feel like a small celebration.">
            We believe everyday products can be effective, thoughtful and a delight to use. That&apos;s why we put the same care into every detail—from the ingredients we choose to the moments they create.
          </SectionHeading>
          <Link
            className="inline-flex items-center gap-2 text-xs uppercase font-extrabold tracking-wider text-[#8f174d] border-b border-[#8f174d] pb-1 mt-7 hover:opacity-80 transition-opacity"
            href="#"
          >
            Meet Manola <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-[120px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5">
          <SectionHeading eyebrow="The favourites" title="Loved in every routine">
            Discover the products people reach for, again and again.
          </SectionHeading>
          <Link
            className="inline-flex items-center gap-2 text-xs uppercase font-extrabold tracking-wider text-[#8f174d] border-b border-[#8f174d] pb-1 hover:opacity-80 transition-opacity shrink-0"
            href="#"
          >
            View all products <ArrowRight size={17} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 md:mt-[48px]">
          {products.map((product) => (
            <article className="group" key={product.name}>
              <div className="h-[330px] md:h-[395px] relative overflow-hidden bg-[#f4e8e5] rounded-md">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <button
                  aria-label={`Add ${product.name} to wishlist`}
                  className="absolute top-4 right-4 w-[34px] h-[34px] rounded-full border-0 bg-white grid place-items-center cursor-pointer text-xl text-pink-600 hover:scale-110 transition-transform shadow-sm"
                >
                  ♡
                </button>
              </div>
              <p className="mt-4 mb-1.5 text-[#a77c91] uppercase tracking-wider text-[10px] font-extrabold">
                {product.category}
              </p>
              <h3 className="m-0 mb-2 text-[#372a26] font-serif font-medium text-[25px]">
                {product.name}
              </h3>
              <Link
                href="#"
                className="text-[#8f174d] text-xs font-extrabold uppercase inline-flex gap-1.5 items-center hover:opacity-80 transition-opacity"
              >
                Discover <ArrowRight size={15} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="bg-[#264f44] text-white grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-[8vw] px-6 md:px-[max(8vw,32px)] py-16 md:py-[110px]">
        <div>
          <p className="text-[#ffd0e4] text-[11px] tracking-widest uppercase font-extrabold mb-[15px]">
            Less is more
          </p>
          <h2 className="font-serif font-medium text-[40px] md:text-[clamp(48px,5.3vw,81px)] leading-[0.98] tracking-tight m-0">
            Made with more thought.<br />
            <em className="font-normal text-[#aad8b8] not-italic">Made for tomorrow.</em>
          </h2>
          <p className="max-w-[490px] leading-relaxed text-[#d5e5dc] text-base my-6 md:my-7">
            Better choices, lighter footprints and a commitment to creating products that care for more than just today.
          </p>
          <Link
            className="inline-flex items-center gap-2 text-xs uppercase font-extrabold tracking-wider bg-white text-[#801643] px-5 py-3.5 hover:bg-[#f6efe8] transition-colors"
            href="#"
          >
            Our commitment <ArrowRight size={17} />
          </Link>
        </div>
        <div className="self-end border-t border-white/30 pt-4">
          <div className="flex gap-3 items-center py-4 border-b border-white/30 text-[#e3efe8] font-serif text-lg md:text-xl">
            <Check size={17} className="text-[#aad8b8]" />
            <span>Responsible sourcing</span>
          </div>
          <div className="flex gap-3 items-center py-4 border-b border-white/30 text-[#e3efe8] font-serif text-lg md:text-xl">
            <Check size={17} className="text-[#aad8b8]" />
            <span>Recyclable packaging</span>
          </div>
          <div className="flex gap-3 items-center py-4 border-b border-white/30 text-[#e3efe8] font-serif text-lg md:text-xl">
            <Check size={17} className="text-[#aad8b8]" />
            <span>Kind formulations</span>
          </div>
        </div>
      </section>
    </main>
  );
}
