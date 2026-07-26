"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Minus, Plus, ShoppingBag, Trash2, ShieldCheck, ArrowRight } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { removeFromCart, updateQuantity } from "@/redux/features/cartSlice";

export default function ShopPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  
  const subtotal = cartItems.reduce((total, item) => total + (item.priceRaw * item.quantity), 0);
  const shipping = cartItems.length > 0 ? 60 : 0; // Flat shipping rate 60 tk
  const total = subtotal + shipping;

  const handleQuantity = (id: string, currentQty: number, type: "inc" | "dec") => {
    if (type === "dec" && currentQty > 1) {
      dispatch(updateQuantity({ id, quantity: currentQty - 1 }));
    }
    if (type === "inc" && currentQty < 99) {
      dispatch(updateQuantity({ id, quantity: currentQty + 1 }));
    }
  };

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  return (
    <main className="bg-[#fffdf9] min-h-screen pb-20 pt-8">
      {/* Breadcrumbs */}
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 mb-8">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500 mb-6">
          <Link href="/" className="hover:text-pink-700 transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-stone-900">Shopping Cart</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-stone-900 mb-4">
          Your Cart
        </h1>
        <p className="text-stone-600 text-base">
          {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your cart.
        </p>
      </div>

      <section className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Cart Items List */}
            <div className="flex-1">
              <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm">
                <div className="hidden sm:grid grid-cols-12 gap-4 p-6 border-b border-stone-200 bg-stone-50 text-xs font-extrabold uppercase tracking-wider text-stone-500">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-3 text-center">Quantity</div>
                  <div className="col-span-3 text-right">Total</div>
                </div>

                <div className="divide-y divide-stone-200">
                  {cartItems.map((item) => (
                    <div key={item.id} className="p-6 grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-4 items-center">
                      
                      {/* Product Info */}
                      <div className="sm:col-span-6 flex items-center gap-4">
                        <Link href={`/product/${item.id}`} className="shrink-0">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-stone-100 border border-stone-200">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                        </Link>
                        <div className="flex flex-col">
                          <Link href={`/product/${item.id}`} className="font-serif text-lg font-medium text-stone-900 hover:text-pink-700 transition-colors line-clamp-2 mb-1">
                            {item.name}
                          </Link>
                          <span className="text-stone-500 text-sm font-bold">৳ {item.priceRaw.toLocaleString()}</span>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="sm:col-span-3 flex justify-between sm:justify-center items-center">
                        <span className="sm:hidden text-xs font-bold uppercase tracking-wider text-stone-500">Quantity</span>
                        <div className="flex items-center bg-stone-100 rounded-xl border border-stone-200 p-1">
                          <button 
                            onClick={() => handleQuantity(item.id, item.quantity, "dec")}
                            className="w-8 h-8 flex items-center justify-center text-stone-600 hover:text-stone-900 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer disabled:opacity-50"
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center font-bold text-sm text-stone-900">{item.quantity}</span>
                          <button 
                            onClick={() => handleQuantity(item.id, item.quantity, "inc")}
                            className="w-8 h-8 flex items-center justify-center text-stone-600 hover:text-stone-900 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>

                      {/* Item Total & Remove */}
                      <div className="sm:col-span-3 flex justify-between sm:justify-end items-center gap-4">
                        <span className="sm:hidden text-xs font-bold uppercase tracking-wider text-stone-500">Total</span>
                        <div className="flex items-center gap-6">
                          <span className="font-bold text-lg text-stone-900">
                            ৳ {(item.priceRaw * item.quantity).toLocaleString()}
                          </span>
                          <button 
                            onClick={() => handleRemove(item.id)}
                            className="text-stone-400 hover:text-rose-600 transition-colors cursor-pointer p-2 rounded-full hover:bg-rose-50"
                            aria-label="Remove item"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>

                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <aside className="lg:w-80 shrink-0">
              <div className="bg-white rounded-3xl border border-stone-200 p-8 shadow-sm sticky top-24">
                <h2 className="font-serif text-2xl font-medium text-stone-900 mb-6">Order Summary</h2>
                
                <div className="flex flex-col gap-4 text-sm mb-6 border-b border-stone-200 pb-6">
                  <div className="flex justify-between items-center text-stone-600">
                    <span>Subtotal</span>
                    <span className="font-bold text-stone-900">৳ {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-stone-600">
                    <span>Shipping Estimate</span>
                    <span className="font-bold text-stone-900">৳ {shipping.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex justify-between items-end mb-8">
                  <span className="text-base font-bold text-stone-900">Total</span>
                  <span className="font-serif text-3xl font-bold text-pink-700">৳ {total.toLocaleString()}</span>
                </div>

                <button className="w-full py-4 px-6 bg-stone-900 hover:bg-pink-800 text-white text-sm font-extrabold uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer group">
                  Proceed to Checkout <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="mt-6 pt-6 border-t border-stone-200 flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-xs font-bold text-stone-500">
                    <ShieldCheck size={16} className="text-emerald-500" /> Secure Checkout
                  </div>
                  <p className="text-[10px] text-stone-400 leading-relaxed uppercase tracking-wide">
                    Taxes and discount codes are calculated at checkout.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 bg-white rounded-3xl border border-stone-200 shadow-sm text-center px-4">
            <div className="w-20 h-20 bg-pink-50 rounded-full flex items-center justify-center text-pink-300 mb-6">
              <ShoppingBag size={32} />
            </div>
            <h2 className="font-serif text-2xl font-medium text-stone-900 mb-3">Your cart is empty</h2>
            <p className="text-stone-500 mb-8 max-w-md">
              Looks like you haven't added any formulations to your cart yet.
            </p>
            <Link
              href="/product"
              className="px-8 py-4 rounded-xl bg-stone-900 hover:bg-pink-800 text-white text-sm font-extrabold uppercase tracking-wider transition-colors shadow-lg"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}
