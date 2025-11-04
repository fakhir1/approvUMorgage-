import { Metadata } from "next";
import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";
import FAQBlock from "@/components/sections/FAQBlock";

export const metadata: Metadata = {
  title: "Owner-Occupied Mortgage | Primary Residence Financing Canada",
  description: "Finance your primary residence with the best rates and lowest down payments. Learn about first-time buyer programs, qualification requirements, and owner-occupied mortgage benefits.",
};

export default function OwnerOccupiedPage() {
  const faqs = [
    {
      question: "What is the minimum down payment for an owner-occupied property?",
      answer: "For owner-occupied properties under $500,000, the minimum down payment is 5%. For properties between $500,000-$999,999, it's 5% on the first $500,000 and 10% on the remaining amount. Properties $1M+ require 20% minimum.",
    },
    {
      question: "Can I rent out part of my owner-occupied home?",
      answer: "Yes! You can rent out a basement suite, rooms, or use rental income from a legal secondary suite to help qualify for a larger mortgage. Some programs require owner-occupancy for the primary unit.",
    },
    {
      question: "Do I get better rates for owner-occupied properties?",
      answer: "Yes, owner-occupied mortgages typically have the best rates available—often 0.15-0.50% lower than investment properties or second homes. Lenders view primary residences as lower risk.",
    },
    {
      question: "What credit score do I need for an owner-occupied mortgage?",
      answer: "Most lenders require a minimum credit score of 600-680 for owner-occupied mortgages. Insured mortgages (under 20% down) typically require 600+, while conventional mortgages prefer 680+ for best rates.",
    },
    {
      question: "Can I use gift funds for my down payment?",
      answer: "Yes! Gift funds from immediate family members are accepted by most lenders. You'll need a signed gift letter stating the funds are a gift with no expectation of repayment.",
    },
    {
      question: "What's the difference between insured and uninsured mortgages?",
      answer: "Insured mortgages (under 20% down) require mortgage default insurance but often get better rates. Uninsured mortgages (20%+ down) don't need insurance, may have slightly higher rates, but you build equity faster.",
    },
  ];

  const relatedPages = [
    {
      id: "1",
      title: "First-Time Home Buyer Guide",
      path: "/mortgage/first-time-buyers",
      excerpt: "Special programs and incentives for first-time home buyers.",
    },
    {
      id: "2",
      title: "Mortgage Pre-Approval",
      path: "/mortgage/approval",
      excerpt: "Get pre-approved and know your budget before house hunting.",
    },
    {
      id: "3",
      title: "Mortgage Affordability Calculator",
      path: "/mortgage/calculators/affordability",
      excerpt: "Calculate how much home you can afford.",
    },
  ];

  return (
    <ArticlePageTemplate
      title="Owner-Occupied Mortgage"
      headline="Owner-Occupied Mortgage Guide"
      excerpt="Finance your primary residence with the best rates and programs available. Learn about down payments, qualification requirements, and owner-occupied benefits."
      category="Property Types"
      tags={["Owner-Occupied", "Primary Residence", "Home Financing"]}
      breadcrumbs={[
        { label: "Mortgage Solutions", href: "/mortgage" },
        { label: "Property Types", href: "/mortgage/solutions" },
        { label: "Owner-Occupied", href: "/mortgage/property/owner-occupied" },
      ]}
      relatedPages={relatedPages}
      content={
        <div className="space-y-12 prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Owner-occupied mortgages offer the best rates, lowest down payments, and most flexible qualification 
            criteria in Canada. Whether you're a first-time buyer or moving to a new primary residence, understanding 
            the advantages and requirements of owner-occupied financing helps you maximize your purchasing power.
          </p>

          <section>
            <h2>Advantages of Owner-Occupied Mortgages</h2>
            <ul>
              <li><strong>Lower Down Payments</strong> – As low as 5% for properties under $500,000</li>
              <li><strong>Best Interest Rates</strong> – Typically 0.15-0.50% lower than investment properties</li>
              <li><strong>More Lender Options</strong> – Access to all major banks and alternative lenders</li>
              <li><strong>First-Time Buyer Programs</strong> – Government incentives and rebates available</li>
              <li><strong>Flexible Qualification</strong> – More lenient debt-to-income ratios and credit requirements</li>
              <li><strong>Tax Benefits</strong> – Capital gains exemption when selling your primary residence</li>
              <li><strong>Rental Income</strong> – Can use rental income from legal suites to qualify</li>
            </ul>
          </section>

          <section>
            <h2>Down Payment Requirements</h2>
            <p>
              Owner-occupied properties have the most flexible down payment options in Canada:
            </p>
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Down Payment Schedule</h3>
              <ul className="space-y-2">
                <li><strong>Under $500,000:</strong> 5% minimum</li>
                <li><strong>$500,000 - $999,999:</strong> 5% on first $500K + 10% on remainder</li>
                <li><strong>$1,000,000+:</strong> 20% minimum (no insurance available)</li>
              </ul>
            </div>
            <p className="mt-4">
              <strong>Example:</strong> For a $600,000 home: (5% × $500,000) + (10% × $100,000) = $35,000 down payment.
            </p>
          </section>

          <section>
            <h2>Qualification Requirements</h2>
            <p>
              To qualify for an owner-occupied mortgage, lenders assess:
            </p>
            <ol>
              <li><strong>Income Verification</strong> – 2 years of employment history preferred, T4s, pay stubs, Notice of Assessment</li>
              <li><strong>Credit Score</strong> – Minimum 600 for insured mortgages, 680+ for best rates</li>
              <li><strong>Debt Ratios</strong> – GDS under 39%, TDS under 44% (some flexibility for strong profiles)</li>
              <li><strong>Property Appraisal</strong> – Must support purchase price</li>
              <li><strong>Mortgage Insurance</strong> – Required for down payments under 20% (CMHC, Sagen, or Canada Guaranty)</li>
              <li><strong>Closing Costs</strong> – Typically 1.5-4% of purchase price (legal fees, land transfer tax, etc.)</li>
            </ol>
          </section>

          <section>
            <h2>Using Rental Income to Qualify</h2>
            <p>
              One unique advantage of owner-occupied properties is the ability to use rental income from secondary 
              suites or roommates to help qualify for a larger mortgage:
            </p>
            <ul>
              <li><strong>Legal Secondary Suite:</strong> Lenders typically use 50-80% of rental income</li>
              <li><strong>Roommates:</strong> Some lenders allow rental income with signed leases</li>
              <li><strong>Documentation Needed:</strong> Rental appraisal or existing lease agreements</li>
              <li><strong>Property Requirements:</strong> Must have legal separate entrance, kitchen, bathroom</li>
            </ul>
            <p>
              This strategy can increase your purchasing power by $50,000-$150,000+ depending on rental rates in your area.
            </p>
          </section>

          <section>
            <h2>First-Time Home Buyer Programs</h2>
            <p>
              First-time buyers purchasing owner-occupied properties have access to special programs:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-3">🏠 First-Time Home Buyer Incentive</h3>
                <p className="text-muted-foreground">
                  Shared equity program offering 5-10% of home price as interest-free loan. 
                  Income caps and restrictions apply.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-3">💰 Home Buyers' Plan (HBP)</h3>
                <p className="text-muted-foreground">
                  Withdraw up to $60,000 from RRSP tax-free for down payment. Must repay 
                  over 15 years.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-3">📋 Land Transfer Tax Rebates</h3>
                <p className="text-muted-foreground">
                  First-time buyers eligible for rebates up to $8,475 in Toronto, $4,000 
                  provincially in Ontario. Other provinces vary.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-3">🔑 GST/HST New Housing Rebate</h3>
                <p className="text-muted-foreground">
                  Rebate on GST/HST paid for new or substantially renovated homes. Can save 
                  thousands on new construction.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>Mortgage Insurance (CMHC, Sagen, Canada Guaranty)</h2>
            <p>
              If your down payment is less than 20%, mortgage default insurance is mandatory. While this adds to 
              your costs, it also provides benefits:
            </p>
            <ul>
              <li><strong>Lower Interest Rates</strong> – Insured mortgages often get better rates</li>
              <li><strong>Access to Financing</strong> – Enables homeownership with smaller down payments</li>
              <li><strong>Portable</strong> – Insurance can sometimes transfer to new property</li>
              <li><strong>Cost:</strong> 0.60% - 4.00% of mortgage amount depending on down payment size</li>
            </ul>
            <div className="bg-muted/50 p-6 rounded-lg mt-4">
              <h3 className="text-lg font-semibold mb-4">Insurance Premium Rates</h3>
              <ul className="space-y-2">
                <li>20% down payment: No insurance required</li>
                <li>15-19.99% down: 2.80% premium</li>
                <li>10-14.99% down: 3.10% premium</li>
                <li>5-9.99% down: 4.00% premium</li>
              </ul>
            </div>
          </section>

          <section>
            <h2>Common Mistakes to Avoid</h2>
            <ol>
              <li><strong>Not Getting Pre-Approved</strong> – Pre-approval shows sellers you're serious and reveals your true budget</li>
              <li><strong>Maxing Out Your Budget</strong> – Leave room for closing costs, moving expenses, and emergencies</li>
              <li><strong>Ignoring Hidden Costs</strong> – Property taxes, utilities, maintenance, condo fees add up quickly</li>
              <li><strong>Skipping Home Inspection</strong> – Could save you from costly repairs down the road</li>
              <li><strong>Making Big Purchases Before Closing</strong> – New car or furniture can affect your approval</li>
              <li><strong>Not Shopping Around</strong> – Different lenders offer different rates and terms</li>
            </ol>
          </section>

          <section>
            <h2>Next Steps</h2>
            <p>
              Ready to finance your primary residence? Here's your action plan:
            </p>
            <ol>
              <li><strong>Check Your Credit:</strong> Review credit reports and fix any errors</li>
              <li><strong>Calculate Affordability:</strong> Use our calculator to determine your budget</li>
              <li><strong>Get Pre-Approved:</strong> Complete online application in 15 minutes</li>
              <li><strong>Find Your Property:</strong> Work with a realtor to find your dream home</li>
              <li><strong>Finalize Financing:</strong> Submit firm offer and complete mortgage approval</li>
              <li><strong>Close the Deal:</strong> Sign documents and get your keys!</li>
            </ol>
          </section>
        </div>
      }
      showCTA={true}
      ctaHeadline="Ready to Buy Your Primary Residence?"
      ctaDescription="Get pre-approved for an owner-occupied mortgage with the best rates. Our experts will help you maximize your purchasing power and navigate first-time buyer programs."
    >
      <FAQBlock faqs={faqs} title="Owner-Occupied Mortgage FAQs" />
    </ArticlePageTemplate>
  );
}
