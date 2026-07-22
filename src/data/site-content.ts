export const categories = [
  { title: "Personal Care", description: "Skin, hair & intimate care", color: "rose", image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=85" },
  { title: "Home Care", description: "Freshness for every room", color: "emerald", image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=900&q=85" },
  { title: "Laundry Care", description: "Long-lasting fabric fragrance", color: "violet", image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=900&q=85" },
  { title: "Beauty & Fragrance", description: "Memorable sensory experiences", color: "amber", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=85" },
];

export const products = [
  { name: "Rosewood Silk", category: "Fine fragrance", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=85" },
  { name: "Botanical Wash", category: "Personal care", image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=85" },
  { name: "Cotton Bloom", category: "Laundry care", image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=85" },
];

export const aboutLinks = ["Board of Directors", "Mission, Vision & Values", "Our Management Team", "Dividend Distribution Policy", "Business Ethics & Code of Conduct", "Code of Conduct for the Chairperson & Others"];
export const investorLinks = ["Directors' Reports", "AGM Notice", "EGM Notice", "Notice", "Annual Report", "Proxy & Attendance Report", "Shareholding Position", "Unpaid/Unclaimed Dividend", "Dividend Distribution Policy", "C G Compliance Status", "Announcement", "Financial Calendar", "Investor Relations Contact", "BSEC Guidelines"];
export const primaryLinks = ["Product", "Financial Report", "NRC Report", "Share Info", "PSI", "Media", "Contact Us"];

export interface CategoryNavItem {
  id: string;
  title: string;
  href: string;
  children?: CategoryNavItem[];
}

export const categoryNavItems: CategoryNavItem[] = [
  {
    id: "about-us",
    title: "About Us",
    href: "#",
    children: [
      { id: "board-of-directors", title: "Board of Directors", href: "#" },
      { id: "mission-vision-values", title: "Mission, Vision & Values", href: "#" },
      { id: "management-team", title: "Our Management Team", href: "#" },
      { id: "dividend-distribution-policy", title: "Dividend Distribution Policy", href: "#" },
      { id: "business-ethics-code-of-conduct", title: "Business Ethics & Code of Conduct", href: "#" },
      { id: "code-of-conduct-chairperson", title: "Code of Conduct for the Chairperson & Others", href: "#" },
    ],
  },
  {
    id: "investor-relations",
    title: "Investor Relations",
    href: "#",
    children: [
      { id: "directors-reports", title: "Directors' Reports", href: "#" },
      { id: "agm-notice", title: "AGM Notice", href: "#" },
      { id: "egm-notice", title: "EGM Notice", href: "#" },
      { id: "notice", title: "Notice", href: "#" },
      { id: "annual-report", title: "Annual Report", href: "#" },
      { id: "proxy-attendance-report", title: "Proxy & Attendance Report", href: "#" },
      { id: "shareholding-position", title: "Shareholding Position", href: "#" },
      { id: "unpaid-unclaimed-dividend", title: "Unpaid/Unclaimed Dividend", href: "#" },
      { id: "investor-dividend-distribution-policy", title: "Dividend Distribution Policy", href: "#" },
      { id: "cg-compliance-status", title: "CG Compliance Status", href: "#" },
      { id: "announcement", title: "Announcement", href: "#" },
      { id: "financial-calendars", title: "Financial Calendars", href: "#" },
      { id: "investor-relations-contact", title: "Investor Relations Contact", href: "#" },
      { id: "bsec-guidelines", title: "BSEC Guidelines", href: "#" },
    ],
  },
  { id: "product", title: "Product", href: "#" },
  { id: "financial-report", title: "Financial Report", href: "#" },
  { id: "nrc-report", title: "NRC Report", href: "#" },
  { id: "share-info", title: "Share Info", href: "#" },
  { id: "psi", title: "PSI", href: "#" },
  { id: "media", title: "Media", href: "#" },
  { id: "contact-us", title: "Contact Us", href: "#" },
];

