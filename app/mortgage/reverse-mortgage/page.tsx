import { Metadata } from "next";
import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";
import FAQBlock from "@/components/sections/FAQBlock";

export const metadata: Metadata = {
  title: "Reverse Mortgage Guide Canada | CHIP Reverse Mortgage",
  description: "Access your home equity without selling. Learn about reverse mortgages for Canadian seniors aged 55+. No monthly payments required.",
};

export default function ReverseMortgagePage() {
  const faqs = [
    {
      question: "How does a reverse mortgage work?",
      answer: "A reverse mortgage lets you borrow against your home equity without making monthly payments. The loan is repaid when you sell, move out, or pass away. You retain ownership and can live in your home. Interest accumulates on the loan balance over time.",
    },
    {
      question: "What are the eligibility requirements?",
      answer: "You must be 55+ years old, own your home (with significant equity), and the home must be your primary residence. You can access up to 55% of your home's appraised value. Condos, detached homes, and townhouses qualify.",
    },
    {
      question: "Do I need to make monthly payments?",
      answer: "No! That's the key benefit. You have zero monthly mortgage payments. However, you must maintain property taxes, homeowners insurance, and keep the home in good condition. Interest accrues and is added to the loan balance.",
    },
    {
      question: "What happens to the debt when I die or move?",
      answer: "The loan becomes due. Your estate sells the home to repay the loan. If the home is worth more than the debt, the excess goes to your heirs. If home value decreased, the lender absorbs the loss (you're protected by a no-negative-equity guarantee).",
    },
    {
      question: "How much can I borrow?",
      answer: "Typically 20-55% of your home's value, depending on your age (older = higher percentage), property type, and location. Example: $500k home, age 65 = up to $225k (45%). Age 75 = up to $275k (55%).",
    },
    {
      question: "What are the costs and interest rates?",
      answer: "Reverse mortgages have higher rates than traditional mortgages (typically 2-3% above prime, so 8-10% currently). Costs include: origination fee ($1,500-$2,500), appraisal ($300-500), legal fees ($1,000-$1,500), and title insurance.",
    },
  ];

  const relatedPages = [
    {
      id: "1",
      title: "Refinance Your Mortgage",
      path: "/mortgage/refinance",
      excerpt: "Traditional refinancing alternative if you're under 55.",
    },
    {
      id: "2",
      title: "HELOC vs Reverse Mortgage",
      path: "/mortgage-basics/heloc-vs-reverse",
      excerpt: "Compare home equity access options for seniors.",
    },
  ];

  return (
    <ArticlePageTemplate
      title="Reverse Mortgage"
      headline="Reverse Mortgage Guide for Canadian Seniors"
      excerpt="Access your home equity without monthly payments. Learn about reverse mortgages (CHIP) for Canadians aged 55+. Supplement retirement income while staying in your home."
      category="Mortgage Solutions"
      tags={["Reverse Mortgage", "CHIP", "Seniors", "Retirement", "Home Equity"]}
      breadcrumbs={[
        { label: "Mortgage Solutions", href: "/mortgage" },
        { label: "Reverse Mortgage", href: "/mortgage/reverse-mortgage" },
      ]}
      relatedPages={relatedPages}
      content={
        <div className="space-y-12 prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed">
            A reverse mortgage lets Canadian seniors aged 55+ access their home equity without selling or making 
            monthly payments. It's a way to supplement retirement income while aging in place.
          </p>

          <section className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="mt-0 text-blue-900">Key Benefits of Reverse Mortgages</h3>
            <ul className="text-sm text-blue-800 mb-0">
              <li>✅ <strong>No monthly payments</strong> – Stay in your home payment-free</li>
              <li>✅ <strong>Tax-free money</strong> – Proceeds are not considered income</li>
              <li>✅ <strong>Maintain ownership</strong> – You own your home and can stay as long as you want</li>
              <li>✅ <strong>No income or credit requirements</strong> – Qualification based on age and home value</li>
              <li>✅ <strong>Protected if home value drops</strong> – No-negative-equity guarantee</li>
              <li>✅ <strong>Supplement retirement income</strong> – Cover expenses, healthcare, travel, etc.</li>
            </ul>
          </section>

          <section>
            <h2>How Much Can You Borrow?</h2>
            <p>The amount depends on your age, home value, and location. Generally, you can access 20-55% of your home's appraised value:</p>
            <div className="bg-card border rounded-lg overflow-hidden my-6">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="p-4 text-left">Your Age</th>
                    <th className="p-4 text-left">Max % of Home Value</th>
                    <th className="p-4 text-left">Example ($500k Home)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-4">55-59</td>
                    <td className="p-4">20-30%</td>
                    <td className="p-4 font-mono">$100,000 - $150,000</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">60-64</td>
                    <td className="p-4">30-35%</td>
                    <td className="p-4 font-mono">$150,000 - $175,000</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">65-69</td>
                    <td className="p-4">35-45%</td>
                    <td className="p-4 font-mono">$175,000 - $225,000</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">70-74</td>
                    <td className="p-4">45-50%</td>
                    <td className="p-4 font-mono">$225,000 - $250,000</td>
                  </tr>
                  <tr className="border-t bg-primary/5">
                    <td className="p-4 font-bold">75+</td>
                    <td className="p-4 font-bold">50-55%</td>
                    <td className="p-4 font-bold font-mono">$250,000 - $275,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2>How Interest Accumulates</h2>
            <p>Since you make no monthly payments, interest compounds over time. Example:</p>
            <div className="bg-card border rounded-lg p-6 my-6">
              <h3 className="font-semibold text-lg mb-4">$200,000 Reverse Mortgage at 8% Interest</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b">
                  <span>Year 1:</span>
                  <span className="font-mono">$216,000 owed</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Year 5:</span>
                  <span className="font-mono">$293,866 owed</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Year 10:</span>
                  <span className="font-mono">$431,784 owed</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Year 15:</span>
                  <span className="font-mono">$634,434 owed</span>
                </div>
                <div className="flex justify-between py-3 bg-amber-50 px-4 rounded">
                  <span className="font-semibold">Year 20:</span>
                  <span className="font-mono font-semibold">$932,190 owed</span>
                </div>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                This shows why reverse mortgages work best for shorter-term needs (5-10 years) or when you're already 75+.
              </p>
            </div>
          </section>

          <section className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h2 className="mt-0 text-amber-900">⚠️ Important Considerations</h2>
            <ul className="text-sm text-amber-800 mb-0">
              <li><strong>High interest rates:</strong> 2-3% above prime (currently 8-10%), vs. 5-7% for traditional mortgages</li>
              <li><strong>Reduces estate value:</strong> Less inheritance for your heirs as debt grows over time</li>
              <li><strong>Expensive to exit:</strong> Early repayment penalties can be substantial</li>
              <li><strong>Must maintain home:</strong> Property taxes, insurance, and repairs are your responsibility</li>
              <li><strong>May affect benefits:</strong> Consult with a financial advisor about impact on OAS/GIS</li>
            </ul>
          </section>

          <section>
            <h2>Reverse Mortgage vs. Alternatives</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-6 space-y-3">
                <h3 className="font-bold text-lg">Reverse Mortgage</h3>
                <ul className="text-sm space-y-2">
                  <li>✅ No monthly payments</li>
                  <li>✅ Age 55+</li>
                  <li>✅ Up to 55% of home value</li>
                  <li>⚠️ Higher rates (8-10%)</li>
                  <li>⚠️ Interest compounds</li>
                </ul>
                <p className="text-xs"><strong>Best for:</strong> Seniors with limited income, staying long-term</p>
              </div>
              <div className="border rounded-lg p-6 space-y-3">
                <h3 className="font-bold text-lg">HELOC</h3>
                <ul className="text-sm space-y-2">
                  <li>✅ Lower rates (Prime +0.5%)</li>
                  <li>✅ Reusable credit</li>
                  <li>✅ Up to 65% of home value</li>
                  <li>❌ Monthly payments required</li>
                  <li>❌ Need income/credit</li>
                </ul>
                <p className="text-xs"><strong>Best for:</strong> Seniors with income to make payments</p>
              </div>
              <div className="border rounded-lg p-6 space-y-3">
                <h3 className="font-bold text-lg">Sell & Downsize</h3>
                <ul className="text-sm space-y-2">
                  <li>✅ Access full equity</li>
                  <li>✅ No interest costs</li>
                  <li>✅ Lower expenses</li>
                  <li>❌ Must move</li>
                  <li>❌ Realtor/legal fees</li>
                </ul>
                <p className="text-xs"><strong>Best for:</strong> Those ready to relocate, simplify</p>
              </div>
            </div>
          </section>

          <section>
            <h2>Is a Reverse Mortgage Right for You?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-green-200 border-2 rounded-lg p-6">
                <h3 className="font-bold text-green-700 mb-3">✅ Good Fit If:</h3>
                <ul className="text-sm space-y-2">
                  <li>You're 70+ and plan to stay in home 5-10 years</li>
                  <li>Limited retirement income or savings</li>
                  <li>No plans to leave home to heirs</li>
                  <li>Need to supplement retirement income</li>
                  <li>Health issues make downsizing difficult</li>
                  <li>Want to improve quality of life in retirement</li>
                </ul>
              </div>
              <div className="border-red-200 border-2 rounded-lg p-6">
                <h3 className="font-bold text-red-700 mb-3">❌ Not Ideal If:</h3>
                <ul className="text-sm space-y-2">
                  <li>You're under 65 (rates are too expensive)</li>
                  <li>You want to leave home to children</li>
                  <li>You can qualify for traditional refinance/HELOC</li>
                  <li>You might move in next 5 years</li>
                  <li>Home needs major repairs you can't afford</li>
                  <li>Other debt relief options are available</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2>Getting Started</h2>
            <ol>
              <li><strong>Book a free consultation</strong> – Speak with a reverse mortgage specialist</li>
              <li><strong>Get your home appraised</strong> – Know your home's current value</li>
              <li><strong>Review loan options</strong> – Lump sum vs. monthly advances vs. line of credit</li>
              <li><strong>Involve family</strong> – Discuss plans with adult children or heirs</li>
              <li><strong>Seek independent legal advice</strong> – Required by law in Canada</li>
              <li><strong>Complete application</strong> – Process takes 6-8 weeks typically</li>
            </ol>
          </section>

          <FAQBlock faqs={faqs} title="Reverse Mortgage FAQs" />
        </div>
      }
    />
  );
}
