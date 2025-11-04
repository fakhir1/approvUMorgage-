import { Metadata } from "next";
import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";

export const metadata: Metadata = {
  title: "Fixed vs Variable Mortgage Rates: Which is Right for You? | approvU",
  description: "Compare fixed and variable mortgage rates in Canada. Learn the pros, cons, and when to choose each option with expert guidance for your mortgage decision.",
};

export default function FixedVsVariable() {
  const relatedPages = [
    {
      id: "1",
      title: "What is a Mortgage?",
      path: "/mortgage/basics/what-is-mortgage/",
      excerpt: "Learn the fundamentals of mortgages",
    },
    {
      id: "2",
      title: "Current Mortgage Rates",
      path: "/mortgage/rates/",
      excerpt: "Compare today's fixed and variable rates",
    },
    {
      id: "3",
      title: "Payment Calculator",
      path: "/mortgage/calculators/payment/",
      excerpt: "Compare fixed vs variable payment scenarios",
    },
  ];

  return (
    <ArticlePageTemplate
      title="Fixed vs Variable Mortgage Rates: Which is Right for You? | approvU"
      metaDescription="Compare fixed and variable mortgage rates in Canada. Learn the pros, cons, and when to choose each option with expert guidance for your mortgage decision."
      headline="Fixed vs Variable Mortgage Rates: The Complete Guide"
      excerpt="Understand the key differences between fixed and variable rate mortgages to make the best choice for your financial situation."
      author="approvU Mortgage Team"
      publishedAt={new Date("2024-12-20")}
      breadcrumbs={[
        { label: "Mortgage", href: "/mortgage/" },
        { label: "Mortgage Basics", href: "/mortgage/basics/" },
      ]}
      content={
        <div>
          <h2>Understanding Fixed vs Variable Rate Mortgages</h2>
          <p>
            One of the most important decisions you'll make when getting a mortgage is choosing between a fixed or variable interest rate. This choice affects your monthly payments, total interest costs, and financial flexibility throughout your mortgage term. Both options have distinct advantages and potential drawbacks depending on your financial situation, risk tolerance, and market conditions.
          </p>

          <h2>What is a Fixed-Rate Mortgage?</h2>
          <p>
            A fixed-rate mortgage locks in your interest rate for the entire term of your mortgage agreement (typically 1-10 years, with 5 years being most common). Your interest rate and monthly payment remain exactly the same throughout this period, regardless of what happens in the broader economy or financial markets.
          </p>

          <h3>How Fixed Rates Work</h3>
          <p>
            When you sign a fixed-rate mortgage, your lender commits to charging you the agreed-upon rate for the full term. Even if the Bank of Canada raises interest rates dramatically, your rate stays the same. This predictability is the primary appeal of fixed-rate mortgages.
          </p>

          <h3>Advantages of Fixed-Rate Mortgages</h3>
          <ul>
            <li><strong>Payment Predictability:</strong> Know exactly what you'll pay each month for the entire term</li>
            <li><strong>Protection from Rate Increases:</strong> Rising interest rates won't affect your payments</li>
            <li><strong>Easier Budgeting:</strong> Fixed costs make long-term financial planning simpler</li>
            <li><strong>Peace of Mind:</strong> No stress about market fluctuations impacting your mortgage</li>
            <li><strong>Ideal for Tight Budgets:</strong> Perfect if you can't afford payment increases</li>
          </ul>

          <h3>Disadvantages of Fixed-Rate Mortgages</h3>
          <ul>
            <li><strong>Higher Initial Rates:</strong> Fixed rates are typically 0.5-1% higher than variable rates at signing</li>
            <li><strong>Can't Benefit from Rate Drops:</strong> If rates fall, you're locked into your higher rate</li>
            <li><strong>Higher Break Penalties:</strong> Cancelling early can cost $10,000-50,000+ due to IRD penalties</li>
            <li><strong>Less Flexibility:</strong> Difficult to refinance or switch lenders mid-term without penalties</li>
          </ul>

          <h2>What is a Variable-Rate Mortgage?</h2>
          <p>
            A variable-rate mortgage has an interest rate that fluctuates based on your lender's prime rate, which moves in sync with the Bank of Canada's policy rate. When the central bank raises or lowers rates, your mortgage rate adjusts accordingly, typically within days.
          </p>

          <h3>How Variable Rates Work</h3>
          <p>
            Your variable rate is expressed as prime rate plus or minus a discount/premium. For example, "Prime - 0.50%" means if prime is 6.0%, your rate is 5.50%. If prime rises to 6.5%, your rate becomes 6.0%.
          </p>

          <h3>Types of Variable-Rate Mortgages</h3>
          <ul>
            <li><strong>Adjustable-Rate Mortgage (ARM):</strong> Payment amount changes with rate changes</li>
            <li><strong>Fixed-Payment Variable:</strong> Payment stays the same, but the principal/interest split adjusts</li>
          </ul>

          <h3>Advantages of Variable-Rate Mortgages</h3>
          <ul>
            <li><strong>Lower Initial Rates:</strong> Start with rates 0.5-1% below fixed options</li>
            <li><strong>Potential Savings:</strong> Historically save money versus fixed over 5-year terms</li>
            <li><strong>Rate Decrease Benefits:</strong> Automatically benefit when rates fall</li>
            <li><strong>Lower Break Penalties:</strong> Only 3 months' interest penalty (typically $2,000-5,000)</li>
            <li><strong>More Flexibility:</strong> Easier to refinance or switch if circumstances change</li>
            <li><strong>Conversion Options:</strong> Many allow switching to fixed rates mid-term</li>
          </ul>

          <h3>Disadvantages of Variable-Rate Mortgages</h3>
          <ul>
            <li><strong>Payment Uncertainty:</strong> Payments can increase if rates rise</li>
            <li><strong>Budgeting Challenges:</strong> Harder to predict long-term costs</li>
            <li><strong>Stress and Anxiety:</strong> Rate changes can cause financial worry</li>
            <li><strong>Risk of Higher Costs:</strong> If rates rise significantly, you'll pay more than fixed</li>
          </ul>

          <h2>Historical Performance: Fixed vs Variable</h2>
          <p>
            Historically, variable-rate mortgages have saved borrowers money about 75-90% of the time over 5-year terms. However, recent years (2022-2024) have been an exception, with rapid Bank of Canada rate increases making fixed rates retroactively cheaper.
          </p>

          <p>
            <strong>Important:</strong> Past performance doesn't guarantee future results. Economic conditions change, and what worked in the past may not apply to current circumstances.
          </p>

          <h2>Who Should Choose a Fixed-Rate Mortgage?</h2>

          <h3>You're a Good Candidate for Fixed Rates If:</h3>
          <ul>
            <li><strong>You prioritize certainty:</strong> Predictable payments are more important than potential savings</li>
            <li><strong>Your budget is tight:</strong> You can't afford payment increases without financial strain</li>
            <li><strong>You're risk-averse:</strong> Market uncertainty causes significant stress or anxiety</li>
            <li><strong>You're a first-time buyer:</strong> You're still adjusting to homeownership costs and want stability</li>
            <li><strong>Rates are at historical lows:</strong> When rates are unusually low, locking in can protect against inevitable increases</li>
            <li><strong>Economic outlook suggests rising rates:</strong> Strong economy and high inflation typically lead to rate increases</li>
            <li><strong>You plan to stay put:</strong> Breaking penalties matter less if you're confident you won't move or refinance</li>
          </ul>

          <h2>Who Should Choose a Variable-Rate Mortgage?</h2>

          <h3>You're a Good Candidate for Variable Rates If:</h3>
          <ul>
            <li><strong>You have financial flexibility:</strong> You can handle payment increases without significant hardship</li>
            <li><strong>You're comfortable with risk:</strong> Market fluctuations don't cause undue stress</li>
            <li><strong>You want to maximize savings:</strong> You're willing to accept uncertainty for potentially lower costs</li>
            <li><strong>You might move or refinance:</strong> Lower break penalties provide valuable flexibility</li>
            <li><strong>Rates are high:</strong> When rates are elevated, they're more likely to stabilize or fall</li>
            <li><strong>You want aggressive prepayment options:</strong> You plan to pay down your mortgage quickly</li>
            <li><strong>Economic outlook suggests stable or falling rates:</strong> Recession fears or controlled inflation favor variable rates</li>
          </ul>

          <h2>Hybrid Strategies to Consider</h2>

          <h3>Split/Combination Mortgage</h3>
          <p>
            Some borrowers split their mortgage between fixed and variable rates (e.g., 50% fixed, 50% variable). This provides partial protection from rate increases while still benefiting from potential variable-rate savings. It's a middle-ground approach that can reduce both risk and opportunity.
          </p>

          <h3>Variable with Conversion Option</h3>
          <p>
            Choose variable initially but ensure your mortgage allows conversion to fixed if rates start rising. This gives you the best of both worlds, though conversion is typically at current posted rates, not promotional rates.
          </p>

          <h3>Shorter Fixed Terms</h3>
          <p>
            If you're uncertain about the future, consider a shorter fixed term (1-3 years) rather than the standard 5 years. This reduces your commitment period and gives you more opportunities to reassess and adjust your strategy.
          </p>

          <h2>Making Your Decision: Key Questions to Ask</h2>

          <ol>
            <li><strong>What's your financial cushion?</strong> Could you handle a 1-2% rate increase without hardship?</li>
            <li><strong>How long do you plan to stay in the home?</strong> Shorter timelines may favor variable rates due to lower penalties</li>
            <li><strong>What's your risk tolerance?</strong> How would payment uncertainty affect your sleep and stress levels?</li>
            <li><strong>What's the rate environment?</strong> Are rates high or low compared to historical averages?</li>
            <li><strong>What's the spread?</strong> How much difference is there between fixed and variable rates today?</li>
            <li><strong>Do you have other debts?</strong> If you're already managing variable-rate debt (credit cards, LOC), fixed mortgage may provide balance</li>
          </ol>

          <h2>The Bottom Line</h2>

          <p>
            There is no universally "better" option between fixed and variable rates. The right choice depends on your specific financial situation, goals, and personality:
          </p>

          <ul>
            <li><strong>Choose fixed if:</strong> You prioritize certainty, have a tight budget, or believe rates will rise significantly</li>
            <li><strong>Choose variable if:</strong> You can handle payment fluctuations, want maximum savings potential, and value flexibility</li>
            <li><strong>Consider a hybrid if:</strong> You want some protection while maintaining some upside potential</li>
          </ul>

          <p>
            Most importantly, ensure you can handle the worst-case scenario of your chosen option. Fixed-rate borrowers should ensure they're comfortable with potentially paying more than variable. Variable-rate borrowers must be prepared for rates to rise by 2-3% and still manage payments comfortably.
          </p>

          <p>
            Remember: A mortgage is a 25-30 year journey with multiple renewal opportunities. Your initial choice doesn't lock you in forever. You'll have chances to reassess and adjust your strategy every few years. Focus on making the right decision for your current situation rather than trying to perfectly predict the future.
          </p>
        </div>
      }
      relatedPages={relatedPages}
      relatedTitle="Explore More Mortgage Topics"
      ctaHeadline="Ready to Choose Your Mortgage?"
      ctaDescription="Get personalized advice from our mortgage experts"
      ctaPrimaryText="Get Pre-Approved"
      ctaPrimaryLink="/mortgage/approval/"
    />
  );
}
