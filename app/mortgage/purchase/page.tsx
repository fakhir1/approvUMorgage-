import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { StepsSection } from "@/components/sections/StepsSection";
import { FAQBlock } from "@/components/sections/FAQBlock";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Purchase Mortgage - Buy Your Dream Home | approvU",
  description: "Get pre-approved for your home purchase in minutes. Access first-time buyer programs, competitive rates, and expert guidance. Start your home buying journey today.",
};

export default function MortgagePurchase() {
  const features = [
    {
      title: "First-Time Buyer Programs",
      description: "Access government incentives, 5% down payment options, and specialized programs designed for first-time homebuyers.",
      icon: "🏠",
    },
    {
      title: "Competitive Interest Rates",
      description: "Compare rates from 50+ lenders to ensure you get the best possible rate for your purchase mortgage.",
      icon: "📊",
    },
    {
      title: "Flexible Down Payment Options",
      description: "Choose from various down payment structures starting at 5% for insured mortgages or 20%+ for conventional mortgages.",
      icon: "💰",
    },
    {
      title: "Fast Pre-Approval",
      description: "Get pre-approved in as little as 15 minutes with our streamlined digital application process.",
      icon: "⚡",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Get Pre-Approved",
      description: "Complete our quick online application and get pre-approved for your purchase amount in minutes.",
    },
    {
      number: "2",
      title: "Shop for Your Home",
      description: "Use your pre-approval to shop confidently within your budget and make competitive offers.",
    },
    {
      number: "3",
      title: "Finalize Your Mortgage",
      description: "Once you find your dream home, we'll finalize your mortgage with the best terms and rates.",
    },
  ];

  const faqs = [
    {
      question: "How much can I afford for a home purchase?",
      answer: "Generally, you can afford a home that costs 4-5 times your annual household income. Use our affordability calculator to get a personalized estimate based on your income, debts, and down payment.",
    },
    {
      question: "What's the minimum down payment required?",
      answer: "For homes under $500,000, the minimum down payment is 5%. For homes between $500,000-$999,999, it's 5% on the first $500,000 and 10% on the remaining amount. For homes $1M+, the minimum is 20%.",
    },
    {
      question: "What documents do I need for a purchase mortgage?",
      answer: "You'll typically need proof of income (pay stubs, T4s), employment verification, bank statements, identification, and details about the property you're purchasing.",
    },
    {
      question: "How long does the mortgage approval process take?",
      answer: "Pre-approval can happen in minutes, while final approval typically takes 3-7 business days once you have a signed purchase agreement.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Hero
        headline="Purchase Your Dream Home with Confidence"
        subheadline="Get pre-approved for your home purchase in minutes. Access exclusive first-time buyer programs, competitive rates, and expert guidance throughout your journey."
        primaryCTA={{
          text: "Get My Purchase Pre-Approval",
          href: "/mortgage/approval/",
        }}
        secondaryCTA={{
          text: "View Current Rates",
          href: "/mortgage/rates/",
        }}
      />

      <FeaturesGrid
        title="Why Choose Our Purchase Mortgages?"
        subtitle="Everything you need to buy your dream home with confidence"
        features={features}
      />

      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <h2 className="text-3xl font-bold text-primary mb-8">Complete Guide to Purchase Mortgages in Canada</h2>
            
            <p className="text-lg mb-6">
              Purchase mortgages are designed specifically for buying a home, whether you&apos;re a first-time buyer or moving to a new property. Understanding the different types of purchase mortgages, down payment requirements, and qualification criteria will help you navigate the home buying process with confidence and secure the best possible terms for your situation.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Types of Purchase Mortgages</h3>
            <p className="mb-6">
              Purchase mortgages come in several varieties depending on your down payment amount and property type. Insured mortgages (with less than 20% down payment) require mortgage default insurance but allow smaller down payments. Conventional mortgages (20%+ down payment) don&apos;t require insurance and typically offer slightly better rates. Understanding which type suits your financial situation helps you plan your home purchase strategy.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Down Payment Considerations</h3>
            <p className="mb-4">
              While minimum down payments make homeownership accessible, larger down payments provide several advantages: elimination of mortgage insurance costs at 20%, better interest rates, lower monthly payments, and increased equity from day one. Many buyers find that waiting to save a larger down payment, despite delaying their purchase, results in better long-term financial outcomes.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">The Pre-Approval Process</h3>
            <p className="mb-4">
              Obtaining pre-approval before house hunting provides numerous advantages in today&apos;s competitive market. Pre-approval confirms your maximum purchase price, demonstrates serious buyer intent to sellers, and can speed up the final approval process once you find your ideal property.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Working with Mortgage Professionals</h3>
            <p className="mb-6">
              While it&apos;s possible to arrange purchase mortgages directly with lenders, working with mortgage brokers or agents often provides access to more options, better rates, and expert guidance throughout the process. Mortgage professionals can help navigate the complexities of different lender requirements, program eligibilities, and market conditions.
            </p>
          </div>
        </div>
      </section>

      <StepsSection
        title="Your Purchase Mortgage Journey"
        subtitle="From pre-approval to closing - we guide you through every step"
        steps={steps}
      />

      <FAQBlock
        title="Purchase Mortgage FAQs"
        faqs={faqs}
      />

      <CTASection
        headline="Ready to Start Your Home Purchase?"
        description="Get pre-approved today and take the first step toward homeownership"
        primaryCTA={{
          text: "Get Pre-Approved",
          href: "/mortgage/approval/",
        }}
      />
    </div>
  );
}
