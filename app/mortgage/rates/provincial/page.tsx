import { Metadata } from "next";
import RateLandingPageTemplate from "@/components/templates/RateLandingPageTemplate";
import { RateData } from "@/components/sections/MortgageRateWidget";

export const metadata: Metadata = {
  title: "Mortgage Rates by Province | Compare Canadian Mortgage Rates 2024",
  description: "Compare current mortgage rates across all Canadian provinces. Find the best fixed and variable rates in Ontario, BC, Alberta, Quebec, and more.",
};

export default function ProvincialRatesHub() {
  // Sample national average rates
  const currentRates: RateData = {
    province: "Canada (National Average)",
    rates: [
      { term: "1 Year Fixed", rate: 6.24, type: "fixed", change: -0.15 },
      { term: "2 Year Fixed", rate: 5.99, type: "fixed", change: -0.10 },
      { term: "3 Year Fixed", rate: 5.54, type: "fixed", change: -0.20 },
      { term: "4 Year Fixed", rate: 5.39, type: "fixed", change: -0.15 },
      { term: "5 Year Fixed", rate: 5.14, type: "fixed", change: -0.25 },
      { term: "7 Year Fixed", rate: 5.59, type: "fixed", change: -0.10 },
      { term: "10 Year Fixed", rate: 6.09, type: "fixed", change: -0.05 },
      { term: "5 Year Variable", rate: 6.20, type: "variable", change: 0.00 },
      { term: "3 Year Variable", rate: 6.30, type: "variable", change: 0.05 },
    ],
    lastUpdated: new Date().toISOString(),
    disclaimer: "Rates are subject to change without notice. Actual rates may vary based on property type, down payment, credit score, and other qualification factors. Contact us for personalized rate quotes.",
  };

  const rateTrends = [
    {
      term: "5 Year Fixed",
      current: 5.14,
      previous: 5.39,
      trend: "down" as const,
      history: [
        { date: "2024-01", rate: 5.89 },
        { date: "2024-02", rate: 5.74 },
        { date: "2024-03", rate: 5.54 },
        { date: "2024-04", rate: 5.39 },
        { date: "2024-05", rate: 5.14 },
      ],
    },
    {
      term: "5 Year Variable",
      current: 6.20,
      previous: 6.20,
      trend: "stable" as const,
    },
    {
      term: "3 Year Fixed",
      current: 5.54,
      previous: 5.74,
      trend: "down" as const,
    },
  ];

  const provincialRates = [
    {
      province: "Ontario",
      code: "ON",
      rates: {
        rates: [
          { term: "5 Year Fixed", rate: 5.09, type: "fixed" as const },
          { term: "5 Year Variable", rate: 6.15, type: "variable" as const },
        ],
        lastUpdated: new Date().toISOString(),
      },
    },
    {
      province: "British Columbia",
      code: "BC",
      rates: {
        rates: [
          { term: "5 Year Fixed", rate: 5.14, type: "fixed" as const },
          { term: "5 Year Variable", rate: 6.20, type: "variable" as const },
        ],
        lastUpdated: new Date().toISOString(),
      },
    },
    {
      province: "Alberta",
      code: "AB",
      rates: {
        rates: [
          { term: "5 Year Fixed", rate: 5.19, type: "fixed" as const },
          { term: "5 Year Variable", rate: 6.25, type: "variable" as const },
        ],
        lastUpdated: new Date().toISOString(),
      },
    },
    {
      province: "Quebec",
      code: "QC",
      rates: {
        rates: [
          { term: "5 Year Fixed", rate: 5.12, type: "fixed" as const },
          { term: "5 Year Variable", rate: 6.18, type: "variable" as const },
        ],
        lastUpdated: new Date().toISOString(),
      },
    },
    {
      province: "Manitoba",
      code: "MB",
      rates: {
        rates: [
          { term: "5 Year Fixed", rate: 5.24, type: "fixed" as const },
          { term: "5 Year Variable", rate: 6.30, type: "variable" as const },
        ],
        lastUpdated: new Date().toISOString(),
      },
    },
    {
      province: "Saskatchewan",
      code: "SK",
      rates: {
        rates: [
          { term: "5 Year Fixed", rate: 5.29, type: "fixed" as const },
          { term: "5 Year Variable", rate: 6.35, type: "variable" as const },
        ],
        lastUpdated: new Date().toISOString(),
      },
    },
  ];

  const faqs = [
    {
      question: "Why do mortgage rates vary by province?",
      answer: "Mortgage rates can vary by province due to differences in local real estate markets, competition among lenders, provincial regulations, economic conditions, and regional risk factors. Major urban centers like Toronto and Vancouver often have more competitive rates due to higher competition.",
    },
    {
      question: "How often do mortgage rates change?",
      answer: "Mortgage rates can change daily, or even multiple times per day, in response to Bank of Canada policy changes, bond market movements, economic data releases, and lender-specific factors. Fixed rates follow bond yields, while variable rates are tied to the prime rate.",
    },
    {
      question: "What determines the mortgage rate I'll qualify for?",
      answer: "Your actual mortgage rate depends on multiple factors: credit score (higher score = better rate), down payment size (20%+ often gets best rates), property type and location, employment and income stability, debt-to-income ratios, and whether you work with a broker who can access multiple lenders.",
    },
    {
      question: "Should I choose fixed or variable rates?",
      answer: "Fixed rates provide payment stability and protect against rate increases, ideal if you prioritize budgeting certainty or expect rates to rise. Variable rates typically start lower but can fluctuate; they're better if you're comfortable with payment changes and believe rates will stay stable or decrease.",
    },
    {
      question: "How do I get the best mortgage rate?",
      answer: "To secure the best rate: maintain a credit score of 680+ (ideally 700+), save a larger down payment (20%+ preferred), reduce debt before applying, shop multiple lenders (use a broker), time your application strategically, and be prepared to negotiate terms including rate holds and prepayment privileges.",
    },
    {
      question: "Can I negotiate mortgage rates?",
      answer: "Yes! Mortgage rates are negotiable, especially if you have strong credit, significant down payment, multiple properties, or are bringing other banking business. Brokers can often negotiate better rates than going directly to banks. Don't accept the first rate offered—always ask if they can do better.",
    },
  ];

  return (
    <RateLandingPageTemplate
      title="Provincial Mortgage Rates Hub"
      heroHeadline="Compare Mortgage Rates Across Canada"
      heroSubheadline="Find the best mortgage rates in your province. Compare fixed and variable rates from top lenders across all Canadian provinces and territories."
      breadcrumbs={[
        { label: "Mortgage Solutions", href: "/mortgage" },
        { label: "Rates", href: "/mortgage/rates" },
        { label: "Provincial Rates", href: "/mortgage/rates/provincial" },
      ]}
      currentRates={currentRates}
      rateTrends={rateTrends}
      provincialRates={provincialRates}
      showRateTrends={true}
      showProvincialRates={true}
      showCalculatorLink={true}
      introContent={
        <>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            Mortgage rates vary across Canada based on provincial market conditions, lender competition, and 
            regional economic factors. Compare current rates in your province to find the best deal for your 
            home financing needs.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you're buying in Ontario's competitive real estate market, BC's high-value properties, 
            Alberta's energy-driven economy, or any other province, understanding local rate trends helps you 
            make informed decisions and potentially save thousands over your mortgage term.
          </p>
        </>
      }
      rateExplanation={
        <div className="bg-card p-8 rounded-lg border">
          <h2 className="text-2xl font-bold mb-6 text-primary">Understanding Provincial Rate Differences</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">🏙️ Market Competition</h3>
              <p className="text-muted-foreground">
                Provinces with more lenders and higher mortgage volumes (Ontario, BC) typically have more 
                competitive rates due to increased competition. Smaller markets may have fewer options and 
                slightly higher rates.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">📊 Property Values</h3>
              <p className="text-muted-foreground">
                Higher-value markets (Vancouver, Toronto) may see different rate structures as lenders 
                adjust for larger loan amounts and property price volatility. Some lenders offer special 
                rates for high-value mortgages.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">🏛️ Provincial Regulations</h3>
              <p className="text-muted-foreground">
                Each province has unique regulations affecting lending, such as different land transfer 
                taxes, property rights laws, and foreclosure processes, which can influence lender pricing.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">💼 Economic Factors</h3>
              <p className="text-muted-foreground">
                Regional economic health, employment rates, and industry diversity affect default risk 
                perceptions. Provinces with stable, diversified economies may see marginally better rates.
              </p>
            </div>
          </div>
        </div>
      }
      educationalSections={[
        {
          title: "Rate Shopping Tips",
          icon: "🔍",
          content: (
            <ul className="space-y-3">
              <li><strong>Compare Multiple Lenders:</strong> Rates can vary by 0.10-0.50% between lenders for the same profile</li>
              <li><strong>Use a Mortgage Broker:</strong> Brokers have access to 30+ lenders and can find rates you can't get directly</li>
              <li><strong>Check Provincial Credit Unions:</strong> Local credit unions often offer competitive rates for residents</li>
              <li><strong>Consider Monoline Lenders:</strong> Mortgage-only lenders frequently beat big banks on rates</li>
              <li><strong>Timing Matters:</strong> Rates can change daily; use rate holds (90-120 days) to lock in good rates</li>
            </ul>
          ),
        },
        {
          title: "Provincial Considerations",
          icon: "📍",
          content: (
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Ontario & BC</h4>
                <p>Highest competition, most lender options, best rate opportunities, but also highest property values requiring larger mortgages.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Alberta & Saskatchewan</h4>
                <p>Strong credit union presence, competitive rates, but economic volatility tied to energy sector can affect long-term rate stability.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Atlantic Provinces</h4>
                <p>Fewer lenders, but growing markets attracting more competition. Local credit unions often provide excellent rates and service.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Quebec</h4>
                <p>Unique legal system (Civil Code) affects mortgage structures; some national lenders operate differently or don't serve Quebec.</p>
              </div>
            </div>
          ),
        },
      ]}
      faqs={faqs}
      ctaHeadline="Get Personalized Rate Quotes for Your Province"
      ctaDescription="Connect with local mortgage experts who understand your provincial market and can access the best rates from multiple lenders."
      ctaPrimaryText="Get My Rate Quote"
      ctaPrimaryLink="/mortgage-appointment-online"
      ctaSecondaryText="View Rate Calculators"
      ctaSecondaryLink="/mortgage/calculators"
    />
  );
}
