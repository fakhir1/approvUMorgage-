import { Metadata } from "next";
import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";
import FAQBlock from "@/components/sections/FAQBlock";

export const metadata: Metadata = {
  title: "Investment Property Mortgage | Rental Property Financing Canada",
  description: "Finance your investment property with competitive rates. Learn about rental income calculation, down payments, and approval requirements.",
};

export default function InvestmentPropertyPage() {
  const faqs = [
    {
      question: "How much down payment do I need for an investment property?",
      answer: "Investment properties require a minimum 20% down payment in Canada. This is higher than primary residences (5% minimum) because lenders consider investment properties higher risk. Some lenders may require 25-35% for multiple properties.",
    },
    {
      question: "Can I use rental income to qualify?",
      answer: "Yes! Lenders typically use 50-80% of expected rental income to offset the mortgage payment when calculating your debt ratios. You'll need a signed lease agreement or rent appraisal to support the income amount.",
    },
    {
      question: "Do I need good credit for an investment mortgage?",
      answer: "Yes, most lenders require a credit score of 680+ for investment properties. Some may require 700+. If you have multiple properties, requirements may be stricter.",
    },
    {
      question: "Can I buy an investment property while living in a rental?",
      answer: "Yes, but it's more challenging. Lenders will consider both your rental payment AND the new investment property mortgage when calculating affordability. Strong income and low debts are essential.",
    },
    {
      question: "What's the difference between owner-occupied and investment property rates?",
      answer: "Investment property rates are typically 0.15-0.50% higher than owner-occupied rates due to increased risk. The difference varies by lender and your overall profile.",
    },
  ];

  const relatedPages = [
    {
      id: "1",
      title: "Refinancing Your Mortgage",
      path: "/mortgage/refinance",
      excerpt: "Refinance to access equity for your next investment property.",
    },
    {
      id: "2",
      title: "Mortgage Affordability Calculator",
      path: "/calculators/affordability",
      excerpt: "Calculate how much investment property you can afford.",
    },
  ];

  return (
    <ArticlePageTemplate
      title="Investment Property Mortgage"
      headline="Investment Property Mortgage Guide"
      excerpt="Finance your rental property or real estate investment. Learn about down payments, rental income qualification, and investor-specific requirements."
      category="Mortgage Solutions"
      tags={["Investment Property", "Rental Income", "Real Estate Investing"]}
      breadcrumbs={[
        { label: "Mortgage Solutions", href: "/mortgage" },
        { label: "Investment Property", href: "/mortgage/investment" },
      ]}
      relatedPages={relatedPages}
      content={
        <div className="space-y-12 prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Investing in rental properties is a proven wealth-building strategy. Understanding investment mortgage 
            requirements—including higher down payments, rental income calculations, and lender criteria—is key to success.
          </p>

          <section>
            <h2>Key Requirements for Investment Property Mortgages</h2>
            <ul>
              <li><strong>Minimum 20% down payment</strong> – Higher than primary residences</li>
              <li><strong>Credit score 680+</strong> – Some lenders require 700+</li>
              <li><strong>Debt ratios under 44%</strong> – Including all properties and debts</li>
              <li><strong>Rental income verification</strong> – Lease agreements or rent appraisals</li>
              <li><strong>Property appraisal</strong> – Must support purchase price and rental potential</li>
              <li><strong>Cash reserves</strong> – Some lenders want 3-6 months reserves</li>
            </ul>
          </section>

          <section className="bg-muted/30 rounded-lg p-8">
            <h2>How Lenders Calculate Rental Income</h2>
            <p>Most lenders use 50-80% of gross rental income when calculating your qualifying income:</p>
            <div className="bg-card border rounded-lg p-6 my-6">
              <h3 className="text-lg font-semibold mb-4">Example Calculation:</h3>
              <div className="space-y-2 text-sm font-mono">
                <div className="flex justify-between py-2 border-b">
                  <span>Gross Monthly Rent:</span>
                  <span>$2,500</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Lender Uses (70%):</span>
                  <span>$1,750</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Your Mortgage Payment:</span>
                  <span>- $1,850</span>
                </div>
                <div className="flex justify-between py-3 bg-primary/10 px-4 rounded font-bold">
                  <span>Net Impact on Debt Ratios:</span>
                  <span className="text-primary">- $100/month</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                In this scenario, the property costs you $100/month from a qualification perspective, even though actual cash flow may be positive.
              </p>
            </div>
          </section>

          <section>
            <h2>Investment Property Strategies</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3">Traditional Rental</h3>
                <p className="text-sm mb-4">Long-term tenant (1+ years), steady income, easier to manage</p>
                <ul className="text-sm space-y-2">
                  <li>✅ Most lenders accept</li>
                  <li>✅ Stable income stream</li>
                  <li>✅ Easier financing</li>
                  <li>⚠️ Lower returns</li>
                </ul>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3">Short-Term Rental (Airbnb)</h3>
                <p className="text-sm mb-4">Higher income potential, more management required</p>
                <ul className="text-sm space-y-2">
                  <li>✅ Higher potential income</li>
                  <li>⚠️ Fewer lenders accept</li>
                  <li>⚠️ More work required</li>
                  <li>⚠️ Income harder to prove</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2>Tips for First-Time Investors</h2>
            <ol>
              <li><strong>Start with one property</strong> – Don't overextend yourself</li>
              <li><strong>Buy in strong rental markets</strong> – Research vacancy rates and demand</li>
              <li><strong>Calculate all costs</strong> – Property tax, insurance, maintenance, vacancies</li>
              <li><strong>Keep cash reserves</strong> – 6-12 months of expenses for emergencies</li>
              <li><strong>Work with a broker</strong> – They know which lenders are investor-friendly</li>
              <li><strong>Consider a duplex/triplex</strong> – Live in one unit, rent the others (lower down payment!)</li>
            </ol>
          </section>

          <FAQBlock faqs={faqs} title="Investment Property Mortgage FAQs" />
        </div>
      }
    />
  );
}
