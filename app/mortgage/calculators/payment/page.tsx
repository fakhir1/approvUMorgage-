"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function PaymentCalculator() {
  const [homePrice, setHomePrice] = useState("500000");
  const [downPayment, setDownPayment] = useState("50000");
  const [interestRate, setInterestRate] = useState("5.5");
  const [amortization, setAmortization] = useState("25");
  const [paymentFrequency, setPaymentFrequency] = useState("monthly");

  const calculatePayment = () => {
    const principal = parseFloat(homePrice) - parseFloat(downPayment);
    const monthlyRate = parseFloat(interestRate) / 100 / 12;
    const numPayments = parseFloat(amortization) * 12;
    
    if (principal <= 0 || monthlyRate <= 0 || numPayments <= 0) return 0;
    
    const monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                          (Math.pow(1 + monthlyRate, numPayments) - 1);
    
    const frequencies = {
      weekly: monthlyPayment * 12 / 52,
      biweekly: monthlyPayment * 12 / 26,
      monthly: monthlyPayment,
      bimonthly: monthlyPayment * 2
    };
    
    return frequencies[paymentFrequency as keyof typeof frequencies] || monthlyPayment;
  };

  const payment = calculatePayment();
  const principal = parseFloat(homePrice) - parseFloat(downPayment);
  const downPaymentPercent = (parseFloat(downPayment) / parseFloat(homePrice)) * 100;
  const needsCMHC = downPaymentPercent < 20;
  const cmhcFee = needsCMHC ? principal * 0.025 : 0; // Simplified CMHC calculation

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mortgage Payment Calculator
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Calculate your exact mortgage payments with Canadian rates and rules
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
                    Enter Your Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="homePrice" className="text-primary font-medium">
                      Home Purchase Price
                    </Label>
                    <Input
                      id="homePrice"
                      type="number"
                      value={homePrice}
                      onChange={(e) => setHomePrice(e.target.value)}
                      className="form-field mt-2"
                      placeholder="500000"
                    />
                  </div>

                  <div>
                    <Label htmlFor="downPayment" className="text-primary font-medium">
                      Down Payment ($)
                    </Label>
                    <Input
                      id="downPayment"
                      type="number"
                      value={downPayment}
                      onChange={(e) => setDownPayment(e.target.value)}
                      className="form-field mt-2"
                      placeholder="50000"
                    />
                    <p className="text-sm text-muted-foreground mt-1">
                      {downPaymentPercent.toFixed(1)}% of purchase price
                    </p>
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

                  <div>
                    <Label htmlFor="frequency" className="text-primary font-medium">
                      Payment Frequency
                    </Label>
                    <select 
                      id="frequency"
                      value={paymentFrequency}
                      onChange={(e) => setPaymentFrequency(e.target.value)}
                      className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary mt-2"
                    >
                      <option value="weekly">Weekly</option>
                      <option value="biweekly">Bi-weekly</option>
                      <option value="monthly">Monthly</option>
                      <option value="bimonthly">Bi-monthly</option>
                    </select>
                  </div>

                  <Link href="/mortgage/approval/">
                    <Button className="w-full" size="lg">
                      Get Pre-Approved with These Numbers
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Results */}
              <div className="space-y-6">
                <Card className="bg-primary text-white">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-lg font-medium mb-2 text-white/90">
                      Your {paymentFrequency} Payment
                    </h3>
                    <div className="text-4xl md:text-5xl font-bold mb-2">
                      ${payment.toLocaleString('en-CA', { maximumFractionDigits: 0 })}
                    </div>
                    <p className="text-white/80">
                      Principal & Interest Only
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-primary">Payment Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>Mortgage Amount:</span>
                      <span className="font-semibold">${principal.toLocaleString('en-CA')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Down Payment:</span>
                      <span className="font-semibold">${parseFloat(downPayment).toLocaleString('en-CA')}</span>
                    </div>
                    {needsCMHC && (
                      <div className="flex justify-between">
                        <span>CMHC Insurance:</span>
                        <span className="font-semibold">${cmhcFee.toLocaleString('en-CA')}</span>
                      </div>
                    )}
                    <div className="flex justify-between border-t pt-2">
                      <span>Total Monthly Payment:</span>
                      <span className="font-bold text-primary">${payment.toLocaleString('en-CA')}</span>
                    </div>
                  </CardContent>
                </Card>

                {needsCMHC && (
                  <Card className="bg-yellow-50 border-yellow-200">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <span className="text-yellow-500 text-xl">ℹ️</span>
                        <div>
                          <h4 className="font-semibold text-yellow-800 mb-2">
                            CMHC Insurance Required
                          </h4>
                          <p className="text-yellow-700 text-sm">
                            With less than 20% down payment, you'll need mortgage default insurance. 
                            This protects the lender and is added to your mortgage amount.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Content Section for SEO */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <h2 className="text-3xl font-bold text-primary mb-8">Complete Guide to Mortgage Payment Calculations in Canada</h2>
              
              <p className="text-lg mb-6">
                Understanding your mortgage payment is fundamental to successful homeownership in Canada. Our mortgage payment calculator provides precise calculations based on current Canadian lending standards, helping you plan your budget and make informed decisions about your home purchase or refinance.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">How Mortgage Payments Are Calculated</h3>
              <p className="mb-4">
                Your mortgage payment consists of several components: principal (the amount borrowed), interest (the cost of borrowing), and often mortgage insurance premiums if your down payment is less than 20%. In Canada, if you put down less than 20%, you'll need mortgage default insurance from CMHC, Genworth Financial, or Canada Guaranty.
              </p>

              <p className="mb-6">
                The calculation uses the mortgage amount, interest rate, and amortization period to determine your payments. Canadian mortgages are typically calculated using semi-annual compounding, which differs from the monthly compounding used in the United States. This means your actual payment may be slightly different from calculators designed for other markets.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Payment Frequency Options in Canada</h3>
              <p className="mb-4">
                Canadian borrowers have several payment frequency options that can significantly impact the total interest paid over the life of the mortgage. Monthly payments are the most common, but accelerated payment schedules can save substantial amounts in interest:
              </p>

              <ul className="list-disc pl-6 mb-6">
                <li className="mb-2"><strong>Monthly payments:</strong> 12 payments per year, easiest to budget for</li>
                <li className="mb-2"><strong>Semi-monthly:</strong> 24 payments per year, aligned with twice-monthly pay schedules</li>
                <li className="mb-2"><strong>Bi-weekly:</strong> 26 payments per year, equivalent to 13 monthly payments annually</li>
                <li className="mb-2"><strong>Weekly:</strong> 52 payments per year, fastest way to pay down your mortgage</li>
                <li className="mb-2"><strong>Accelerated bi-weekly:</strong> Paying half your monthly payment every two weeks</li>
                <li className="mb-2"><strong>Accelerated weekly:</strong> Paying a quarter of your monthly payment every week</li>
              </ul>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">CMHC Insurance Calculations</h3>
              <p className="mb-4">
                For high-ratio mortgages (those with less than 20% down payment), mortgage default insurance is mandatory in Canada. The premium is typically added to your mortgage amount and paid over the life of the loan. Insurance rates vary based on your down payment percentage:
              </p>

              <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">5.00-9.99% down payment: 4.00% premium</li>
                <li className="mb-2">10.00-14.99% down payment: 3.10% premium</li>
                <li className="mb-2">15.00-19.99% down payment: 2.80% premium</li>
              </ul>

              <p className="mb-6">
                These premiums are calculated on the mortgage amount and added to your principal, meaning you'll pay interest on the insurance premium over the life of your mortgage.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Interest Rate Considerations</h3>
              <p className="mb-4">
                Canadian mortgage rates are influenced by the Bank of Canada's overnight rate, bond yields, and lender-specific factors. Understanding how even small rate differences impact your payments is crucial. A difference of just 0.25% on a $500,000 mortgage can result in approximately $75 more per month in payments.
              </p>

              <p className="mb-6">
                Our calculator allows you to experiment with different rates to understand how rate shopping can save you money. We recommend getting quotes from multiple lenders, as rates can vary significantly between institutions.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Amortization vs. Term</h3>
              <p className="mb-4">
                It's important to understand the difference between your mortgage term and amortization period. Your term is the length of your current mortgage contract (typically 1-5 years), while your amortization is the total time it takes to pay off your mortgage completely (typically 25-30 years).
              </p>

              <p className="mb-6">
                Choosing a shorter amortization period increases your payments but saves significant interest costs. For example, reducing your amortization from 25 to 20 years on a $400,000 mortgage could save over $50,000 in interest over the life of the loan.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Additional Costs to Consider</h3>
              <p className="mb-4">
                While our payment calculator focuses on principal and interest, remember that homeownership involves additional costs that should factor into your budget planning:
              </p>

              <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Property taxes (typically 1-2% of property value annually)</li>
                <li className="mb-2">Home insurance (varies by location and coverage)</li>
                <li className="mb-2">Maintenance and repairs (budget 1-3% of home value annually)</li>
                <li className="mb-2">Utilities and heating costs</li>
                <li className="mb-2">Condo fees (if applicable)</li>
              </ul>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Using Payment Calculations for Financial Planning</h3>
              <p className="mb-4">
                Accurate payment calculations help with more than just budgeting. They're essential for understanding how different scenarios affect your financial position. Consider calculating payments for different down payment amounts, interest rates, and amortization periods to find the option that best fits your financial goals.
              </p>

              <p className="mb-6">
                Remember that the lowest payment isn't always the best choice. While a longer amortization reduces monthly payments, it significantly increases the total interest paid. Use our calculator to find the right balance between affordable monthly payments and total borrowing costs.
              </p>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-20 px-4 bg-muted">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Understanding Your Mortgage Payment
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">What's Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      Principal amount
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      Interest charges
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      CMHC insurance (if applicable)
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Additional Costs</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-orange-500">+</span>
                      Property taxes
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-orange-500">+</span>
                      Home insurance
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-orange-500">+</span>
                      Utilities & maintenance
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
              Ready to Make It Official?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get pre-approved with these numbers and start shopping for your dream home
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
