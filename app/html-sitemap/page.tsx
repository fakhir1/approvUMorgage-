import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Sitemap - All Pages | approvU Mortgage',
  description: 'Complete sitemap of all pages on approvU.ca. Find mortgage solutions, calculators, guides, and resources for Canadian homebuyers.',
};

export default function Sitemap() {
  const siteStructure = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", url: "/" },
        { name: "About", url: "/about" },
        { name: "Contact", url: "/contact" },
        { name: "Blog", url: "/blog" },
        { name: "Sitemap", url: "/sitemap" },
        { name: "Partner with Us", url: "/partner" }
      ]
    },
    {
      title: "Mortgage Solutions",
      links: [
        { name: "Mortgage Overview", url: "/mortgage" },
        { name: "First-Time Buyers", url: "/mortgage/first-time-buyer" },
        { name: "Refinance", url: "/mortgage/refinance" },
        { name: "Self-Employed", url: "/mortgage/self-employed" },
        { name: "Bad Credit", url: "/mortgage/bad-credit" },
        { name: "Investment Properties", url: "/mortgage/investment" },
        { name: "Renovation Mortgages", url: "/mortgage/renovation" },
        { name: "Debt Consolidation", url: "/mortgage/debt-consolidation" },
        { name: "Reverse Mortgages", url: "/mortgage/reverse-mortgage" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Mortgage Basics", url: "/mortgage/basics" },
        { name: "Mortgage Guides", url: "/mortgage/guides" },
        { name: "Current Rates", url: "/mortgage/rates" },
        { name: "Mortgage Blog", url: "/blog" }
      ]
    },
    {
      title: "Tools & Calculators",
      links: [
        { name: "Mortgage Calculators", url: "/mortgage/calculators" },
        { name: "Payment Calculator", url: "/mortgage/calculators/payment" },
        { name: "Affordability Calculator", url: "/mortgage/calculators/affordability" },
        { name: "Land Transfer Tax Calculator", url: "/mortgage/calculators/land-transfer-tax" },
        { name: "Down Payment Calculator", url: "/mortgage/calculators/down-payment" }
      ]
    },
    {
      title: "Legal & Policy",
      links: [
        { name: "Privacy Policy", url: "/privacy-policy" },
        { name: "Terms of Service", url: "/terms" }
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Complete Sitemap
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Browse all pages and resources available on approvU
          </p>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteStructure.map((section, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.url}
                          className="text-muted-foreground hover:text-primary transition-colors hover:underline"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-12 px-4 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-muted-foreground mb-6">
            Our team is here to help you navigate your mortgage journey
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-8 py-2"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
