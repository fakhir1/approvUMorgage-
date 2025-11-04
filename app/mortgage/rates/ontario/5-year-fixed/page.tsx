import { Metadata } from "next";
import RateLandingPageTemplate from "@/components/templates/RateLandingPageTemplate";
import { RateData } from "@/components/sections/MortgageRateWidget";

export const metadata: Metadata = {
  title: "Ontario 5-Year Fixed Mortgage Rates 2024 | Best 5Y Fixed Rates",
  description: "Current Ontario 5-year fixed mortgage rates from 5.09%. Compare the best 5-year fixed rates in Toronto, Ottawa, and across Ontario from top lenders.",
};

export default function Ontario5YearFixed() {
  const currentRates: RateData = {
    province: "Ontario (5-Year Fixed)",
    rates: [
      { term: "5 Year Fixed - Best Rate", rate: 5.09, type: "fixed", change: -0.30 },
      { term: "5 Year Fixed - Big Banks", rate: 5.59, type: "fixed", change: -0.20 },
      { term: "5 Year Fixed - Credit Unions", rate: 5.24, type: "fixed", change: -0.25 },
      { term: "5 Year Fixed - Monoline", rate: 5.14, type: "fixed", change: -0.30 },
    ],
    lastUpdated: new Date().toISOString(),
    disclaimer: "Best 5-year fixed rates are for well-qualified borrowers with 700+ credit score, 20%+ down payment, and insured or insurable mortgages. Big bank rates represent posted rates (negotiable). Actual rates vary by profile and property.",
  };

  const rateTrends = [
    {
      term: "5 Year Fixed",
      current: 5.09,
      previous: 5.39,
      trend: "down" as const,
      history: [
        { date: "2023-08", rate: 6.89 },
        { date: "2023-09", rate: 6.74 },
        { date: "2023-10", rate: 6.49 },
        { date: "2023-11", rate: 6.39 },
        { date: "2023-12", rate: 6.19 },
        { date: "2024-01", rate: 5.89 },
        { date: "2024-02", rate: 5.74 },
        { date: "2024-03", rate: 5.54 },
        { date: "2024-04", rate: 5.39 },
        { date: "2024-05", rate: 5.09 },
      ],
    },
  ];

  const faqs = [
    {
      question: "Why is the 5-year fixed the most popular mortgage in Ontario?",
      answer: "The 5-year fixed term represents 60-70% of Ontario mortgages because it offers optimal balance: (1) Most competitive rates—lenders compete aggressively for this term, (2) Reasonable stability—locks rate for sufficient time horizon, (3) Moderate penalties—lower IRD than 7-10 year terms if breaking early, (4) Aligns with life planning—most people have 5-year financial/housing goals. Ontario's competitive market (50+ lenders) makes 5-year fixed rates particularly attractive.",
    },
    {
      question: "What is the current 5-year fixed rate in Ontario?",
      answer: "As of May 2024, Ontario's best 5-year fixed rates start at 5.09% from monoline lenders and mortgage brokers. Big bank posted rates are around 5.59% but are negotiable down to 5.24-5.34%. Credit unions offer 5.24% on average. These rates are down 0.30% from last month (5.39%) due to Bank of Canada rate cuts and increased lender competition. Toronto/GTA typically sees the absolute lowest rates due to maximum competition.",
    },
    {
      question: "How much can I save with a 5-year fixed vs variable rate?",
      answer: "Currently (May 2024), 5-year fixed at 5.09% beats 5-year variable at 6.15% by over 1%. On a $500,000 mortgage: Fixed = $2,996/month, Variable = $3,235/month—saving $239/month or $14,340 over 5 years with fixed. This is unusual; historically variable has been cheaper. With Bank of Canada potentially cutting rates further, variable could become competitive again, but fixed offers guaranteed savings and stability now.",
    },
    {
      question: "Should I go with 5-year or 3-year fixed in Ontario right now?",
      answer: "5-year fixed (5.09%) currently offers better value than 3-year fixed (5.54%) in Ontario—a rare situation. Normally, shorter terms have lower rates, but the inverted yield curve and strong 5-year competition have flipped this. Choose 5-year for: better rate, longer protection, lower payments. Choose 3-year only if: you plan to move/sell within 3 years, expect significant rate drops, or want earlier refinancing opportunity. For most Ontario buyers, 5-year is the clear winner.",
    },
    {
      question: "Can I negotiate my 5-year fixed rate with Ontario banks?",
      answer: "Absolutely—big bank posted rates (5.59%) are starting points for negotiation. Typical results: negotiate 0.20-0.35% off posted rates directly = 5.24-5.39%. Use a broker to access unadvertised rates = 5.09-5.19%. Tell banks you have competing offers (they'll match or beat). Negotiate better if: 700+ credit, 20%+ down, $500K+ mortgage, bring other business (checking, investments). Best strategy: get broker quotes first (5.09%), then negotiate with your preferred bank using that as leverage.",
    },
    {
      question: "What happens when my 5-year fixed term ends in Ontario?",
      answer: "At maturity (end of 5 years), your mortgage renews at current market rates. Process: (1) Lender sends renewal offer 4-6 months before maturity, (2) You have 30 days to accept OR shop other lenders penalty-free, (3) Most borrowers stick with current lender (easier) but lose negotiating power, (4) Shopping at renewal can save 0.20-0.50% ($60-$150/month on $500K mortgage). Best practice: Shop aggressively 4 months before maturity—you have maximum leverage. Many Ontario brokers specialize in renewals and can secure better rates than your lender's 'special' offer.",
    },
  ];

  return (
    <RateLandingPageTemplate
      title="Ontario 5-Year Fixed Mortgage Rates"
      heroHeadline="Ontario's Best 5-Year Fixed Mortgage Rates"
      heroSubheadline="Lock in from 5.09% with Canada's most popular mortgage term. Ontario's competitive market delivers the lowest 5-year fixed rates in the country."
      breadcrumbs={[
        { label: "Mortgage Solutions", href: "/mortgage" },
        { label: "Rates", href: "/mortgage/rates" },
        { label: "Ontario", href: "/mortgage/rates/ontario" },
        { label: "5-Year Fixed", href: "/mortgage/rates/ontario/5-year-fixed" },
      ]}
      currentRates={currentRates}
      rateTrends={rateTrends}
      showRateTrends={true}
      showProvincialRates={false}
      showCalculatorLink={true}
      introContent={
        <>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            The 5-year fixed mortgage is Ontario's most popular choice, representing 60-70% of all mortgages. 
            With current rates starting at just 5.09%—down 1.80% from 2023 peaks—and Ontario's highly competitive 
            lending market, now is an excellent time to lock in payment stability.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ontario borrowers benefit from the lowest 5-year fixed rates in Canada due to intense lender competition 
            in the GTA and major cities. Whether you're buying your first home, refinancing, or renewing, understanding 
            5-year fixed rates helps you maximize savings and minimize risk.
          </p>
        </>
      }
      rateExplanation={
        <div className="bg-card p-8 rounded-lg border">
          <h2 className="text-2xl font-bold mb-6 text-primary">Why 5-Year Fixed Dominates Ontario</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border-2 border-green-200">
              <h3 className="text-lg font-semibold mb-4 text-green-900">✅ Advantages of 5-Year Fixed</h3>
              <ul className="space-y-2 text-green-800">
                <li><strong>Best Pricing:</strong> Most competitive rates due to lender competition</li>
                <li><strong>Payment Stability:</strong> 60 months of predictable payments</li>
                <li><strong>Moderate Penalties:</strong> Lower IRD than 7-10 year terms</li>
                <li><strong>Life Planning Alignment:</strong> Matches typical 5-year financial goals</li>
                <li><strong>Protection from Increases:</strong> Safe from rate volatility</li>
                <li><strong>Renewal Opportunity:</strong> Reassess in 5 years vs. locked for 10</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-2 border-blue-200">
              <h3 className="text-lg font-semibold mb-4 text-blue-900">⚖️ When to Consider Alternatives</h3>
              <ul className="space-y-2 text-blue-800">
                <li><strong>Choose 3-Year If:</strong> Planning to move/sell within 3 years, expecting major rate drops</li>
                <li><strong>Choose 7-Year If:</strong> Extremely risk-averse, certain of long-term stay, expecting significant increases</li>
                <li><strong>Choose Variable If:</strong> Comfortable with payment changes, have cash buffer, believe rates will fall</li>
                <li><strong>Current Context:</strong> 5-year fixed (5.09%) beats variable (6.15%) by 1.06%—rare fixed advantage</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-primary">💰 5-Year Fixed Rate Breakdown by Lender Type</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-2xl font-bold text-green-600">5.09%</span>
                <div>
                  <p className="font-semibold">Monoline Lenders (Best Rate) ⭐</p>
                  <p className="text-sm text-muted-foreground">
                    Online-only lenders (MCAP, Nesto, RMG) with lowest overhead. Accessed through brokers. 
                    Require excellent credit (720+), 20%+ down. No branch banking services.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl font-bold text-blue-600">5.24%</span>
                <div>
                  <p className="font-semibold">Credit Unions (Great Value)</p>
                  <p className="text-sm text-muted-foreground">
                    Ontario credit unions (Meridian, DUCA, Alterna) offer competitive rates with personal service. 
                    Often negotiate flexibility. May have membership requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl font-bold text-orange-600">5.34%</span>
                <div>
                  <p className="font-semibold">Negotiated Big Bank Rates</p>
                  <p className="text-sm text-muted-foreground">
                    RBC, TD, Scotiabank, BMO, CIBC negotiate down from 5.59% posted. Leverage broker quotes 
                    to get bank competitive. Convenience of existing banking relationship.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl font-bold text-red-600">5.59%</span>
                <div>
                  <p className="font-semibold">Big Bank Posted Rates (Don't Pay This)</p>
                  <p className="text-sm text-muted-foreground">
                    Starting point for negotiation only. No one should pay posted rates—always negotiate or 
                    use a broker to access discounts of 0.25-0.50%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      comparison={
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-primary">5-Year Fixed: Monthly Payment Scenarios</h2>
          <p className="text-muted-foreground mb-6">
            Monthly payments at different 5-year fixed rates (25-year amortization):
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-3 text-left">Mortgage Amount</th>
                  <th className="px-6 py-3 text-right">5.09% (Best)</th>
                  <th className="px-6 py-3 text-right">5.34% (Negotiated)</th>
                  <th className="px-6 py-3 text-right">5.59% (Posted)</th>
                  <th className="px-6 py-3 text-right">Monthly Savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">$300,000</td>
                  <td className="px-6 py-4 text-right font-semibold text-green-600">$1,798</td>
                  <td className="px-6 py-4 text-right">$1,838</td>
                  <td className="px-6 py-4 text-right text-red-600">$1,877</td>
                  <td className="px-6 py-4 text-right font-bold">$79/mo</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">$500,000</td>
                  <td className="px-6 py-4 text-right font-semibold text-green-600">$2,996</td>
                  <td className="px-6 py-4 text-right">$3,063</td>
                  <td className="px-6 py-4 text-right text-red-600">$3,129</td>
                  <td className="px-6 py-4 text-right font-bold">$133/mo</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">$750,000</td>
                  <td className="px-6 py-4 text-right font-semibold text-green-600">$4,494</td>
                  <td className="px-6 py-4 text-right">$4,595</td>
                  <td className="px-6 py-4 text-right text-red-600">$4,694</td>
                  <td className="px-6 py-4 text-right font-bold">$200/mo</td>
                </tr>
                <tr className="bg-green-50 hover:bg-green-100">
                  <td className="px-6 py-4 font-medium">$1,000,000</td>
                  <td className="px-6 py-4 text-right font-bold text-green-700">$5,992</td>
                  <td className="px-6 py-4 text-right">$6,126</td>
                  <td className="px-6 py-4 text-right text-red-600">$6,258</td>
                  <td className="px-6 py-4 text-right font-bold text-green-700">$266/mo</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 space-y-3">
            <p className="text-sm text-muted-foreground">
              <strong>5-Year Savings:</strong> Getting best rate (5.09%) vs. posted rate (5.59%) saves:
            </p>
            <ul className="text-sm space-y-2 text-muted-foreground ml-6">
              <li>• $500K mortgage: <strong className="text-green-600">$133/month = $7,980 over 5 years</strong></li>
              <li>• $1M mortgage: <strong className="text-green-600">$266/month = $15,960 over 5 years</strong></li>
            </ul>
            <p className="text-sm italic text-primary mt-4">
              Using a mortgage broker to access 5.09% rates costs nothing and saves thousands. Always shop your rate.
            </p>
          </div>
        </div>
      }
      educationalSections={[
        {
          title: "Maximizing Your Ontario 5-Year Fixed Rate",
          icon: "🎯",
          content: (
            <ul className="space-y-3">
              <li><strong>Use a Mortgage Broker:</strong> Access to 50+ lenders including monolines—typically saves 0.15-0.30% vs. going direct to banks</li>
              <li><strong>Boost Your Credit Score:</strong> 700+ gets good rates, 750+ gets best rates—difference can be 0.10-0.20%</li>
              <li><strong>20%+ Down Payment:</strong> Avoid CMHC insurance premiums (though insured mortgages sometimes get better rates)</li>
              <li><strong>Prove Income Stability:</strong> 2+ years employment, salaried vs. commissioned, full-time vs. contract—all affect rate</li>
              <li><strong>Property Type Matters:</strong> Single-family owner-occupied gets best rates; condo/rental/rural may add 0.05-0.20%</li>
              <li><strong>Rate Hold Strategy:</strong> Lock rate for 120 days while shopping—if rates drop, you get lower rate automatically</li>
              <li><strong>Negotiate Pre-Payment Options:</strong> Request 20% annual prepayment privilege + increased payment flexibility</li>
            </ul>
          ),
        },
        {
          title: "5-Year Fixed Renewal Strategy",
          icon: "🔄",
          content: (
            <div className="space-y-4">
              <p className="font-semibold">When your 5-year fixed term matures (coming up to renewal):</p>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="font-semibold text-blue-900 mb-2">4-6 Months Before Maturity:</p>
                <ul className="space-y-2 text-blue-800 text-sm">
                  <li>✓ Review your current rate and mortgage details</li>
                  <li>✓ Check your credit score (free annual report)</li>
                  <li>✓ Research current 5-year fixed rates (likely different from 5 years ago)</li>
                  <li>✓ Contact mortgage broker to get competitive quotes</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="font-semibold text-green-900 mb-2">Renewal Options:</p>
                <ul className="space-y-2 text-green-800 text-sm">
                  <li><strong>Stay with Current Lender:</strong> Easy/convenient, but typically 0.20-0.50% higher than shopping</li>
                  <li><strong>Switch Lenders:</strong> No penalty to switch at maturity, potential savings $60-$150/month</li>
                  <li><strong>Negotiate:</strong> Use broker quotes as leverage with current lender—many will match</li>
                  <li><strong>Reconsider Term:</strong> Maybe switch to 3-year if planning to move, or 7-year if rates rising</li>
                </ul>
              </div>

              <p className="text-sm italic text-muted-foreground mt-4">
                <strong>Pro Tip:</strong> Ontario brokers estimate that 60-70% of borrowers simply accept their lender's 
                renewal offer without shopping—and overpay by thousands. Always shop your renewal.
              </p>
            </div>
          ),
        },
      ]}
      faqs={faqs}
      ctaHeadline="Secure Your 5-Year Fixed Rate from 5.09%"
      ctaDescription="Get personalized 5-year fixed rate quotes from Ontario's top lenders. Our mortgage experts compare 50+ lenders to find your best rate and save you thousands."
      ctaPrimaryText="Get My 5-Year Fixed Quote"
      ctaPrimaryLink="/mortgage-appointment-online"
      ctaSecondaryText="See All Ontario Rates"
      ctaSecondaryLink="/mortgage/rates/ontario"
    />
  );
}
