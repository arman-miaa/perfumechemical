export type Product = {
  id: string;
  name: string;
  category: string;
  type: string;
  price: string;
  priceRaw: number; // useful for sorting or cart calculation
  rating: number;
  reviews: number;
  image: string; // main image
  images: string[]; // gallery images
  badge: string;
  description: string;
  specifications: { label: string; value: string }[];
  stock: number;
  discount?: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Manola Velvet Rose Perfume",
    category: "Fragrance",
    type: "fragrance",
    price: "৳ 2,450",
    priceRaw: 2450,
    rating: 4.9,
    reviews: 148,
    image: "/images/perfume_hero.png",
    images: [
      "/images/perfume_hero.png",
      "/images/article_1.png",
    ],
    badge: "Bestseller",
    description: "A romantic bouquet of damask rose, vanilla, and sweet nectar. Our Velvet Rose formulation is designed for lasting allure, ensuring you leave a memorable impression wherever you go. Perfectly balanced for day and night wear.",
    specifications: [
      { label: "Volume", value: "50ml" },
      { label: "Longevity", value: "8-10 Hours" },
      { label: "Scent Family", value: "Floral / Sweet" },
      { label: "Made In", value: "Bangladesh" },
    ],
    stock: 45,
  },
  {
    id: "2",
    name: "Silk Bloom Moisturizing Body Lotion",
    category: "Body Care",
    type: "body-care",
    price: "৳ 850",
    priceRaw: 850,
    rating: 4.8,
    reviews: 96,
    image: "/images/body_care.png",
    images: [
      "/images/body_care.png",
      "/images/article_2.png",
    ],
    badge: "New Formula",
    description: "Experience deep hydration with our Silk Bloom Body Lotion. Infused with refreshing botanical extracts and Vitamin E, it leaves your skin silky soft without any greasy residue.",
    specifications: [
      { label: "Volume", value: "250ml" },
      { label: "Skin Type", value: "All Skin Types" },
      { label: "Key Ingredient", value: "Shea Butter & Vitamin E" },
      { label: "Dermatologist Tested", value: "Yes" },
    ],
    stock: 120,
  },
  {
    id: "3",
    name: "Fresh Home Botanical Cleaner",
    category: "Home Care",
    type: "home-care",
    price: "৳ 420",
    priceRaw: 420,
    rating: 4.9,
    reviews: 210,
    image: "/images/home_care.png",
    images: [
      "/images/home_care.png",
      "/images/article_3.png",
    ],
    badge: "Eco Pick",
    description: "A powerful, eco-friendly surface cleaner that removes tough stains and grease while leaving a refreshing natural botanical scent behind. Safe for most household surfaces.",
    specifications: [
      { label: "Volume", value: "500ml" },
      { label: "Scent", value: "Citrus & Eucalyptus" },
      { label: "Eco-Friendly", value: "100% Biodegradable" },
      { label: "Usage", value: "Multi-surface" },
    ],
    stock: 200,
  },
  {
    id: "4",
    name: "Golden Oud Eau de Parfum",
    category: "Fragrance",
    type: "fragrance",
    price: "৳ 3,200",
    priceRaw: 3200,
    rating: 5.0,
    reviews: 84,
    image: "/images/quiz_woody.png",
    images: [
      "/images/quiz_woody.png",
      "/images/perfume_hero.png",
    ],
    badge: "Luxury Edition",
    description: "A rich and commanding blend of warm amber, royal oud, and subtle floral spices. The Golden Oud is for those who appreciate deep, long-lasting luxury.",
    specifications: [
      { label: "Volume", value: "100ml" },
      { label: "Longevity", value: "12+ Hours" },
      { label: "Scent Family", value: "Woody / Amber" },
      { label: "Gender", value: "Unisex" },
    ],
    stock: 12,
  },
  {
    id: "5",
    name: "Hydrating Aloe Skin Cream",
    category: "Body Care",
    type: "body-care",
    price: "৳ 680",
    priceRaw: 680,
    rating: 4.7,
    reviews: 112,
    image: "/images/article_2.png",
    images: [
      "/images/article_2.png",
      "/images/body_care.png",
    ],
    badge: "Organic",
    description: "A soothing and highly nourishing cream enriched with 100% natural aloe vera. Perfect for calming irritated skin and providing an instant boost of hydration.",
    specifications: [
      { label: "Volume", value: "200ml" },
      { label: "Skin Type", value: "Dry / Sensitive" },
      { label: "Key Ingredient", value: "Aloe Vera Extract" },
      { label: "Paraben Free", value: "Yes" },
    ],
    stock: 85,
    discount: "10% OFF",
  },
  {
    id: "6",
    name: "Aroma Lavender Room Diffuser",
    category: "Home Care",
    type: "home-care",
    price: "৳ 1,150",
    priceRaw: 1150,
    rating: 4.8,
    reviews: 73,
    image: "/images/article_3.png",
    images: [
      "/images/article_3.png",
      "/images/home_care.png",
    ],
    badge: "Popular",
    description: "Create a serene and calming environment with our Lavender Room Diffuser. The gentle, continuous fragrance diffusion helps to reduce stress and improve sleep quality.",
    specifications: [
      { label: "Volume", value: "150ml" },
      { label: "Duration", value: "Up to 3 months" },
      { label: "Scent", value: "Pure French Lavender" },
      { label: "Includes", value: "6 Reed Sticks" },
    ],
    stock: 30,
  },
];
