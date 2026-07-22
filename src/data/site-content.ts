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

export interface NavLinkItem {
  title: string;
  href: string;
}

export const aboutLinks: NavLinkItem[] = [
  { title: "Board of Directors", href: "/about/board-of-directors" },
  { title: "Mission, Vision & Values", href: "/about/mission-vision-values" },
  { title: "Our Management Team", href: "/about/management-team" },
  { title: "Dividend Distribution Policy", href: "/about/dividend-policy" },
  { title: "Business Ethics & Code of Conduct", href: "/about/business-ethics" },
  { title: "Code of Conduct for the Chairperson & Others", href: "/about/code-of-conduct-chairperson" },
];

export const investorLinks: NavLinkItem[] = [
  { title: "Directors' Reports", href: "/investor-relations/directors-reports" },
  { title: "AGM Notice", href: "/investor-relations/agm-notice" },
  { title: "EGM Notice", href: "/investor-relations/egm-notice" },
  { title: "Notice", href: "/investor-relations/notice" },
  { title: "Annual Report", href: "/investor-relations/annual-report" },
  { title: "Proxy & Attendance Report", href: "/investor-relations/proxy-attendance" },
  { title: "Shareholding Position", href: "/investor-relations/shareholding-position" },
  { title: "Unpaid/Unclaimed Dividend", href: "/investor-relations/unpaid-dividend" },
  { title: "Dividend Distribution Policy", href: "/investor-relations/dividend-policy" },
  { title: "CG Compliance Status", href: "/investor-relations/cg-compliance" },
  { title: "Announcement", href: "/investor-relations/announcement" },
  { title: "Financial Calendars", href: "/investor-relations/financial-calendars" },
  { title: "Investor Relations Contact", href: "/investor-relations/investor-contact" },
  { title: "BSEC Guidelines", href: "/investor-relations/bsec-guidelines" },
];

export const primaryLinks: NavLinkItem[] = [
  { title: "Product", href: "/product" },
  { title: "Financial Report", href: "/financial-report" },
  { title: "NRC Report", href: "/nrc-report" },
  { title: "Share Info", href: "/share-info" },
  { title: "PSI", href: "/psi" },
  { title: "Media", href: "/media" },
  { title: "Contact Us", href: "/contact-us" },
];

export const drawerMenuLinks: NavLinkItem[] = [
  { title: "Shop", href: "/shop" },
  { title: "Blog", href: "/blog" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "About us", href: "/about" },
  { title: "Contact us", href: "/contact-us" },
  { title: "Wishlist", href: "/wishlist" },
  { title: "Compare", href: "/compare" },
  { title: "Login / Register", href: "/login" },
];

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
    href: "/about",
    children: [
      { id: "board-of-directors", title: "Board of Directors", href: "/about/board-of-directors" },
      { id: "mission-vision-values", title: "Mission, Vision & Values", href: "/about/mission-vision-values" },
      { id: "management-team", title: "Our Management Team", href: "/about/management-team" },
      { id: "dividend-distribution-policy", title: "Dividend Distribution Policy", href: "/about/dividend-policy" },
      { id: "business-ethics-code-of-conduct", title: "Business Ethics & Code of Conduct", href: "/about/business-ethics" },
      { id: "code-of-conduct-chairperson", title: "Code of Conduct for the Chairperson & Others", href: "/about/code-of-conduct-chairperson" },
    ],
  },
  {
    id: "investor-relations",
    title: "Investor Relations",
    href: "/investor-relations",
    children: [
      { id: "directors-reports", title: "Directors' Reports", href: "/investor-relations/directors-reports" },
      { id: "agm-notice", title: "AGM Notice", href: "/investor-relations/agm-notice" },
      { id: "egm-notice", title: "EGM Notice", href: "/investor-relations/egm-notice" },
      { id: "notice", title: "Notice", href: "/investor-relations/notice" },
      { id: "annual-report", title: "Annual Report", href: "/investor-relations/annual-report" },
      { id: "proxy-attendance-report", title: "Proxy & Attendance Report", href: "/investor-relations/proxy-attendance" },
      { id: "shareholding-position", title: "Shareholding Position", href: "/investor-relations/shareholding-position" },
      { id: "unpaid-unclaimed-dividend", title: "Unpaid/Unclaimed Dividend", href: "/investor-relations/unpaid-dividend" },
      { id: "investor-dividend-distribution-policy", title: "Dividend Distribution Policy", href: "/investor-relations/dividend-policy" },
      { id: "cg-compliance-status", title: "CG Compliance Status", href: "/investor-relations/cg-compliance" },
      { id: "announcement", title: "Announcement", href: "/investor-relations/announcement" },
      { id: "financial-calendars", title: "Financial Calendars", href: "/investor-relations/financial-calendars" },
      { id: "investor-relations-contact", title: "Investor Relations Contact", href: "/investor-relations/investor-contact" },
      { id: "bsec-guidelines", title: "BSEC Guidelines", href: "/investor-relations/bsec-guidelines" },
    ],
  },
  { id: "product", title: "Product", href: "/product" },
  { id: "financial-report", title: "Financial Report", href: "/financial-report" },
  { id: "nrc-report", title: "NRC Report", href: "/nrc-report" },
  { id: "share-info", title: "Share Info", href: "/share-info" },
  { id: "psi", title: "PSI", href: "/psi" },
  { id: "media", title: "Media", href: "/media" },
  { id: "contact-us", title: "Contact Us", href: "/contact-us" },
];
