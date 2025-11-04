import { Metadata } from "next";
import LandTransferTaxCalculatorComponent from "@/components/calculators/LandTransferTaxCalculatorComponent";

export const metadata: Metadata = {
  title: "Ontario Land Transfer Tax Calculator 2024 - First-Time Buyer Rebate | approvU",
  description:
    "Calculate Ontario land transfer tax with our free calculator. Includes first-time buyer rebate up to $4,000. Get accurate rates and closing cost estimates.",
};

export default function OntarioLandTransferTax() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ontario Land Transfer Tax Calculator
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Calculate your exact land transfer tax with Ontario's progressive rate
              structure and first-time buyer rebates up to $4,000.
            </p>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-20 px-4" id="calculator">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Ontario Land Transfer Tax Calculator
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get accurate calculations with first-time buyer rebates
              </p>
            </div>
            <LandTransferTaxCalculatorComponent
              defaultProvince="ontario"
              showProvinceSelector={false}
            />
          </div>
        </section>

        {/* Educational Content */}
        <section className="py-20 px-4 bg-muted">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Everything You Need to Know About Land Transfer Tax in Ontario
              </h2>
              <p className="text-muted-foreground mb-4">
                Ontario uses a progressive land transfer tax structure that increases
                with higher purchase prices. The province also offers one of Canada's
                most generous first-time buyer rebate programs, providing up to $4,000
                in savings for eligible buyers.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Ontario's Progressive Tax Structure
              </h3>
              <p className="text-muted-foreground mb-4">
                Unlike provinces with flat rates, Ontario's system means you pay
                different rates on different portions of the purchase price. For
                example, on a $500,000 home, you pay 0.5% on the first $55,000, 1% on
                the next $195,000, and 1.5% on the remaining $250,000.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                First-Time Buyer Benefits
              </h3>
              <p className="text-muted-foreground mb-4">
                Ontario's first-time buyer rebate provides up to $4,000 for homes up to
                $368,000, with a partial rebate available up to $500,000. To qualify,
                you must be a Canadian citizen or permanent resident, be at least 18
                years old, and occupy the home as your principal residence within nine
                months of closing.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                When and How to Pay
              </h3>
              <p className="text-muted-foreground">
                Land transfer tax is paid on closing day through your lawyer. The tax
                return must be filed within 30 days of registration, though most
                lawyers handle this automatically. Late filing can result in penalties
                and interest charges.
              </p>
            </div>

            <div className="bg-secondary/10 p-6 rounded-lg">
              <h4 className="font-semibold text-secondary mb-2">💡 Ontario Tax Tip</h4>
              <p className="text-sm text-muted-foreground">
                If you're buying in Toronto, you'll pay both provincial and municipal
                land transfer tax. Consider surrounding areas like Mississauga or
                Markham to avoid the additional municipal tax while still accessing the
                GTA market.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Buy in Ontario?
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
