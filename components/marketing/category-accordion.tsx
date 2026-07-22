"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { CategoryNavItem } from "@/src/data/site-content";

interface CategoryAccordionProps {
  items: CategoryNavItem[];
  onNavigate?: () => void;
}

interface CategoryAccordionItemProps {
  item: CategoryNavItem;
  isOpen: boolean;
  onToggle: (id: string) => void;
  onNavigate?: () => void;
  depth?: number;
}

export function CategoryAccordionItem({
  item,
  isOpen,
  onToggle,
  onNavigate,
  depth = 0,
}: CategoryAccordionItemProps) {
  const hasChildren = Boolean(item.children && item.children.length > 0);

  if (!hasChildren) {
    return (
      <Link
        href={item.href || "#"}
        onClick={onNavigate}
        className="category-nav-link"
        style={{ paddingLeft: depth > 0 ? `${16 + depth * 16}px` : undefined }}
      >
        <span>{item.title}</span>
      </Link>
    );
  }

  return (
    <div className={`category-accordion-item ${isOpen ? "is-expanded" : ""}`}>
      <button
        type="button"
        className="category-accordion-header"
        onClick={() => onToggle(item.id)}
        aria-expanded={isOpen}
        style={{ paddingLeft: depth > 0 ? `${16 + depth * 16}px` : undefined }}
      >
        <span>{item.title}</span>
        <span className="category-chevron-box" aria-hidden="true">
          <ChevronDown size={18} className="category-chevron-icon" />
        </span>
      </button>
      <div className="category-accordion-body">
        <div className="category-accordion-content">
          {item.children?.map((child) => (
            <Link
              key={child.id}
              href={child.href || "#"}
              onClick={onNavigate}
              className="category-nav-child-link"
              style={{ paddingLeft: `${32 + depth * 12}px` }}
            >
              <span>{child.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CategoryAccordion({ items, onNavigate }: CategoryAccordionProps) {
  const [openCategoryId, setOpenCategoryId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenCategoryId((prev) => (prev === id ? null : id));
  };

  return (
    <nav className="category-accordion-container" aria-label="Categories navigation">
      {items.map((item) => (
        <CategoryAccordionItem
          key={item.id}
          item={item}
          isOpen={openCategoryId === item.id}
          onToggle={handleToggle}
          onNavigate={onNavigate}
        />
      ))}
    </nav>
  );
}
