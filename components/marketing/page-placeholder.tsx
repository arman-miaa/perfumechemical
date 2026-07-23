import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

interface PagePlaceholderProps {
  title: string;
  category?: string;
  description?: string;
}

export function PagePlaceholder({
  title,
  category = "Corporate Information",
  description,
}: PagePlaceholderProps) {
  return (
    <div className="bg-[#fdfbf9] min-h-[calc(100vh-200px)]">
      <section className="bg-gradient-to-r from-[#441829] via-[#7a1d47] to-[#b2336e] text-white px-5 md:px-8 pt-[40px] md:pt-[60px] pb-[36px] md:pb-[50px]">
        <div className="max-w-[1240px] mx-auto">
          <nav className="flex items-center gap-2 text-xs text-[#e5b3cb] uppercase tracking-wider mb-4 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="text-[#ffdceb] font-semibold hover:text-white hover:underline transition-colors">
              Home
            </Link>
            <span className="text-[#b07092]">/</span>
            <span>{category}</span>
            <span className="text-[#b07092]">/</span>
            <span className="text-white font-bold">{title}</span>
          </nav>
          <h1 className="font-serif font-normal text-[32px] md:text-[clamp(32px,4vw,54px)] leading-tight tracking-tight text-white mb-3.5">
            {title}
          </h1>
          <p className="text-base leading-relaxed max-w-[640px] text-[#f7d5e4]">
            {description ||
              `Official publication and information regarding ${title}. Detailed documentation will be available here.`}
          </p>
        </div>
      </section>

      <section className="max-w-[1240px] mx-auto px-5 md:px-8 pt-[60px] pb-[90px]">
        <div className="bg-white border border-[#e8e3df] rounded-xl p-[36px] md:p-[50px] text-center max-w-[680px] mx-auto shadow-[0_10px_30px_rgba(50,30,20,0.04)]">
          <div className="inline-flex items-center justify-center w-[76px] h-[76px] rounded-full bg-[#fdf0f5] text-[#8f174d] mb-5">
            <FileText size={40} />
          </div>
          <h2 className="font-serif font-medium text-[28px] text-[#312722] mb-3">
            {title}
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-[#6c635e] max-w-[500px] mx-auto mb-7">
            This section is prepared for corporate and regulatory disclosures. Content for this page will be published shortly.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs uppercase font-extrabold tracking-wider bg-[#8f174d] text-white px-5 py-3.5 hover:opacity-95 transition-opacity"
            >
              Return to Homepage <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 text-xs uppercase font-extrabold tracking-wider bg-white text-[#801643] border border-[#e8e3df] px-5 py-3.5 hover:bg-[#faf5f7] transition-colors"
            >
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
