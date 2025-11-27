import { Metadata } from "next";
import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";
import StepsSection from "@/components/sections/StepsSection";
import FAQBlock from "@/components/sections/FAQBlock";
import { AlertCircle, TrendingUp, Shield, CheckCircle } from "lucide-react";
import { getMortgagePage } from "@/lib/strapi";

export async function generateMetadata(): Promise<Metadata> {
  const mortgageData = await getMortgagePage('bad-credit');
  
  return {
    title: mortgageData?.metaTitle || "Bad Credit Mortgage Solutions | Get Approved in Canada",
    description: mortgageData?.metaDescription || "Get a mortgage with bad credit. Learn about B-lenders, alternative solutions, credit repair strategies, and rebuilding options.",
  };
}

export default async function BadCreditPage() {
  let mortgageData = null;
  
  try {
    mortgageData = await getMortgagePage('bad-credit');
    console.log('Mortgage data loaded:', mortgageData ? 'Success' : 'Using fallback');
  } catch (error) {
    console.error('Error fetching bad credit mortgage data:', error);
  }

  // Fallback data
  const defaultSteps = [
    {
      number: "1",
      title: "Check Your Credit Report",
      description: "Get free reports from Equifax and TransUnion. Identify errors, collections, and areas needing improvement. Dispute any inaccuracies immediately.",
    },
    {
      number: "2",
      title: "Understand Your Credit Score Range",
      description: "Excellent (750+), Good (680-749), Fair (620-679), Poor (580-619), Very Poor (< 580). Know where you stand and what lenders require.",
    },
    {
      number: "3",
      title: "Explore Your Lender Options",
      description: "Traditional banks need 680+. B-lenders work with 550-679. Private lenders accept under 550. Each has different rates and requirements.",
    },
    {
      number: "4",
      title: "Increase Your Down Payment",
      description: "A 20%+ down payment significantly improves approval chances with bad credit. It reduces lender risk and may qualify you for better rates.",
    },
    {
      number: "5",
      title: "Work with a Mortgage Broker",
      description: "Brokers have access to dozens of lenders including B-lenders and private mortgage specialists who work with credit-challenged borrowers.",
    },
    {
      number: "6",
      title: "Start Credit Rebuilding",
      description: "Make all payments on time, pay down credit cards, avoid new credit applications. Even 6-12 months of good habits can improve your options.",
    },
  ];

  const defaultFaqs = [
    {
      question: "What credit score do I need to get a mortgage?",
      answer: "Traditional lenders (banks) typically require 680+. B-lenders work with scores from 550-679. Private lenders may approve scores under 550. However, lower scores mean higher rates and larger down payments (often 15-35%).",
    },
    {
      question: "Can I get a mortgage with a bankruptcy or consumer proposal?",
      answer: "Yes, but timing matters. For discharged bankruptcy: wait 2-3 years with traditional lenders, or 1 day with private lenders. For consumer proposal: completed for 1-2 years, or during if strong payment history. B-lenders and private lenders are most flexible.",
    },
    {
      question: "What's the difference between A, B, and private lenders?",
      answer: "A-Lenders (banks): Best rates (5-7%), need 680+ credit, strict qualification. B-Lenders: Rates 1-3% higher, accept 550-679 credit, more flexible. Private Lenders: Rates 8-15%, minimal credit requirements, short-term (1-2 years), equity-focused.",
    },
    {
      question: "How much down payment do I need with bad credit?",
      answer: "It varies by lender and score: Traditional (680+): 5-20%, B-Lender (580-679): 10-35%, Private (<580): 15-35%. Larger down payments improve approval odds and reduce rates.",
    },
    {
      question: "Can I refinance later once my credit improves?",
      answer: "Absolutely! Many borrowers start with B-lenders or private mortgages as a 'bridge' solution. After 1-2 years of on-time payments and credit rebuilding, they refinance to A-lender rates, saving significantly on interest.",
    },
    {
      question: "What hurts my credit the most for mortgage applications?",
      answer: "Late payments (especially recent), collections, judgments, maxed-out credit cards, too many credit inquiries, and bankruptcy/consumer proposal. Lenders focus heavily on payment history from the past 2 years.",
    },
  ];

  const defaultRelatedPages = [
    {
      id: "1",
      title: "Credit Score Impact on Mortgages",
      path: "/mortgage-basics/credit-score-impact",
      excerpt: "Understand how credit scores affect mortgage rates and approval.",
    },
    {
      id: "2",
      title: "Self-Employed Mortgages",
      path: "/mortgage/self-employed",
      excerpt: "Alternative income verification options for self-employed borrowers.",
    },
    {
      id: "3",
      title: "Debt Consolidation Mortgage",
      path: "/mortgage/debt-consolidation",
      excerpt: "Use a mortgage to pay off high-interest debt and rebuild credit.",
    },
  ];

  // Use Strapi data if available, otherwise use fallback
  const steps = mortgageData?.steps || defaultSteps;
  const faqs = mortgageData?.faqs || defaultFaqs;
  const relatedPages = mortgageData?.relatedPages || defaultRelatedPages;

  return (
    <ArticlePageTemplate
      title={mortgageData?.title || "Bad Credit Mortgage"}
      headline={mortgageData?.heroTitle || "Bad Credit Mortgage Solutions"}
      excerpt={mortgageData?.excerpt || "Get approved for a mortgage even with bad credit. Learn about alternative lenders, credit repair, and rebuilding strategies."}
      category={mortgageData?.category || "Mortgage Solutions"}
      tags={mortgageData?.tags || ["Bad Credit", "B-Lender", "Credit Repair", "Alternative Lenders"]}
      breadcrumbs={mortgageData?.breadcrumbs || [
        { label: "Mortgage Solutions", href: "/mortgage" },
        { label: "Bad Credit", href: "/mortgage/bad-credit" },
      ]}
      relatedPages={relatedPages}
      content={
        <div className="space-y-12">
          {/* Introduction */}
          <section className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Bad credit doesn't mean you can't get a mortgage. While traditional banks have strict requirements, 
              alternative lenders, B-lenders, and private mortgage options exist for credit-challenged borrowers.
            </p>
            <p>
              The key is understanding your options, being realistic about rates and terms, and using the mortgage 
              as a tool to rebuild your credit for better rates in the future.
            </p>
          </section>

          {/* Warning Box */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 flex gap-4">
            <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-amber-900 mb-2">Important: Higher Costs with Bad Credit</h3>
              <p className="text-sm text-amber-800">
                Bad credit mortgages come with higher interest rates (often 2-8% above prime), larger down payments 
                (15-35%), and additional fees. View this as a temporary solution while you rebuild credit to refinance 
                to better rates within 1-2 years.
              </p>
            </div>
          </div>

          {/* Credit Score Ranges */}
          <section className="bg-muted/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Credit Score Ranges & Mortgage Options</h2>
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-green-900">Excellent: 750+</h3>
                    <p className="text-sm text-green-700">All lenders, best rates, 5% down minimum</p>
                  </div>
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-blue-900">Good: 680-749</h3>
                    <p className="text-sm text-blue-700">Most lenders, competitive rates, 5-10% down</p>
                  </div>
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-yellow-900">Fair: 620-679</h3>
                    <p className="text-sm text-yellow-700">B-lenders available, higher rates, 10-20% down</p>
                  </div>
                  <Shield className="h-5 w-5 text-yellow-600" />
                </div>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-orange-900">Poor: 550-619</h3>
                    <p className="text-sm text-orange-700">B-lenders or private, significantly higher rates, 20-35% down</p>
                  </div>
                  <AlertCircle className="h-5 w-5 text-orange-600" />
                </div>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-red-900">Very Poor: Under 550</h3>
                    <p className="text-sm text-red-700">Private lenders only, rates 8-15%, 25-35% down, short-term</p>
                  </div>
                  <AlertCircle className="h-5 w-5 text-red-600" />
                </div>
              </div>
            </div>
          </section>

          {/* Steps */}
          <StepsSection
            title="How to Get a Mortgage with Bad Credit"
            subtitle="Follow this plan to secure financing and rebuild your credit"
            steps={steps}
            variant="vertical"
          />

          {/* Lender Comparison */}
          <section className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Lender Type Comparison</h2>
            <div className="bg-card border rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="p-4 text-left">Factor</th>
                    <th className="p-4 text-left">A-Lender (Bank)</th>
                    <th className="p-4 text-left">B-Lender</th>
                    <th className="p-4 text-left">Private Lender</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-4 font-semibold">Min. Credit Score</td>
                    <td className="p-4">680+</td>
                    <td className="p-4">550-679</td>
                    <td className="p-4">No minimum</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4 font-semibold">Interest Rate</td>
                    <td className="p-4">5.5-7%</td>
                    <td className="p-4">7-10%</td>
                    <td className="p-4">8-15%</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4 font-semibold">Min. Down Payment</td>
                    <td className="p-4">5-20%</td>
                    <td className="p-4">10-35%</td>
                    <td className="p-4">15-35%</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4 font-semibold">Typical Term</td>
                    <td className="p-4">1-10 years</td>
                    <td className="p-4">1-5 years</td>
                    <td className="p-4">1-2 years</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4 font-semibold">Qualification</td>
                    <td className="p-4">Very strict</td>
                    <td className="p-4">Moderate</td>
                    <td className="p-4">Very flexible</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4 font-semibold">Fees</td>
                    <td className="p-4">Low</td>
                    <td className="p-4">1-3% of loan</td>
                    <td className="p-4">2-5% of loan</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Credit Rebuilding Tips */}
          <section className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Rebuild Your Credit for Better Rates</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6 space-y-3">
                <div className="flex gap-3 items-start">
                  <TrendingUp className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Quick Wins (3-6 Months)</h3>
                    <ul className="text-sm space-y-2 text-muted-foreground">
                      <li>✅ Pay all bills on time (most important!)</li>
                      <li>✅ Pay down credit card balances below 30%</li>
                      <li>✅ Dispute credit report errors</li>
                      <li>✅ Avoid new credit applications</li>
                      <li>✅ Set up automatic payments</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="border rounded-lg p-6 space-y-3">
                <div className="flex gap-3 items-start">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Long-Term Strategy (6-24 Months)</h3>
                    <ul className="text-sm space-y-2 text-muted-foreground">
                      <li>✅ Settle collections/judgments</li>
                      <li>✅ Keep oldest credit cards open</li>
                      <li>✅ Increase credit limits (don't use them)</li>
                      <li>✅ Build diverse credit mix</li>
                      <li>✅ Monitor progress monthly</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <strong>💡 Pro Tip:</strong> Many bad credit borrowers refinance to A-lender rates within 12-24 months 
              by making on-time mortgage payments and improving credit. This can save $300-800+/month in interest!
            </p>
          </section>

          {/* FAQs */}
          <FAQBlock faqs={faqs} title="Bad Credit Mortgage FAQs" />
        </div>
      }
    />
  );
}
