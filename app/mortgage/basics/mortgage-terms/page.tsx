import { Metadata } from "next";
import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";

export const metadata: Metadata = {
  title: "Mortgage Terms & Definitions: Complete Glossary | approvU",
  description: "Understand essential mortgage terminology including amortization, CMHC, GDS/TDS ratios, equity, prepayment privileges, and more. Complete glossary for Canadian mortgages.",
};

export default function MortgageTerms() {
  const relatedPages = [
    {
      id: "1",
      title: "What is a Mortgage?",
      path: "/mortgage/basics/what-is-mortgage/",
      excerpt: "Learn the fundamentals of how mortgages work",
    },
    {
      id: "2",
      title: "First-Time Buyer Guide",
      path: "/mortgage/first-time-buyer/",
      excerpt: "Complete guide for first-time homebuyers",
    },
    {
      id: "3",
      title: "Mortgage Calculators",
      path: "/mortgage/calculators/",
      excerpt: "Calculate payments and affordability",
    },
  ];

  return (
    <ArticlePageTemplate
      title="Mortgage Terms & Definitions: Complete Glossary | approvU"
      metaDescription="Understand essential mortgage terminology including amortization, CMHC, GDS/TDS ratios, equity, prepayment privileges, and more. Complete glossary for Canadian mortgages."
      headline="Mortgage Terms Explained: Your Complete Glossary"
      excerpt="Demystify mortgage jargon with clear definitions of every term you'll encounter when buying a home in Canada."
      author="approvU Mortgage Team"
      publishedAt={new Date("2024-12-23")}
      breadcrumbs={[
        { label: "Mortgage", href: "/mortgage/" },
        { label: "Mortgage Basics", href: "/mortgage/basics/" },
      ]}
      content={
        <div>
          <h2>Introduction to Mortgage Terminology</h2>
          <p>
            Understanding mortgage terminology is essential for making informed homebuying decisions. This comprehensive glossary explains the most common mortgage terms you'll encounter throughout your home financing journey, from application to final payment.
          </p>

          <h2>Basic Mortgage Terms</h2>

          <h3>Principal</h3>
          <p>
            The original amount of money you borrow from a lender. As you make mortgage payments, a portion goes toward paying down the principal, gradually reducing the outstanding loan balance. For example, if you buy a $500,000 home with a $100,000 down payment, your principal is $400,000.
          </p>

          <h3>Interest</h3>
          <p>
            The cost of borrowing money, expressed as a percentage rate. Interest is what the lender charges for the loan service. Each mortgage payment includes both principal and interest, with the ratio changing over time as your balance decreases.
          </p>

          <h3>Amortization Period</h3>
          <p>
            The total length of time it will take to pay off your entire mortgage if you make all scheduled payments. In Canada, typical amortization periods are 25 or 30 years. Shorter amortizations mean higher monthly payments but less total interest paid. Longer amortizations reduce monthly costs but increase total interest.
          </p>

          <h3>Mortgage Term</h3>
          <p>
            The length of your current mortgage agreement with your lender (typically 1-10 years, with 5 years most common). At the end of each term, you must renew your mortgage, giving you an opportunity to renegotiate rates or switch lenders.
          </p>

          <h3>Down Payment</h3>
          <p>
            The upfront cash payment you make toward the purchase price. In Canada, minimum down payment requirements are: 5% for homes up to $500,000, 10% for the portion between $500,000-$1M, and 20% for homes over $1M. Larger down payments reduce your mortgage amount and may eliminate the need for mortgage insurance.
          </p>

          <h3>Equity</h3>
          <p>
            The difference between your home's current market value and your outstanding mortgage balance. As you pay down your mortgage and/or your property value increases, your equity grows. Equity represents your ownership stake in the property.
          </p>

          <h2>Interest Rate Terms</h2>

          <h3>Fixed Rate</h3>
          <p>
            An interest rate that remains constant throughout your mortgage term. Fixed rates provide payment predictability and protection from rate increases. Ideal for borrowers who prioritize stability and budget certainty.
          </p>

          <h3>Variable Rate</h3>
          <p>
            An interest rate that fluctuates based on the lender's prime rate, which moves with the Bank of Canada's policy rate. Variable rates typically start lower than fixed but can increase or decrease over time.
          </p>

          <h3>Prime Rate</h3>
          <p>
            The interest rate that banks charge their most creditworthy customers. Variable mortgage rates are typically expressed as prime plus or minus a percentage (e.g., Prime - 0.50%). The prime rate follows the Bank of Canada's policy rate.
          </p>

          <h3>APR (Annual Percentage Rate)</h3>
          <p>
            The total cost of borrowing including interest rate plus additional fees and costs, expressed as a yearly rate. APR provides a more comprehensive view of mortgage costs than interest rate alone.
          </p>

          <h2>Mortgage Types</h2>

          <h3>Conventional Mortgage</h3>
          <p>
            A mortgage where the down payment is 20% or more of the home's purchase price. Conventional mortgages don't require mortgage default insurance, often have better rates, and offer more flexible terms.
          </p>

          <h3>High-Ratio Mortgage (Insured Mortgage)</h3>
          <p>
            A mortgage where the down payment is less than 20%. These mortgages require mortgage default insurance from CMHC, Sagen, or Canada Guaranty, which protects the lender if you default.
          </p>

          <h3>Open Mortgage</h3>
          <p>
            A mortgage you can pay off at any time without penalty. Offers maximum flexibility but comes with higher interest rates (typically 0.5-2% above closed mortgages). Useful for short-term situations or when you expect to pay off the mortgage soon.
          </p>

          <h3>Closed Mortgage</h3>
          <p>
            Standard mortgage with prepayment restrictions. Can only be paid off early by paying penalties. Offers lower interest rates than open mortgages in exchange for this limitation. Most Canadian mortgages are closed.
          </p>

          <h2>Qualification & Affordability Terms</h2>

          <h3>Gross Debt Service (GDS) Ratio</h3>
          <p>
            The percentage of your gross income that goes toward housing costs (mortgage payment, property taxes, heating, and 50% of condo fees). Lenders typically require your GDS ratio to be 32-39% or less.
          </p>
          <p><strong>Formula:</strong> (Total Monthly Housing Costs ÷ Gross Monthly Income) × 100</p>

          <h3>Total Debt Service (TDS) Ratio</h3>
          <p>
            The percentage of your gross income that goes toward all debt payments (housing costs plus car loans, credit cards, lines of credit, etc.). Lenders typically require your TDS ratio to be 42-44% or less.
          </p>
          <p><strong>Formula:</strong> (Total Monthly Debt Payments ÷ Gross Monthly Income) × 100</p>

          <h3>Mortgage Stress Test</h3>
          <p>
            A federal requirement ensuring you can still afford mortgage payments if rates increase. You must qualify at the higher of: your contract rate plus 2%, or 5.25% (the benchmark rate). This reduces your borrowing power but provides an important financial safety net.
          </p>

          <h2>Prepayment & Penalty Terms</h2>

          <h3>Prepayment Privileges</h3>
          <p>
            The ability to pay extra toward your mortgage principal without penalty. Typical privileges allow:
          </p>
          <ul>
            <li>10-20% annual lump-sum payments on the anniversary date</li>
            <li>10-20% increase in regular payment amounts</li>
            <li>Some allow unlimited prepayments on specific dates</li>
          </ul>

          <h3>Prepayment Penalty</h3>
          <p>
            Fee charged for paying off more than your allowed prepayment privileges or breaking your mortgage early. For variable-rate mortgages, typically 3 months' interest ($2,000-5,000). For fixed-rate mortgages, the greater of 3 months' interest or Interest Rate Differential (can be $10,000-50,000+).
          </p>

          <h3>Interest Rate Differential (IRD)</h3>
          <p>
            A penalty calculation method for breaking fixed-rate mortgages. Compares your existing rate to the current rate for a term similar to your remaining time. IRD penalties can be substantial, especially if you got a discounted rate initially.
          </p>

          <h2>Mortgage Insurance Terms</h2>

          <h3>CMHC Insurance</h3>
          <p>
            Mortgage default insurance provided by the Canada Mortgage and Housing Corporation (CMHC). Required for high-ratio mortgages (down payment less than 20%). Premiums range from 0.6% to 4% of the mortgage amount depending on down payment size.
          </p>

          <h3>Mortgage Life Insurance</h3>
          <p>
            Optional insurance that pays off your mortgage if you die. Often offered by lenders but can be expensive compared to term life insurance. Beneficiary is the lender (not your estate), and coverage decreases as you pay down the mortgage.
          </p>

          <h2>Closing & Legal Terms</h2>

          <h3>Closing Date</h3>
          <p>
            The date when ownership of the property officially transfers from seller to buyer. You receive the keys, possession, and assume responsibility for the property. All funds must be transferred and legal documents signed.
          </p>

          <h3>Land Transfer Tax</h3>
          <p>
            Provincial tax charged when property ownership changes hands. Rates vary by province and property value. First-time buyers may qualify for rebates or exemptions. In Toronto, there's an additional municipal land transfer tax.
          </p>

          <h3>Title Insurance</h3>
          <p>
            Insurance protecting against title defects (ownership disputes, liens, encroachments, fraud). Typically costs $250-500 for a one-time premium covering you as long as you own the property.
          </p>

          <h3>Appraisal</h3>
          <p>
            Professional assessment of a property's market value. Required by lenders to confirm the home is worth the purchase price. Typically costs $300-500. The lender will only mortgage up to the appraised value, not the purchase price.
          </p>

          <h2>Renewal & Refinancing Terms</h2>

          <h3>Mortgage Renewal</h3>
          <p>
            Negotiating a new mortgage term when your current term expires. You can renew with your existing lender or switch to a new one. Renewals typically don't involve legal fees if staying with the same lender.
          </p>

          <h3>Mortgage Refinancing</h3>
          <p>
            Replacing your existing mortgage with a new one, often to access equity, consolidate debt, or secure better terms. May involve penalties for breaking your current mortgage plus legal fees.
          </p>

          <h3>Porting</h3>
          <p>
            Transferring your existing mortgage to a new property when you move. Allows you to keep your current rate and avoid break penalties. Some lenders allow porting with additional funds (port and increase).
          </p>

          <h2>Final Thoughts</h2>
          <p>
            Familiarizing yourself with these mortgage terms empowers you to ask informed questions, understand lender communications, and negotiate confidently with lenders. This glossary provides the foundation you need, but don't hesitate to seek professional advice when dealing with complex mortgage situations. The more you understand, the better equipped you are to secure the right mortgage for your financial situation and homeownership goals.
          </p>
        </div>
      }
      relatedPages={relatedPages}
      relatedTitle="Continue Learning About Mortgages"
      ctaHeadline="Ready to Get Pre-Approved?"
      ctaDescription="Now that you understand the terminology, let's find the perfect mortgage for you"
      ctaPrimaryText="Get Pre-Approved"
      ctaPrimaryLink="/mortgage/approval/"
    />
  );
}
