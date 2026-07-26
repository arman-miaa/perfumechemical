"use client";

import {
  ChevronDown,
  Facebook,
  Heart,
  Instagram,
  Menu,
  Search,
  ShoppingBag,
  Sparkles,
  User,
  X,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  aboutLinks,
  categoryNavItems,
  drawerMenuLinks,
  investorLinks,
  NavLinkItem,
  primaryLinks,
} from "@/src/data/site-content";
import { CategoryAccordion } from "./category-accordion";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

type MobileTab = "menu" | "categories";

// Inline TikTok icon component for completeness
const TiktokIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 1 1-2.896-2.896c.244 0 .478.03.702.085V9.382a6.34 6.34 0 0 0-.702-.039 6.341 6.341 0 1 0 6.341 6.341V9.08a8.212 8.212 0 0 0 4.887 1.583V7.218a4.83 4.83 0 0 1-1.117-.532z" />
  </svg>
);

function Dropdown({
  label,
  links,
  pathname,
  basePath,
}: {
  label: string;
  links: NavLinkItem[];
  pathname: string;
  basePath: string;
}) {
  const [open, setOpen] = useState(false);
  const isDropdownActive =
    pathname.startsWith(basePath) ||
    links.some((link) => link.href === pathname);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={`flex items-center gap-1.5 px-2 lg:px-3 py-2 rounded-full text-[11px] lg:text-[13px] uppercase font-bold tracking-wide transition-all border-0 cursor-pointer whitespace-nowrap ${isDropdownActive
            ? "bg-rose-600 text-white shadow-sm shadow-rose-200"
            : "bg-transparent text-slate-700 hover:text-rose-600 hover:bg-rose-50"
          }`}
      >
        <span>{label}</span>
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          className="absolute left-0 top-full pt-1 z-[200]"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <div className="w-[260px] py-2 bg-white rounded-2xl border border-slate-100 shadow-[0_12px_32px_rgba(0,0,0,0.18)]">
            <div className="px-3 py-1.5 text-[10px] uppercase tracking-wider font-extrabold text-slate-400 border-b border-slate-100 mb-1">
              {label}
            </div>
            <div className="max-h-[400px] overflow-y-auto">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    href={link.href}
                    key={link.title}
                    className={`flex items-center justify-between px-4 py-2.5 text-xs font-medium transition-all mx-1 my-0.5 rounded-xl ${isActive
                        ? "text-rose-600 bg-rose-50 font-bold"
                        : "text-slate-600 hover:text-rose-600 hover:bg-slate-50"
                      }`}
                  >
                    <span>{link.title}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function SiteHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileTab, setMobileTab] = useState<MobileTab>("categories");
  const [searchQuery, setSearchQuery] = useState("");

  const wishlistCount = useSelector((state: RootState) => state.wishlist.items.length);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => total + (item.priceRaw * item.quantity), 0);

  const closeDrawer = () => {
    setMobileOpen(false);
    setSearchQuery("");
  };

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/product?search=${encodeURIComponent(searchQuery.trim())}`);
      closeDrawer();
    }
  };

  const filteredMenuLinks = drawerMenuLinks.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
  );

  return (
    <header className="relative z-30 bg-white overflow-x-hidden">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-pink-700 via-rose-600 to-pink-700 text-white text-xs py-2 px-4 overflow-hidden">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          <div className="flex-1 flex items-center justify-center md:justify-start gap-2">
            <Sparkles size={13} className="text-pink-200 hidden sm:inline-block" />
            <span className="font-medium tracking-wide text-center md:text-left text-[11px] text-pink-100">
              Welcome To <span className="text-white font-semibold">Perfume Chemical Industries PLC.</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-3 text-white/90 shrink-0">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-white hover:scale-110 transition-all"
            >
              <Facebook size={14} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-white hover:scale-110 transition-all"
            >
              <Instagram size={14} />
            </a>
            <a
              href="#"
              aria-label="Youtube"
              className="hover:text-white hover:scale-110 transition-all"
            >
              <Youtube size={14} />
            </a>
            <a
              href="#"
              aria-label="Tiktok"
              className="hover:text-white hover:scale-110 transition-all"
            >
              <TiktokIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Logo & Utility Header */}
      <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-3.5 border-b border-slate-100 overflow-hidden">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Brand / Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0" aria-label="Home">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-tr from-rose-500 to-pink-500 flex items-center justify-center text-white shadow-md shadow-rose-200 group-hover:scale-105 transition-all">
              <span className="font-serif font-black text-lg sm:text-xl tracking-tighter">M</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg sm:text-xl md:text-2xl text-rose-700 tracking-tight group-hover:text-rose-600 transition-colors">
                ম্যানোলা
              </span>
              <span className="text-[9px] sm:text-[10px] text-slate-500 font-medium tracking-wider uppercase -mt-0.5 hidden sm:block">
                অমলিন সুরভি অনন্যা
              </span>
            </div>
          </Link>

          {/* Center Search Input (Desktop) */}
          <form
            onSubmit={handleSearchSubmit}
            className="hidden md:flex flex-1 max-w-md mx-6 relative"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products, reports, categories..."
              className="w-full bg-slate-50 hover:bg-slate-100/80 focus:bg-white border border-slate-200 focus:border-rose-400 focus:ring-4 focus:ring-rose-100/60 rounded-full py-2 pl-4 pr-10 text-xs text-slate-800 placeholder:text-slate-400 transition-all outline-none"
            />
            <button
              type="submit"
              aria-label="Search"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 bg-rose-600 hover:bg-rose-700 text-white rounded-full flex items-center justify-center transition-all shadow-sm cursor-pointer"
            >
              <Search size={13} />
            </button>
          </form>

          {/* Right Actions: Account, Wishlist, Cart */}
          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
            {/* User Account Icon */}
            <Link
              href="/login"
              className="hidden sm:flex p-2 text-slate-700 hover:text-rose-600 hover:bg-rose-50 rounded-full transition-all duration-200"
              aria-label="Account / Login"
              title="Account / Login"
            >
              <User size={20} />
            </Link>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="relative p-2 text-slate-700 hover:text-rose-600 hover:bg-rose-50 rounded-full transition-all duration-200"
              aria-label="Wishlist"
              title="Wishlist"
            >
              <Heart size={20} />
              <span className="absolute top-0 right-0 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-xs">
                {wishlistCount}
              </span>
            </Link>

            {/* Cart Capsule Widget */}
            <Link
              href="/shop"
              className="flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-rose-50 to-pink-50 hover:from-rose-500 hover:to-pink-600 border border-rose-200/80 text-rose-700 hover:text-white px-2.5 sm:px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 shadow-sm group cursor-pointer"
            >
              <div className="relative">
                <ShoppingBag size={16} className="sm:w-[18px] sm:h-[18px] group-hover:scale-110 transition-transform" />
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-rose-600 group-hover:bg-white group-hover:text-rose-600 text-white text-[9px] font-extrabold rounded-full flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              </div>
              <span className="tracking-tight font-extrabold hidden sm:inline-block">{cartTotal.toLocaleString()}৳</span>
            </Link>

            {/* Mobile Drawer Trigger */}
            <button
              className="block md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-xl transition-all cursor-pointer"
              aria-label="Open navigation"
              onClick={() => setMobileOpen(true)}
              type="button"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>

        {/* Mobile Search Input */}
        <div className="mt-3 md:hidden">
          <form onSubmit={handleSearchSubmit} className="flex relative w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products, reports, categories..."
              className="w-full bg-slate-50 hover:bg-slate-100/80 focus:bg-white border border-slate-200 focus:border-rose-400 focus:ring-4 focus:ring-rose-100/60 rounded-full py-2 pl-4 pr-10 text-xs text-slate-800 placeholder:text-slate-400 transition-all outline-none"
            />
            <button
              type="submit"
              aria-label="Search"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 bg-rose-600 hover:bg-rose-700 text-white rounded-full flex items-center justify-center transition-all shadow-sm cursor-pointer"
            >
              <Search size={13} />
            </button>
          </form>
        </div>
      </div>

      {/* Primary Sticky Nav Bar */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs overflow-visible">
        <div className="max-w-[1280px] mx-auto px-4 overflow-visible">
          <nav
            className="hidden md:flex items-center justify-center gap-0.5 lg:gap-1 py-1.5 overflow-visible"
            aria-label="Primary navigation"
          >
            <Link
              href="/"
              className={`px-2 lg:px-3 py-1.5 rounded-full text-[11px] lg:text-[13px] uppercase font-bold tracking-wide transition-all whitespace-nowrap ${pathname === "/"
                  ? "bg-rose-600 text-white shadow-sm shadow-rose-200"
                  : "text-slate-700 hover:text-rose-600 hover:bg-rose-50"
                }`}
            >
              Home
            </Link>

            <Dropdown
              label="About us"
              links={aboutLinks}
              pathname={pathname}
              basePath="/about"
            />

            <Dropdown
              label="Investor relations"
              links={investorLinks}
              pathname={pathname}
              basePath="/investor-relations"
            />

            {primaryLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  href={item.href}
                  key={item.title}
                  className={`px-2 lg:px-3 py-1.5 rounded-full text-[11px] lg:text-[13px] uppercase font-bold tracking-wide transition-all whitespace-nowrap ${isActive
                      ? "bg-rose-600 text-white shadow-sm shadow-rose-200"
                      : "text-slate-700 hover:text-rose-600 hover:bg-rose-50"
                    }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Drawer Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 transition-opacity duration-300"
          onClick={closeDrawer}
          aria-label="Close navigation"
          role="button"
          tabIndex={0}
        />
      )}

      {/* Mobile Drawer Panel */}
      <aside
        className={`fixed left-0 top-0 bottom-0 w-[min(86vw,360px)] bg-white z-50 flex flex-col shadow-2xl transition-transform duration-300 ease-out overflow-y-auto ${mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        aria-hidden={!mobileOpen}
      >
        {/* Drawer Header */}
        <div className="flex h-[64px] items-center justify-between px-5 border-b border-slate-100 bg-white shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-rose-500 to-pink-500 flex items-center justify-center text-white shadow-sm shadow-rose-200">
              <span className="font-serif font-black text-base tracking-tighter">M</span>
            </div>
            <span className="font-serif font-bold text-lg text-rose-700 tracking-tight">
              ম্যানোলা
            </span>
          </div>
          <button
            type="button"
            onClick={closeDrawer}
            aria-label="Close navigation"
            className="grid place-items-center p-2 text-slate-500 hover:bg-slate-100 hover:text-rose-600 rounded-full transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Mobile Navigation Tabs */}
        <div className="grid grid-cols-2 h-[48px] bg-slate-50 border-b border-slate-200/80">
          <button
            type="button"
            className={`border-0 text-xs font-bold uppercase tracking-wider cursor-pointer transition-all ${mobileTab === "menu"
                ? "text-rose-600 bg-white border-b-2 border-b-rose-600 shadow-2xs"
                : "text-slate-500 hover:text-slate-800"
              }`}
            onClick={() => setMobileTab("menu")}
          >
            Menu
          </button>
          <button
            type="button"
            className={`border-0 text-xs font-bold uppercase tracking-wider cursor-pointer transition-all ${mobileTab === "categories"
                ? "text-rose-600 bg-white border-b-2 border-b-rose-600 shadow-2xs"
                : "text-slate-500 hover:text-slate-800"
              }`}
            onClick={() => setMobileTab("categories")}
          >
            Categories
          </button>
        </div>

        {mobileTab === "menu" ? (
          <nav className="flex flex-col py-2" aria-label="Mobile drawer links">
            <Link
              href="/"
              onClick={closeDrawer}
              className={`flex items-center justify-between min-h-[48px] px-5 text-xs font-bold uppercase tracking-wide border-b border-slate-100 transition-colors ${pathname === "/"
                  ? "text-rose-600 bg-rose-50/60 font-extrabold"
                  : "text-slate-700 hover:bg-slate-50 hover:text-rose-600"
                }`}
            >
              Home
            </Link>
            {filteredMenuLinks.length === 0 ? (
              <div className="p-6 text-xs text-slate-400 text-center italic">
                No links matching &quot;{searchQuery}&quot;
              </div>
            ) : (
              filteredMenuLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    href={item.href}
                    onClick={closeDrawer}
                    key={item.title}
                    className={`flex items-center justify-between min-h-[48px] px-5 text-xs font-bold uppercase tracking-wide border-b border-slate-100 transition-colors ${isActive
                        ? "text-rose-600 bg-rose-50/60 font-extrabold"
                        : "text-slate-700 hover:bg-slate-50 hover:text-rose-600"
                      }`}
                  >
                    <span>{item.title}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-600" />
                    )}
                  </Link>
                );
              })
            )}
          </nav>
        ) : (
          <CategoryAccordion
            items={categoryNavItems}
            onNavigate={closeDrawer}
            searchQuery={searchQuery}
          />
        )}
      </aside>
    </header>
  );
}
