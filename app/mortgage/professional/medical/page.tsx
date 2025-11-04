import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import StepsSection from "@/components/sections/StepsSection";
import FAQBlock from "@/components/sections/FAQBlock";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Mortgages for Medical Professionals | Exclusive Programs | approvU",
  description: "Specialized mortgage programs for doctors, dentists, veterinarians, and medical specialists. Get preferential rates and flexible qualification tailored for medical professionals.",
};

export default function MedicalProfessionals() {
  const features = [
    {
      title: "Medical Professional Rates",
      description: "Access exclusive interest rates up to 0.25% below standard rates for qualified medical professionals.",
      icon: "📉",
    },
    {
      title: "Residency & Fellowship Programs",
      description: "Special programs for medical residents and fellows with deferred payment options and flexible income verification.",
      icon: "🎓",
    },
    {
      title: "Practice Purchase Financing",
      description: "Specialized financing for purchasing medical practices, clinics, and dental offices with favorable terms.",
      icon: "🏥",
    },
    {
      title: "Higher Qualification Ratios",
      description: "Qualify with higher debt-to-income ratios recognizing stable medical professional incomes and career trajectories.",
      icon: "💼",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Verify Medical Credentials",
      description: "Confirm your medical license, residency status, or employment contract.",
    },
    {
      number: "2",
      title: "Choose Your Program",
      description: "Select from residential, practice purchase, or combined financing solutions.",
    },
    {
      number: "3",
      title: "Access Professional Benefits",
      description: "Enjoy preferential rates, flexible terms, and ongoing professional banking support.",
    },
  ];

  const faqs = [
    {
      question: "Can residents and fellows qualify for mortgages?",
      answer: "Yes! Many lenders offer programs specifically for medical residents and fellows, often with deferred payment options until you complete your residency or fellowship.",
    },
    {
      question: "What documentation do medical professionals need?",
      answer: "Typically: professional license, employment contract or offer letter, proof of income (pay stubs or billings), and standard mortgage documentation. Recent graduates may only need a contract.",
    },
    {
      question: "Are rates really lower for medical professionals?",
      answer: "Yes, many lenders offer preferential rates 0.10-0.25% below standard rates for licensed medical professionals due to stable income and low default rates.",
    },
    {
      question: "Can I finance my medical practice purchase?",
      answer: "Yes, specialized programs exist for purchasing medical practices, dental offices, veterinary clinics, and pharmacies with favorable terms and flexible structures.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Hero
        headline="Mortgages for Medical Professionals"
        subheadline="Exclusive mortgage programs for doctors, dentists, veterinarians, and medical specialists. Get preferential rates and flexible qualification tailored for medical professionals."
        primaryCTA={{
          text: "Get My Medical Professional Mortgage",
          href: "/mortgage/approval/",
        }}
        secondaryCTA={{
          text: "View Benefits",
          href: "#benefits",
        }}
      />

      <FeaturesGrid
        title="Medical Professional Mortgage Advantages"
        subtitle="Exclusive benefits for healthcare professionals"
        features={features}
      />

      <StepsSection
        title="Your Medical Professional Mortgage Process"
        subtitle="Streamlined process designed for busy medical professionals"
        steps={steps}
      />

      <section className="py-20 px-4 bg-surface">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Eligible Medical Professions
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-primary">Physicians</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Medical Doctors (MD)</li>
                <li>• Specialists & Surgeons</li>
                <li>• General Practitioners</li>
                <li>• Residents & Fellows</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-primary">Dentistry</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Dentists (DDS/DMD)</li>
                <li>• Orthodontists</li>
                <li>• Oral Surgeons</li>
                <li>• Periodontists</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-primary">Other Healthcare</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Veterinarians (DVM)</li>
                <li>• Pharmacists</li>
                <li>• Optometrists</li>
                <li>• Chiropractors</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQBlock title="Medical Professional Mortgage FAQs" faqs={faqs} />

      <CTASection
        headline="Ready to Get Your Medical Professional Mortgage?"
        description="Access exclusive rates and benefits designed for healthcare professionals"
        primaryCTA={{
          text: "Get Pre-Approved",
          href: "/mortgage/approval/",
        }}
      />
    </div>
  );
}
