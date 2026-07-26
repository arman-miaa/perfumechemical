"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, FlaskConical, Factory, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

export default function PortfolioPage() {
  return (
    <main className="bg-[#fffdf9] min-h-screen pb-20 pt-8 text-stone-800">
      {/* Breadcrumbs */}
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 mb-8">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500 mb-6">
          <Link href="/" className="hover:text-pink-700 transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-stone-900">Portfolio</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-[1280px] mx-auto px-5 sm:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-extrabold uppercase tracking-widest mb-6">
              <FlaskConical size={14} /> Specialty Chemicals & B2B
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-stone-900 mb-6 leading-tight">
              Industrial Grade Excellence
            </h1>
            <p className="text-stone-600 text-lg leading-relaxed mb-8 max-w-lg">
              Beyond personal care, Manola Chemical provides industry-leading formulations and specialty chemicals for corporate partners, ensuring unmatched purity and scalability.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-stone-900 hover:bg-pink-800 text-white text-sm font-extrabold uppercase tracking-wider transition-all shadow-lg shadow-pink-900/20"
            >
              Partner With Us <ArrowRight size={18} />
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-stone-200">
              <img
                src="/images/specialty_chemicals.png"
                alt="Laboratory formulation"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-stone-200 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900">ISO 9001 Certified</h4>
                  <p className="text-xs text-stone-500">Global Quality Standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="bg-stone-50 py-24 border-y border-stone-200/80">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-stone-900 mb-4">
              Our Manufacturing Capabilities
            </h2>
            <p className="text-stone-600">
              We leverage state-of-the-art facilities and a rigorous testing process to deliver chemical solutions that power industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-600 mb-6">
                <Factory size={28} />
              </div>
              <h3 className="font-serif text-2xl font-medium text-stone-900 mb-3">Bulk Production</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Capable of scaling from pilot batches to full-scale commercial manufacturing without compromising precision or purity.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-600 mb-6">
                <FlaskConical size={28} />
              </div>
              <h3 className="font-serif text-2xl font-medium text-stone-900 mb-3">Custom Synthesis</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Our R&D team works closely with partners to develop bespoke chemical formulations tailored to specific industrial requirements.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-600 mb-6">
                <CheckCircle2 size={28} />
              </div>
              <h3 className="font-serif text-2xl font-medium text-stone-900 mb-3">Quality Assurance</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Every batch undergoes multi-stage gas chromatography and mass spectrometry to ensure 99.9% consistency.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
