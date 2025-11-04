import { Metadata } from "next";
import RateLandingPageTemplate from "@/components/templates/RateLandingPageTemplate";
import { RateData } from "@/components/sections/MortgageRateWidget";

export const metadata: Metadata = {
  title: "Fixed Mortgage Rates Canada 2024 | 1, 3, 5, 7, 10 Year Fixed Rates",
  description: "Compare current fixed mortgage rates in Canada. Find the best 1-year, 3-year, 5-year, 7-year, and 10-year fixed rates from top Canadian lenders.",
};

export default function FixedRatesHub() {
  const currentRates: RateData = {
    province: "Canada (Fixed Rates)",
    rates: [
      { term: "6 Month Fixed", rate: 6.74, type: "fixed", change: 0.00 },
      { term: "1 Year Fixed", rate: 6.24, type: "fixed", change: -0.15 },
      { term: "2 Year Fixed", rate: 5.99, type: "fixed", change: -0.10 },
      { term: "3 Year Fixed", rate: 5.54, type: "fixed", change: -0.20 },
      { term: "4 Year Fixed", rate: 5.39, type: "fixed", change: -0.15 },
      { term: "5 Year Fixed", rate: 5.14, type: "fixed", change: -0.25 },
      { term: "7 Year Fixed", rate: 5.59, type: "fixed", change: -0.10 },
      { term: "10 Year Fixed", rate: 6.09, type: "fixed", change: -0.05 },
    ],
    lastUpdated: new Date().toISOString(),
    disclaimer: "Fixed rates shown are best available rates for well-qualified borrowers. Your actual rate may vary based on credit score, down payment, property type, location, and lender. Rates subject to change without notice.",
  };

  const rateTrends = [
    {
      term: "5 Year Fixed",
      current: 5.14,
      previous: 5.39,
      trend: "down" as const,
      history: [
        { date: "2023-10", rate: 6.49 },
        { date: "2023-11", rate: 6.39 },
        { date: "2023-12", rate: 6.19 },
        { date: "2024-01", rate: 5.89 },
        { date: "2024-02", rate: 5.74 },
        { date: "2024-03", rate: 5.54 },
        { date: "2024-04", rate: 5.39 },
        { date: "2024-05", rate: 5.14 },
      ],
    },
    {
      term: "3 Year Fixed",
      current: 5.54,
      previous: 5.74,
      trend: "down" as const,
    },
    {
      term: "10 Year Fixed",
      current: 6.09,
      previous: 6.14,
      trend: "down" as const,
    },
  ];

  const faqs = [
    {
      question: "What is a fixed-rate mortgage?",
      answer: "A fixed-rate mortgage has an interest rate that remains constant for the entire mortgage term (1, 3, 5, 7, or 10 years). Your payment amount stays the same throughout the term, providing budgeting certainty and protection from interest rate increases. At the end of the term, you renew at current market rates.",
    },
    {
      question: "Which fixed-rate term is most popular?",
      answer: "The 5-year fixed term is Canada's most popular mortgage choice (60-70% of borrowers), offering a balance between rate stability and flexibility. The 5-year rate is often the most competitive because lenders compete aggressively for this term. Shorter terms (1-3 years) offer flexibility; longer terms (7-10 years) provide extended rate protection.",
    },
    {
      question: "Why are 5-year fixed rates lower than 10-year fixed rates?",
      answer: "Longer terms carry more uncertainty and risk for lenders, so they charge a premium for locking in rates for 7-10 years. The yield curve (bond market) typically shows higher rates for longer terms. However, during inverted yield curves, shorter terms can be more expensive, making 5-year terms particularly attractive.",
    },
    {
      question: "Should I choose fixed or variable rates?",
      answer: "Choose fixed if you: prioritize payment stability, expect rates to rise, have tight budgets with little room for payment increases, or prefer peace of mind. Fixed rates currently offer good value with the spread between fixed and variable narrowing. Historically, variable rates have saved borrowers money in the long run, but recent rate hikes changed that calculus.",
    },
    {
      question: "Can I break a fixed-rate mortgage early?",
      answer: "Yes, but penalties can be significant. Fixed-rate mortgages typically charge the greater of three months' interest OR the Interest Rate Differential (IRD), which can be $10,000-$30,000+ depending on rate differences and remaining term. If you might move or refinance, consider a shorter term or ensure your mortgage has portability and assumability clauses.",
    },
    {
      question: "How do I get the best fixed mortgage rate?",
      answer: "To secure the best fixed rate: maintain 700+ credit score (750+ for absolute best rates), put 20%+ down payment, shop multiple lenders using a broker, time your rate hold strategically (rates change daily), consider insured vs uninsured mortgages (sometimes insured gets better rates), and don't be afraid to negotiate—rates are often flexible by 0.10-0.20%.",
    },
  ];

  return (
    <RateLandingPageTemplate
      title="Fixed Mortgage Rates Hub"
      heroHeadline="Canada's Best Fixed Mortgage Rates"
      heroSubheadline="Compare current fixed-rate mortgages from 1 to 10 years. Lock in your rate and enjoy payment stability with Canada's most competitive fixed mortgage rates."
      breadcrumbs={[
        { label: "Mortgage Solutions", href: "/mortgage" },
        { label: "Rates", href: "/mortgage/rates" },
        { label: "Fixed Rates", href: "/mortgage/rates/fixed" },
      ]}
      currentRates={currentRates}
      rateTrends={rateTrends}
      showRateTrends={true}
      showProvincialRates={false}
      showCalculatorLink={true}
      introContent={
        <>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            Fixed-rate mortgages provide payment stability and peace of mind by locking in your interest rate 
            for the entire term. With current 5-year fixed rates near historic lows following Bank of Canada 
            rate cuts, now may be an excellent time to secure predictable payments for years to come.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you choose a short-term 1-3 year fixed for flexibility, the popular 5-year fixed for balance, 
            or a long-term 7-10 year fixed for extended protection, understanding fixed-rate mortgages helps you 
            make confident financing decisions.
          </p>
        </>
      }
      rateExplanation={
        <div className="bg-card p-8 rounded-lg border">
          <h2 className="text-2xl font-bold mb-6 text-primary">Understanding Fixed-Rate Terms</h2>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-2 border-blue-200">
                <h3 className="text-lg font-semibold mb-3 text-blue-900">📅 Short-Term Fixed (1-3 Years)</h3>
                <p className="text-blue-800 mb-3">
                  <strong>Pros:</strong> Lower penalties if breaking early, more flexibility, opportunity to 
                  renegotiate sooner if rates drop further.
                </p>
                <p className="text-blue-800">
                  <strong>Cons:</strong> Renewal risk if rates rise, less payment certainty, may have slightly 
                  higher rates than 5-year.
                </p>
                <p className="text-sm text-blue-700 mt-3 italic">
                  Best for: Those planning to move, sell, or refinance within 1-3 years, or betting on continued 
                  rate declines.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border-2 border-green-200">
                <h3 className="text-lg font-semibold mb-3 text-green-900">⭐ 5-Year Fixed (Most Popular)</h3>
                <p className="text-green-800 mb-3">
                  <strong>Pros:</strong> Best rates available (most lender competition), good balance of stability 
                  and flexibility, aligns with typical 5-year plans.
                </p>
                <p className="text-green-800">
                  <strong>Cons:</strong> Moderate IRD penalties if breaking early, still need to renew and face 
                  potential rate changes at year 5.
                </p>
                <p className="text-sm text-green-700 mt-3 italic">
                  Best for: Most borrowers—offers optimal rate, stability, and term length for typical homeownership plans.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border-2 border-orange-200">
                <h3 className="text-lg font-semibold mb-3 text-orange-900">🔐 7-Year Fixed</h3>
                <p className="text-orange-800 mb-3">
                  <strong>Pros:</strong> Extended rate protection, good compromise between 5 and 10 years, 
                  reasonable rate premium over 5-year.
                </p>
                <p className="text-orange-800">
                  <strong>Cons:</strong> Higher rate than 5-year (typically +0.20-0.40%), significant IRD penalties, 
                  less lender choice.
                </p>
                <p className="text-sm text-orange-700 mt-3 italic">
                  Best for: Those expecting rates to rise significantly, wanting longer stability without full 10-year commitment.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border-2 border-purple-200">
                <h3 className="text-lg font-semibold mb-3 text-purple-900">🛡️ 10-Year Fixed</h3>
                <p className="text-purple-800 mb-3">
                  <strong>Pros:</strong> Maximum rate protection and payment certainty, excellent for long-term 
                  budgeting, protects against significant rate increases.
                </p>
                <p className="text-purple-800">
                  <strong>Cons:</strong> Highest rates (typically +0.50-0.95% over 5-year), massive IRD penalties if 
                  breaking, very limited lender options.
                </p>
                <p className="text-sm text-purple-700 mt-3 italic">
                  Best for: Ultra-conservative borrowers, those absolutely certain they won't move, or expecting 
                  dramatic rate increases.
                </p>
              </div>
            </div>

            <div className="mt-6 p-6 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
              <h4 className="font-semibold mb-3 text-yellow-900">💡 Current Market Context (2024)</h4>
              <p className="text-yellow-800">
                With Bank of Canada cutting rates and fixed rates falling significantly, the spread between 5-year 
                fixed and variable has narrowed considerably. Many experts now recommend fixed rates for the stability 
                they provide at competitive pricing. The 5-year fixed remains the best value for most borrowers.
              </p>
            </div>
          </div>
        </div>
      }
      comparison={
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-primary">Fixed Rate Comparison: Payment Savings</h2>
          <p className="text-muted-foreground mb-6">
            Monthly payment examples for $500,000 mortgage (25-year amortization):
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-3 text-left">Term</th>
                  <th className="px-6 py-3 text-right">Interest Rate</th>
                  <th className="px-6 py-3 text-right">Monthly Payment</th>
                  <th className="px-6 py-3 text-right">5-Year Interest Paid</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">1 Year Fixed</td>
                  <td className="px-6 py-4 text-right">6.24%</td>
                  <td className="px-6 py-4 text-right font-semibold">$3,296</td>
                  <td className="px-6 py-4 text-right">$154,780</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">3 Year Fixed</td>
                  <td className="px-6 py-4 text-right">5.54%</td>
                  <td className="px-6 py-4 text-right font-semibold">$3,104</td>
                  <td className="px-6 py-4 text-right">$136,240</td>
                </tr>
                <tr className="bg-green-50 hover:bg-green-100">
                  <td className="px-6 py-4 font-medium">5 Year Fixed ⭐</td>
                  <td className="px-6 py-4 text-right font-bold text-green-700">5.14%</td>
                  <td className="px-6 py-4 text-right font-bold text-green-700">$2,996</td>
                  <td className="px-6 py-4 text-right font-bold text-green-700">$129,760</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">7 Year Fixed</td>
                  <td className="px-6 py-4 text-right">5.59%</td>
                  <td className="px-6 py-4 text-right font-semibold">$3,119</td>
                  <td className="px-6 py-4 text-right">$137,140</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">10 Year Fixed</td>
                  <td className="px-6 py-4 text-right">6.09%</td>
                  <td className="px-6 py-4 text-right font-semibold">$3,267</td>
                  <td className="px-6 py-4 text-right">$152,020</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4 italic">
            The 5-year fixed currently offers the best rate AND optimal term balance. Choosing 5-year over 10-year 
            saves you $271/month and $22,260 over 5 years in interest payments.
          </p>
        </div>
      }
      educationalSections={[
        {
          title: "Fixed Rate Strategy Tips",
          icon: "🎯",
          content: (
            <ul className="space-y-3">
              <li><strong>The 5-Year Advantage:</strong> Most competitive pricing due to lender competition—don't overpay for 10-year unless you have specific needs</li>
              <li><strong>Rate Holds:</strong> Lock in your rate for 90-120 days while house hunting; if rates drop, you get the lower rate</li>
              <li><strong>Prepayment Privileges:</strong> Ensure 15-20% annual prepayment allowance to pay down principal faster</li>
              <li><strong>Portability:</strong> Must-have feature if you might move—allows transferring mortgage to new property without penalties</li>
              <li><strong>Blend & Extend:</strong> Some lenders let you blend your rate with current rates when increasing mortgage (e.g., renovations)</li>
              <li><strong>Shop Aggressively:</strong> Rates vary 0.20-0.50% between lenders for identical profiles—use a broker</li>
            </ul>
          ),
        },
        {
          title: "When to Break Your Fixed Mortgage",
          icon: "⚠️",
          content: (
            <div className="space-y-4">
              <p className="font-semibold">Breaking a fixed mortgage can make sense if:</p>
              <ul className="space-y-2">
                <li><strong>Rate Drop {'>'} 1.5%:</strong> If current rates are 1.5-2%+ below your rate, penalty might be worth it</li>
                <li><strong>Selling & Upgrading:</strong> Calculate penalty vs. continuing mortgage on larger home</li>
                <li><strong>Accessing Equity:</strong> Refinancing to access home equity may justify penalty for investment/renovation</li>
                <li><strong>Debt Consolidation:</strong> Consolidating high-interest debt (credit cards, loans) can save more than penalty costs</li>
              </ul>
              <p className="text-sm italic mt-4">
                Always calculate: Penalty + New Rate Savings vs. Keeping Current Rate. Use our refinance calculator 
                to determine your break-even timeline.
              </p>
            </div>
          ),
        },
      ]}
      faqs={faqs}
      ctaHeadline="Lock in Your Fixed Rate Today"
      ctaDescription="Get personalized fixed-rate quotes from 50+ Canadian lenders. Our mortgage experts will help you choose the perfect term and secure the best rate for your situation."
      ctaPrimaryText="Get My Fixed Rate Quote"
      ctaPrimaryLink="/mortgage-appointment-online"
      ctaSecondaryText="Compare Fixed vs Variable"
      ctaSecondaryLink="/mortgage/basics/fixed-vs-variable"
    />
  );
}
