import { Metadata } from "next";
import LandTransferTaxCalculatorComponent from "@/components/calculators/LandTransferTaxCalculatorComponent";

export const metadata: Metadata = {
  title: "New Brunswick Land Transfer Tax Calculator 2024 - First-Time Buyer Rebate | approvU",
  description:
    "Calculate New Brunswick's land transfer tax with our free calculator. 1% flat rate with first-time buyer rebate up to $1,000.",
};

export default function NewBrunswickLandTransferTax() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              New Brunswick Land Transfer Tax Calculator
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              New Brunswick charges a competitive 1% land transfer tax with first-time
              buyer rebates up to $1,000 for qualifying purchases.
            </p>
          </div>
        </section>

        <section className="py-20 px-4" id="calculator">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                New Brunswick Land Transfer Tax Calculator
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get accurate calculations with first-time buyer rebates
              </p>
            </div>
            <LandTransferTaxCalculatorComponent
              defaultProvince="new-brunswick"
              showProvinceSelector={false}
            />
          </div>
        </section>

        <section className="py-20 px-4 bg-muted">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                New Brunswick's affordable land transfer tax system
              </h2>
              <p className="text-muted-foreground mb-4">
                New Brunswick offers one of Canada's most affordable land transfer tax
                systems, with a flat 1% rate on all purchases and meaningful rebates for
                first-time buyers entering the housing market.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                First-Time Buyer Benefits
              </h3>
              <p className="text-muted-foreground mb-4">
                New Brunswick provides a rebate of up to $1,000 for first-time home
                buyers. This rebate applies to homes valued up to $200,000, helping
                reduce the financial burden for new homeowners entering the market.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Simple Calculation
              </h3>
              <p className="text-muted-foreground">
                With a flat 1% rate, calculating your land transfer tax is
                straightforward. A $250,000 home incurs $2,500 in tax. First-time buyers
                can reduce this by $1,000 to $1,500, making New Brunswick particularly
                affordable for first-time purchasers.
              </p>
            </div>

            <div className="bg-secondary/10 p-6 rounded-lg">
              <h4 className="font-semibold text-secondary mb-2">
                💡 New Brunswick Advantage
              </h4>
              <p className="text-sm text-muted-foreground">
                New Brunswick's 1% flat rate is among Canada's lowest (after
                Saskatchewan at 0.3% and Newfoundland at 0.4%). Combined with the
                first-time buyer rebate, closing costs remain manageable for most
                purchasers.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Buy in New Brunswick?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get expert mortgage advice and competitive rates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/mortgage/approval/"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition"
              >
                Get Pre-Approved
              </a>
              <a
                href="/mortgage/first-time-buyer/"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary border-2 border-primary rounded-lg font-semibold hover:bg-primary/5 transition"
              >
                First-Time Buyer Guide
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
