"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Heart, 
  Star, 
  ShoppingCart, 
  Minus, 
  Plus, 
  ChevronRight, 
  Check, 
  ShieldCheck, 
  Truck,
  RotateCcw
} from "lucide-react";
import { products } from "@/src/data/mockProducts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { toggleWishlist } from "@/redux/features/wishlistSlice";
import { addToCart } from "@/redux/features/cartSlice";
import { ProductCard } from "@/components/shared/ProductCard";

interface ProductDetailsProps {
  id: string;
}

export function ProductDetails({ id }: ProductDetailsProps) {
  const product = products.find((p) => p.id === id);
  const dispatch = useDispatch();
  const wishlist = useSelector((state: RootState) => state.wishlist.items);
  const isWished = product ? wishlist.includes(product.id) : false;

  const [mainImage, setMainImage] = useState(product?.images[0] || "");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"desc" | "spec">("desc");

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#fffdf9] text-stone-800">
        <h2 className="font-serif text-3xl font-medium text-stone-900 mb-4">Product Not Found</h2>
        <p className="text-stone-500 mb-6">The formulation you are looking for does not exist or has been removed.</p>
        <Link
          href="/#products"
          className="px-6 py-3 rounded-xl bg-pink-700 hover:bg-pink-600 text-white text-xs font-extrabold uppercase tracking-wider transition-colors"
        >
          Return to Collections
        </Link>
      </div>
    );
  }

  // Related products (same category, excluding current)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleQuantity = (type: "inc" | "dec") => {
    if (type === "dec" && quantity > 1) setQuantity(quantity - 1);
    if (type === "inc" && quantity < product.stock) setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({
        id: product.id,
        name: product.name,
        priceRaw: product.priceRaw,
        image: product.image,
        quantity: quantity,
      }));
      // Optional: Add a toast notification here if a toast library is available
    }
  };

  return (
    <main className="bg-[#fffdf9] text-stone-800 pb-20 pt-8">
      {/* Breadcrumbs */}
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 mb-8">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500">
          <Link href="/" className="hover:text-pink-700 transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link href="/#products" className="hover:text-pink-700 transition-colors">{product.category}</Link>
          <ChevronRight size={14} />
          <span className="text-stone-900 truncate">{product.name}</span>
        </div>
      </div>

      <section className="max-w-[1280px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
        {/* Image Gallery */}
        <div className="flex flex-col gap-4">
          <div className="aspect-[4/5] sm:aspect-square bg-stone-100 rounded-3xl overflow-hidden relative border border-stone-200">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <span className="absolute top-6 left-6 bg-pink-700 text-white text-xs uppercase font-extrabold tracking-wider px-3 py-1.5 rounded-md shadow-md">
                {product.badge}
              </span>
            )}
            {product.discount && (
              <span className="absolute top-6 right-6 bg-amber-500 text-white text-xs uppercase font-extrabold tracking-wider px-3 py-1.5 rounded-md shadow-md">
                {product.discount}
              </span>
            )}
          </div>
          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setMainImage(img)}
                  className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                    mainImage === img ? "border-pink-700 shadow-md" : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <div className="mb-6 border-b border-stone-200 pb-6">
            <span className="text-pink-700 text-xs uppercase font-extrabold tracking-widest mb-2 block">
              {product.category}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-stone-900 mb-4">
              {product.name}
            </h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-amber-500">
                <Star size={18} fill="currentColor" />
                <span className="font-bold text-stone-900">{product.rating}</span>
                <span className="text-stone-500 text-sm font-normal">({product.reviews} reviews)</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-stone-300" />
              <span className={`text-sm font-bold ${product.stock > 0 ? "text-emerald-600" : "text-rose-600"}`}>
                {product.stock > 0 ? "In Stock" : "Out of Stock"}
              </span>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-end gap-3 mb-4">
              <span className="text-3xl font-bold text-stone-900">{product.price}</span>
              {product.discount && (
                <span className="text-stone-400 line-through mb-1 text-lg">
                  ৳ {(product.priceRaw * 1.1).toFixed(0)}
                </span>
              )}
            </div>
            <p className="text-stone-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="mb-8">
            <span className="block text-xs uppercase font-extrabold tracking-wider text-stone-900 mb-3">
              Quantity
            </span>
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-stone-100 rounded-xl border border-stone-200 p-1">
                <button 
                  onClick={() => handleQuantity("dec")}
                  className="w-10 h-10 flex items-center justify-center text-stone-600 hover:text-stone-900 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer disabled:opacity-50"
                  disabled={quantity <= 1}
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center font-bold text-stone-900">{quantity}</span>
                <button 
                  onClick={() => handleQuantity("inc")}
                  className="w-10 h-10 flex items-center justify-center text-stone-600 hover:text-stone-900 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer disabled:opacity-50"
                  disabled={quantity >= product.stock}
                >
                  <Plus size={16} />
                </button>
              </div>
              <p className="text-xs text-stone-500">
                Only <span className="font-bold text-stone-900">{product.stock}</span> items left!
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button 
              onClick={handleAddToCart}
              className="flex-1 py-4 px-6 bg-pink-700 hover:bg-pink-600 text-white text-sm font-extrabold uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-pink-900/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <ShoppingCart size={18} /> Add to Cart
            </button>
            <button
              onClick={() => dispatch(toggleWishlist(product.id))}
              className={`w-full sm:w-auto px-6 py-4 rounded-xl border-2 flex items-center justify-center gap-2 transition-all font-extrabold text-sm uppercase tracking-wider cursor-pointer ${
                isWished 
                  ? "bg-rose-50 border-rose-200 text-rose-600" 
                  : "bg-white border-stone-200 text-stone-700 hover:border-pink-300 hover:text-pink-700"
              }`}
            >
              <Heart size={18} fill={isWished ? "currentColor" : "none"} />
              {isWished ? "Saved" : "Save"}
            </button>
          </div>

          {/* Guarantees */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-y border-stone-200">
            <div className="flex items-center gap-3 text-sm font-bold text-stone-700">
              <ShieldCheck className="text-pink-600" size={20} />
              100% Authentic Product
            </div>
            <div className="flex items-center gap-3 text-sm font-bold text-stone-700">
              <Truck className="text-pink-600" size={20} />
              Fast Nationwide Delivery
            </div>
            <div className="flex items-center gap-3 text-sm font-bold text-stone-700">
              <RotateCcw className="text-pink-600" size={20} />
              7-Day Return Policy
            </div>
            <div className="flex items-center gap-3 text-sm font-bold text-stone-700">
              <Check className="text-pink-600" size={20} />
              Dermatologically Tested
            </div>
          </div>
        </div>
      </section>

      {/* Tabs: Description & Specs */}
      <section className="max-w-[1280px] mx-auto px-5 sm:px-8 mb-24">
        <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm">
          <div className="flex border-b border-stone-200 bg-stone-50">
            <button
              onClick={() => setActiveTab("desc")}
              className={`flex-1 py-5 text-sm sm:text-base font-extrabold uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === "desc" ? "text-pink-700 bg-white border-b-2 border-pink-700" : "text-stone-500 hover:text-stone-800"
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab("spec")}
              className={`flex-1 py-5 text-sm sm:text-base font-extrabold uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === "spec" ? "text-pink-700 bg-white border-b-2 border-pink-700" : "text-stone-500 hover:text-stone-800"
              }`}
            >
              Specifications
            </button>
          </div>
          
          <div className="p-8 sm:p-12">
            {activeTab === "desc" && (
              <div className="max-w-3xl">
                <h3 className="font-serif text-2xl font-medium text-stone-900 mb-6">The Details</h3>
                <p className="text-stone-600 leading-relaxed mb-6">
                  {product.description}
                </p>
                <p className="text-stone-600 leading-relaxed">
                  Crafted with meticulous attention to detail, this product represents the pinnacle of our formulation expertise. 
                  We ethically source only the highest quality ingredients to ensure maximum efficacy and sensory delight. 
                  Perfect for daily use or special occasions, it is designed to seamlessly integrate into your routine while elevating the experience.
                </p>
              </div>
            )}

            {activeTab === "spec" && (
              <div className="max-w-2xl">
                <h3 className="font-serif text-2xl font-medium text-stone-900 mb-6">Technical Specifications</h3>
                <div className="border border-stone-200 rounded-xl overflow-hidden">
                  {product.specifications.map((spec, idx) => (
                    <div 
                      key={idx} 
                      className={`flex items-center p-4 text-sm ${
                        idx !== product.specifications.length - 1 ? "border-b border-stone-200" : ""
                      } ${idx % 2 === 0 ? "bg-stone-50" : "bg-white"}`}
                    >
                      <span className="w-1/3 font-bold text-stone-900">{spec.label}</span>
                      <span className="w-2/3 text-stone-600">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-stone-50 py-20 border-t border-stone-200/80">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
            <div className="text-center mb-12">
              <span className="text-pink-700 text-xs uppercase font-extrabold tracking-widest">
                Explore More
              </span>
              <h2 className="font-serif text-3xl font-medium tracking-tight text-stone-900 mt-2">
                Similar Formulations
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {relatedProducts.map((rp) => (
                <ProductCard key={rp.id} product={rp} />
              ))}
            </div>
          </div>
        </section>
      )}

    </main>
  );
}
