import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
          {/* Mortgage Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Mortgage Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/how-it-works" className="hover:underline">How It Works</Link></li>
              <li><Link href="/partner" className="hover:underline">Partner Offers</Link></li>
              <li><Link href="/mortgage/basics" className="hover:underline">Mortgage Basics</Link></li>
              <li><Link href="/mortgage/rates" className="hover:underline">Current Rates</Link></li>
              <li><Link href="/blog" className="hover:underline">Mortgage Guides</Link></li>
              <li><Link href="/solutions" className="hover:underline">Solutions</Link></li>
              <li><Link href="/blog" className="hover:underline">Mortgage Blog</Link></li>
            </ul>
          </div>

          {/* Additional Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Additional Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/home-insurance" className="hover:underline">Home Insurance</Link></li>
              <li><Link href="/smart-home" className="hover:underline">Smart Home Technology</Link></li>
              <li><Link href="/green-home" className="hover:underline">Green Home Technology</Link></li>
              <li><Link href="/mortgage/first-time-buyers" className="hover:underline">First-Time Buyers</Link></li>
              <li><Link href="/self-employed" className="hover:underline">Self-Employed</Link></li>
              <li><Link href="/investment-properties" className="hover:underline">Investment Properties</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:underline">About approvU</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
              <li><Link href="/blog" className="hover:underline">Blog & Insights</Link></li>
              <li><Link href="/careers" className="hover:underline">Careers</Link></li>
              <li><Link href="/partner" className="hover:underline">Partner with Us</Link></li>
              <li><Link href="/why-approvu" className="hover:underline">Why approvU</Link></li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Legal & Support</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
              <li><Link href="/fsra-license" className="hover:underline">FSRA License</Link></li>
              <li><Link href="/cookie-policy" className="hover:underline">Cookie Policy</Link></li>
              <li><Link href="/support" className="hover:underline">Support Center</Link></li>
              <li><Link href="/html-sitemap" className="hover:underline">Site Map</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/30 mt-8 pt-8 text-sm text-white/80">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="text-2xl font-bold">approvU</div>
              <div className="text-muted-foreground text-sm">
                &nbsp;Canada's Most Transparent Mortgage Platform
                <div className="mt-2">© {currentYear} approvU Mortgage Inc. All rights reserved. FSRA Licensed Mortgage Brokerage #13551.</div>
              </div>
            </div>

            <div className="ml-auto flex items-center gap-6">
              <nav className="flex gap-4 items-center text-sm">
                <a href="#" className="hover:underline">LinkedIn</a>
                <a href="#" className="hover:underline">Facebook</a>
                <a href="#" className="hover:underline">Instagram</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
