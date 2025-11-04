import { Metadata } from "next";
import LandTransferTaxCalculatorComponent from "@/components/calculators/LandTransferTaxCalculatorComponent";

export const metadata: Metadata = {
  title: "Saskatchewan Land Transfer Tax Calculator 2024 - Low 0.3% Rate | approvU",
  description:
    "Calculate Saskatchewan's land transfer tax with our free calculator. Simple 0.3% flat rate on all property purchases.",
};

export default function SaskatchewanLandTransferTax() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Saskatchewan Land Transfer Tax Calculator
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Saskatchewan has one of Canada's lowest land transfer tax rates at just
              0.3% on all property purchases.
            </p>
          </div>
        </section>

        <section className="py-20 px-4" id="calculator">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Saskatchewan Land Transfer Tax Calculator
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Simple 0.3% flat rate calculation
              </p>
            </div>
            <LandTransferTaxCalculatorComponent
              defaultProvince="saskatchewan"
              showProvinceSelector={false}
            />
          </div>
        </section>

        <section className="py-20 px-4 bg-muted">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Saskatchewan's simple and affordable land transfer tax system
              </h2>
              <p className="text-muted-foreground mb-4">
                Saskatchewan keeps it simple with a flat 0.3% land transfer tax on all
                property purchases. This is one of the lowest rates in Canada, making
                Saskatchewan an affordable province for home buyers.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                How Much You'll Pay
              </h3>
              <p className="text-muted-foreground mb-4">
                On a $300,000 home, you'll pay just $900 in land transfer tax. Compare
                this to $4,500 in Ontario or $6,000 in BC. The low rate helps keep
                overall closing costs manageable for Saskatchewan buyers.
              </p>
            </div>

            <div className="bg-secondary/10 p-6 rounded-lg">
              <h4 className="font-semibold text-secondary mb-2">
                💡 Saskatchewan Advantage
              </h4>
              <p className="text-sm text-muted-foreground">
                Saskatchewan's 0.3% rate is the second-lowest in Canada (after
                Newfoundland at 0.4%). The simple flat rate means no complicated
                calculations or progressive brackets to worry about.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Buy in Saskatchewan?
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
                href="/mortgage/calculators/"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary border-2 border-primary rounded-lg font-semibold hover:bg-primary/5 transition"
              >
                More Calculators
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
