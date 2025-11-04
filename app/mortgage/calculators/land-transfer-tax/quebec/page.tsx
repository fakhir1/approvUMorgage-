import { Metadata } from "next";
import LandTransferTaxCalculatorComponent from "@/components/calculators/LandTransferTaxCalculatorComponent";

export const metadata: Metadata = {
  title: "Quebec Land Transfer Tax Calculator 2024 - Welcome Tax | approvU",
  description:
    "Calculate Quebec's land transfer tax (Welcome Tax) with our free calculator. Progressive rates from 0.5% to 2% based on property value.",
};

export default function QuebecLandTransferTax() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Quebec Land Transfer Tax Calculator
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Calculate Quebec's 'Welcome Tax' (Taxe de Bienvenue) with progressive
              rates from 0.5% to 2% based on your property value.
            </p>
          </div>
        </section>

        <section className="py-20 px-4" id="calculator">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Quebec Land Transfer Tax Calculator
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get accurate Welcome Tax calculations for your Quebec home purchase
              </p>
            </div>
            <LandTransferTaxCalculatorComponent
              defaultProvince="quebec"
              showProvinceSelector={false}
            />
          </div>
        </section>

        <section className="py-20 px-4 bg-muted">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Understanding Quebec's Welcome Tax
              </h2>
              <p className="text-muted-foreground mb-4">
                Quebec's land transfer tax is officially called the "Welcome Tax" (Taxe
                de Bienvenue), administered at the municipal level. The tax uses a
                progressive structure similar to Ontario but does not currently offer
                first-time buyer rebates.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                How the Welcome Tax Works
              </h3>
              <p className="text-muted-foreground mb-4">
                The tax is calculated on the higher of the sale price or the municipal
                assessment value. Rates are progressive: 0.5% on the first $54,200, 1%
                on $54,200-$270,800, and 1.5% on amounts over $270,800. Some
                municipalities may charge up to 2% on higher amounts.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Municipal Variations
              </h3>
              <p className="text-muted-foreground">
                Each Quebec municipality sets its own rates within provincial limits,
                so rates may vary slightly by city. Montreal, Quebec City, and other
                major centers generally follow the standard progressive structure.
              </p>
            </div>

            <div className="bg-secondary/10 p-6 rounded-lg">
              <h4 className="font-semibold text-secondary mb-2">💡 Quebec Tax Tip</h4>
              <p className="text-sm text-muted-foreground">
                Unlike Ontario and BC, Quebec does not offer provincial first-time buyer
                rebates for the Welcome Tax. Budget for the full amount in your closing
                costs, typically 1-1.5% of your purchase price.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Buy in Quebec?
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
