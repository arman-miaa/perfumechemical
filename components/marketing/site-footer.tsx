import Link from "next/link";

export function SiteFooter() {
  return <footer className="site-footer"><div className="footer-grid"><div><div className="footer-brand">manola</div><p>Thoughtfully made essentials that make every day feel a little more beautiful.</p></div><div><h3>Explore</h3><Link href="#products">Our products</Link><Link href="#about">Our story</Link><Link href="#impact">Our impact</Link></div><div><h3>Help & support</h3><Link href="#contact">Contact us</Link><Link href="#investor">Investor relations</Link><Link href="#">Privacy policy</Link></div><div><h3>Stay in the loop</h3><p>Fresh ideas, new launches and little moments of care.</p><div className="email-field"><input aria-label="Email address" placeholder="Your email address"/><button aria-label="Subscribe">→</button></div></div></div><div className="footer-bottom"><span>© 2026 Manola. All rights reserved.</span><span>Made with care in Bangladesh</span></div></footer>;
}
