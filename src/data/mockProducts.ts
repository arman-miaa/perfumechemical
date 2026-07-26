export type Product = {
  id: string;
  name: string;
  category: string;
  type: string;
  price: string;
  priceRaw: number;
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  badge: string;
  description: string;
  specifications: { label: string; value: string }[];
  stock: number;
  discount?: string;
};

const imageMap = {
  fragrance: ["/images/perfume_hero.png", "/images/quiz_woody.png", "/images/article_1.png", "/images/specialty_chemicals.png"],
  body_care: ["/images/body_care.png", "/images/article_2.png"],
  home_care: ["/images/home_care.png", "/images/article_3.png"],
};

export const products: Product[] = Array.from({ length: 30 }).map((_, i) => {
  const typeRoll = i % 3;
  let type = "fragrance";
  let category = "Fragrance";
  let basePrice = 2000;
  let images = imageMap.fragrance;

  if (typeRoll === 1) {
    type = "body-care";
    category = "Body Care";
    basePrice = 800;
    images = imageMap.body_care;
  } else if (typeRoll === 2) {
    type = "home-care";
    category = "Home Care";
    basePrice = 1200;
    images = imageMap.home_care;
  }

  const priceRaw = basePrice + (i * 150) % 1000;
  
  return {
    id: (i + 1).toString(),
    name: `${category} Signature Edition ${i + 1}`,
    category,
    type,
    price: `৳ ${priceRaw.toLocaleString()}`,
    priceRaw,
    rating: 4 + (i % 10) / 10,
    reviews: 50 + (i * 7) % 200,
    image: images[i % images.length],
    images: [images[i % images.length], images[(i + 1) % images.length]],
    badge: i % 4 === 0 ? "Bestseller" : i % 5 === 0 ? "New Arrival" : "",
    description: `Experience the finest quality with our ${category} Signature Edition ${i + 1}. Carefully formulated with premium ingredients to provide an exceptional sensory experience.`,
    specifications: [
      { label: "Volume", value: type === "fragrance" ? "50ml" : "250ml" },
      { label: "Origin", value: "Bangladesh" },
    ],
    stock: 20 + i * 2,
    discount: i % 7 === 0 ? "10% OFF" : undefined,
  };
});
