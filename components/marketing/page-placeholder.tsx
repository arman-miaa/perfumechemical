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
    <div className="content-page-wrapper">
      <section className="page-hero">
        <div className="page-hero-inner">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="separator">/</span>
            <span className="category-crumb">{category}</span>
            <span className="separator">/</span>
            <span className="current">{title}</span>
          </nav>
          <h1>{title}</h1>
          <p>
            {description ||
              `Official publication and information regarding ${title}. Detailed documentation will be available here.`}
          </p>
        </div>
      </section>

      <section className="content-section page-body">
        <div className="placeholder-card">
          <div className="placeholder-icon">
            <FileText size={40} />
          </div>
          <h2>{title}</h2>
          <p>
            This section is prepared for corporate and regulatory disclosures. Content for this page will be published shortly.
          </p>
          <div className="placeholder-actions">
            <Link href="/" className="button button-dark">
              Return to Homepage <ArrowRight size={16} />
            </Link>
            <Link href="/contact-us" className="button button-light">
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
