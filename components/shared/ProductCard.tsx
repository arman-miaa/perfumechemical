import React from "react";
import Link from "next/link";
import { Heart, Star, ShoppingBag } from "lucide-react";
import { Product } from "@/src/data/mockProducts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { toggleWishlist } from "@/redux/features/wishlistSlice";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const dispatch = useDispatch();
  const wishlist = useSelector((state: RootState) => state.wishlist.items);
  const isWished = wishlist.includes(product.id);

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault(); // prevent triggering parent links if any
    e.stopPropagation();
    dispatch(toggleWishlist(product.id));
  };

  return (
    <article className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
      <div className="h-[300px] relative overflow-hidden bg-stone-100">
        <Link href={`/product/${product.id}`} className="absolute inset-0 z-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        
        {/* Badge */}
        {product.badge && (
          <span className="absolute top-4 left-4 z-10 bg-pink-700 text-white text-[10px] uppercase font-extrabold tracking-wider px-2.5 py-1 rounded-md shadow-md pointer-events-none">
            {product.badge}
          </span>
        )}

        {/* Wishlist Button */}
        <button
          onClick={handleToggleWishlist}
          className={`absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-stone-200 flex items-center justify-center transition-all cursor-pointer ${
            isWished ? "text-rose-600 bg-rose-50" : "text-stone-400 hover:text-rose-600"
          }`}
          aria-label="Add to wishlist"
        >
          <Heart size={18} fill={isWished ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="p-6 relative z-10 bg-white">
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-pink-700">
            {product.category}
          </span>
          <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
            <Star size={14} fill="currentColor" />
            <span>{product.rating}</span>
            <span className="text-stone-400 font-normal">({product.reviews})</span>
          </div>
        </div>

        <Link href={`/product/${product.id}`} className="block">
          <h3 className="font-serif text-xl font-medium text-stone-900 mb-4 line-clamp-1 hover:text-pink-700 transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center justify-between pt-4 border-t border-stone-100">
          <span className="text-lg font-bold text-stone-900">{product.price}</span>
          <Link
            href={`/product/${product.id}`}
            className="px-4 py-2 rounded-xl bg-stone-900 hover:bg-pink-800 text-white text-xs font-extrabold uppercase tracking-wider transition-colors flex items-center gap-1.5"
          >
            <ShoppingBag size={14} /> Buy Now
          </Link>
        </div>
      </div>
    </article>
  );
}
