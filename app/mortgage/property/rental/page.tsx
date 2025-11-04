import { Metadata } from "next";
import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";
import FAQBlock from "@/components/sections/FAQBlock";

export const metadata: Metadata = {
  title: "Rental Property Mortgage | Investment Property Financing Canada",
  description: "Finance rental properties with competitive investor rates. Learn about rental income qualification, down payment requirements, and building a real estate portfolio.",
};

export default function RentalPropertyPage() {
  const faqs = [
    {
      question: "How much down payment do I need for a rental property?",
      answer: "Rental properties require a minimum 20% down payment in Canada. This is higher than owner-occupied properties because lenders consider rental investments higher risk. Some lenders may require 25-35% for multiple properties.",
    },
    {
      question: "Can I use expected rental income to qualify?",
      answer: "Yes! Most lenders use 50-80% of expected rental income to offset the mortgage payment when calculating debt ratios. You'll need a rental appraisal or signed lease agreement to support the income amount.",
    },
    {
      question: "What credit score do I need for a rental property mortgage?",
      answer: "Most lenders require a minimum credit score of 680 for rental properties, with some requiring 700+. Portfolio investors with multiple properties may face stricter requirements.",
    },
    {
      question: "Can I convert my primary residence to a rental property?",
      answer: "Yes, but you'll need to inform your lender. You may need to refinance to an investment mortgage with adjusted rates. Some lenders allow conversion after one year of owner-occupancy.",
    },
    {
      question: "Do rental properties have higher interest rates?",
      answer: "Yes, rental property rates are typically 0.15-0.50% higher than owner-occupied rates due to increased default risk. The rate premium varies by lender, down payment size, and borrower profile.",
    },
    {
      question: "How many rental properties can I finance?",
      answer: "Most traditional lenders cap at 4-10 financed properties. Alternative and commercial lenders can finance larger portfolios. Each property adds complexity to qualification criteria.",
    },
  ];

  const relatedPages = [
    {
      id: "1",
      title: "Investment Property Mortgage",
      path: "/mortgage/investment",
      excerpt: "Complete guide to investment property financing strategies.",
    },
    {
      id: "2",
      title: "Refinance Your Mortgage",
      path: "/mortgage/refinance",
      excerpt: "Access equity from existing properties for new investments.",
    },
    {
      id: "3",
      title: "Mortgage Calculators",
      path: "/mortgage/calculators",
      excerpt: "Calculate rental property cash flow and ROI.",
    },
  ];

  return (
    <ArticlePageTemplate
      title="Rental Property Mortgage"
      headline="Rental Property Mortgage Guide"
      excerpt="Finance your rental property investment with competitive rates. Learn about rental income qualification, portfolio financing, and building wealth through real estate."
      category="Property Types"
      tags={["Rental Property", "Investment", "Real Estate Portfolio"]}
      breadcrumbs={[
        { label: "Mortgage Solutions", href: "/mortgage" },
        { label: "Property Types", href: "/mortgage/solutions" },
        { label: "Rental Property", href: "/mortgage/property/rental" },
      ]}
      relatedPages={relatedPages}
      content={
        <div className="space-y-12 prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Rental property mortgages enable real estate investors to build wealth through monthly cash flow, 
            property appreciation, and mortgage paydown by tenants. Understanding rental income qualification, 
            down payment requirements, and lender criteria is essential for successful property investing.
          </p>

          <section>
            <h2>Key Requirements for Rental Property Mortgages</h2>
            <ul>
              <li><strong>Minimum 20% Down Payment</strong> – Higher than owner-occupied (5% minimum)</li>
              <li><strong>Credit Score 680+</strong> – Some lenders require 700+ for investors</li>
              <li><strong>Debt Ratios Under 44%</strong> – Including all properties and personal debts</li>
              <li><strong>Rental Income Verification</strong> – Lease agreements, rental appraisals, or market rents</li>
              <li><strong>Property Appraisal</strong> – Must support purchase price and rental income assumptions</li>
              <li><strong>Cash Reserves</strong> – Some lenders want 3-6 months operating reserves per property</li>
              <li><strong>Property Insurance</strong> – Landlord insurance required (more expensive than owner-occupied)</li>
            </ul>
          </section>

          <section>
            <h2>How Lenders Calculate Rental Income</h2>
            <p>
              Lenders use rental income to offset the property's carrying costs when qualifying you. Here's how it works:
            </p>
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Rental Income Calculation Example</h3>
              <div className="space-y-2">
                <p><strong>Market Rent:</strong> $2,500/month</p>
                <p><strong>Lender Uses:</strong> 50-80% (let's use 70%)</p>
                <p><strong>Qualified Rental Income:</strong> $2,500 × 70% = $1,750/month</p>
                <p><strong>Property Costs:</strong> Mortgage payment + taxes + insurance + condo fees = $2,200/month</p>
                <p><strong>Net Cost to Borrower:</strong> $2,200 - $1,750 = $450/month added to debt ratios</p>
              </div>
            </div>
            <p className="mt-4">
              Even if the property doesn't cash flow positively, rental income significantly reduces the impact on 
              your debt ratios, allowing you to qualify for more properties.
            </p>
          </section>

          <section>
            <h2>Down Payment Strategies</h2>
            <p>
              Building a rental portfolio requires strategic planning for down payments:
            </p>
            <ol>
              <li>
                <strong>HELOC on Primary Residence</strong> – Use equity from your home as down payments for 
                rentals (up to 65% loan-to-value)
              </li>
              <li>
                <strong>RRSP Leveraging</strong> – For first rental, consider HBP withdrawal (must be moved 
                back to owner-occupied strategy)
              </li>
              <li>
                <strong>Refinance Existing Rentals</strong> – Pull out equity from appreciating properties 
                every 3-5 years (up to 80% LTV for rentals)
              </li>
              <li>
                <strong>Private/Co-Lending</strong> – Partner with investors to pool down payment capital
              </li>
              <li>
                <strong>Seller Financing</strong> – Negotiate with motivated sellers for VTB mortgages
              </li>
              <li>
                <strong>BRRRR Strategy</strong> – Buy, Renovate, Rent, Refinance, Repeat to recycle capital
              </li>
            </ol>
          </section>

          <section>
            <h2>Rental Property Types & Financing</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-3">🏢 Single-Family Homes</h3>
                <p className="text-muted-foreground mb-3">
                  Easiest to finance, most lender options. Ideal for beginning investors. Lower maintenance, 
                  easier to manage and sell.
                </p>
                <p className="text-sm font-medium">Down Payment: 20% minimum</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-3">🏘️ Multi-Unit (2-4 Units)</h3>
                <p className="text-muted-foreground mb-3">
                  Multiple income streams reduce risk. Can live in one unit while renting others. Better 
                  cash flow per dollar invested.
                </p>
                <p className="text-sm font-medium">Down Payment: 20% minimum (owner-occupied: 5-10%)</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-3">🏙️ Condos</h3>
                <p className="text-muted-foreground mb-3">
                  Lower entry cost, less maintenance. Popular for urban investors. Some lenders require 
                  25% down for condo rentals.
                </p>
                <p className="text-sm font-medium">Down Payment: 20-25%</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-3">🏡 Townhouses</h3>
                <p className="text-muted-foreground mb-3">
                  Balance between single-family and condo. Less maintenance than houses, more space than condos. 
                  Strong rental demand in suburban markets.
                </p>
                <p className="text-sm font-medium">Down Payment: 20% minimum</p>
              </div>
            </div>
          </section>

          <section>
            <h2>Building a Rental Portfolio</h2>
            <p>
              Growing from one rental to multiple properties requires strategic planning:
            </p>
            <h3>Properties 1-2: Foundation Building</h3>
            <ul>
              <li>Focus on strong cash-flowing properties in stable markets</li>
              <li>Build relationship with mortgage broker and lender</li>
              <li>Establish property management systems and processes</li>
              <li>Track all income and expenses meticulously for tax purposes</li>
            </ul>

            <h3>Properties 3-5: Accelerated Growth</h3>
            <ul>
              <li>Leverage equity from first properties via refinancing</li>
              <li>Consider portfolio lenders who specialize in multiple properties</li>
              <li>Implement professional property management</li>
              <li>Optimize tax strategies with accountant (incorporate consideration)</li>
            </ul>

            <h3>Properties 6+: Portfolio Optimization</h3>
            <ul>
              <li>Move to commercial financing options for better rates</li>
              <li>Consider holding properties in corporation for tax benefits</li>
              <li>Focus on portfolio cash flow vs. individual property analysis</li>
              <li>Develop exit strategies for underperforming properties</li>
            </ul>
          </section>

          <section>
            <h2>Rental Property Tax Considerations</h2>
            <p>
              Rental properties offer significant tax advantages:
            </p>
            <ul>
              <li><strong>Deductible Expenses:</strong> Mortgage interest, property taxes, insurance, repairs, property management, advertising, utilities, condo fees, travel to property</li>
              <li><strong>Capital Cost Allowance (CCA):</strong> Depreciate building value (not land) to reduce taxable income</li>
              <li><strong>Principal Residence Exemption:</strong> Not available on rental properties; capital gains tax applies on sale</li>
              <li><strong>Soft Costs:</strong> Legal, accounting, financing fees often deductible</li>
              <li><strong>Incorporation Benefits:</strong> At 3-5+ properties, consider corporate ownership for income splitting and lower tax rates</li>
            </ul>
            <p className="text-sm italic mt-4">
              Note: Always consult with a qualified accountant. Tax rules are complex and change regularly.
            </p>
          </section>

          <section>
            <h2>Common Rental Property Mistakes</h2>
            <ol>
              <li><strong>Negative Cash Flow</strong> – Counting on appreciation only; aim for $200-500+/month cash flow after all costs</li>
              <li><strong>Underestimating Expenses</strong> – Budget 30-50% of gross rent for all expenses (not just mortgage)</li>
              <li><strong>No Vacancy Reserve</strong> – Expect 5-10% vacancy; one month vacant can wipe out annual profit</li>
              <li><strong>Poor Property Selection</strong> – Location matters more than price; buy where tenants want to live</li>
              <li><strong>Inadequate Tenant Screening</strong> – Credit checks, employment verification, references are essential</li>
              <li><strong>Mixing Personal & Business</strong> – Separate bank accounts and meticulous record keeping required</li>
              <li><strong>No Property Manager</strong> – DIY works for 1-2 properties; beyond that, professional management pays for itself</li>
            </ol>
          </section>

          <section>
            <h2>Financing Your First Rental Property</h2>
            <p>
              Ready to get started? Here's your step-by-step financing plan:
            </p>
            <ol>
              <li><strong>Build Strong Financial Foundation:</strong> 700+ credit score, stable income, low personal debt</li>
              <li><strong>Save 20% Down Payment + Reserves:</strong> Minimum $50,000-$100,000 for first property in most markets</li>
              <li><strong>Get Pre-Approved:</strong> Know your buying power before searching</li>
              <li><strong>Analyze Properties:</strong> Run numbers on every potential deal (1% rule: monthly rent ≥ 1% of purchase price)</li>
              <li><strong>Submit Financing Application:</strong> Provide rental appraisal or lease agreement</li>
              <li><strong>Close & Rent:</strong> Tenant in place before or immediately after closing is ideal</li>
            </ol>
          </section>

          <section>
            <h2>Rental Property Calculator Resources</h2>
            <p>
              Use these calculators to analyze potential rental properties:
            </p>
            <ul>
              <li><strong>Cash Flow Calculator:</strong> Income vs. all expenses including vacancy and maintenance</li>
              <li><strong>Cap Rate Calculator:</strong> Net operating income divided by purchase price</li>
              <li><strong>ROI Calculator:</strong> Annual return on invested capital (down payment + closing costs)</li>
              <li><strong>Mortgage Payment Calculator:</strong> PITI at current investment rates</li>
            </ul>
          </section>
        </div>
      }
      showCTA={true}
      ctaHeadline="Ready to Build Your Rental Portfolio?"
      ctaDescription="Get pre-approved for a rental property mortgage. Our investment property specialists will help you analyze deals, maximize cash flow, and build long-term wealth through real estate."
    >
      <FAQBlock faqs={faqs} title="Rental Property Mortgage FAQs" />
    </ArticlePageTemplate>
  );
}
