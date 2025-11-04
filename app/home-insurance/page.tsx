import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Home Insurance Guide Canada | Coverage & Quotes | approvU",
  description: "Comprehensive home insurance coverage tailored to your needs. Compare quotes from top Canadian insurers and protect your home and family.",
};

export default function HomeInsuranceOverview() {
  const coverageTypes = [
    {
      title: "Dwelling Coverage",
      description: "Protects the structure of your home against covered perils like fire, wind, and vandalism.",
      icon: "🏠"
    },
    {
      title: "Personal Property",
      description: "Covers your belongings inside your home, including furniture, electronics, and clothing.",
      icon: "📦"
    },
    {
      title: "Liability Protection",
      description: "Protects you if someone is injured on your property or you accidentally damage someone else's property.",
      icon: "🛡️"
    },
    {
      title: "Additional Living Expenses",
      description: "Covers temporary housing costs if your home becomes uninhabitable due to a covered loss.",
      icon: "🏨"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Hero
        title="Protect Your Home, Protect Your Family"
        headline="Protect Your Home, Protect Your Family"
        subheadline="Comprehensive home insurance coverage tailored to your needs and peace of mind for what matters most."
        primaryCTA={{
          text: "Get Insurance Quotes",
          href: "/home-insurance/compare/"
        }}
        secondaryCTA={{
          text: "Learn About Coverage",
          href: "/home-insurance/guides/"
        }}
      />

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Why You Need Home Insurance
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            Home insurance is more than just a requirement for your mortgage—it&apos;s essential protection 
            for your home, belongings, and financial security.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-card p-6 rounded-lg border">
              <div className="text-3xl mb-3">🔥</div>
              <h3 className="font-semibold text-primary mb-2">Fire & Natural Disasters</h3>
              <p className="text-sm text-muted-foreground">Protect against fire, storms, and weather damage</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <div className="text-3xl mb-3">🚨</div>
              <h3 className="font-semibold text-primary mb-2">Theft & Vandalism</h3>
              <p className="text-sm text-muted-foreground">Protect your belongings and property from crime</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <div className="text-3xl mb-3">⚖️</div>
              <h3 className="font-semibold text-primary mb-2">Liability Coverage</h3>
              <p className="text-sm text-muted-foreground">Protection if someone is injured on your property</p>
            </div>
          </div>
        </div>
      </section>

      <FeaturesGrid
        title="What's Covered?"
        subtitle="Understanding your home insurance coverage options"
        features={coverageTypes}
        columns={2}
      />

      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Bundle and Save
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                When you get your mortgage through approvU, you can also access exclusive 
                discounts on home insurance from our trusted partners.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 bg-success rounded-full flex items-center justify-center text-white text-sm">✓</span>
                  <span className="text-muted-foreground">Up to 15% discount on premiums</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 bg-success rounded-full flex items-center justify-center text-white text-sm">✓</span>
                  <span className="text-muted-foreground">Streamlined application process</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 bg-success rounded-full flex items-center justify-center text-white text-sm">✓</span>
                  <span className="text-muted-foreground">One point of contact for both services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 bg-success rounded-full flex items-center justify-center text-white text-sm">✓</span>
                  <span className="text-muted-foreground">Expert guidance on coverage needs</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-6">Get Your Quote</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Home Value</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Select home value</option>
                    <option>Under $300,000</option>
                    <option>$300,000 - $500,000</option>
                    <option>$500,000 - $750,000</option>
                    <option>$750,000 - $1,000,000</option>
                    <option>Over $1,000,000</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Home Type</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Select home type</option>
                    <option>Single Family Home</option>
                    <option>Townhouse</option>
                    <option>Condominium</option>
                    <option>Duplex</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Postal Code</label>
                  <input type="text" placeholder="A1A 1A1" className="w-full p-3 border border-gray-300 rounded-lg" />
                </div>
                <button className="w-full bg-accent text-white py-3 px-6 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                  Get My Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to protect your home?"
        description="Get competitive quotes from top Canadian insurers in minutes."
        primaryCTA={{
          text: "Compare Insurance Options",
          href: "/home-insurance/compare/"
        }}
      />
    </div>
  );
}
