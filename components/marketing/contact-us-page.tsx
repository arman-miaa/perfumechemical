"use client";

import { useState } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  ChevronDown, 
  MessageSquare, 
  User, 
  Building2, 
  HelpCircle,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { toast } from "sonner";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "Will I receive the same product that I see in the picture?",
    answer: "Yes, all fragrance ingredients, essential oils, and aromatic chemicals strictly match our published chemical specifications and purity grades. We provide batch Certificates of Analysis (COA) with every shipment."
  },
  {
    id: "faq-2",
    question: "Where can I view my sales receipt?",
    answer: "You can download tax invoices and sales receipts directly from your Account Dashboard under 'Order History'. Additionally, a digital copy is automatically emailed upon order confirmation."
  },
  {
    id: "faq-3",
    question: "How can I return an item?",
    answer: "For quality assurances or unopened industrial sealed drums/containers, returns can be initiated within 14 business days. Please contact our Quality Assurance department at support@perfumechemical.com."
  },
  {
    id: "faq-4",
    question: "Will you restock items indicated as out of stock?",
    answer: "Yes! Chemical synthesis and raw material distillation batches are continuously produced. You can click 'Notify Me' on out-of-stock items or reach out to our sales team for priority allocation."
  },
  {
    id: "faq-5",
    question: "Where can I ship my order?",
    answer: "We deliver across Bangladesh via accredited chemical transport partners. International bulk export shipments are arranged via sea/air freight through Chittagong Port and Dhaka Airport."
  },
  {
    id: "faq-6",
    question: "Do you offer custom fragrance chemical formulations?",
    answer: "Absolutely. Our R&D laboratory specializes in custom accords, synthetic molecule blending, and perfume compounding tailored for cosmetics, personal care, home care, and laundry applications."
  }
];

export function ContactUsComponent() {
  const [openFaq, setOpenFaq] = useState<string | null>("faq-1");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    topic: "General Inquiry",
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields (Name, Email, and Message).");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Thank you! Your message has been sent successfully. Our team will get back to you shortly.");
      setFormData({
        topic: "General Inquiry",
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20 pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header / Hero Banner */}
        <div className="bg-gradient-to-br from-rose-900 via-rose-800 to-rose-950 rounded-[2.5rem] p-8 md:p-14 text-white shadow-xl shadow-rose-950/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 -mb-16 w-80 h-80 bg-pink-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-rose-200 text-xs font-semibold uppercase tracking-wider border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-rose-300" />
              <span>We&apos;re here to help</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Get in Touch with Our Fragrance Experts
            </h1>
            <p className="text-rose-100/90 text-sm md:text-base leading-relaxed font-normal max-w-2xl">
              Have questions about our chemical formulations, bulk pricing, or corporate inquiries? Contact our team today or explore our frequently asked questions.
            </p>
          </div>

          {/* Quick Contact Info Cards Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-8 border-t border-rose-700/50">
            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="p-2.5 rounded-xl bg-rose-500/20 text-rose-200 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-rose-300 font-bold">Location</p>
                <p className="text-xs font-medium text-white line-clamp-1">51 Central Rd, Dhaka 1205</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="p-2.5 rounded-xl bg-rose-500/20 text-rose-200 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-rose-300 font-bold">Call Us</p>
                <p className="text-xs font-medium text-white">+880 1700-000000</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="p-2.5 rounded-xl bg-rose-500/20 text-rose-200 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-rose-300 font-bold">Email Us</p>
                <p className="text-xs font-medium text-white">info@perfumechemical.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="p-2.5 rounded-xl bg-rose-500/20 text-rose-200 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-rose-300 font-bold">Business Hours</p>
                <p className="text-xs font-medium text-white">Sat - Thu: 9 AM - 6 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="bg-white rounded-[2rem] p-4 sm:p-5 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden">
          <div className="flex items-center justify-between px-3 py-2 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-600 animate-pulse" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800">Our Corporate Headquarters</h2>
            </div>
            <span className="text-xs text-slate-500 font-medium">Younus Group • Dhanmondi, Dhaka</span>
          </div>

          <div className="w-full h-[360px] md:h-[420px] rounded-[1.5rem] overflow-hidden shadow-inner border border-slate-200/80 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.179576402488!2d90.3876!3d23.7409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a7c5c5c5%3A0x123456789abcdef!2s51%20Central%20Rd%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Younus Group Location Map"
              className="w-full h-full grayscale-[20%] contrast-[1.05] hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        {/* Two-Column Section: FAQ (Left) & Contact Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Frequently Asked Questions */}
          <div className="lg:col-span-6 bg-white rounded-[2rem] p-6 sm:p-8 md:p-10 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600 mb-1 block">Information Questions</span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Frequently Asked Questions
                </h3>
                <p className="text-slate-500 text-xs md:text-sm mt-1.5">
                  Find quick answers to common queries regarding ordering, shipping, and chemical products.
                </p>
              </div>

              {/* FAQ Accordion List */}
              <div className="space-y-3">
                {faqData.map((faq) => {
                  const isOpen = openFaq === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className={`rounded-2xl transition-all duration-200 border ${
                        isOpen
                          ? "bg-rose-50/40 border-rose-200/80 shadow-sm"
                          : "bg-slate-50/60 border-slate-100 hover:border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full flex items-center justify-between p-4 sm:p-5 text-left gap-4"
                      >
                        <span className={`text-xs sm:text-sm font-bold transition-colors ${isOpen ? "text-rose-700" : "text-slate-800"}`}>
                          {faq.question}
                        </span>
                        <div className={`p-1.5 rounded-xl transition-all shrink-0 ${isOpen ? "bg-rose-600 text-white rotate-180" : "bg-white text-slate-400 shadow-sm"}`}>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-4 sm:px-5 pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-rose-100/60 mt-1">
                          <p className="pt-3">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-500">
              <HelpCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>Have a different question not listed here? Fill out the inquiry form to contact R&D.</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6 bg-white rounded-[2rem] p-6 sm:p-8 md:p-10 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.06)] border border-slate-100">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 mb-1 block">Information About Us</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                Contact Us For Any Questions
              </h3>
              <p className="text-slate-500 text-xs md:text-sm mt-1.5">
                Send us a direct message and our fragrance technical specialists will respond within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Subject / Topic Select */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Inquiry Topic
                </label>
                <select
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50/80 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-600 transition-all"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Product & Pricing Quote">Product & Pricing Quote</option>
                  <option value="Custom Chemical Formulation">Custom Chemical Formulation</option>
                  <option value="Order Status & Shipping">Order Status & Shipping</option>
                  <option value="Investor / Corporate Relations">Investor / Corporate Relations</option>
                </select>
              </div>

              {/* Grid: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Your Name <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tanvir Ahmed"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50/80 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-600 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Your Email <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50/80 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-600 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Grid: Phone & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      placeholder="+880 1XXXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50/80 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-600 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Company
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      placeholder="Company Name Ltd."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50/80 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-600 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Message Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Your Message <span className="text-rose-600">*</span>
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <textarea
                    required
                    rows={4}
                    placeholder="Write your detailed inquiry or technical specifications here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50/80 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-600 transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-rose-600/20 hover:shadow-rose-600/35 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer mt-2"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Ask A Question</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Corporate Assurance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Certified Quality Standards</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                All raw materials and synthesized fragrance bases adhere strictly to IFRA and ISO chemical standards.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-rose-50 text-rose-600 rounded-xl shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Rapid R&D Support</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Our team responds to formulation and safety data sheet (SDS) requests within 24 business hours.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Global Supply Logistics</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Direct distribution and industrial container dispatch handled smoothly across Bangladesh and overseas.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
