"use client";

import LandTransferTaxCalculatorComponent from "@/components/calculators/LandTransferTaxCalculatorComponent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandTransferTaxHub() {
  const provinces = [
    {
      name: "Ontario",
      url: "/mortgage/calculators/land-transfer-tax/ontario/",
      icon: "🍁",
      hasRebate: true,
    },
    {
      name: "Toronto",
      url: "/mortgage/calculators/land-transfer-tax/toronto/",
      icon: "🏙️",
      hasRebate: true,
      note: "Municipal Tax",
    },
    {
      name: "British Columbia",
      url: "/mortgage/calculators/land-transfer-tax/british-columbia/",
      icon: "🏔️",
      hasRebate: true,
    },
    {
      name: "Quebec",
      url: "/mortgage/calculators/land-transfer-tax/quebec/",
      icon: "⚜️",
      hasRebate: false,
    },
    {
      name: "Alberta",
      url: "/mortgage/calculators/land-transfer-tax/alberta/",
      icon: "🛢️",
      hasRebate: false,
      note: "No Tax",
    },
    {
      name: "Manitoba",
      url: "/mortgage/calculators/land-transfer-tax/manitoba/",
      icon: "🌾",
      hasRebate: false,
    },
    {
      name: "Saskatchewan",
      url: "/mortgage/calculators/land-transfer-tax/saskatchewan/",
      icon: "🌾",
      hasRebate: false,
    },
    {
      name: "Nova Scotia",
      url: "/mortgage/calculators/land-transfer-tax/nova-scotia/",
      icon: "🦞",
      hasRebate: true,
    },
    {
      name: "New Brunswick",
      url: "/mortgage/calculators/land-transfer-tax/new-brunswick/",
      icon: "🦞",
      hasRebate: true,
    },
    {
      name: "Prince Edward Island",
      url: "/mortgage/calculators/land-transfer-tax/prince-edward-island/",
      icon: "🥔",
      hasRebate: false,
    },
    {
      name: "Newfoundland",
      url: "/mortgage/calculators/land-transfer-tax/newfoundland/",
      icon: "🐟",
      hasRebate: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Canadian Land Transfer Tax Calculator
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Calculate your exact land transfer tax for any Canadian province. Get
              accurate estimates with first-time buyer rebates and closing costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={() =>
                  document
                    .getElementById("calculator")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Calculate Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white hover:bg-white/20"
                onClick={() => (window.location.href = "/mortgage/approval/")}
              >
                Get Pre-Approved
              </Button>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-20 px-4" id="calculator">
          <div className="max-w-6xl mx-auto">
            <LandTransferTaxCalculatorComponent />
          </div>
        </section>

        {/* Province Selection */}
        <section className="py-20 px-4 bg-muted">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Calculate by Province
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Select your province for detailed tax calculations and local rebate
                information
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {provinces.map((province) => (
                <Card key={province.name} className="hover:shadow-lg transition">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>
                        {province.icon} {province.name}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-center">
                      {province.hasRebate ? (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-secondary/20 text-secondary">
                          ✓ First-Time Buyer Rebate
                        </span>
                      ) : province.note === "No Tax" ? (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                          🎉 No Transfer Tax
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-muted text-muted-foreground">
                          Standard Rate
                        </span>
                      )}
                    </div>
                    <Button
                      className="w-full"
                      onClick={() => (window.location.href = province.url)}
                    >
                      Calculate for {province.name}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Educational Content */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              Understanding Land Transfer Tax in Canada
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  What is Land Transfer Tax?
                </h3>
                <p className="mb-4 text-muted-foreground">
                  Land transfer tax is a one-time fee paid when purchasing real
                  estate in Canada. The tax is calculated as a percentage of the
                  property's purchase price and varies significantly between
                  provinces and municipalities.
                </p>
                <p className="mb-4 text-muted-foreground">
                  Most provinces use a progressive tax structure, meaning the rate
                  increases with higher purchase prices. Some provinces like Alberta
                  have no land transfer tax, while others like Ontario and BC have
                  substantial rates.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  First-Time Buyer Rebates
                </h3>
                <p className="mb-4 text-muted-foreground">
                  Many provinces offer rebates for first-time home buyers to reduce
                  the financial burden. These rebates can save thousands of dollars
                  but often have eligibility requirements and maximum home price
                  limits.
                </p>
                <p className="mb-4 text-muted-foreground">
                  Toronto is unique in offering both provincial and municipal
                  rebates, potentially saving first-time buyers over $8,000 on
                  qualifying purchases.
                </p>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Provincial Tax Summary
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Highest Rates:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Toronto: Up to 5% (Provincial + Municipal)</li>
                    <li>• Ontario: Up to 2.5%</li>
                    <li>• BC: Up to 5% (luxury properties)</li>
                    <li>• Quebec: Up to 2%</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Best Rebates:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Toronto: Up to $8,475 combined</li>
                    <li>• BC: Up to $8,000</li>
                    <li>• Ontario: Up to $4,000</li>
                    <li>• Nova Scotia: Up to $1,500</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-primary mb-4">
              When and How to Pay
            </h3>
            <p className="mb-4 text-muted-foreground">
              Land transfer tax is due on the closing date of your home purchase. Your
              real estate lawyer will typically handle the payment and filing on your
              behalf, including it in the total closing costs. The payment comes from
              your down payment funds and must be available on closing day.
            </p>

            <div className="bg-secondary/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-secondary mb-4">
                💡 Tax Saving Tips
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  • <strong>First-time buyers:</strong> Always claim available rebates
                  (can save $1,000-$8,000)
                </li>
                <li>
                  • <strong>Consider neighboring cities:</strong> Municipal taxes can
                  double costs in Toronto
                </li>
                <li>
                  • <strong>Budget early:</strong> Include land transfer tax in your
                  closing costs estimate
                </li>
                <li>
                  • <strong>Alberta & Saskatchewan:</strong> Consider these provinces
                  with minimal/no tax
                </li>
                <li>
                  • <strong>Pre-approval helps:</strong> Know your total costs before
                  house hunting
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-primary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Buy Your Home?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Get expert guidance and competitive mortgage rates from our team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => (window.location.href = "/mortgage/approval/")}
              >
                Get Pre-Approved
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white hover:bg-white/20"
                onClick={() =>
                  (window.location.href = "/mortgage/first-time-buyer/")
                }
              >
                First-Time Buyer Guide
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
