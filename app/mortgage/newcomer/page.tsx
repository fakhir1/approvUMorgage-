import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import StepsSection from "@/components/sections/StepsSection";
import FAQBlock from "@/components/sections/FAQBlock";
import CTASection from "@/components/sections/CTASection";
import { getMortgagePage } from "@/lib/strapi";

export async function generateMetadata(): Promise<Metadata> {
  const mortgageData = await getMortgagePage('newcomer');
  
  return {
    title: mortgageData?.metaTitle || "Newcomer Mortgages - New to Canada Mortgage Programs | approvU",
    description: mortgageData?.metaDescription || "Special mortgage programs for new Canadians. No credit history required, foreign income recognition, and government incentives. Start your Canadian homeownership journey.",
  };
}

export default async function NewcomerMortgage() {
  let mortgageData = null;
  
  try {
    mortgageData = await getMortgagePage('newcomer');
  } catch (error) {
    console.error('Error fetching newcomer mortgage data:', error);
  }

  const heroTitle = mortgageData?.heroTitle || "Newcomer to Canada Mortgage Programs";
  const heroSubtitle = mortgageData?.heroSubtitle || "Special mortgage programs designed for new Canadians. No established credit history required, foreign income recognition, and access to government incentive programs.";

  const features = [
    {
      title: "No Canadian Credit History Required",
      description: "Qualify for a mortgage even without established Canadian credit history using alternative documentation and foreign credit reports.",
      icon: "🆕",
    },
    {
      title: "Foreign Income Recognition",
      description: "Use employment letters from Canadian employers and foreign income history to qualify for your mortgage application.",
      icon: "🌍",
    },
    {
      title: "Government Incentive Programs",
      description: "Access First-Time Home Buyer Incentive, Home Buyers' Plan, and provincial newcomer programs for additional assistance.",
      icon: "🏛️",
    },
    {
      title: "Expert Newcomer Guidance",
      description: "Work with mortgage professionals who understand the unique challenges and opportunities for new Canadian residents.",
      icon: "🤝",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Gather Your Documentation",
      description: "Collect employment letters, foreign credit reports, bank statements, and immigration documents.",
    },
    {
      number: "2",
      title: "Choose Your Program",
      description: "Select from newcomer-specific programs, traditional mortgages, or alternative lending based on your situation.",
    },
    {
      number: "3",
      title: "Start Building Canadian Credit",
      description: "Use your mortgage payments and Canadian banking to establish strong credit history in Canada.",
    },
  ];

  const faqs = [
    {
      question: "How long do I need to be in Canada to qualify for a mortgage?",
      answer: "Many lenders offer mortgages to newcomers within their first few months in Canada, especially with confirmed employment and proper documentation. Some programs are available immediately upon arrival.",
    },
    {
      question: "What documents do I need as a newcomer to Canada?",
      answer: "Typically: immigration documents (work permit, PR card), employment letter or contract, foreign credit report, bank statements, reference letter from foreign bank, and proof of down payment funds.",
    },
    {
      question: "Can I use foreign income to qualify for a Canadian mortgage?",
      answer: "Yes, if you're relocating for work, many lenders will consider foreign income along with your Canadian employment letter or contract to determine qualification.",
    },
    {
      question: "What down payment is required for newcomers?",
      answer: "Down payment requirements are the same as for Canadian residents - typically 5% minimum for homes under $500K. However, you'll need to show the funds have been in your account for at least 90 days.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Hero
        headline={heroTitle}
        subheadline={heroSubtitle}
        primaryCTA={{
          text: "Get My Newcomer Mortgage",
          href: "/mortgage/approval/",
        }}
        secondaryCTA={{
          text: "Learn About Requirements",
          href: "#requirements",
        }}
        backgroundImage="/images/hero/newcomer-mortgage-hero.jpg"
        variant="default"
      />

      <FeaturesGrid
        title="Mortgage Solutions for New Canadians"
        subtitle="Specialized programs designed to help newcomers achieve homeownership"
        features={features}
      />

      <StepsSection
        title="Your Newcomer Mortgage Journey"
        subtitle="From arrival to homeownership - we'll guide you every step"
        steps={steps}
      />

      <section id="requirements" className="py-20 px-4 bg-surface">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Required Documentation
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Immigration & Identity
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Permanent Resident Card or Work Permit</li>
                <li>• Passport and other identification</li>
                <li>• Immigration documents (CoPR, etc.)</li>
                <li>• Social Insurance Number</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Financial Documentation
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Employment letter or job contract</li>
                <li>• Foreign credit report (if available)</li>
                <li>• Bank statements (90+ days)</li>
                <li>• Proof of down payment source</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">
            Government Programs for Newcomers
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-primary">
                First-Time Home Buyer Incentive
              </h3>
              <p className="text-muted-foreground text-sm">
                Shared equity loan from government to reduce monthly payments
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-primary">
                Home Buyers&apos; Plan
              </h3>
              <p className="text-muted-foreground text-sm">
                Withdraw up to $35,000 from RRSP for down payment
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-primary">
                Provincial Programs
              </h3>
              <p className="text-muted-foreground text-sm">
                Additional rebates and incentives available in some provinces
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQBlock title="Newcomer Mortgage FAQs" faqs={faqs} />

      <CTASection
        headline="Ready to Start Your Canadian Homeownership Journey?"
        description="Let us help you navigate the mortgage process as a newcomer to Canada"
        primaryCTA={{
          text: "Start My Application",
          href: "/mortgage/approval/",
        }}
      />
    </div>
  );
}
