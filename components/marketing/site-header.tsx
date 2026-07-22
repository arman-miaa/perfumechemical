"use client";

import { ChevronDown, ChevronRight, Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { aboutLinks, investorLinks, primaryLinks } from "@/src/data/site-content";

type MenuName = "about" | "investor" | null;
type MobileTab = "menu" | "categories";
type DrawerSection = Exclude<MenuName, null>;

function Dropdown({ label, links, isOpen, onOpen, onClose }: { label: string; links: string[]; isOpen: boolean; onOpen: () => void; onClose: () => void }) {
  return <div className="nav-dropdown" onMouseEnter={onOpen} onMouseLeave={onClose}>
    <button onClick={onOpen}>{label} <ChevronDown size={13} /></button>
    {isOpen && <div className="investor-menu">{links.map((link) => <Link href="#" key={link}>{link}</Link>)}</div>}
  </div>;
}

function MobileAccordion({ label, links, isOpen, onToggle, onNavigate }: { label: string; links: string[]; isOpen: boolean; onToggle: () => void; onNavigate: () => void }) {
  return <div className={`drawer-accordion ${isOpen ? "expanded" : ""}`}>
    <button onClick={onToggle}>{label}<ChevronRight size={19} /></button>
    <div className="drawer-submenu">{links.map((link) => <Link href="#" onClick={onNavigate} key={link}>{link}</Link>)}</div>
  </div>;
}

export function SiteHeader() {
  const [activeMenu, setActiveMenu] = useState<MenuName>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileTab, setMobileTab] = useState<MobileTab>("categories");
  const [mobileSections, setMobileSections] = useState<DrawerSection[]>(["about"]);
  const closeMenu = () => setActiveMenu(null);
  const toggleMobileSection = (section: DrawerSection) => setMobileSections((current) => current.includes(section) ? current.filter((item) => item !== section) : [...current, section]);
  const closeDrawer = () => { setMobileOpen(false); setMobileSections(["about"]); };

  return <header className="site-header">
    <div className="nav-shell">
      <Link href="/" className="mobile-brand" aria-label="Manola home">manola</Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <Link href="/">Home</Link>
        <Dropdown label="About us" links={aboutLinks} isOpen={activeMenu === "about"} onOpen={() => setActiveMenu("about")} onClose={closeMenu} />
        <Dropdown label="Investor relations" links={investorLinks} isOpen={activeMenu === "investor"} onOpen={() => setActiveMenu("investor")} onClose={closeMenu} />
        {primaryLinks.map((item) => <Link href="#" key={item}>{item}</Link>)}
      </nav>
      <button className="mobile-menu" aria-label="Open navigation" onClick={() => setMobileOpen(true)}><Menu size={23} /></button>
    </div>
    <button className={`drawer-backdrop ${mobileOpen ? "is-open" : ""}`} onClick={closeDrawer} aria-label="Close navigation" tabIndex={mobileOpen ? 0 : -1} />
    <aside className={`mobile-panel ${mobileOpen ? "is-open" : ""}`} aria-hidden={!mobileOpen}>
      <div className="drawer-search"><input placeholder="Search for products" aria-label="Search for products"/><Search size={23}/><button onClick={closeDrawer} aria-label="Close navigation"><X size={20}/></button></div>
      <div className="drawer-tabs"><button className={mobileTab === "menu" ? "active" : ""} onClick={() => setMobileTab("menu")}>Menu</button><button className={mobileTab === "categories" ? "active" : ""} onClick={() => setMobileTab("categories")}>Categories</button></div>
      {mobileTab === "menu" ? <nav className="drawer-links"><Link href="/" onClick={closeDrawer}>Home</Link>{["Shop", "Blog", "Portfolio", "About us", "Contact us", "Wishlist", "Compare", "Login / Register"].map((item) => <Link href="#" onClick={closeDrawer} key={item}>{item}</Link>)}</nav> : <nav className="drawer-links"><Link href="/" onClick={closeDrawer}>Home</Link><MobileAccordion label="About us" links={aboutLinks} isOpen={mobileSections.includes("about")} onToggle={() => toggleMobileSection("about")} onNavigate={closeDrawer}/><MobileAccordion label="Investor relations" links={investorLinks} isOpen={mobileSections.includes("investor")} onToggle={() => toggleMobileSection("investor")} onNavigate={closeDrawer}/>{primaryLinks.map((item) => <Link href="#" onClick={closeDrawer} key={item}>{item}</Link>)}</nav>}
    </aside>
  </header>;
}
