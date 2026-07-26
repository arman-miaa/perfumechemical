import React from 'react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-stone-50 py-16 px-4 flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-3xl border border-stone-200/80 p-8 sm:p-12 shadow-sm">
        <h1 className="text-4xl font-extrabold text-stone-900 mb-4 tracking-tight">Terms of Service</h1>
        <p className="text-sm text-stone-500 mb-10 font-medium">Last updated: July 2026</p>
        
        <div className="space-y-8 text-stone-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-stone-800 mb-3">1. Acceptance of Terms</h2>
            <p>By accessing and using Perfume Chemical's website, you accept and agree to be bound by the terms and provision of this agreement. Any participation in this service will constitute acceptance of this agreement.</p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-stone-800 mb-3">2. Use of License</h2>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on Perfume Chemical's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-stone-800 mb-3">3. Disclaimer</h2>
            <p>The materials on Perfume Chemical's website are provided on an 'as is' basis. Perfume Chemical makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-stone-800 mb-3">4. Limitations</h2>
            <p>In no event shall Perfume Chemical or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Perfume Chemical's website.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
