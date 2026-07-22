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
    <div className="nav-dropdown" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button onClick={onOpen} type="button">
        {label} <ChevronDown size={13} />
      </button>
      {isOpen && (
        <div className="investor-menu">
          {links.map((link) => (
            <Link href={link.href} key={link.title} onClick={onClose}>
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
    <header className="site-header">
      <div className="nav-shell">
        <Link href="/" className="mobile-brand" aria-label="Manola home">
          manola
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/">Home</Link>
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
            <Link href={item.href} key={item.title}>
              {item.title}
            </Link>
          ))}
        </nav>
        <button
          className="mobile-menu"
          aria-label="Open navigation"
          onClick={() => setMobileOpen(true)}
          type="button"
        >
          <Menu size={23} />
        </button>
      </div>

      <button
        className={`drawer-backdrop ${mobileOpen ? "is-open" : ""}`}
        onClick={closeDrawer}
        aria-label="Close navigation"
        tabIndex={mobileOpen ? 0 : -1}
        type="button"
      />

      <aside className={`mobile-panel ${mobileOpen ? "is-open" : ""}`} aria-hidden={!mobileOpen}>
        <form onSubmit={handleSearchSubmit} className="drawer-search">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for products or pages"
            aria-label="Search"
          />
          <button type="submit" aria-label="Perform search" className="search-btn">
            <Search size={21} />
          </button>
          {searchQuery ? (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
              className="clear-search-btn"
            >
              <X size={18} />
            </button>
          ) : (
            <button type="button" onClick={closeDrawer} aria-label="Close navigation">
              <X size={20} />
            </button>
          )}
        </form>

        <div className="drawer-tabs">
          <button
            type="button"
            className={mobileTab === "menu" ? "active" : ""}
            onClick={() => setMobileTab("menu")}
          >
            Menu
          </button>
          <button
            type="button"
            className={mobileTab === "categories" ? "active" : ""}
            onClick={() => setMobileTab("categories")}
          >
            Categories
          </button>
        </div>

        {mobileTab === "menu" ? (
          <nav className="drawer-links" aria-label="Mobile drawer links">
            <Link href="/" onClick={closeDrawer}>
              Home
            </Link>
            {filteredMenuLinks.length === 0 ? (
              <div className="no-search-results">
                No links matching &quot;{searchQuery}&quot;
              </div>
            ) : (
              filteredMenuLinks.map((item) => (
                <Link href={item.href} onClick={closeDrawer} key={item.title}>
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
