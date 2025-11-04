import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import StepsSection from "@/components/sections/StepsSection";
import FAQBlock from "@/components/sections/FAQBlock";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Mortgages for Legal Professionals | Exclusive Programs | approvU",
  description: "Exclusive mortgage programs for lawyers, barristers, notaries, and legal professionals. Access preferential rates and flexible qualification designed for the legal profession.",
};

export default function LegalProfessionals() {
  const features = [
    {
      title: "Legal Professional Rates",
      description: "Access exclusive interest rates typically 0.10-0.25% below standard rates for qualified legal professionals.",
      icon: "📉",
    },
    {
      title: "Partnership & Firm Financing",
      description: "Specialized financing for law firm partnerships, practice purchases, and professional real estate investments.",
      icon: "🏛️",
    },
    {
      title: "Articling Student Programs",
      description: "Special mortgage programs for articling students and recent law school graduates with confirmed employment.",
      icon: "🎓",
    },
    {
      title: "Flexible Income Assessment",
      description: "Understanding of variable income from billings, partnerships, and the unique compensation structures in legal practice.",
      icon: "💼",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Verify Legal Credentials",
      description: "Confirm your professional status with bar admission or legal license verification.",
    },
    {
      number: "2",
      title: "Assess Your Needs",
      description: "Determine whether you need residential financing, practice purchase, or combined solutions.",
    },
    {
      number: "3",
      title: "Access Professional Benefits",
      description: "Enjoy preferential rates, flexible terms, and specialized legal professional programs.",
    },
  ];

  const faqs = [
    {
      question: "Can articling students qualify for mortgages?",
      answer: "Yes! Many lenders offer programs for articling students with confirmed employment contracts, even before being called to the bar.",
    },
    {
      question: "How is partnership income assessed?",
      answer: "Lenders familiar with legal professionals understand partnership structures and will assess income based on partnership agreements, billings, and tax returns.",
    },
    {
      question: "What makes legal professional programs different?",
      answer: "Legal professional programs offer preferential rates, flexible qualification, understanding of variable income, and specialized financing for practice purchases or partnerships.",
    },
    {
      question: "Can I finance a law firm purchase?",
      answer: "Yes, specialized programs exist for purchasing law practices, joining partnerships, or expanding existing firms with favorable terms.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Hero
        headline="Mortgages for Legal Professionals"
        subheadline="Exclusive mortgage programs for lawyers, barristers, notaries, and legal professionals. Access preferential rates and flexible qualification designed for the legal profession."
        primaryCTA={{
          text: "Get My Legal Professional Mortgage",
          href: "/mortgage/approval/",
        }}
        secondaryCTA={{
          text: "View Benefits",
          href: "#benefits",
        }}
      />

      <FeaturesGrid
        title="Legal Professional Mortgage Advantages"
        subtitle="Exclusive benefits for legal professionals"
        features={features}
      />

      <StepsSection
        title="Your Legal Professional Mortgage Process"
        subtitle="Streamlined application for busy legal professionals"
        steps={steps}
      />

      <section className="py-20 px-4 bg-surface">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Eligible Legal Professions
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-primary">Lawyers & Barristers</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Licensed Lawyers</li>
                <li>• Barristers & Solicitors</li>
                <li>• Articling Students</li>
                <li>• Legal Associates</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-primary">Specialized Legal</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Corporate Counsel</li>
                <li>• Crown Prosecutors</li>
                <li>• Legal Partners</li>
                <li>• Legal Directors</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-primary">Other Legal</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Notaries Public</li>
                <li>• Legal Consultants</li>
                <li>• Judges & Justices</li>
                <li>• Law Professors</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQBlock title="Legal Professional Mortgage FAQs" faqs={faqs} />

      <CTASection
        headline="Ready to Get Your Legal Professional Mortgage?"
        description="Access exclusive rates and benefits designed for legal professionals"
        primaryCTA={{
          text: "Get Pre-Approved",
          href: "/mortgage/approval/",
        }}
      />
    </div>
  );
}
