import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import StepsSection from "@/components/sections/StepsSection";
import FAQBlock from "@/components/sections/FAQBlock";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Mortgages for Financial Professionals | Exclusive Programs | approvU",
  description: "Exclusive mortgage programs for CPAs, CFAs, financial advisors, and other financial professionals. Access preferential rates and flexible qualification tailored for finance professionals.",
};

export default function FinancialProfessionals() {
  const features = [
    {
      title: "Financial Professional Rates",
      description: "Access exclusive interest rates typically 0.10-0.25% below standard rates for qualified financial professionals.",
      icon: "📊",
    },
    {
      title: "Variable Income Understanding",
      description: "Lenders who understand commission-based income, bonuses, and variable compensation common in financial services.",
      icon: "💰",
    },
    {
      title: "Professional Designation Recognition",
      description: "Recognition of CPA, CFA, CFP, and other professional designations for preferential qualification and rates.",
      icon: "🎓",
    },
    {
      title: "Investment Property Expertise",
      description: "Specialized financing for investment properties and portfolio building, recognizing financial professionals' investment acumen.",
      icon: "🏢",
    },
    {
      title: "Practice & Firm Financing",
      description: "Financing options for purchasing accounting practices, financial advisory firms, or professional partnerships.",
      icon: "🤝",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Verify Professional Credentials",
      description: "Confirm your professional designations (CPA, CFA, P.Eng, etc.) and current employment status.",
    },
    {
      number: "2",
      title: "Analyze Income Structure",
      description: "Review your base salary, commissions, bonuses, and variable compensation for optimal qualification.",
    },
    {
      number: "3",
      title: "Access Professional Benefits",
      description: "Enjoy preferential rates, flexible qualification, and specialized financial professional programs.",
    },
  ];

  const faqs = [
    {
      question: "How is commission income assessed?",
      answer: "Lenders familiar with financial professionals understand commission structures and will assess based on historical averages, contracts, and industry standards.",
    },
    {
      question: "What designations qualify for professional programs?",
      answer: "Typically: CPA (Chartered Professional Accountant), CFA (Chartered Financial Analyst), CFP (Certified Financial Planner), P.Eng (Professional Engineer), and other recognized professional designations.",
    },
    {
      question: "Can I finance my practice purchase?",
      answer: "Yes, specialized programs exist for purchasing accounting practices, financial advisory firms, or joining partnerships with favorable terms.",
    },
    {
      question: "Do financial professionals get better rates on investment properties?",
      answer: "Many lenders recognize financial professionals' understanding of real estate investments and offer preferential programs for investment property financing.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Hero
        headline="Mortgages for Financial Professionals"
        subheadline="Exclusive mortgage programs for CPAs, CFAs, financial advisors, and other financial professionals. Access preferential rates and flexible qualification tailored for finance professionals."
        primaryCTA={{
          text: "Get My Financial Professional Mortgage",
          href: "/mortgage/approval/",
        }}
        secondaryCTA={{
          text: "View Benefits",
          href: "#benefits",
        }}
      />

      <FeaturesGrid
        title="Financial Professional Mortgage Advantages"
        subtitle="Exclusive benefits for finance professionals"
        features={features}
      />

      <StepsSection
        title="Your Financial Professional Mortgage Process"
        subtitle="Streamlined process for financial professionals"
        steps={steps}
      />

      <section className="py-20 px-4 bg-surface">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Eligible Financial Professions
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-primary">Accounting</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• CPAs (Chartered Professional Accountant)</li>
                <li>• CAs (Chartered Accountant)</li>
                <li>• CMAs (Certified Management Accountant)</li>
                <li>• Tax Specialists</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-primary">Financial Services</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• CFAs (Chartered Financial Analyst)</li>
                <li>• CFPs (Certified Financial Planner)</li>
                <li>• Financial Advisors</li>
                <li>• Investment Bankers</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-primary">Other Finance</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Actuaries (FCIA)</li>
                <li>• Professional Engineers (P.Eng)</li>
                <li>• Wealth Managers</li>
                <li>• Portfolio Managers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQBlock title="Financial Professional Mortgage FAQs" faqs={faqs} />

      <CTASection
        headline="Ready to Get Your Financial Professional Mortgage?"
        description="Access exclusive rates and benefits designed for financial professionals"
        primaryCTA={{
          text: "Get Pre-Approved",
          href: "/mortgage/approval/",
        }}
      />
    </div>
  );
}
