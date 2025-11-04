import { Metadata } from "next";
import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";

export const metadata: Metadata = {
  title: "Mortgage Stress Test Canada 2024: Complete Guide | approvU",
  description: "Understand Canada's mortgage stress test, how it affects your borrowing power, qualification rates, and strategies to pass the stress test for your mortgage approval.",
};

export default function MortgageStressTest() {
  const relatedPages = [
    {
      id: "1",
      title: "What is a Mortgage?",
      path: "/mortgage/basics/what-is-mortgage/",
      excerpt: "Learn the fundamentals of how mortgages work",
    },
    {
      id: "2",
      title: "Affordability Calculator",
      path: "/mortgage/calculators/affordability/",
      excerpt: "Calculate how much home you can afford",
    },
    {
      id: "3",
      title: "First-Time Buyer Guide",
      path: "/mortgage/first-time-buyer/",
      excerpt: "Complete guide for first-time homebuyers",
    },
  ];

  return (
    <ArticlePageTemplate
      title="Mortgage Stress Test Canada 2024: Complete Guide | approvU"
      metaDescription="Understand Canada's mortgage stress test, how it affects your borrowing power, qualification rates, and strategies to pass the stress test for your mortgage approval."
      headline="Understanding Canada's Mortgage Stress Test"
      excerpt="Everything you need to know about the mortgage stress test including how it works, qualification rates, and its impact on your home buying power."
      author="approvU Mortgage Team"
      publishedAt={new Date("2024-12-18")}
      breadcrumbs={[
        { label: "Mortgage", href: "/mortgage/" },
        { label: "Mortgage Basics", href: "/mortgage/basics/" },
      ]}
      content={
        <div>
          <h2>What is the Mortgage Stress Test?</h2>
          <p>
            The mortgage stress test is a financial safeguard introduced by the Canadian government to ensure borrowers can still afford their mortgage payments if interest rates rise or their financial circumstances change. Implemented nationally in 2018, the stress test requires all homebuyers to qualify for a mortgage at a higher interest rate than they'll actually pay.
          </p>

          <h2>How Does the Stress Test Work?</h2>
          <p>
            When applying for a mortgage, you must prove you can afford payments at the higher of:
          </p>
          <ul>
            <li>Your mortgage contract rate plus 2 percentage points, or</li>
            <li>The Bank of Canada's benchmark qualifying rate (currently 5.25% as of 2024)</li>
          </ul>
          
          <p>
            For example, if you're offered a mortgage at 4.5%, you must qualify at 6.5% (4.5% + 2%). This means the lender will calculate your maximum borrowing amount as if you were paying the higher rate, even though your actual payments will be based on the lower 4.5% rate.
          </p>

          <h2>Who Does the Stress Test Apply To?</h2>
          
          <p>The mortgage stress test applies to:</p>
          
          <ul>
            <li><strong>All federally regulated lenders:</strong> Major banks, credit unions, and financial institutions</li>
            <li><strong>Insured mortgages:</strong> Those with less than 20% down payment requiring CMHC insurance</li>
            <li><strong>Uninsured mortgages:</strong> Those with 20%+ down payment</li>
            <li><strong>Mortgage refinancing:</strong> When you refinance your existing mortgage</li>
            <li><strong>Home equity lines of credit (HELOCs):</strong> When combined with a mortgage</li>
          </ul>

          <h3>Exemptions</h3>
          <p>
            The stress test typically doesn't apply to:
          </p>
          <ul>
            <li>Mortgage renewals with your current lender (same amount)</li>
            <li>Some private lenders and credit unions (though many voluntarily apply it)</li>
            <li>Mortgage transfers (porting your mortgage to a new property without increasing the amount)</li>
          </ul>

          <h2>Impact on Your Borrowing Power</h2>
          
          <p>
            The stress test typically reduces your borrowing power by approximately 15-20%. Here's an example with a $100,000 annual income:
          </p>

          <div className="bg-muted p-6 rounded-lg my-6">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Contract Rate</th>
                  <th className="text-left py-2">Stress Test Rate</th>
                  <th className="text-left py-2">Approximate Max Mortgage</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">4.0%</td>
                  <td className="py-2">6.0%</td>
                  <td className="py-2">~$520,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">4.5%</td>
                  <td className="py-2">6.5%</td>
                  <td className="py-2">~$500,000</td>
                </tr>
                <tr>
                  <td className="py-2">5.0%</td>
                  <td className="py-2">7.0%</td>
                  <td className="py-2">~$480,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Strategies to Pass the Stress Test</h2>

          <h3>1. Improve Your Credit Score</h3>
          <p>
            A higher credit score (680+) can help you qualify for better rates, which slightly improves your borrowing capacity. Pay down debts, correct credit report errors, and avoid new credit applications before applying.
          </p>

          <h3>2. Increase Your Down Payment</h3>
          <p>
            A larger down payment means you need to borrow less. If you can save an additional 5-10% for your down payment, you'll have an easier time passing the stress test.
          </p>

          <h3>3. Reduce Your Debts</h3>
          <p>
            Pay off credit cards, car loans, and other debts before applying. Every $100 in monthly debt payments you eliminate could increase your borrowing power by $15,000-20,000.
          </p>

          <h3>4. Consider a Co-Applicant or Co-Signer</h3>
          <p>
            Adding a spouse, partner, or family member as a co-applicant combines your incomes and can significantly increase your qualifying amount. Alternatively, a guarantor with strong credit and income can help you qualify.
          </p>

          <h3>5. Choose a Longer Amortization</h3>
          <p>
            If you have 20%+ down payment, consider a 30-year amortization instead of 25 years. This reduces your monthly payment amount and makes qualification easier (though you'll pay more interest over time).
          </p>

          <h3>6. Shop Around for Better Rates</h3>
          <p>
            Even a 0.1% difference in your contract rate affects your stress test rate. Compare rates from multiple lenders or work with a mortgage broker to find the most competitive offer.
          </p>

          <h2>How Lenders Calculate Your Qualification</h2>
          
          <p>
            Lenders use two key ratios when applying the stress test:
          </p>

          <h3>Gross Debt Service (GDS) Ratio</h3>
          <p>
            Your housing costs at the stress test rate (mortgage payment, property taxes, heating, and 50% of condo fees) should not exceed 32-39% of your gross monthly income.
          </p>

          <h3>Total Debt Service (TDS) Ratio</h3>
          <p>
            Your total debt payments at the stress test rate (housing costs plus all other debt obligations) should not exceed 42-44% of your gross monthly income.
          </p>

          <h3>Quick Calculation Example</h3>
          <p>
            Annual income: $100,000 (monthly: $8,333)
          </p>
          <ul>
            <li>Maximum GDS (39%): $3,250/month for housing costs</li>
            <li>Maximum TDS (44%): $3,667/month for all debt</li>
          </ul>
          <p>
            If you have $500/month in other debts, you can allocate up to $3,167/month toward housing costs at the stress test rate.
          </p>

          <h2>Common Misconceptions About the Stress Test</h2>

          <h3>Myth 1: "The stress test doesn't apply to me because I have 20% down"</h3>
          <p>
            <strong>Reality:</strong> The stress test applies to all mortgages through federally regulated lenders, regardless of down payment size.
          </p>

          <h3>Myth 2: "I'll actually pay the higher stress test rate"</h3>
          <p>
            <strong>Reality:</strong> The stress test rate is only used for qualification purposes. You'll pay your actual contract rate, which is lower.
          </p>

          <h3>Myth 3: "The stress test is unfair and unnecessary"</h3>
          <p>
            <strong>Reality:</strong> While it reduces borrowing power, the stress test protects you from overextending financially and provides a safety buffer if rates rise or your income decreases.
          </p>

          <h2>Is the Stress Test Here to Stay?</h2>
          
          <p>
            The stress test is federal policy and unlikely to disappear. However, the qualifying rate may be adjusted over time. The Bank of Canada reviews the benchmark rate quarterly, and changes to the stress test rules are periodically discussed by policymakers.
          </p>

          <p>
            Instead of waiting for policy changes, focus on what you can control: improving your financial profile, saving a larger down payment, and working with experienced mortgage professionals to maximize your borrowing potential within the stress test parameters.
          </p>

          <h2>Final Thoughts</h2>
          
          <p>
            While the mortgage stress test may seem restrictive, it's designed to protect Canadian homebuyers from financial hardship. By ensuring you can afford higher payments, the stress test provides a crucial safety net. Use it as a guide to realistic home affordability rather than an obstacle to homeownership.
          </p>
        </div>
      }
      relatedPages={relatedPages}
      relatedTitle="Continue Learning About Mortgages"
      ctaHeadline="Ready to See How Much You Qualify For?"
      ctaDescription="Use our affordability calculator to estimate your maximum purchase price with the stress test"
      ctaPrimaryText="Calculate Affordability"
      ctaPrimaryLink="/mortgage/calculators/affordability/"
    />
  );
}
