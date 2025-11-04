import { Metadata } from "next";
import LandTransferTaxCalculatorComponent from "@/components/calculators/LandTransferTaxCalculatorComponent";

export const metadata: Metadata = {
  title: "Manitoba Land Transfer Tax Calculator 2024 - Tax-Free First $30,000 | approvU",
  description:
    "Calculate Manitoba's land transfer tax with our free calculator. First $30,000 is tax-free, progressive rates from 0.5% to 2%.",
};

export default function ManitobaLandTransferTax() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Manitoba Land Transfer Tax Calculator
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Manitoba offers a $30,000 tax-free threshold on all home purchases, with
              progressive rates from 0.5% to 2% on higher amounts.
            </p>
          </div>
        </section>

        <section className="py-20 px-4" id="calculator">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Manitoba Land Transfer Tax Calculator
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Calculate with Manitoba's $30,000 tax-free threshold
              </p>
            </div>
            <LandTransferTaxCalculatorComponent
              defaultProvince="manitoba"
              showProvinceSelector={false}
            />
          </div>
        </section>

        <section className="py-20 px-4 bg-muted">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Understanding Manitoba's unique tax-free threshold
              </h2>
              <p className="text-muted-foreground mb-4">
                Manitoba stands out by offering a $30,000 tax-free threshold on all
                property transfers. This means every buyer benefits from reduced costs,
                not just first-time purchasers.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Progressive Rate Structure
              </h3>
              <p className="text-muted-foreground mb-4">
                After the $30,000 exemption, Manitoba charges 0.5% on the next $60,000,
                1% on $90,000-$150,000, 1.5% on $150,000-$200,000, and 2% on amounts
                over $200,000. This progressive structure keeps costs reasonable for
                most buyers.
              </p>
            </div>

            <div className="bg-secondary/10 p-6 rounded-lg">
              <h4 className="font-semibold text-secondary mb-2">
                💡 Manitoba Tax Advantage
              </h4>
              <p className="text-sm text-muted-foreground">
                The $30,000 tax-free threshold saves every buyer money. On a $300,000
                home, you'll only pay tax on $270,000, reducing your total land transfer
                cost compared to provinces without this benefit.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Buy in Manitoba?
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
