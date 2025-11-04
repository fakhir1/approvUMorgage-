import { Metadata } from "next";
import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";
import FAQBlock from "@/components/sections/FAQBlock";
import { Calculator, TrendingDown, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "Debt Consolidation Mortgage | Pay Off High-Interest Debt Canada",
  description: "Consolidate credit cards, loans, and high-interest debt into your mortgage. Save thousands on interest and simplify payments.",
};

export default function DebtConsolidationPage() {
  const faqs = [
    {
      question: "How does debt consolidation through a mortgage work?",
      answer: "You refinance your mortgage to access home equity, using the funds to pay off high-interest debts (credit cards, car loans, lines of credit). Instead of multiple payments at 15-25%, you have one mortgage payment at 5-7%, dramatically reducing interest costs.",
    },
    {
      question: "How much can I save by consolidating debt?",
      answer: "Significant savings! Example: $30k in credit card debt at 20% costs $500/month in interest alone. Consolidated into a 6% mortgage, interest drops to $150/month—saving $350/month or $4,200/year.",
    },
    {
      question: "What debts can be consolidated?",
      answer: "Almost any unsecured debt: credit cards, personal loans, car loans, lines of credit, payday loans, CRA tax debt, student loans. Secured debts (car loans) can be consolidated but the lender must be paid out.",
    },
    {
      question: "Do I need good credit to consolidate debt?",
      answer: "Not always. While traditional lenders prefer 680+, B-lenders and private lenders work with lower scores (even 550-600). You need sufficient home equity (typically 20-35% depending on credit).",
    },
    {
      question: "Will consolidating debt hurt my credit score?",
      answer: "Initially, your score may dip slightly from closing credit accounts and the mortgage inquiry. However, within 3-6 months, your score typically improves significantly because: credit utilization drops to 0%, payment history becomes perfect, and overall debt decreases.",
    },
    {
      question: "What are the risks?",
      answer: "The main risk is converting unsecured debt to secured debt (backed by your home). If you can't make payments, you risk foreclosure. Also, if you don't change spending habits, you may accumulate new debt. Financial discipline is essential.",
    },
  ];

  const relatedPages = [
    {
      id: "1",
      title: "Refinance Your Mortgage",
      path: "/mortgage/refinance",
      excerpt: "Learn how refinancing works to access equity for debt payoff.",
    },
    {
      id: "2",
      title: "Bad Credit Mortgages",
      path: "/mortgage/bad-credit",
      excerpt: "Options if your credit has been affected by debt issues.",
    },
    {
      id: "3",
      title: "Debt Service Calculator",
      path: "/calculators/debt-service",
      excerpt: "Calculate your debt-to-income ratios after consolidation.",
    },
  ];

  return (
    <ArticlePageTemplate
      title="Debt Consolidation Mortgage"
      headline="Debt Consolidation Mortgage Guide"
      excerpt="Pay off high-interest debt by consolidating into your mortgage. Save thousands on interest and simplify your finances with one low monthly payment."
      category="Mortgage Solutions"
      tags={["Debt Consolidation", "Refinancing", "Home Equity", "Credit Card Debt"]}
      breadcrumbs={[
        { label: "Mortgage Solutions", href: "/mortgage" },
        { label: "Debt Consolidation", href: "/mortgage/debt-consolidation" },
      ]}
      relatedPages={relatedPages}
      content={
        <div className="space-y-12 prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed">
            If you're struggling with high-interest credit card debt, personal loans, or multiple payments each month, 
            consolidating debt through your mortgage can save thousands and simplify your life.
          </p>

          <section className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <div className="flex gap-4">
              <DollarSign className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-amber-900 mb-2 mt-0">Typical Savings Example</h3>
                <p className="text-sm text-amber-800 mb-0">
                  $40,000 in credit card debt at 20% APR = $8,000/year in interest.<br/>
                  Same debt in a 6% mortgage = $2,400/year in interest.<br/>
                  <strong>Annual savings: $5,600!</strong>
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>Why Consolidate Debt into Your Mortgage?</h2>
            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="border rounded-lg p-6 text-center space-y-3">
                <TrendingDown className="h-12 w-12 text-primary mx-auto" />
                <h3 className="font-bold text-lg">Lower Interest Rates</h3>
                <p className="text-sm">
                  Mortgage rates (5-7%) are dramatically lower than credit cards (19-29%), personal loans (8-15%), or payday loans (400%+)
                </p>
              </div>
              <div className="border rounded-lg p-6 text-center space-y-3">
                <Calculator className="h-12 w-12 text-primary mx-auto" />
                <h3 className="font-bold text-lg">One Simple Payment</h3>
                <p className="text-sm">
                  Replace 5-10 different payments and due dates with one monthly mortgage payment. Easier to manage and never miss a payment.
                </p>
              </div>
              <div className="border rounded-lg p-6 text-center space-y-3">
                <DollarSign className="h-12 w-12 text-primary mx-auto" />
                <h3 className="font-bold text-lg">Rebuild Your Credit</h3>
                <p className="text-sm">
                  Paying off revolving credit and maintaining perfect mortgage payments can improve your credit score by 50-100+ points.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>How to Calculate Potential Savings</h2>
            <div className="bg-card border rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="p-4 text-left">Debt Type</th>
                    <th className="p-4 text-left">Balance</th>
                    <th className="p-4 text-left">Current Rate</th>
                    <th className="p-4 text-left">Monthly Interest</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-4">Credit Card 1</td>
                    <td className="p-4">$15,000</td>
                    <td className="p-4">20%</td>
                    <td className="p-4 font-mono">$250</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">Credit Card 2</td>
                    <td className="p-4">$8,000</td>
                    <td className="p-4">22%</td>
                    <td className="p-4 font-mono">$147</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">Personal Loan</td>
                    <td className="p-4">$10,000</td>
                    <td className="p-4">12%</td>
                    <td className="p-4 font-mono">$100</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">Car Loan</td>
                    <td className="p-4">$12,000</td>
                    <td className="p-4">8%</td>
                    <td className="p-4 font-mono">$80</td>
                  </tr>
                  <tr className="border-t bg-red-50">
                    <td className="p-4 font-bold">Total Current</td>
                    <td className="p-4 font-bold">$45,000</td>
                    <td className="p-4 font-bold">Avg 15.5%</td>
                    <td className="p-4 font-bold font-mono">$577/mo</td>
                  </tr>
                  <tr className="border-t bg-green-50">
                    <td className="p-4 font-bold">After Consolidation</td>
                    <td className="p-4 font-bold">$45,000</td>
                    <td className="p-4 font-bold">6% (mortgage)</td>
                    <td className="p-4 font-bold font-mono">$225/mo</td>
                  </tr>
                  <tr className="border-t bg-primary/10">
                    <td colSpan={3} className="p-4 font-bold text-lg">Monthly Interest Savings:</td>
                    <td className="p-4 font-bold text-lg font-mono text-primary">$352/mo</td>
                  </tr>
                  <tr className="border-t bg-primary/20">
                    <td colSpan={3} className="p-4 font-bold text-xl">Annual Interest Savings:</td>
                    <td className="p-4 font-bold text-xl font-mono text-primary">$4,224/yr</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              💡 Over a 25-year amortization, this saves over $105,000 in interest payments!
            </p>
          </section>

          <section>
            <h2>Requirements for Debt Consolidation</h2>
            <ul>
              <li><strong>Home equity</strong> – Need to access up to 80% of home value (20% equity minimum)</li>
              <li><strong>Stable income</strong> – Ability to afford the new mortgage payment</li>
              <li><strong>Debt ratios</strong> – Total debts (including new mortgage) must be under 44% of income</li>
              <li><strong>Credit score</strong> – 680+ for best rates; 550+ for alternative lenders</li>
              <li><strong>Property appraisal</strong> – Home value must support refinance amount</li>
            </ul>
          </section>

          <section className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h2 className="mt-0 text-red-900">⚠️ Important Warnings</h2>
            <ul className="text-sm text-red-800 mb-0">
              <li><strong>Don't run up new debt!</strong> Many people consolidate, then accumulate new credit card balances. This defeats the purpose and can lead to foreclosure.</li>
              <li><strong>You're securing previously unsecured debt</strong> – If you can't pay credit cards, they can't take your home. Once consolidated into your mortgage, your home is at risk if you default.</li>
              <li><strong>Closing costs apply</strong> – Refinancing costs $3,000-5,000. Factor this into your savings calculation.</li>
              <li><strong>Consider credit counseling</strong> – If overspending is the root issue, seek financial counseling to change habits.</li>
            </ul>
          </section>

          <section>
            <h2>5-Step Debt Consolidation Process</h2>
            <ol>
              <li><strong>List all your debts</strong> – Balances, interest rates, monthly payments</li>
              <li><strong>Get home appraisal</strong> – Know your home's value and available equity</li>
              <li><strong>Calculate total costs</strong> – Include refinancing fees and debt payoff amounts</li>
              <li><strong>Apply for refinance</strong> – Work with a broker to find the best lender for your situation</li>
              <li><strong>Pay off all debts at closing</strong> – Lender pays creditors directly; start fresh with one payment</li>
            </ol>
          </section>

          <section>
            <h2>Post-Consolidation Success Tips</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="font-bold mb-3">✅ DO:</h3>
                <ul className="text-sm space-y-2">
                  <li>Close some (not all) credit cards</li>
                  <li>Keep 1-2 cards with zero balance for emergencies</li>
                  <li>Set up automatic mortgage payments</li>
                  <li>Create and stick to a budget</li>
                  <li>Build an emergency fund (3-6 months expenses)</li>
                  <li>Monitor your credit score monthly</li>
                </ul>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="font-bold mb-3">❌ DON'T:</h3>
                <ul className="text-sm space-y-2">
                  <li>Use credit cards for non-emergencies</li>
                  <li>Take out new loans in the first year</li>
                  <li>Miss mortgage payments</li>
                  <li>Rely on credit for regular expenses</li>
                  <li>Ignore the root cause of debt accumulation</li>
                  <li>Co-sign for others' debts</li>
                </ul>
              </div>
            </div>
          </section>

          <FAQBlock faqs={faqs} title="Debt Consolidation FAQs" />
        </div>
      }
    />
  );
}
