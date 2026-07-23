"use client";

import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  ChevronUp,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Twitter,
} from "lucide-react";

export function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 relative overflow-hidden border-t border-stone-800/80">
      {/* Decorative subtle ambient glows */}
      <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-pink-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] bg-rose-900/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 pt-16 pb-12 relative z-10">
        
        {/* Top Newsletter & VIP Join Card */}
        <div className="bg-gradient-to-r from-stone-900/90 via-stone-900/60 to-pink-950/40 border border-stone-800/80 rounded-3xl p-6 sm:p-10 mb-16 shadow-2xl backdrop-blur-sm grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <ShieldCheck size={14} /> VIP Club Membership
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium tracking-tight mb-2">
              Unlock 10% Off Your First Order
            </h3>
            <p className="text-stone-400 text-sm leading-relaxed max-w-lg">
              Subscribe to get exclusive access to limited-edition scent drops, formulation insights, and corporate updates.
            </p>
          </div>
          <div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3"
            >
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-500 size-4" />
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  className="w-full pl-11 pr-4 py-3.5 bg-stone-950/80 border border-stone-800 rounded-xl text-white placeholder:text-stone-500 text-sm focus:outline-none focus:border-pink-500/60 focus:ring-1 focus:ring-pink-500/60 transition-all"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3.5 bg-pink-700 hover:bg-pink-600 text-white text-xs uppercase font-extrabold tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-pink-900/20 shrink-0"
              >
                Join VIP <ArrowRight size={16} />
              </button>
            </form>
            <p className="text-[11px] text-stone-500 mt-2.5">
              By subscribing, you agree to our Privacy Policy. No spam, ever.
            </p>
          </div>
        </div>

        {/* 4 Column Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-16 border-b border-stone-800/80">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block font-serif font-bold text-3xl text-white tracking-tighter hover:text-pink-400 transition-colors">
              manola<span className="text-pink-500">.</span>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
              Formulating standard-setting fragrances, personal care essentials, and specialty chemical solutions with elegance and care.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-pink-400 hover:border-pink-500/50 hover:bg-pink-950/30 transition-all"
              >
                <Instagram size={17} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-pink-400 hover:border-pink-500/50 hover:bg-pink-950/30 transition-all"
              >
                <Facebook size={17} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-pink-400 hover:border-pink-500/50 hover:bg-pink-950/30 transition-all"
              >
                <Linkedin size={17} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-pink-400 hover:border-pink-500/50 hover:bg-pink-950/30 transition-all"
              >
                <Twitter size={17} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-pink-400 hover:border-pink-500/50 hover:bg-pink-950/30 transition-all"
              >
                <Youtube size={17} />
              </a>
            </div>
          </div>

          {/* Col 2: Shop & Categories */}
          <div>
            <h4 className="text-white text-xs uppercase font-extrabold tracking-widest mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500" /> Shop & Explore
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/product?category=fragrance" className="hover:text-white hover:translate-x-1 inline-block transition-all text-stone-400">
                  Luxury Fragrances
                </Link>
              </li>
              <li>
                <Link href="/product?category=body-care" className="hover:text-white hover:translate-x-1 inline-block transition-all text-stone-400">
                  Personal & Body Care
                </Link>
              </li>
              <li>
                <Link href="/product?category=home-care" className="hover:text-white hover:translate-x-1 inline-block transition-all text-stone-400">
                  Home Care Essentials
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-white hover:translate-x-1 inline-block transition-all text-stone-400">
                  New Arrivals & Bestsellers
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white hover:translate-x-1 inline-block transition-all text-stone-400">
                  Specialty Formulations
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Investor Relations & Corporate */}
          <div>
            <h4 className="text-white text-xs uppercase font-extrabold tracking-widest mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500" /> Investor Relations
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/investor-relations/annual-report" className="hover:text-white hover:translate-x-1 inline-block transition-all text-stone-400">
                  Annual & Quarterly Reports
                </Link>
              </li>
              <li>
                <Link href="/investor-relations/shareholding-position" className="hover:text-white hover:translate-x-1 inline-block transition-all text-stone-400">
                  Shareholding Position
                </Link>
              </li>
              <li>
                <Link href="/investor-relations/agm-notice" className="hover:text-white hover:translate-x-1 inline-block transition-all text-stone-400">
                  AGM / EGM Notices
                </Link>
              </li>
              <li>
                <Link href="/about/board-of-directors" className="hover:text-white hover:translate-x-1 inline-block transition-all text-stone-400">
                  Board of Directors
                </Link>
              </li>
              <li>
                <Link href="/investor-relations/bsec-guidelines" className="hover:text-white hover:translate-x-1 inline-block transition-all text-stone-400">
                  BSEC Corporate Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office info */}
          <div>
            <h4 className="text-white text-xs uppercase font-extrabold tracking-widest mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500" /> Contact Headquarters
            </h4>
            <div className="space-y-4 text-sm text-stone-400">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-pink-400 shrink-0 mt-0.5" />
                <span>Level 12, Manola Corporate Tower, Gulshan-2, Dhaka-1212, Bangladesh</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-pink-400 shrink-0" />
                <span>+880 2 988 1234 / +880 1700 000000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-pink-400 shrink-0" />
                <span>info@manolachemical.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Payment Badges, Scroll to Top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Manola Chemical Industries Ltd. All rights reserved.
          </div>

          {/* Accepted Payment Badges */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] text-stone-500 uppercase tracking-wider mr-2 font-semibold">Secure Payment:</span>
            <span className="px-2.5 py-1 rounded bg-stone-900 border border-stone-800 text-stone-300 font-bold text-[11px]">bKash</span>
            <span className="px-2.5 py-1 rounded bg-stone-900 border border-stone-800 text-stone-300 font-bold text-[11px]">Nagad</span>
            <span className="px-2.5 py-1 rounded bg-stone-900 border border-stone-800 text-stone-300 font-bold text-[11px]">VISA</span>
            <span className="px-2.5 py-1 rounded bg-stone-900 border border-stone-800 text-stone-300 font-bold text-[11px]">Mastercard</span>
            <span className="px-2.5 py-1 rounded bg-stone-900 border border-stone-800 text-stone-300 font-bold text-[11px]">Cash on Delivery</span>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-300 text-xs transition-colors cursor-pointer"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ChevronUp size={15} />
          </button>
        </div>

      </div>
    </footer>
  );
}
