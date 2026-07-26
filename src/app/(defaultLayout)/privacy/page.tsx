import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-stone-50 py-16 px-4 flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-3xl border border-stone-200/80 p-8 sm:p-12 shadow-sm">
        <h1 className="text-4xl font-extrabold text-stone-900 mb-4 tracking-tight">Privacy Policy</h1>
        <p className="text-sm text-stone-500 mb-10 font-medium">Last updated: July 2026</p>
        
        <div className="space-y-8 text-stone-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-stone-800 mb-3">1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us. This includes your name, email address, password, and order history.</p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-stone-800 mb-3">2. How We Use Your Information</h2>
            <p>We may use the information we collect about you to provide, maintain, and improve our services, including to facilitate payments, send receipts, provide products and services you request, and send related information like shipping updates.</p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-stone-800 mb-3">3. Data Security</h2>
            <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction. All passwords are encrypted and your payment details are handled by secure, PCI-compliant gateways.</p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-stone-800 mb-3">4. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, or if you would like to exercise your rights regarding your personal data, please contact us at privacy@perfumechemical.com.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
