import { Metadata } from "next";
import RateLandingPageTemplate from "@/components/templates/RateLandingPageTemplate";
import { RateData } from "@/components/sections/MortgageRateWidget";

export const metadata: Metadata = {
  title: "Ontario Mortgage Rates 2024 | Best Rates in Toronto, Ottawa & GTA",
  description: "Compare current mortgage rates in Ontario. Find the best fixed and variable rates for Toronto, GTA, Ottawa, and across Ontario from top lenders.",
};

export default function OntarioRatesHub() {
  const currentRates: RateData = {
    province: "Ontario",
    rates: [
      { term: "1 Year Fixed", rate: 6.19, type: "fixed", change: -0.20 },
      { term: "2 Year Fixed", rate: 5.94, type: "fixed", change: -0.15 },
      { term: "3 Year Fixed", rate: 5.49, type: "fixed", change: -0.25 },
      { term: "4 Year Fixed", rate: 5.34, type: "fixed", change: -0.20 },
      { term: "5 Year Fixed", rate: 5.09, type: "fixed", change: -0.30 },
      { term: "7 Year Fixed", rate: 5.54, type: "fixed", change: -0.15 },
      { term: "10 Year Fixed", rate: 6.04, type: "fixed", change: -0.10 },
      { term: "5 Year Variable", rate: 6.15, type: "variable", change: 0.00 },
      { term: "3 Year Variable", rate: 6.25, type: "variable", change: 0.05 },
    ],
    lastUpdated: new Date().toISOString(),
    disclaimer: "Ontario rates shown are best available rates and may vary by lender, property location (GTA vs outside GTA), property value, down payment, credit score, and other factors. Rates updated daily.",
  };

  const rateTrends = [
    {
      term: "5 Year Fixed (Ontario)",
      current: 5.09,
      previous: 5.39,
      trend: "down" as const,
      history: [
        { date: "2024-01", rate: 5.84 },
        { date: "2024-02", rate: 5.69 },
        { date: "2024-03", rate: 5.49 },
        { date: "2024-04", rate: 5.39 },
        { date: "2024-05", rate: 5.09 },
      ],
    },
    {
      term: "3 Year Fixed (Ontario)",
      current: 5.49,
      previous: 5.74,
      trend: "down" as const,
    },
    {
      term: "5 Year Variable (Ontario)",
      current: 6.15,
      previous: 6.15,
      trend: "stable" as const,
    },
  ];

  const cityRates = [
    { city: "Toronto (GTA)", rate5YearFixed: 5.09, rate5YearVariable: 6.15 },
    { city: "Ottawa", rate5YearFixed: 5.12, rate5YearVariable: 6.18 },
    { city: "Mississauga", rate5YearFixed: 5.09, rate5YearVariable: 6.15 },
    { city: "Brampton", rate5YearFixed: 5.11, rate5YearVariable: 6.17 },
    { city: "Hamilton", rate5YearFixed: 5.14, rate5YearVariable: 6.20 },
    { city: "London", rate5YearFixed: 5.16, rate5YearVariable: 6.22 },
    { city: "Windsor", rate5YearFixed: 5.19, rate5YearVariable: 6.25 },
    { city: "Kitchener-Waterloo", rate5YearFixed: 5.15, rate5YearVariable: 6.21 },
  ];

  const faqs = [
    {
      question: "Are Ontario mortgage rates different from other provinces?",
      answer: "Ontario typically has the most competitive mortgage rates in Canada due to high competition among lenders, especially in the GTA and Ottawa. Rates can be 0.05-0.15% lower than national averages, with the best rates usually available in Toronto, Mississauga, and Ottawa where lender competition is highest.",
    },
    {
      question: "Do rates differ between Toronto/GTA and smaller Ontario cities?",
      answer: "Yes, rates can vary slightly by 0.05-0.10% between major centers (Toronto, Ottawa) and smaller cities. The GTA has the most lender competition and often sees the lowest rates. However, local credit unions in smaller cities sometimes offer competitive rates to attract business.",
    },
    {
      question: "How do Ontario's land transfer taxes affect my mortgage?",
      answer: "Ontario has both provincial land transfer tax and, in Toronto, an additional municipal land transfer tax. While these don't directly affect your mortgage rate, they increase upfront costs. First-time buyers get rebates up to $4,000 (provincial) and $8,475 (Toronto), which can be factored into your financing strategy.",
    },
    {
      question: "What's the best mortgage rate available in Ontario right now?",
      answer: "The best 5-year fixed rates in Ontario currently range from 4.99-5.19% for well-qualified borrowers (700+ credit, 20%+ down, insured mortgage). Variable rates are around 6.10-6.30%. Your actual rate depends on credit score, down payment, property location, lender relationships, and whether you use a broker.",
    },
    {
      question: "Should I use a mortgage broker in Ontario?",
      answer: "Absolutely. Ontario has the most lenders in Canada (50+), including big banks, credit unions, monoline lenders, and alternative lenders. Brokers can access all these options and often negotiate rates 0.10-0.20% better than going direct to banks. This can save $5,000-$20,000 over a 5-year term.",
    },
    {
      question: "How do Ontario economic factors affect mortgage rates?",
      answer: "Ontario's strong, diversified economy (finance, tech, manufacturing, government) typically results in lower risk premiums and better rates. The GTA's housing market strength attracts lender competition. However, high property values mean larger mortgage amounts, so qualification can be more challenging despite better rates.",
    },
  ];

  return (
    <RateLandingPageTemplate
      title="Ontario Mortgage Rates Hub"
      heroHeadline="Ontario's Best Mortgage Rates"
      heroSubheadline="Compare the lowest fixed and variable mortgage rates in Ontario. Get competitive rates for Toronto, GTA, Ottawa, and cities across Ontario from 50+ lenders."
      breadcrumbs={[
        { label: "Mortgage Solutions", href: "/mortgage" },
        { label: "Rates", href: "/mortgage/rates" },
        { label: "Ontario Rates", href: "/mortgage/rates/ontario" },
      ]}
      currentRates={currentRates}
      rateTrends={rateTrends}
      showRateTrends={true}
      showProvincialRates={false}
      showCalculatorLink={true}
      introContent={
        <>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            Ontario offers the most competitive mortgage rates in Canada, driven by intense lender competition 
            in the Toronto and Ottawa regions. With over 50 lenders actively competing for business, Ontario 
            borrowers can access rates 0.10-0.20% lower than many other provinces.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you're buying in the Greater Toronto Area, Ottawa, Hamilton, London, or anywhere in Ontario, 
            understanding current rate trends and using a mortgage broker to shop multiple lenders ensures you 
            get the best possible rate for your situation.
          </p>
        </>
      }
      rateExplanation={
        <div className="bg-card p-8 rounded-lg border">
          <h2 className="text-2xl font-bold mb-6 text-primary">Ontario Mortgage Rate Landscape</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">🏙️ GTA Premium Rates</h3>
              <p className="text-muted-foreground">
                Toronto, Mississauga, Brampton, and surrounding GTA cities typically offer the absolute best 
                rates in Ontario (and often Canada) due to high property values, strong borrower profiles, and 
                fierce competition among lenders fighting for market share.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">🏛️ Ottawa & Government Worker Advantages</h3>
              <p className="text-muted-foreground">
                Ottawa's large government employee base (viewed as very stable income) means lenders often 
                offer preferential rates. Federal employees with 20+ years tenure sometimes get special pricing.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">🌆 Secondary Markets</h3>
              <p className="text-muted-foreground">
                Hamilton, London, Kitchener-Waterloo, and Windsor have growing markets with increasing lender 
                interest. Rates are typically 0.05-0.10% higher than GTA but still very competitive nationally.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">🏘️ Northern & Rural Ontario</h3>
              <p className="text-muted-foreground">
                Smaller cities and rural areas may have 0.10-0.15% higher rates due to fewer local branches, 
                but using a broker accessing monolines and online lenders can bridge this gap.
              </p>
            </div>
          </div>
        </div>
      }
      comparison={
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-primary">Rates by Ontario City</h2>
          <p className="text-muted-foreground mb-6">
            Typical best available rates for qualified borrowers (700+ credit, 20% down) by major Ontario city:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-3 text-left">City</th>
                  <th className="px-6 py-3 text-right">5 Year Fixed</th>
                  <th className="px-6 py-3 text-right">5 Year Variable</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {cityRates.map((city, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">{city.city}</td>
                    <td className="px-6 py-4 text-right font-semibold text-primary">
                      {city.rate5YearFixed.toFixed(2)}%
                    </td>
                    <td className="px-6 py-4 text-right font-semibold text-secondary">
                      {city.rate5YearVariable.toFixed(2)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4 italic">
            *Rates shown are indicative best rates for qualified borrowers and will vary by individual circumstances.
          </p>
        </div>
      }
      educationalSections={[
        {
          title: "Maximizing Your Ontario Rate",
          icon: "💡",
          content: (
            <ul className="space-y-3">
              <li><strong>Use a Mortgage Broker:</strong> Ontario has 50+ lenders; brokers save you 0.10-0.20% on average</li>
              <li><strong>Credit Score 700+:</strong> Below 700 can add 0.25-0.50% to your rate</li>
              <li><strong>20% Down Payment:</strong> Best rates require 20%+ down; below 10% can add 0.15-0.30%</li>
              <li><strong>Choose Insured vs Uninsured Wisely:</strong> Sometimes insured mortgages (under 20% down) get better rates</li>
              <li><strong>Consider Monoline Lenders:</strong> Non-bank lenders often beat big bank rates by 0.15-0.25%</li>
              <li><strong>Negotiate Everything:</strong> Rate, prepayment privileges, portability, refinance options</li>
            </ul>
          ),
        },
        {
          title: "Ontario First-Time Buyer Benefits",
          icon: "🏠",
          content: (
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Provincial Land Transfer Tax Rebate</h4>
                <p>Up to $4,000 rebate for first-time buyers on provincial land transfer tax.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Toronto Land Transfer Tax Rebate</h4>
                <p>Additional $8,475 rebate for first-time buyers in Toronto (total $12,475 savings).</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Lower Rates for Insured Mortgages</h4>
                <p>First-time buyers with under 20% down often qualify for better insured mortgage rates.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Home Buyers' Plan (RRSP)</h4>
                <p>Withdraw up to $60,000 from RRSP tax-free for down payment (federal program).</p>
              </div>
            </div>
          ),
        },
      ]}
      faqs={faqs}
      ctaHeadline="Get Ontario's Best Mortgage Rates"
      ctaDescription="Connect with Ontario mortgage experts who can access 50+ lenders and negotiate the best rates for Toronto, GTA, Ottawa, and across Ontario."
      ctaPrimaryText="Get My Ontario Rate Quote"
      ctaPrimaryLink="/mortgage-appointment-online"
      ctaSecondaryText="Calculate My Payment"
      ctaSecondaryLink="/mortgage/calculators"
    />
  );
}
