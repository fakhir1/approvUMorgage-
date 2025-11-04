import { Metadata } from "next";
import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";

export const metadata: Metadata = {
  title: "What is a Mortgage? Complete Guide for Canadians | approvU",
  description: "Learn the fundamentals of mortgages in Canada including how they work, key components like principal and interest, types of mortgages, and the application process.",
};

export default function WhatIsMortgage() {
  const relatedPages = [
    {
      id: "1",
      title: "Mortgage Stress Test",
      path: "/mortgage/basics/mortgage-stress-test/",
      excerpt: "Understand how the stress test affects your borrowing power",
    },
    {
      id: "2",
      title: "Fixed vs Variable Rates",
      path: "/mortgage/basics/fixed-vs-variable/",
      excerpt: "Compare mortgage rate types to find the best fit",
    },
    {
      id: "3",
      title: "First-Time Buyer Guide",
      path: "/mortgage/first-time-buyer/",
      excerpt: "Everything you need to know for your first home purchase",
    },
  ];

  return (
    <ArticlePageTemplate
      title="What is a Mortgage? Complete Guide for Canadians | approvU"
      metaDescription="Learn the fundamentals of mortgages in Canada including how they work, key components like principal and interest, types of mortgages, and the application process."
      headline="What is a Mortgage?"
      excerpt="A comprehensive guide to understanding mortgages in Canada - how they work, key terms, and what you need to know before applying."
      author="approvU Mortgage Team"
      publishedAt={new Date("2024-12-15")}
      breadcrumbs={[
        { label: "Mortgage", href: "/mortgage/" },
        { label: "Mortgage Basics", href: "/mortgage/basics/" },
      ]}
      content={
        <div>
          <h2>Understanding Mortgages: The Basics</h2>
          <p>
            A mortgage is a loan specifically designed to help you purchase a home or other real estate. When you take out a mortgage, you borrow money from a lender (typically a bank, credit union, or mortgage company) to buy a property. In return, you agree to repay the loan amount plus interest over a set period, usually 25 to 30 years. The property itself serves as collateral, meaning if you fail to make your payments, the lender can take possession of the property through a legal process called foreclosure.
          </p>

          <h2>Key Components of a Mortgage</h2>

          <h3>1. Principal</h3>
          <p>
            The principal is the original amount of money you borrow from the lender. For example, if you buy a $500,000 home with a $100,000 down payment, your mortgage principal would be $400,000. As you make mortgage payments over time, a portion goes toward paying down this principal amount, gradually increasing your ownership stake (equity) in the property.
          </p>

          <h3>2. Interest Rate</h3>
          <p>
            The interest rate is what the lender charges you for borrowing money, expressed as a percentage. Interest rates can be fixed (staying the same throughout your mortgage term) or variable (fluctuating with market conditions). Your interest rate significantly impacts your total cost of borrowing. Even a 0.25% difference in rate can save or cost you thousands of dollars over the life of your mortgage.
          </p>

          <h3>3. Amortization Period</h3>
          <p>
            The amortization period is the total length of time it will take to pay off your mortgage completely if you make all scheduled payments. In Canada, the maximum amortization for insured mortgages (with less than 20% down) is 25 years. For conventional mortgages (20%+ down payment), amortization can extend up to 30 years. Longer amortizations mean lower monthly payments but more total interest paid.
          </p>

          <h3>4. Mortgage Term</h3>
          <p>
            The term is the length of your current mortgage agreement with your lender, typically ranging from 1 to 10 years (with 5 years being most common). At the end of each term, you'll need to renew your mortgage, which gives you an opportunity to renegotiate your rate and terms or switch to a different lender.
          </p>

          <h2>Types of Mortgages in Canada</h2>
          
          <h3>Conventional Mortgages</h3>
          <p>
            A conventional mortgage requires a down payment of at least 20% of the home's purchase price. Because you're putting more money down, you don't need to pay for mortgage default insurance, which can save you thousands of dollars. Conventional mortgages often come with better interest rates and more flexible terms.
          </p>

          <h3>High-Ratio Mortgages</h3>
          <p>
            If your down payment is less than 20%, you'll need a high-ratio (or insured) mortgage. These mortgages require you to purchase mortgage default insurance from CMHC, Sagen, or Canada Guaranty. While this insurance adds to your costs, it allows you to enter the housing market with a smaller down payment.
          </p>

          <h3>Fixed-Rate Mortgages</h3>
          <p>
            With a fixed-rate mortgage, your interest rate stays the same for the entire term. This provides predictable payments and protects you from interest rate increases. Fixed rates are ideal if you prefer stability and want to budget exactly how much you'll pay each month.
          </p>

          <h3>Variable-Rate Mortgages</h3>
          <p>
            Variable-rate mortgages have interest rates that can fluctuate based on the lender's prime rate, which is influenced by the Bank of Canada's policy rate. While variable rates typically start lower than fixed rates, your payments can increase or decrease over time. Some variable-rate mortgages have fixed payments with varying amounts going toward principal versus interest.
          </p>

          <h2>The Mortgage Application Process</h2>
          
          <h3>Step 1: Get Pre-Approved</h3>
          <p>
            Before house hunting, get a mortgage pre-approval. This involves submitting financial documents (income verification, credit check, asset statements) to a lender who will then tell you how much you can borrow. A pre-approval strengthens your position when making an offer and helps you shop within your budget.
          </p>

          <h3>Step 2: Find Your Home</h3>
          <p>
            With your pre-approval in hand, you can confidently search for properties within your price range. Your real estate agent will help you find suitable properties and negotiate offers.
          </p>

          <h3>Step 3: Make an Offer</h3>
          <p>
            When you find the right home, you'll submit a purchase offer. This includes your offer price, conditions (like financing and home inspection), and your proposed closing date.
          </p>

          <h3>Step 4: Finalize Your Mortgage</h3>
          <p>
            Once your offer is accepted, you'll work with your lender to finalize your mortgage. This includes completing a property appraisal, finalizing your down payment, and reviewing all mortgage documents before closing day.
          </p>

          <h2>Important Mortgage Terms to Know</h2>
          <ul>
            <li><strong>Equity:</strong> The difference between your home's market value and your outstanding mortgage balance</li>
            <li><strong>Prepayment Privileges:</strong> Options to pay extra toward your mortgage principal without penalty</li>
            <li><strong>Portability:</strong> The ability to transfer your existing mortgage to a new property</li>
            <li><strong>Mortgage Insurance:</strong> Required insurance when down payment is less than 20%</li>
            <li><strong>Default:</strong> Failure to make mortgage payments as agreed</li>
          </ul>

          <h2>How Much Mortgage Can You Afford?</h2>
          <p>
            Canadian lenders use two key ratios to determine how much you can borrow:
          </p>

          <h3>Gross Debt Service (GDS) Ratio</h3>
          <p>
            Your housing costs (mortgage payment, property taxes, heating, and 50% of condo fees) should not exceed 32-39% of your gross monthly income.
          </p>

          <h3>Total Debt Service (TDS) Ratio</h3>
          <p>
            Your total debt payments (housing costs plus other debts like car loans and credit cards) should not exceed 42-44% of your gross monthly income.
          </p>

          <h2>The Mortgage Stress Test</h2>
          <p>
            Since 2018, all Canadian borrowers must qualify at the greater of their contract rate plus 2% or 5.25%. This "stress test" ensures you can still afford your mortgage if interest rates rise. While it may reduce your borrowing power, it provides an important financial safety net.
          </p>

          <h2>Tips for First-Time Mortgage Applicants</h2>
          
          <ol>
            <li><strong>Check Your Credit Score:</strong> Aim for a score of 680+ for the best rates</li>
            <li><strong>Save for a Larger Down Payment:</strong> More money down means lower payments and potentially better rates</li>
            <li><strong>Reduce Your Debt:</strong> Lower your debt-to-income ratio before applying</li>
            <li><strong>Shop Around:</strong> Compare rates from multiple lenders or work with a mortgage broker</li>
            <li><strong>Get Pre-Approved:</strong> Know your budget before house hunting</li>
            <li><strong>Budget for All Costs:</strong> Remember land transfer taxes, legal fees, home inspection, and moving costs</li>
          </ol>

          <h2>Final Thoughts</h2>
          <p>
            Understanding what a mortgage is and how it works is the first step toward successful homeownership. By familiarizing yourself with mortgage basics, you'll be better equipped to make informed decisions, choose the right mortgage product, and navigate the home buying process with confidence.
          </p>
          <p>
            Remember, a mortgage is a long-term financial commitment, so take the time to understand your options, compare offers, and choose a solution that aligns with your financial goals and circumstances.
          </p>
        </div>
      }
      relatedPages={relatedPages}
      relatedTitle="Continue Learning About Mortgages"
      ctaHeadline="Ready to Apply for a Mortgage?"
      ctaDescription="Get pre-approved and discover your mortgage options with expert guidance"
      ctaPrimaryText="Get Pre-Approved Now"
      ctaPrimaryLink="/mortgage/approval/"
    />
  );
}
