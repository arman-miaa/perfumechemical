"use client";

import { ChevronDown, Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  aboutLinks,
  investorLinks,
  primaryLinks,
  drawerMenuLinks,
  categoryNavItems,
  NavLinkItem,
} from "@/src/data/site-content";
import { CategoryAccordion } from "./category-accordion";

type MenuName = "about" | "investor" | null;
type MobileTab = "menu" | "categories";

function Dropdown({
  label,
  links,
  isOpen,
  onOpen,
  onClose,
}: {
  label: string;
  links: NavLinkItem[];
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  return (
    <div className="relative h-full flex items-center" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button
        onClick={onOpen}
        type="button"
        className="h-full flex items-center gap-1 px-2 lg:px-3 text-xs lg:text-sm uppercase font-bold text-[#202020] hover:text-[#56aee4] transition-colors bg-transparent border-0 cursor-pointer whitespace-nowrap"
      >
        {label} <ChevronDown size={13} />
      </button>
      {isOpen && (
        <div className="absolute left-0 top-[50px] w-[220px] py-2.5 bg-white border-0 shadow-[0_5px_13px_rgba(30,24,20,0.12)] z-50">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.title}
              onClick={onClose}
              className="block px-5 py-2 text-xs lg:text-sm text-[#777] hover:text-[#56aee4] hover:bg-[#f8f8f8] transition-colors"
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function SiteHeader() {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState<MenuName>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileTab, setMobileTab] = useState<MobileTab>("categories");
  const [searchQuery, setSearchQuery] = useState("");

  const closeMenu = () => setActiveMenu(null);
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
    <header className="relative z-30 bg-[#fffdf9] border-b border-[#e8e3df]">
      <div className="h-[62px] md:h-[51px] flex items-center justify-between md:justify-center max-w-[1240px] mx-auto px-5 md:px-2.5">
        <Link href="/" className="md:hidden font-serif font-bold text-2xl text-[#8f174d] tracking-tighter" aria-label="Manola home">
          manola
        </Link>
        <nav className="hidden md:flex items-center h-full gap-0" aria-label="Primary navigation">
          <Link href="/" className="h-full flex items-center px-2 lg:px-3 text-xs lg:text-sm uppercase font-bold text-[#64b6e8] hover:opacity-80 transition-opacity whitespace-nowrap">
            Home
          </Link>
          <Dropdown
            label="About us"
            links={aboutLinks}
            isOpen={activeMenu === "about"}
            onOpen={() => setActiveMenu("about")}
            onClose={closeMenu}
          />
          <Dropdown
            label="Investor relations"
            links={investorLinks}
            isOpen={activeMenu === "investor"}
            onOpen={() => setActiveMenu("investor")}
            onClose={closeMenu}
          />
          {primaryLinks.map((item) => (
            <Link
              href={item.href}
              key={item.title}
              className="h-full flex items-center px-2 lg:px-3 text-xs lg:text-sm uppercase font-bold text-[#202020] hover:text-[#56aee4] transition-colors whitespace-nowrap"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <button
          className="block md:hidden border-0 bg-transparent cursor-pointer text-[#493c36] p-1"
          aria-label="Open navigation"
          onClick={() => setMobileOpen(true)}
          type="button"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Drawer Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-[#19110f]/35 z-40 transition-opacity duration-300"
          onClick={closeDrawer}
          aria-label="Close navigation"
          role="button"
          tabIndex={0}
        />
      )}

      {/* Mobile Drawer Panel */}
      <aside
        className={`fixed left-0 top-0 bottom-0 w-[min(86vw,355px)] bg-white z-50 flex flex-col shadow-[12px_0_32px_rgba(24,17,14,0.14)] transition-transform duration-350 ease-out overflow-y-auto ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!mobileOpen}
      >
        <form onSubmit={handleSearchSubmit} className="flex h-[69px] items-center gap-3 px-5 border-b border-[#e7e3e1] text-[#6c6865]">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for products or pages"
            aria-label="Search"
            className="min-w-0 flex-1 border-0 outline-none text-xs text-[#433b37] placeholder:text-[#6f6966] placeholder:font-semibold bg-transparent"
          />
          <button type="submit" aria-label="Perform search" className="grid place-items-center p-1.5 border-0 bg-transparent text-[#4d4946] cursor-pointer">
            <Search size={20} />
          </button>
          {searchQuery ? (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
              className="grid place-items-center p-1.5 border-0 bg-transparent text-[#4d4946] cursor-pointer"
            >
              <X size={18} />
            </button>
          ) : (
            <button type="button" onClick={closeDrawer} aria-label="Close navigation" className="grid place-items-center p-1.5 border-0 bg-transparent text-[#4d4946] cursor-pointer">
              <X size={20} />
            </button>
          )}
        </form>

        <div className="grid grid-cols-2 h-[52px] bg-[#f9f9f9] border-b border-[#ddd]">
          <button
            type="button"
            className={`border-0 border-r border-[#eee] bg-transparent text-[#8e8986] uppercase text-xs font-medium cursor-pointer transition-colors ${
              mobileTab === "menu" ? "text-[#17202a] bg-white border-b-2 border-b-[#66b8ec]" : ""
            }`}
            onClick={() => setMobileTab("menu")}
          >
            Menu
          </button>
          <button
            type="button"
            className={`border-0 bg-transparent text-[#8e8986] uppercase text-xs font-medium cursor-pointer transition-colors ${
              mobileTab === "categories" ? "text-[#17202a] bg-white border-b-2 border-b-[#66b8ec]" : ""
            }`}
            onClick={() => setMobileTab("categories")}
          >
            Categories
          </button>
        </div>

        {mobileTab === "menu" ? (
          <nav className="flex flex-col" aria-label="Mobile drawer links">
            <Link
              href="/"
              onClick={closeDrawer}
              className="flex items-center justify-between min-h-[50px] px-5 border-b border-[#e5e2df] bg-white text-[#16202b] text-xs font-semibold uppercase hover:bg-[#faf8f6] hover:text-[#8f174d] transition-colors"
            >
              Home
            </Link>
            {filteredMenuLinks.length === 0 ? (
              <div className="p-6 text-xs text-[#88827e] text-center italic">
                No links matching &quot;{searchQuery}&quot;
              </div>
            ) : (
              filteredMenuLinks.map((item) => (
                <Link
                  href={item.href}
                  onClick={closeDrawer}
                  key={item.title}
                  className="flex items-center justify-between min-h-[50px] px-5 border-b border-[#e5e2df] bg-white text-[#16202b] text-xs font-semibold uppercase hover:bg-[#faf8f6] hover:text-[#8f174d] transition-colors"
                >
                  {item.title}
                </Link>
              ))
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
