import { Metadata } from "next";
import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";
import StepsSection from "@/components/sections/StepsSection";
import FAQBlock from "@/components/sections/FAQBlock";
import { TrendingUp, Calculator, Shield, DollarSign } from "lucide-react";
import { getMortgagePage } from "@/lib/strapi";

export async function generateMetadata(): Promise<Metadata> {
  const mortgageData = await getMortgagePage('refinance');
  
  return {
    title: mortgageData?.metaTitle || "Mortgage Refinancing Guide | Lower Your Rate & Access Equity",
    description: mortgageData?.metaDescription || "Learn how to refinance your mortgage to get a better rate, access home equity, or consolidate debt. Expert guidance for Canadian homeowners.",
  };
}

export default async function RefinancePage() {
  let mortgageData = null;
  
  try {
    mortgageData = await getMortgagePage('refinance');
  } catch (error) {
    console.error('Error fetching refinance mortgage data:', error);
  }

  const defaultSteps = [
    {
      number: "1",
      title: "Check Your Home's Value",
      description: "Get an updated appraisal to know your home's current market value and available equity. Most lenders allow you to access up to 80% of your home's value.",
    },
    {
      number: "2",
      title: "Calculate Your Costs",
      description: "Factor in penalties to break your current mortgage, legal fees, appraisal costs, and potential land transfer taxes. Use our refinance calculator to see if it makes financial sense.",
    },
    {
      number: "3",
      title: "Shop for Better Rates",
      description: "Compare rates from multiple lenders. Even a 0.25% rate reduction can save thousands over your mortgage term.",
    },
    {
      number: "4",
      title: "Submit Your Application",
      description: "Provide updated income documents, current mortgage statement, and property tax bills. Your lender will order a new appraisal.",
    },
    {
      number: "5",
      title: "Close Your Refinance",
      description: "Sign new mortgage documents with your lawyer. Your new lender pays off your old mortgage and advances any additional funds you're accessing.",
    },
  ];

  const defaultFaqs = [
    {
      question: "When should I consider refinancing my mortgage?",
      answer: "Consider refinancing when: rates have dropped significantly (0.5%+ lower), you need to access equity for renovations or debt consolidation, you want to switch from variable to fixed (or vice versa), or your financial situation has improved and you qualify for better rates.",
    },
    {
      question: "What are the costs to refinance?",
      answer: "Typical costs include: prepayment penalty (3 months interest or IRD), legal fees ($1,000-$1,500), appraisal fee ($300-$500), title insurance ($250-$400), and potentially land transfer tax. Always calculate if savings outweigh costs.",
    },
    {
      question: "How much equity can I access when refinancing?",
      answer: "Canadian lenders typically allow you to borrow up to 80% of your home's appraised value (loan-to-value ratio). If your home is worth $500k, you could refinance up to $400k total.",
    },
    {
      question: "Will I need mortgage insurance if I refinance?",
      answer: "If you're refinancing above 80% LTV, you'll need mortgage default insurance (CMHC). Most refinances stay at or below 80% LTV to avoid insurance premiums.",
    },
    {
      question: "How long does refinancing take?",
      answer: "The process typically takes 3-6 weeks from application to closing. This includes time for appraisal, underwriting, and legal work.",
    },
    {
      question: "Can I refinance if I have bad credit?",
      answer: "Yes, but options may be limited. Traditional lenders require good credit (650+), but alternative lenders and private mortgage options exist for those with credit challenges.",
    },
  ];

  const defaultRelatedPages = [
    {
      id: "1",
      title: "Debt Consolidation Mortgages",
      path: "/mortgage/debt-consolidation",
      excerpt: "Use your home equity to pay off high-interest debt and save on interest.",
    },
    {
      id: "2",
      title: "Refinance Calculator",
      path: "/calculators/refinance",
      excerpt: "Calculate if refinancing makes financial sense for your situation.",
    },
    {
      id: "3",
      title: "Fixed vs Variable Rate Mortgages",
      path: "/mortgage-basics/fixed-vs-variable",
      excerpt: "Understand the differences to choose the best option when refinancing.",
    },
  ];

  const steps = mortgageData?.steps || defaultSteps;
  const faqs = mortgageData?.faqs || defaultFaqs;
  const relatedPages = mortgageData?.relatedPages || defaultRelatedPages;

  return (
    <ArticlePageTemplate
      title={mortgageData?.title || "Mortgage Refinancing"}
      headline={mortgageData?.heroTitle || "Mortgage Refinancing Guide"}
      excerpt={mortgageData?.excerpt || "Lower your rate, access equity, or consolidate debt. Learn everything about refinancing your Canadian mortgage."}
      category={mortgageData?.category || "Mortgage Solutions"}
      tags={mortgageData?.tags || ["Refinancing", "Home Equity", "Lower Rates", "Debt Consolidation"]}
      breadcrumbs={mortgageData?.breadcrumbs || [
        { label: "Mortgage Solutions", href: "/mortgage" },
        { label: "Refinance", href: "/mortgage/refinance" },
      ]}
      relatedPages={relatedPages}
      content={
        <div className="space-y-12">
          {/* Introduction */}
          <section className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Refinancing your mortgage means replacing your current mortgage with a new one, typically to get 
              a lower interest rate, access home equity, or change your mortgage terms.
            </p>
            <p>
              Canadian homeowners refinance for many reasons: to take advantage of lower rates, tap into home 
              equity for renovations or investments, consolidate high-interest debt, or switch between fixed 
              and variable rates.
            </p>
          </section>

          {/* Key Reasons */}
          <section className="bg-muted/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Top Reasons to Refinance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Get a Lower Interest Rate</h3>
                  <p className="text-sm text-muted-foreground">
                    Save thousands over your mortgage term by securing a lower rate. Even 0.5% can make a big difference.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Access Home Equity</h3>
                  <p className="text-sm text-muted-foreground">
                    Tap up to 80% of your home's value for renovations, investments, or other major expenses.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Consolidate Debt</h3>
                  <p className="text-sm text-muted-foreground">
                    Pay off high-interest credit cards and loans by rolling them into your lower-rate mortgage.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Change Mortgage Type</h3>
                  <p className="text-sm text-muted-foreground">
                    Switch from variable to fixed for rate stability, or fixed to variable to save on interest.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Steps */}
          <StepsSection
            title="How to Refinance Your Mortgage"
            subtitle="Follow these steps for a successful refinance"
            steps={steps}
            variant="vertical"
          />

          {/* Cost Analysis */}
          <section className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Refinancing Cost Breakdown</h2>
            <div className="bg-card border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="p-4 text-left">Cost Item</th>
                    <th className="p-4 text-left">Typical Range</th>
                    <th className="p-4 text-left">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-4">Prepayment Penalty</td>
                    <td className="p-4 font-semibold">$3,000 - $15,000+</td>
                    <td className="p-4">3 months interest or IRD calculation</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">Legal Fees</td>
                    <td className="p-4 font-semibold">$1,000 - $1,500</td>
                    <td className="p-4">For new mortgage documents</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">Appraisal Fee</td>
                    <td className="p-4 font-semibold">$300 - $500</td>
                    <td className="p-4">Required by most lenders</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">Title Insurance</td>
                    <td className="p-4 font-semibold">$250 - $400</td>
                    <td className="p-4">One-time premium</td>
                  </tr>
                  <tr className="border-t bg-primary/5">
                    <td className="p-4 font-bold">Total Typical Cost</td>
                    <td className="p-4 font-bold">$4,550 - $17,400</td>
                    <td className="p-4">Varies by situation</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              💡 <strong>Tip:</strong> Some lenders offer "no-cost refinancing" where fees are rolled into your new mortgage. 
              This increases your loan amount but reduces upfront costs.
            </p>
          </section>

          {/* FAQs */}
          <FAQBlock faqs={faqs} title="Refinancing FAQs" />
        </div>
      }
    />
  );
}
