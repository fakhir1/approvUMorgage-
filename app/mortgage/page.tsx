import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Mortgage Solutions",
  description: "Comprehensive mortgage guidance, calculators, rates, and expert advice for Canadian homebuyers and homeowners.",
};

export default function MortgagePage() {
  const sections = [
    { title: "Mortgage Basics", href: "/mortgage/basics", description: "Learn fundamental mortgage concepts" },
    { title: "Calculators", href: "/mortgage/calculators", description: "Calculate payments and affordability" },
    { title: "Mortgage Rates", href: "/mortgage/rates", description: "Current rates across Canada" },
    { title: "Find a Broker", href: "/mortgage/brokers", description: "Connect with local mortgage experts" },
    { title: "First-Time Buyers", href: "/mortgage/first-time-homebuyers", description: "Guide for first-time homebuyers" },
    { title: "Refinancing", href: "/mortgage/refinancing", description: "Refinance your existing mortgage" },
    { title: "Credit Score", href: "/mortgage/credit-score", description: "Improve your credit for better rates" },
    { title: "Down Payment", href: "/mortgage/down-payment", description: "Down payment strategies and tips" },
    { title: "Qualification", href: "/mortgage/qualification", description: "Understand mortgage qualification" },
    { title: "Mortgage Types", href: "/mortgage/types", description: "Explore different mortgage types" },
    { title: "Lenders", href: "/mortgage/lenders", description: "Compare mortgage lenders" },
    { title: "Solutions", href: "/mortgage/solutions", description: "Tailored mortgage solutions" },
  ];

  return (
    <>
      <Hero 
        title="Complete Mortgage Guide for Canadians"
        subtitle="Everything you need to know about mortgages in Canada - from basics to advanced strategies"
        ctaText="Get Pre-Approved"
        ctaLink="/mortgage-appointment-online"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => (
              <a
                key={section.href}
                href={section.href}
                className="block p-6 bg-gray-50 rounded-lg hover:shadow-lg transition border border-gray-200 hover:border-primary-500"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {section.title}
                </h3>
                <p className="text-gray-600">{section.description}</p>
                <span className="text-primary-600 font-medium mt-2 inline-block">
                  Learn More →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Need Help Choosing?"
        description="Our mortgage experts are here to guide you through every step"
        ctaText="Talk to an Expert"
        ctaLink="/approu-contact-details"
      />
    </>
  );
}
