import { Metadata } from "next";
import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";
import StepsSection from "@/components/sections/StepsSection";
import FAQBlock from "@/components/sections/FAQBlock";
import { Briefcase, FileText, TrendingUp, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Self-Employed Mortgage Guide | Get Approved in Canada",
  description: "Complete guide for self-employed Canadians seeking a mortgage. Learn about documentation, lenders, and strategies to get approved.",
};

export default function SelfEmployedPage() {
  const steps = [
    {
      number: "1",
      title: "Gather Financial Documents",
      description: "Prepare 2 years of tax returns (T1 Generals), Notice of Assessments, business financial statements, and proof of business ownership. Strong documentation is key for self-employed applicants.",
    },
    {
      number: "2",
      title: "Calculate Your Qualifying Income",
      description: "Lenders typically use a 2-year average of your net business income plus any add-backs (depreciation, CCA). Work with a mortgage broker to maximize your qualifying income.",
    },
    {
      number: "3",
      title: "Build a Strong Credit Profile",
      description: "Maintain excellent credit (680+), keep business and personal expenses separate, and avoid taking on new debt before applying.",
    },
    {
      number: "4",
      title: "Choose the Right Lender",
      description: "Traditional banks have strict requirements. Alternative lenders (B-lenders) are more flexible with self-employed income. Some offer stated income programs.",
    },
    {
      number: "5",
      title: "Consider a Larger Down Payment",
      description: "A 20%+ down payment strengthens your application and avoids mortgage insurance. Some self-employed programs require 10-35% down.",
    },
  ];

  const faqs = [
    {
      question: "What documents do self-employed borrowers need?",
      answer: "Most lenders require: 2 years of personal tax returns (T1 General), 2 years of Notices of Assessment from CRA, proof of business ownership (articles of incorporation or business license), business financial statements, and 90 days of recent bank statements. Lenders want to see stable, consistent income.",
    },
    {
      question: "How do lenders calculate self-employed income?",
      answer: "Lenders typically use a 2-year average of your net business income from line 150 of your tax return. They may add back certain expenses like depreciation and CCA (Capital Cost Allowance) that don't represent actual cash outflow. If your income is trending up, some lenders may weight recent years more heavily.",
    },
    {
      question: "Can I qualify with just 1 year of self-employment?",
      answer: "Most traditional lenders require 2 years of self-employment history. However, some alternative lenders will work with 1 year if you have strong income, excellent credit, and a larger down payment (20%+). If you were previously employed in the same industry, that may help.",
    },
    {
      question: "What if I write off a lot of expenses?",
      answer: "This is a common challenge. While write-offs reduce your tax burden, they also lower your qualifying income for mortgages. Consider balancing tax savings with mortgage qualification needs. Some lenders offer 'stated income' programs where income verification is more flexible (but rates are higher).",
    },
    {
      question: "Do I need a higher down payment as a self-employed borrower?",
      answer: "Not always. If you have strong financials and meet all criteria, you can qualify with as little as 5% down. However, a 20%+ down payment gives you more lender options, avoids CMHC insurance, and strengthens your application significantly.",
    },
    {
      question: "Should I use an accountant's letter?",
      answer: "Yes, for complex situations. An accountant's letter confirming your income, business stability, and financial health can strengthen your application. Some lenders specifically request this for self-employed applicants.",
    },
  ];

  const relatedPages = [
    {
      id: "1",
      title: "Documents Needed for Mortgage",
      path: "/mortgage/documents-needed",
      excerpt: "Complete checklist of documents required for self-employed mortgage applications.",
    },
    {
      id: "2",
      title: "Mortgage Affordability Calculator",
      path: "/calculators/affordability",
      excerpt: "Calculate how much mortgage you can afford based on your self-employed income.",
    },
    {
      id: "3",
      title: "Bad Credit Mortgages",
      path: "/mortgage/bad-credit",
      excerpt: "Alternative solutions if your credit needs improvement.",
    },
  ];

  return (
    <ArticlePageTemplate
      title="Self-Employed Mortgage"
      headline="Self-Employed Mortgage Guide"
      excerpt="Get approved for a mortgage when you're self-employed. Learn about income verification, documentation, and lender options."
      category="Mortgage Solutions"
      tags={["Self-Employed", "Documentation", "Income Verification", "Business Owner"]}
      breadcrumbs={[
        { label: "Mortgage Solutions", href: "/mortgage" },
        { label: "Self-Employed", href: "/mortgage/self-employed" },
      ]}
      relatedPages={relatedPages}
      content={
        <div className="space-y-12">
          {/* Introduction */}
          <section className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Getting a mortgage when you're self-employed requires more documentation and planning than traditional 
              employment, but it's absolutely achievable with the right approach.
            </p>
            <p>
              Canadian lenders have specific requirements for self-employed borrowers to verify income stability 
              and business viability. Understanding these requirements and preparing accordingly dramatically 
              improves your approval chances.
            </p>
          </section>

          {/* Key Challenges */}
          <section className="bg-muted/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Self-Employed Mortgage Challenges</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">More Documentation Required</h3>
                  <p className="text-sm text-muted-foreground">
                    Lenders need 2+ years of tax returns, NOAs, business financials, and bank statements to verify income.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Income Calculation Complexity</h3>
                  <p className="text-sm text-muted-foreground">
                    Lenders use 2-year averages and may discount fluctuating income or certain business expenses.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Business Stability Concerns</h3>
                  <p className="text-sm text-muted-foreground">
                    Lenders want to see consistent income history and business longevity (2+ years in operation).
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Limited Lender Options</h3>
                  <p className="text-sm text-muted-foreground">
                    Some traditional lenders have restrictive policies. Working with a broker opens more options.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Steps */}
          <StepsSection
            title="How to Get Approved When Self-Employed"
            subtitle="Follow this roadmap to maximize your approval chances"
            steps={steps}
            variant="vertical"
          />

          {/* Income Calculation */}
          <section className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">How Lenders Calculate Self-Employed Income</h2>
            <div className="bg-card border rounded-lg p-6 space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Example Calculation:</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b">
                    <span>Net Business Income (2023):</span>
                    <span className="font-mono">$85,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>Net Business Income (2024):</span>
                    <span className="font-mono">$95,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>Add back: CCA/Depreciation (2023):</span>
                    <span className="font-mono">+ $8,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>Add back: CCA/Depreciation (2024):</span>
                    <span className="font-mono">+ $9,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b font-semibold">
                    <span>Adjusted Income (2023):</span>
                    <span className="font-mono">$93,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b font-semibold">
                    <span>Adjusted Income (2024):</span>
                    <span className="font-mono">$104,000</span>
                  </div>
                  <div className="flex justify-between py-3 bg-primary/10 px-4 rounded font-bold text-base">
                    <span>2-Year Average (Qualifying Income):</span>
                    <span className="font-mono text-primary">$98,500</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              💡 <strong>Pro Tip:</strong> Work with a mortgage broker and your accountant to maximize your 
              qualifying income. They can identify legitimate add-backs and present your income in the best light.
            </p>
          </section>

          {/* Lender Options */}
          <section className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Lender Options for Self-Employed</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-6 space-y-3">
                <h3 className="font-bold text-lg">A-Lenders (Banks)</h3>
                <ul className="space-y-2 text-sm">
                  <li>✅ Best rates (2-4%)</li>
                  <li>✅ Lowest fees</li>
                  <li>❌ Strict documentation</li>
                  <li>❌ 2+ years required</li>
                  <li>❌ Full income verification</li>
                </ul>
                <p className="text-xs text-muted-foreground">Best for: Strong financials, stable income, 2+ years history</p>
              </div>
              <div className="border rounded-lg p-6 space-y-3 border-primary">
                <h3 className="font-bold text-lg">B-Lenders (Alternative)</h3>
                <ul className="space-y-2 text-sm">
                  <li>✅ More flexible</li>
                  <li>✅ 1 year may qualify</li>
                  <li>✅ Higher debt ratios</li>
                  <li>⚠️ Rates 1-2% higher</li>
                  <li>⚠️ Higher fees</li>
                </ul>
                <p className="text-xs text-muted-foreground">Best for: Newer businesses, fluctuating income, credit under 680</p>
              </div>
              <div className="border rounded-lg p-6 space-y-3">
                <h3 className="font-bold text-lg">Private Lenders</h3>
                <ul className="space-y-2 text-sm">
                  <li>✅ Minimal documentation</li>
                  <li>✅ Stated income options</li>
                  <li>✅ Credit flexible</li>
                  <li>❌ Rates 6-12%+</li>
                  <li>❌ Short terms (1-2 yrs)</li>
                </ul>
                <p className="text-xs text-muted-foreground">Best for: Temporary solution, bridge financing, unique situations</p>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <FAQBlock faqs={faqs} title="Self-Employed Mortgage FAQs" />
        </div>
      }
    />
  );
}
