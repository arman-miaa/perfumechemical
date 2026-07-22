import { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return <div className="max-w-2xl"><p className="eyebrow">{eyebrow}</p><h2 className="section-title">{title}</h2>{children && <p className="section-copy">{children}</p>}</div>;
}
