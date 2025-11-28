import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import StepsSection from "@/components/sections/StepsSection";
import FAQBlock from "@/components/sections/FAQBlock";
import CTASection from "@/components/sections/CTASection";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { getMortgagePage } from "@/lib/strapi";

export async function generateMetadata(): Promise<Metadata> {
  const mortgageData = await getMortgagePage('professional');
  
  return {
    title: mortgageData?.metaTitle || "Professional Mortgages - Exclusive Programs for Licensed Professionals | approvU",
    description: mortgageData?.metaDescription || "Specialized mortgage programs for doctors, lawyers, accountants, and licensed professionals. Preferential rates, flexible terms, and practice financing available.",
  };
}

export default async function ProfessionalMortgages() {
  let mortgageData = null;
  
  try {
    mortgageData = await getMortgagePage('professional');
  } catch (error) {
    console.error('Error fetching professional mortgage data:', error);
  }

  const heroTitle = mortgageData?.heroTitle || "Professional Mortgage Programs";
  const heroSubtitle = mortgageData?.heroSubtitle || "Exclusive mortgage solutions for doctors, lawyers, accountants, and licensed professionals with preferential rates and flexible terms.";
  const features = [
    {
      title: "Preferential Interest Rates",
      description: "Access exclusive rates typically 0.10-0.25% below standard rates as a licensed professional.",
      icon: "📉",
    },
    {
      title: "Flexible Income Verification",
      description: "Qualify with employment letters for new graduates or reduced documentation for established professionals.",
      icon: "📋",
    },
    {
      title: "Higher Debt Ratios",
      description: "Qualify with higher debt-to-income ratios recognized for high-income professionals with stable careers.",
      icon: "💼",
    },
    {
      title: "Lower Down Payments",
      description: "Some programs allow down payments as low as 5% even for properties over $1M with professional status.",
      icon: "💰",
    },
    {
      title: "Practice Purchase Financing",
      description: "Specialized financing options for purchasing medical practices, law firms, or professional partnerships.",
      icon: "🏥",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Verify Professional Status",
      description: "Confirm your eligibility with professional license verification and employment/practice details.",
    },
    {
      number: "2",
      title: "Choose Your Program",
      description: "Select from residential mortgages, practice financing, or combined personal/business solutions.",
    },
    {
      number: "3",
      title: "Enjoy Professional Benefits",
      description: "Access preferential rates, flexible terms, and ongoing professional banking relationships.",
    },
  ];

  const faqs = [
    {
      question: "Which professions qualify for professional mortgages?",
      answer: "Typically: Medical professionals (doctors, dentists, veterinarians), Legal professionals (lawyers, notaries), Financial professionals (CPAs, CFAs), Engineers (P.Eng), and other regulated professions. Requirements vary by lender.",
    },
    {
      question: "What are the benefits of professional mortgage programs?",
      answer: "Benefits include: preferential interest rates, flexible qualification criteria, higher debt-to-income ratios, reduced documentation requirements, and specialized products for practice purchases.",
    },
    {
      question: "Can new graduates qualify for professional mortgages?",
      answer: "Yes, many lenders offer programs for recent graduates with employment letters or contracts, even before starting work. Some programs don't require employment history if you have a confirmed position.",
    },
    {
      question: "Do professional mortgages require mortgage insurance?",
      answer: "Some professional programs waive mortgage insurance requirements even with less than 20% down payment, while others offer reduced insurance premiums based on professional status.",
    },
  ];

  const professionalCategories = [
    {
      title: "Medical Professionals",
      icon: "🏥",
      url: "/mortgage/professional/medical/",
      list: ["Medical Doctors (MD)", "Dentists (DDS/DMD)", "Veterinarians (DVM)", "Pharmacists", "Optometrists", "Chiropractors"],
    },
    {
      title: "Legal Professionals",
      icon: "⚖️",
      url: "/mortgage/professional/legal/",
      list: ["Lawyers & Barristers", "Notaries Public", "Legal Counsel", "Crown Prosecutors", "Judges & Justices"],
    },
    {
      title: "Financial Professionals",
      icon: "💼",
      url: "/mortgage/professional/financial/",
      list: ["Chartered Accountants (CPA)", "Financial Advisors (CFA)", "Professional Engineers (P.Eng)", "Actuaries (FCIA)", "Investment Bankers"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Hero
        headline={heroTitle}
        subheadline={heroSubtitle}
        primaryCTA={{
          text: "Get My Professional Mortgage",
          href: "/mortgage/approval/",
        }}
        secondaryCTA={{
          text: "View Eligible Professions",
          href: "#professions",
        }}
        backgroundImage="/images/hero/purchase-mortgage-hero.jpg"
        variant="default"
      />

      <FeaturesGrid
        title="Professional Mortgage Advantages"
        subtitle="Exclusive benefits designed for licensed professionals"
        features={features}
      />

      <StepsSection
        title="Your Professional Mortgage Process"
        subtitle="Streamlined application process designed for busy professionals"
        steps={steps}
      />

      <section id="professions" className="py-20 px-4 bg-surface">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Professional Categories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {professionalCategories.map((category, index) => (
              <Link key={index} href={category.url}>
                <Card className="bg-white hover:shadow-lg transition-shadow group cursor-pointer">
                  <CardContent className="p-8">
                    <div className="text-4xl mb-4 text-center">{category.icon}</div>
                    <h3 className="text-xl font-semibold mb-4 text-primary text-center group-hover:text-primary-glow transition-colors">
                      {category.title}
                    </h3>
                    <ul className="text-muted-foreground space-y-2">
                      {category.list.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQBlock title="Professional Mortgage FAQs" faqs={faqs} />

      <CTASection
        headline="Ready to Leverage Your Professional Status?"
        description="Get exclusive mortgage benefits designed for licensed professionals"
        primaryCTA={{
          text: "Get Pre-Approved",
          href: "/mortgage/approval/",
        }}
      />
    </div>
  );
}
