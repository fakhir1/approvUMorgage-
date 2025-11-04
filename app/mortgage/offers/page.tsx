import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import CTASection from "@/components/sections/CTASection";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Exclusive Partner Offers | Home Buying Benefits | approvU",
  description: "Unlock exclusive partner offers when you get your mortgage through approvU. Save thousands on home insurance, moving, security, and more.",
};

export default function MortgageOffers() {
  const partnerOffers = [
    {
      title: "Home Insurance Bundle",
      description: "Save up to 25% on home insurance when you bundle with your mortgage through our preferred partners.",
      icon: "🏠",
    },
    {
      title: "Moving Services Credit",
      description: "Receive up to $500 credit toward professional moving services with our trusted moving partners.",
      icon: "📦",
    },
    {
      title: "Home Security System",
      description: "Get a free home security system installation (up to $1,200 value) with monitoring packages.",
      icon: "🔒",
    },
    {
      title: "Real Estate Legal Services",
      description: "Discounted legal fees for your home purchase closing with our network of experienced lawyers.",
      icon: "⚖️",
    },
    {
      title: "Home Inspection Credit",
      description: "Receive $300 credit toward professional home inspection services from certified inspectors.",
      icon: "🔍",
    },
    {
      title: "Utility Setup Assistance",
      description: "Free utility connection service to help you set up hydro, gas, internet, and other services.",
      icon: "💡",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Hero
        headline="Unlock Exclusive Partner Offers Worth Thousands"
        subheadline="Get your mortgage through approvU and access exclusive deals on home insurance, moving services, security systems, and more."
        primaryCTA={{
          text: "See All Offers",
          href: "/mortgage/approval/",
        }}
        secondaryCTA={{
          text: "Learn More",
          href: "#offers",
        }}
      />

      <section id="offers" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            How Partner Offers Work
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-3">Get Pre-Approved</h3>
              <p className="text-muted-foreground">
                Complete your mortgage application and get pre-approved through our platform.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-3">Choose Your Offers</h3>
              <p className="text-muted-foreground">
                Browse and select from our exclusive partner offers that best fit your needs.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-3">Save Thousands</h3>
              <p className="text-muted-foreground">
                Enjoy exclusive savings and benefits throughout your home buying journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FeaturesGrid
        title="Exclusive Partner Benefits"
        subtitle="Save money on essential home services with our trusted partner network"
        features={partnerOffers}
        columns={3}
      />

      <section className="py-20 px-4 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            Why Choose Our Partner Network?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary flex items-center gap-3">
                <span className="text-2xl">✓</span>
                Vetted Partners
              </h3>
              <p className="text-muted-foreground mb-6">
                All our partners are carefully selected and vetted for quality, reliability, and customer service excellence.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-primary flex items-center gap-3">
                <span className="text-2xl">✓</span>
                Exclusive Savings
              </h3>
              <p className="text-muted-foreground">
                These offers are only available through approvU and can&apos;t be found anywhere else, ensuring maximum value.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary flex items-center gap-3">
                <span className="text-2xl">✓</span>
                Seamless Process
              </h3>
              <p className="text-muted-foreground mb-6">
                We coordinate with partners to make accessing your benefits as smooth as possible during your home purchase.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-primary flex items-center gap-3">
                <span className="text-2xl">✓</span>
                Ongoing Support
              </h3>
              <p className="text-muted-foreground">
                Our team provides support throughout the process to ensure you get the maximum value from every offer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to Unlock Your Exclusive Offers?"
        description="Start your mortgage application today and discover thousands in savings with our partner network."
        primaryCTA={{
          text: "Get Pre-Approved & See Offers",
          href: "/mortgage/approval/",
        }}
      />
    </div>
  );
}
