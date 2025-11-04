import { Metadata } from "next";
import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";
import FAQBlock from "@/components/sections/FAQBlock";

export const metadata: Metadata = {
  title: "Vacation Home Mortgage | Second Home & Cottage Financing Canada",
  description: "Finance your vacation property or second home with competitive rates. Learn about down payment requirements, qualification criteria, and seasonal property financing.",
};

export default function VacationHomePage() {
  const faqs = [
    {
      question: "How much down payment do I need for a vacation home?",
      answer: "Vacation homes typically require 10-20% down payment depending on the lender and property type. If the property is for personal use only (not rented), some lenders treat it similarly to a primary residence requiring 10%. If rented seasonally, expect 20% minimum.",
    },
    {
      question: "Can I use rental income from my vacation home to qualify?",
      answer: "Some lenders allow you to use short-term rental income (Airbnb, VRBO) to help qualify, but typically only 50-70% of gross rental income is used. You'll need proof of historical rental income or market rental analysis.",
    },
    {
      question: "Are vacation home mortgage rates higher?",
      answer: "Vacation home rates are typically 0.10-0.30% higher than primary residence rates, but lower than investment properties. Rates depend on whether the property will be rented seasonally or used exclusively for personal use.",
    },
    {
      question: "What's the difference between a vacation home and an investment property?",
      answer: "Vacation homes are primarily for personal use (with optional seasonal rentals), while investment properties are purely income-generating. Vacation homes have slightly better rates and more flexible qualification, but rental income may not be fully counted.",
    },
    {
      question: "Can I use my vacation home as a principal residence?",
      answer: "If you live in your vacation home for more than 6 months per year, some lenders may allow you to treat it as a primary residence with better rates. However, if you already have another primary residence, it will be considered a second home.",
    },
    {
      question: "What about year-round accessibility?",
      answer: "Seasonal cottages with limited winter access may require larger down payments (20-25%) and have fewer lender options. Year-round accessible properties are easier to finance with more competitive terms.",
    },
  ];

  const relatedPages = [
    {
      id: "1",
      title: "Second Home Mortgage",
      path: "/mortgage/second-home",
      excerpt: "Financing options for non-vacation second properties.",
    },
    {
      id: "2",
      title: "Refinance Your Mortgage",
      path: "/mortgage/refinance",
      excerpt: "Access equity from your primary home to buy a vacation property.",
    },
    {
      id: "3",
      title: "Mortgage Calculators",
      path: "/mortgage/calculators",
      excerpt: "Calculate vacation home affordability and payments.",
    },
  ];

  return (
    <ArticlePageTemplate
      title="Vacation Home Mortgage"
      headline="Vacation Home & Cottage Mortgage Guide"
      excerpt="Finance your vacation property, cottage, or second home with competitive rates. Learn about down payments, seasonal rental income qualification, and cottage country financing."
      category="Property Types"
      tags={["Vacation Home", "Cottage", "Second Home", "Seasonal Property"]}
      breadcrumbs={[
        { label: "Mortgage Solutions", href: "/mortgage" },
        { label: "Property Types", href: "/mortgage/solutions" },
        { label: "Vacation Home", href: "/mortgage/property/vacation" },
      ]}
      relatedPages={relatedPages}
      content={
        <div className="space-y-12 prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Vacation home mortgages enable you to finance a cottage, cabin, or seasonal property for family 
            getaways while building equity. Whether planning personal retreats or supplementing costs with 
            seasonal rentals, understanding vacation property financing helps you make informed decisions.
          </p>

          <section>
            <h2>Vacation Home vs. Investment Property vs. Primary Residence</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="border p-3 text-left">Feature</th>
                    <th className="border p-3 text-left">Primary Residence</th>
                    <th className="border p-3 text-left">Vacation Home</th>
                    <th className="border p-3 text-left">Investment Property</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3 font-medium">Down Payment</td>
                    <td className="border p-3">5-20%</td>
                    <td className="border p-3">10-20%</td>
                    <td className="border p-3">20-25%</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">Interest Rate</td>
                    <td className="border p-3">Lowest</td>
                    <td className="border p-3">+0.10-0.30%</td>
                    <td className="border p-3">+0.15-0.50%</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">Rental Income Counted</td>
                    <td className="border p-3">50-80% (if legal suite)</td>
                    <td className="border p-3">50-70% (seasonal)</td>
                    <td className="border p-3">50-80% (year-round)</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">Primary Use</td>
                    <td className="border p-3">Must live there</td>
                    <td className="border p-3">Personal enjoyment</td>
                    <td className="border p-3">Income generation</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">Tax Deductions</td>
                    <td className="border p-3">Limited (HBTC only)</td>
                    <td className="border p-3">Proportional to rental %</td>
                    <td className="border p-3">Full business deductions</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2>Down Payment Requirements</h2>
            <p>
              Vacation home down payments depend on usage and property characteristics:
            </p>
            <ul>
              <li><strong>Personal Use Only:</strong> 10-20% down (similar to second homes)</li>
              <li><strong>With Seasonal Rentals:</strong> 20% minimum (treated more like investment)</li>
              <li><strong>Seasonal/Limited Access:</strong> 20-25% (higher risk for lenders)</li>
              <li><strong>Year-Round Waterfront:</strong> 10-20% (best financing terms)</li>
              <li><strong>Fractional Ownership:</strong> Difficult to finance; cash purchase often required</li>
            </ul>
          </section>

          <section>
            <h2>Qualification Criteria for Vacation Homes</h2>
            <p>
              Lenders assess vacation home applications differently than primary residences:
            </p>
            <ol>
              <li>
                <strong>Stable Primary Residence:</strong> Must have primary home mortgage in good standing 
                (or own outright)
              </li>
              <li>
                <strong>Strong Credit Score:</strong> Minimum 680, ideally 700+ for best rates
              </li>
              <li>
                <strong>Debt Ratios:</strong> Total Debt Service (TDS) under 44% including both properties
              </li>
              <li>
                <strong>Proven Income:</strong> 2+ years of stable employment or self-employment
              </li>
              <li>
                <strong>Cash Reserves:</strong> 3-6 months of payments for both properties recommended
              </li>
              <li>
                <strong>Property Location:</strong> Desirable recreational area with strong resale market
              </li>
            </ol>
          </section>

          <section>
            <h2>Financing Strategies for Vacation Properties</h2>
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-3">1️⃣ Traditional Vacation Home Mortgage</h3>
                <p className="text-muted-foreground mb-2">
                  Conventional mortgage with 10-20% down. Best for year-round accessible properties primarily 
                  for personal use.
                </p>
                <p className="text-sm"><strong>Pros:</strong> Competitive rates, standard approval process</p>
                <p className="text-sm"><strong>Cons:</strong> Need to qualify for both properties simultaneously</p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-3">2️⃣ HELOC or Refinance Primary Residence</h3>
                <p className="text-muted-foreground mb-2">
                  Use equity from primary home (up to 65% LTV for HELOC, 80% for refinance) to purchase vacation 
                  property outright or make large down payment.
                </p>
                <p className="text-sm"><strong>Pros:</strong> Easier qualification, potentially lower overall rate</p>
                <p className="text-sm"><strong>Cons:</strong> Puts primary home at risk, higher primary mortgage</p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-3">3️⃣ Blended Rental Income Approach</h3>
                <p className="text-muted-foreground mb-2">
                  Document Airbnb/VRBO rental income history (2+ years) to offset vacation home costs. Lenders 
                  typically use 50-70% of gross rental income.
                </p>
                <p className="text-sm"><strong>Pros:</strong> Easier to qualify, rental income helps affordability</p>
                <p className="text-sm"><strong>Cons:</strong> Need proven track record, property management required</p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-3">4️⃣ Co-Ownership with Family/Friends</h3>
                <p className="text-muted-foreground mb-2">
                  Purchase with partners to split costs and down payment. Each owner's income helps qualification. 
                  Requires detailed usage and cost-sharing agreement.
                </p>
                <p className="text-sm"><strong>Pros:</strong> Lower individual cost, shared maintenance</p>
                <p className="text-sm"><strong>Cons:</strong> Complex ownership, potential relationship issues</p>
              </div>
            </div>
          </section>

          <section>
            <h2>Seasonal Rental Income Considerations</h2>
            <p>
              Many vacation homeowners rent their properties during peak seasons to offset costs:
            </p>
            <h3>What Lenders Need to See:</h3>
            <ul>
              <li><strong>Historical Income:</strong> 2 years of T1 returns showing rental income (CRA Line 12600)</li>
              <li><strong>Rental Platform History:</strong> Airbnb/VRBO statements showing bookings and rates</li>
              <li><strong>Market Rent Analysis:</strong> Comparable vacation rental rates in the area</li>
              <li><strong>Occupancy Assumptions:</strong> Lenders typically assume 50-60% occupancy for seasonal markets</li>
            </ul>

            <h3>Rental Income Calculation Example:</h3>
            <div className="bg-muted/50 p-6 rounded-lg">
              <p><strong>Average Nightly Rate:</strong> $300</p>
              <p><strong>Peak Season (16 weeks):</strong> 16 weeks × 7 days × 60% occupancy = 67 nights</p>
              <p><strong>Gross Rental Income:</strong> 67 nights × $300 = $20,100/year</p>
              <p><strong>Lender Uses (70%):</strong> $20,100 × 70% = $14,070/year ($1,173/month)</p>
              <p><strong>Impact on Qualification:</strong> Can offset $1,173 of property carrying costs</p>
            </div>
          </section>

          <section>
            <h2>Property Types & Locations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-3">🏖️ Waterfront Cottages</h3>
                <p className="text-muted-foreground">
                  Lakes, rivers, ocean properties. Highest demand and resale value. Easier to finance year-round 
                  accessible waterfront vs. seasonal lake cottages.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-3">⛰️ Mountain Chalets</h3>
                <p className="text-muted-foreground">
                  Ski resort areas, mountain retreats. Strong rental potential in winter months. Consider 
                  year-round accessibility for better financing.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-3">🏝️ Resort Properties</h3>
                <p className="text-muted-foreground">
                  Hotel-condo units in resort destinations. Often come with rental program management. May have 
                  restrictions on personal use weeks.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-3">🌲 Rural Retreats</h3>
                <p className="text-muted-foreground">
                  Cabins, acreages, wilderness properties. Lower price points but potentially harder to finance. 
                  Consider septic, well, road access for lending.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>Tax Implications of Vacation Homes</h2>
            <p>
              Vacation property taxation depends on usage:
            </p>
            <h3>Personal Use Only (No Rentals):</h3>
            <ul>
              <li>Mortgage interest is NOT tax-deductible</li>
              <li>May qualify as principal residence if lived in {'>'}50% of year</li>
              <li>Capital gains on sale (can designate as principal residence for some years)</li>
            </ul>

            <h3>Mixed Personal & Rental Use:</h3>
            <ul>
              <li>Deduct expenses proportional to rental usage (e.g., if rented 30% of year, deduct 30% of costs)</li>
              <li>Mortgage interest, property tax, insurance, utilities, maintenance all partially deductible</li>
              <li>Must report rental income on T1 return (Line 12600)</li>
              <li>Cannot claim principal residence exemption for rental years</li>
              <li>Capital Cost Allowance (CCA) available but triggers recapture on sale</li>
            </ul>

            <p className="text-sm italic mt-4">
              Consult with an accountant to optimize your vacation property tax strategy.
            </p>
          </section>

          <section>
            <h2>Common Vacation Home Mistakes</h2>
            <ol>
              <li><strong>Underestimating Total Costs:</strong> Cottage maintenance, winterization, property management, higher utilities than primary homes</li>
              <li><strong>Overestimating Rental Income:</strong> Assuming 100% occupancy; 50-60% is more realistic for seasonal properties</li>
              <li><strong>Ignoring Accessibility:</strong> Year-round road access significantly affects financing, resale, and rental potential</li>
              <li><strong>No Property Manager:</strong> If renting, professional management is essential from 2+ hours away</li>
              <li><strong>Mixing Vacation with Investment:</strong> Clarify primary goal—personal enjoyment or income generation—different strategies for each</li>
              <li><strong>Not Testing the Market:</strong> Rent for a season in the area before buying to understand year-round reality</li>
            </ol>
          </section>

          <section>
            <h2>Steps to Finance Your Vacation Home</h2>
            <ol>
              <li><strong>Assess Affordability:</strong> Can you carry both properties without rental income?</li>
              <li><strong>Check Your Credit:</strong> Aim for 700+ credit score for best rates</li>
              <li><strong>Calculate Down Payment:</strong> Save 15-25% plus closing costs (3-5%)</li>
              <li><strong>Get Pre-Approved:</strong> Know your maximum second property budget</li>
              <li><strong>Research Locations:</strong> Consider resale value, rental demand, accessibility</li>
              <li><strong>Choose Financing Strategy:</strong> Traditional mortgage vs. HELOC vs. refinance</li>
              <li><strong>Close & Enjoy:</strong> Set up property management if renting seasonally</li>
            </ol>
          </section>

          <FAQBlock faqs={faqs} title="Vacation Home Mortgage FAQs" />
        </div>
      }
      showCTA={true}
      ctaHeadline="Ready to Buy Your Vacation Home?"
      ctaDescription="Get pre-approved for a vacation property mortgage. Our specialists understand cottage country financing and can help you structure the best deal for your family retreat or seasonal rental."
    />
  );
}
