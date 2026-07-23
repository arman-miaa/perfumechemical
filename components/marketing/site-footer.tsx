import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-[#2a211f] text-[#d5c9c1] px-8 md:px-[max(6vw,32px)] pt-[70px] pb-[25px]">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.4fr] gap-[45px]">
        <div>
          <div className="text-white font-serif font-bold text-4xl tracking-tighter mb-4">
            manola
          </div>
          <p className="text-sm leading-relaxed max-w-[290px]">
            Thoughtfully made essentials that make every day feel a little more beautiful.
          </p>
        </div>

        <div>
          <h3 className="text-white text-xs tracking-wider uppercase font-bold mb-4">
            Explore
          </h3>
          <Link href="#products" className="block text-[#d5c9c1] text-sm my-2.5 hover:text-white transition-colors">
            Our products
          </Link>
          <Link href="#about" className="block text-[#d5c9c1] text-sm my-2.5 hover:text-white transition-colors">
            Our story
          </Link>
          <Link href="#impact" className="block text-[#d5c9c1] text-sm my-2.5 hover:text-white transition-colors">
            Our impact
          </Link>
        </div>

        <div>
          <h3 className="text-white text-xs tracking-wider uppercase font-bold mb-4">
            Help & support
          </h3>
          <Link href="#contact" className="block text-[#d5c9c1] text-sm my-2.5 hover:text-white transition-colors">
            Contact us
          </Link>
          <Link href="#investor" className="block text-[#d5c9c1] text-sm my-2.5 hover:text-white transition-colors">
            Investor relations
          </Link>
          <Link href="#" className="block text-[#d5c9c1] text-sm my-2.5 hover:text-white transition-colors">
            Privacy policy
          </Link>
        </div>

        <div>
          <h3 className="text-white text-xs tracking-wider uppercase font-bold mb-4">
            Stay in the loop
          </h3>
          <p className="text-sm leading-relaxed max-w-[290px] mb-4">
            Fresh ideas, new launches and little moments of care.
          </p>
          <div className="flex border-b border-[#796b65] pb-1">
            <input
              aria-label="Email address"
              placeholder="Your email address"
              className="bg-transparent border-0 outline-none py-2 text-white w-full text-sm placeholder:text-[#978a84]"
            />
            <button aria-label="Subscribe" className="border-0 bg-transparent text-white text-xl cursor-pointer hover:opacity-80 transition-opacity">
              →
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto mt-[60px] pt-5 border-t border-[#554843] flex flex-col sm:flex-row justify-between gap-3 text-xs text-[#978a84]">
        <span>© 2026 Manola. All rights reserved.</span>
        <span>Made with care in Bangladesh</span>
      </div>
    </footer>
  );
}
