import { Metadata } from "next";
import LandTransferTaxCalculatorComponent from "@/components/calculators/LandTransferTaxCalculatorComponent";

export const metadata: Metadata = {
  title: "Nova Scotia Land Transfer Tax Calculator 2024 - First-Time Buyer Rebate | approvU",
  description:
    "Calculate Nova Scotia's land transfer tax with our free calculator. 1.5% flat rate with first-time buyer rebate up to $1,500.",
};

export default function NovaScotiaLandTransferTax() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nova Scotia Land Transfer Tax Calculator
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Nova Scotia charges a flat 1.5% land transfer tax with first-time buyer
              rebates up to $1,500 for qualifying purchases.
            </p>
          </div>
        </section>

        <section className="py-20 px-4" id="calculator">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Nova Scotia Land Transfer Tax Calculator
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get accurate calculations with first-time buyer rebates
              </p>
            </div>
            <LandTransferTaxCalculatorComponent
              defaultProvince="nova-scotia"
              showProvinceSelector={false}
            />
          </div>
        </section>

        <section className="py-20 px-4 bg-muted">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Understanding Nova Scotia's flat rate tax system
              </h2>
              <p className="text-muted-foreground mb-4">
                Nova Scotia uses a simple flat rate system, charging 1.5% on all
                property purchases regardless of value. This makes calculations
                straightforward while offering meaningful rebates for first-time buyers.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                First-Time Buyer Rebate
              </h3>
              <p className="text-muted-foreground mb-4">
                Nova Scotia offers a rebate of up to $1,500 for first-time home buyers
                purchasing a principal residence. The rebate applies to homes up to
                $200,000, with full benefits available on qualifying purchases.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                How Much You'll Pay
              </h3>
              <p className="text-muted-foreground">
                On a $300,000 home, you'll pay $4,500 in land transfer tax. First-time
                buyers can reduce this by up to $1,500, bringing the cost down to
                $3,000. The flat rate makes it easy to budget for closing costs.
              </p>
            </div>

            <div className="bg-secondary/10 p-6 rounded-lg">
              <h4 className="font-semibold text-secondary mb-2">
                💡 Nova Scotia Tax Tip
              </h4>
              <p className="text-sm text-muted-foreground">
                Nova Scotia's 1.5% flat rate is higher than some provinces but simpler
                than progressive systems. First-time buyers should ensure they claim the
                $1,500 rebate to maximize savings on their home purchase.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Buy in Nova Scotia?
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
