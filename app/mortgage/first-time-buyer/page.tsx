import { Metadata } from "next";
import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";
import StepsSection from "@/components/sections/StepsSection";
import FAQBlock from "@/components/sections/FAQBlock";
import { Home, DollarSign, FileText, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "First-Time Home Buyer Mortgage Guide | approvU Mortgages",
  description: "Everything first-time home buyers need to know about getting a mortgage in Canada. Learn about down payments, incentives, and step-by-step process.",
};

export default function FirstTimeBuyerPage() {
  const steps = [
    {
      number: "1",
      title: "Get Pre-Approved",
      description: "Find out how much you can afford and show sellers you're serious. Pre-approval gives you a clear budget and strengthens your offer.",
    },
    {
      number: "2",
      title: "Save Your Down Payment",
      description: "You'll need at least 5% down for homes under $500k. Consider the First-Time Home Buyer Incentive to reduce your down payment needs.",
    },
    {
      number: "3",
      title: "Find Your Home",
      description: "Work with a real estate agent to find properties within your budget. Factor in property taxes, insurance, and maintenance costs.",
    },
    {
      number: "4",
      title: "Make an Offer",
      description: "Your agent will help you craft a competitive offer. Include a financing condition to protect yourself if mortgage approval falls through.",
    },
    {
      number: "5",
      title: "Finalize Your Mortgage",
      description: "Complete your mortgage application, provide required documents, and lock in your rate. Your lender will order an appraisal.",
    },
    {
      number: "6",
      title: "Close the Deal",
      description: "Meet with your lawyer, sign papers, and get your keys! Budget for closing costs (2-4% of purchase price).",
    },
  ];

  const faqs = [
    {
      question: "How much down payment do I need as a first-time buyer?",
      answer: "For homes under $500,000, you need at least 5% down. For homes between $500k-$1M, you need 5% on the first $500k and 10% on the remainder. For homes over $1M, you need 20% down.",
    },
    {
      question: "What is the First-Time Home Buyer Incentive?",
      answer: "The FTHBI is a government program that offers 5-10% of your home's purchase price. This reduces your mortgage and monthly payments. It's a shared equity mortgage that must be repaid when you sell or after 25 years.",
    },
    {
      question: "Can I use my RRSP for a down payment?",
      answer: "Yes! The Home Buyers' Plan lets you withdraw up to $35,000 from your RRSP ($70,000 for couples) tax-free. You have 15 years to repay it.",
    },
    {
      question: "What credit score do I need?",
      answer: "Most lenders require a minimum credit score of 600-650. A score above 680 typically qualifies you for better rates. If your score is lower, some lenders may still work with you.",
    },
    {
      question: "What's the difference between pre-qualification and pre-approval?",
      answer: "Pre-qualification is an estimate based on basic information. Pre-approval is a more thorough process where lenders verify your income, credit, and finances, giving you a firm amount you can borrow.",
    },
    {
      question: "Should I get mortgage default insurance (CMHC)?",
      answer: "If your down payment is less than 20%, mortgage default insurance is mandatory. It protects the lender if you default. Premiums range from 0.6% to 4.5% of your mortgage amount.",
    },
  ];

  const relatedPages = [
    {
      id: "1",
      title: "Mortgage Pre-Approval Guide",
      path: "/mortgage/how-to-apply",
      excerpt: "Learn how to get pre-approved and why it's important for first-time buyers.",
    },
    {
      id: "2",
      title: "Documents Needed for Your Mortgage",
      path: "/mortgage/documents-needed",
      excerpt: "Complete checklist of documents required for first-time buyer mortgages.",
    },
    {
      id: "3",
      title: "Mortgage Affordability Calculator",
      path: "/calculators/affordability",
      excerpt: "Calculate how much home you can afford based on your income and debts.",
    },
  ];

  return (
    <ArticlePageTemplate
      title="First-Time Home Buyer Mortgage"
      headline="First-Time Home Buyer Mortgage Guide"
      excerpt="Your complete guide to buying your first home in Canada. Learn about down payments, incentives, and the step-by-step process."
      category="Mortgage Solutions"
      tags={["First-Time Buyer", "Down Payment", "CMHC", "Home Buyers Plan"]}
      breadcrumbs={[
        { label: "Mortgage Solutions", href: "/mortgage" },
        { label: "First-Time Buyer", href: "/mortgage/first-time-buyer" },
      ]}
      relatedPages={relatedPages}
      content={
        <div className="space-y-12">
          {/* Introduction */}
          <section className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Buying your first home is one of life's biggest milestones. As a first-time home buyer in Canada, 
              you have access to special programs, incentives, and guidance to make the process easier.
            </p>
            <p>
              This comprehensive guide covers everything you need to know: minimum down payments, government 
              incentives like the First-Time Home Buyer Incentive and Home Buyers' Plan, mortgage types, 
              and the complete step-by-step process from pre-approval to closing.
            </p>
          </section>

          {/* Key Benefits */}
          <section className="bg-muted/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Benefits for First-Time Buyers</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">First-Time Home Buyer Incentive</h3>
                  <p className="text-sm text-muted-foreground">
                    Get 5-10% of your home's value from the government to reduce your mortgage payments.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Home Buyers' Plan</h3>
                  <p className="text-sm text-muted-foreground">
                    Withdraw up to $35,000 from your RRSP tax-free for your down payment.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Lower Down Payment</h3>
                  <p className="text-sm text-muted-foreground">
                    You can buy with as little as 5% down on homes under $500,000.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Land Transfer Tax Rebate</h3>
                  <p className="text-sm text-muted-foreground">
                    Many provinces offer rebates on land transfer tax for first-time buyers.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Steps */}
          <StepsSection
            title="Your Path to Homeownership"
            subtitle="Follow these steps to successfully buy your first home"
            steps={steps}
            variant="vertical"
          />

          {/* Down Payment Guide */}
          <section className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Down Payment Requirements</h2>
            <div className="bg-card border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="p-4 text-left">Home Price</th>
                    <th className="p-4 text-left">Minimum Down Payment</th>
                    <th className="p-4 text-left">Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-4">Under $500,000</td>
                    <td className="p-4 font-semibold">5%</td>
                    <td className="p-4">$25,000 on $500k home</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">$500,000 - $999,999</td>
                    <td className="p-4 font-semibold">5% on first $500k<br/>10% on remainder</td>
                    <td className="p-4">$45,000 on $750k home</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">$1,000,000+</td>
                    <td className="p-4 font-semibold">20%</td>
                    <td className="p-4">$250,000 on $1.25M home</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQs */}
          <FAQBlock faqs={faqs} title="First-Time Buyer FAQs" />
        </div>
      }
    />
  );
}
