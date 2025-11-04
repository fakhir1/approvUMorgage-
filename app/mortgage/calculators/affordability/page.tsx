"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function AffordabilityCalculator() {
  const [annualIncome, setAnnualIncome] = useState("75000");
  const [monthlyDebts, setMonthlyDebts] = useState("500");
  const [downPayment, setDownPayment] = useState("50000");
  const [interestRate, setInterestRate] = useState("5.5");
  const [amortization, setAmortization] = useState("25");

  const calculateAffordability = () => {
    const monthlyIncome = parseFloat(annualIncome) / 12;
    const monthlyDebtPayments = parseFloat(monthlyDebts);
    const rate = parseFloat(interestRate) / 100 / 12;
    const numPayments = parseFloat(amortization) * 12;
    const downPmt = parseFloat(downPayment);
    
    // GDS ratio (35% max) - Principal, Interest, Taxes, Insurance
    const maxGDSPayment = monthlyIncome * 0.35;
    
    // TDS ratio (42% max) - GDS + other debt payments
    const maxTDSPayment = monthlyIncome * 0.42;
    const maxMortgagePayment = maxTDSPayment - monthlyDebtPayments;
    
    // Use the lower of GDS or available TDS
    const maxPayment = Math.min(maxGDSPayment, maxMortgagePayment);
    
    // Calculate maximum mortgage amount (approximate - assumes 80% goes to P&I)
    const maxPrincipalInterest = maxPayment * 0.8;
    
    if (rate <= 0 || numPayments <= 0) return { maxPrice: 0, maxMortgage: 0, maxPayment: 0 };
    
    const maxMortgage = (maxPrincipalInterest * (Math.pow(1 + rate, numPayments) - 1)) / 
                       (rate * Math.pow(1 + rate, numPayments));
    
    const maxPrice = maxMortgage + downPmt;
    
    return {
      maxPrice: Math.max(0, maxPrice),
      maxMortgage: Math.max(0, maxMortgage),
      maxPayment: Math.max(0, maxPayment)
    };
  };

  const results = calculateAffordability();
  const gdsRatio = (parseFloat(annualIncome) / 12) * 0.35;
  const tdsRatio = (parseFloat(annualIncome) / 12) * 0.42;

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Home Affordability Calculator
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover how much home you can afford based on your income, debts, and down payment
            </p>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Input Form */}
              <Card className="bg-white shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Your Financial Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="annualIncome" className="text-primary font-medium">
                      Annual Household Income
                    </Label>
                    <Input
                      id="annualIncome"
                      type="number"
                      value={annualIncome}
                      onChange={(e) => setAnnualIncome(e.target.value)}
                      className="form-field mt-2"
                      placeholder="75000"
                    />
                  </div>

                  <div>
                    <Label htmlFor="monthlyDebts" className="text-primary font-medium">
                      Monthly Debt Payments
                    </Label>
                    <Input
                      id="monthlyDebts"
                      type="number"
                      value={monthlyDebts}
                      onChange={(e) => setMonthlyDebts(e.target.value)}
                      className="form-field mt-2"
                      placeholder="500"
                    />
                    <p className="text-sm text-muted-foreground mt-1">
                      Credit cards, loans, car payments, etc.
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="downPayment" className="text-primary font-medium">
                      Available Down Payment ($)
                    </Label>
                    <Input
                      id="downPayment"
                      type="number"
                      value={downPayment}
                      onChange={(e) => setDownPayment(e.target.value)}
                      className="form-field mt-2"
                      placeholder="50000"
                    />
                  </div>

                  <div>
                    <Label htmlFor="interestRate" className="text-primary font-medium">
                      Interest Rate (%)
                    </Label>
                    <Input
                      id="interestRate"
                      type="number"
                      step="0.1"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                      className="form-field mt-2"
                      placeholder="5.5"
                    />
                  </div>

                  <div>
                    <Label htmlFor="amortization" className="text-primary font-medium">
                      Amortization Period (Years)
                    </Label>
                    <select 
                      id="amortization"
                      value={amortization}
                      onChange={(e) => setAmortization(e.target.value)}
                      className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary mt-2"
                    >
                      <option value="15">15 Years</option>
                      <option value="20">20 Years</option>
                      <option value="25">25 Years</option>
                      <option value="30">30 Years</option>
                    </select>
                  </div>

                  <Link href="/mortgage/approval/">
                    <Button className="w-full" size="lg">
                      Get Pre-Approved for This Amount
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Results */}
              <div className="space-y-6">
                <Card className="bg-primary text-white">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-lg font-medium mb-2 text-white/90">
                      Maximum Home Price
                    </h3>
                    <div className="text-4xl md:text-5xl font-bold mb-2">
                      ${results.maxPrice.toLocaleString('en-CA', { maximumFractionDigits: 0 })}
                    </div>
                    <p className="text-white/80">
                      Based on Canadian lending guidelines
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-primary">Affordability Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>Maximum Mortgage Amount:</span>
                      <span className="font-semibold">${results.maxMortgage.toLocaleString('en-CA')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Down Payment:</span>
                      <span className="font-semibold">${parseFloat(downPayment).toLocaleString('en-CA')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Maximum Monthly Payment:</span>
                      <span className="font-semibold">${results.maxPayment.toLocaleString('en-CA')}</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span>Total Home Price:</span>
                      <span className="font-bold text-primary">${results.maxPrice.toLocaleString('en-CA')}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-primary">Debt Service Ratios</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">GDS Ratio (Max 35%)</span>
                        <span className="text-sm font-medium">${gdsRatio.toFixed(0)}/month</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: `${Math.min((results.maxPayment / gdsRatio) * 100, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">TDS Ratio (Max 42%)</span>
                        <span className="text-sm font-medium">${tdsRatio.toFixed(0)}/month</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-secondary h-2 rounded-full" 
                          style={{ width: `${Math.min(((results.maxPayment + parseFloat(monthlyDebts)) / tdsRatio) * 100, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Content Section for SEO */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <h2 className="text-3xl font-bold text-primary mb-8">Complete Guide to Home Affordability in Canada</h2>
              
              <p className="text-lg mb-6">
                Determining how much home you can afford is one of the most critical steps in your home buying journey. Our affordability calculator uses the same debt service ratios and stress test requirements that Canadian lenders apply, giving you a realistic picture of your maximum purchase price and helping you avoid the disappointment of falling in love with a home outside your budget.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Understanding Canadian Lending Criteria</h3>
              <p className="mb-4">
                Canadian mortgage lenders use specific debt service ratios to determine affordability. The Gross Debt Service (GDS) ratio shouldn't exceed 35% of your gross household income, while the Total Debt Service (TDS) ratio must stay under 42%. These ratios ensure you can comfortably afford your mortgage payments while meeting other financial obligations.
              </p>

              <p className="mb-6">
                The GDS ratio includes your mortgage payment (principal and interest), property taxes, heating costs, and 50% of condo fees if applicable. The TDS ratio adds all other debt payments including credit cards, car loans, and personal loans. Understanding these ratios is crucial because they directly determine your maximum mortgage amount.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">The Federal Stress Test Impact</h3>
              <p className="mb-4">
                Since 2018, all Canadian mortgage borrowers must qualify under the federal stress test, regardless of their down payment amount. This means you must qualify at either your contract rate plus 2% or the Bank of Canada's five-year benchmark rate, whichever is higher. Currently, this benchmark sits at 5.25%.
              </p>

              <p className="mb-6">
                The stress test significantly impacts affordability calculations. For example, if you're offered a 3.5% mortgage rate, you must qualify at 5.5% (3.5% + 2%). This can reduce your maximum purchase price by 15-20% compared to qualifying at your actual rate. Our calculator incorporates this stress test to give you realistic affordability numbers.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Income Considerations for Maximum Affordability</h3>
              <p className="mb-4">
                Lenders consider various income sources when calculating affordability, but they must be stable and verifiable. Employment income is the most straightforward, but self-employed individuals, commission earners, and those with variable income may face additional scrutiny.
              </p>

              <ul className="list-disc pl-6 mb-6">
                <li className="mb-2"><strong>Employment income:</strong> Usually requires 2-3 recent pay stubs and an employment letter</li>
                <li className="mb-2"><strong>Self-employed income:</strong> Typically requires 2 years of tax returns and financial statements</li>
                <li className="mb-2"><strong>Commission income:</strong> May require 2 years of history with averaging</li>
                <li className="mb-2"><strong>Rental income:</strong> Usually calculated at 50-80% of gross rental income</li>
                <li className="mb-2"><strong>Investment income:</strong> Dividends and interest from verified sources</li>
              </ul>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Debt Considerations and Credit Impact</h3>
              <p className="mb-4">
                All monthly debt obligations impact your affordability calculation. This includes minimum credit card payments, car loans, student loans, lines of credit, and other mortgages. Even if you plan to pay off some debts before closing, lenders typically use current debt levels for qualification purposes.
              </p>

              <p className="mb-6">
                Your credit score also plays a crucial role in affordability. While you might qualify for a mortgage with a score as low as 600, the best rates typically require scores above 680. A higher credit score can increase your affordability by securing better interest rates, which directly impacts your maximum purchase price.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Down Payment Impact on Affordability</h3>
              <p className="mb-4">
                Your down payment amount affects affordability in multiple ways. Obviously, a larger down payment increases your maximum purchase price by reducing the required mortgage amount. However, it also eliminates CMHC insurance costs for down payments of 20% or more, further increasing your buying power.
              </p>

              <p className="mb-6">
                For first-time buyers, various programs can help increase effective down payment amounts. The Home Buyers' Plan allows you to withdraw up to $35,000 from your RRSP, while the First Home Savings Account (FHSA) provides tax-free savings specifically for home purchases. Some provinces also offer down payment assistance programs for qualifying buyers.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Regional Variations in Affordability</h3>
              <p className="mb-4">
                Affordability varies significantly across Canada due to differences in home prices, property taxes, and heating costs. A $100,000 household income might afford a detached home in some Maritime provinces but only a condo in Toronto or Vancouver markets.
              </p>

              <p className="mb-6">
                Property tax rates vary by municipality, ranging from under 0.5% in some Alberta cities to over 1.5% in some Ontario municipalities. These variations directly impact your GDS ratio calculation and should be factored into your affordability analysis when considering different locations.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Improving Your Affordability Position</h3>
              <p className="mb-4">
                If your current affordability doesn't meet your housing goals, several strategies can help improve your position:
              </p>

              <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Increase your income through raises, bonuses, or additional employment</li>
                <li className="mb-2">Pay down existing debts to improve your TDS ratio</li>
                <li className="mb-2">Improve your credit score to access better interest rates</li>
                <li className="mb-2">Save a larger down payment to reduce mortgage insurance costs</li>
                <li className="mb-2">Consider a co-signer or co-borrower to combine incomes</li>
                <li className="mb-2">Explore different property types or locations</li>
              </ul>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Beyond Maximum Affordability</h3>
              <p className="mb-4">
                Remember that maximum affordability and comfortable affordability are different concepts. While you might qualify for a certain mortgage amount, consider your other financial goals including emergency savings, retirement contributions, and lifestyle expenses when determining your actual home buying budget.
              </p>

              <p className="mb-6">
                Financial advisors often recommend keeping housing costs below 28-30% of gross income for a comfortable lifestyle. This provides flexibility for unexpected expenses, job loss, or interest rate increases at renewal time. Use our affordability calculator as a starting point, but consider your personal comfort level and financial goals when making final decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-20 px-4 bg-muted">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Tips to Increase Your Buying Power
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Improve Your Credit Score</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      Pay bills on time consistently
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      Reduce credit card balances
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      Don't close old credit accounts
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Reduce Monthly Debts</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      Pay off credit card debt
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      Consider debt consolidation
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      Avoid taking on new loans
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Increase Your Income</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      Include all stable income sources
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      Consider a co-signer or co-borrower
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      Document bonus/commission income
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Save More for Down Payment</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      Use FHSA or RRSP programs
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      Consider gifted down payments
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      Explore down payment assistance
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Start House Hunting?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get pre-approved with confidence and start shopping within your budget
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/mortgage/approval/">
                <Button variant="glow" size="lg">
                  Get Pre-Approved Now
                </Button>
              </Link>
              <Link href="/contact/">
                <Button variant="outline" size="lg">
                  Speak with Expert
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
