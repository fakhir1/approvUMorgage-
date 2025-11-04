import { Metadata } from "next";
import LandTransferTaxCalculatorComponent from "@/components/calculators/LandTransferTaxCalculatorComponent";

export const metadata: Metadata = {
  title: "PEI Land Transfer Tax Calculator 2024 - 1% Flat Rate | approvU",
  description:
    "Calculate Prince Edward Island's land transfer tax with our free calculator. Simple 1% flat rate on all property purchases.",
};

export default function PrinceEdwardIslandLandTransferTax() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              PEI Land Transfer Tax Calculator
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Prince Edward Island charges a simple 1% land transfer tax on all property
              purchases with no complex brackets or thresholds.
            </p>
          </div>
        </section>

        <section className="py-20 px-4" id="calculator">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Prince Edward Island Land Transfer Tax Calculator
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Simple 1% flat rate calculation
              </p>
            </div>
            <LandTransferTaxCalculatorComponent
              defaultProvince="prince-edward-island"
              showProvinceSelector={false}
            />
          </div>
        </section>

        <section className="py-20 px-4 bg-muted">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Prince Edward Island's straightforward land transfer tax
              </h2>
              <p className="text-muted-foreground mb-4">
                Prince Edward Island keeps land transfer tax simple with a flat 1% rate
                on all property purchases. While the province doesn't currently offer
                first-time buyer rebates, the low rate and affordable housing market keep
                total costs reasonable.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Simple and Predictable
              </h3>
              <p className="text-muted-foreground mb-4">
                With PEI's flat 1% rate, calculating your land transfer tax is
                straightforward. A $200,000 home costs $2,000 in transfer tax, while a
                $300,000 home costs $3,000. No progressive brackets or complicated
                formulas to worry about.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Affordable Island Living
              </h3>
              <p className="text-muted-foreground">
                PEI's relatively affordable housing market combined with the low 1%
                transfer tax makes home ownership accessible. The island's welcoming
                community and quality of life continue to attract new residents from
                across Canada.
              </p>
            </div>

            <div className="bg-secondary/10 p-6 rounded-lg">
              <h4 className="font-semibold text-secondary mb-2">💡 PEI Tax Tip</h4>
              <p className="text-sm text-muted-foreground">
                While PEI doesn't offer land transfer tax rebates, the province's low
                property prices mean total transfer tax costs are often lower than in
                larger provinces despite similar rates. Budget 1% of your purchase price
                for closing costs.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Buy in PEI?
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
