import { Metadata } from "next";
import LandTransferTaxCalculatorComponent from "@/components/calculators/LandTransferTaxCalculatorComponent";

export const metadata: Metadata = {
  title: "BC Property Transfer Tax Calculator 2024 - First-Time Buyer Rebate | approvU",
  description:
    "Calculate BC property transfer tax with our free calculator. First-time buyers can save up to $8,000. Includes luxury tax rates up to 5%.",
};

export default function BritishColumbiaLandTransferTax() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              BC Property Transfer Tax Calculator
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Calculate British Columbia's property transfer tax with rates up to 5% on
              luxury properties and first-time buyer rebates up to $8,000.
            </p>
          </div>
        </section>

        <section className="py-20 px-4" id="calculator">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                British Columbia Land Transfer Tax Calculator
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get accurate calculations with first-time buyer rebates
              </p>
            </div>
            <LandTransferTaxCalculatorComponent
              defaultProvince="british-columbia"
              showProvinceSelector={false}
            />
          </div>
        </section>

        <section className="py-20 px-4 bg-muted">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Complete guide to BC's property transfer tax
              </h2>
              <p className="text-muted-foreground mb-4">
                British Columbia's Property Transfer Tax (PTT) is known for having some
                of Canada's highest rates on luxury properties (up to 5%) while offering
                the country's most generous first-time buyer rebate program with savings
                up to $8,000.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Progressive Rate Structure
              </h3>
              <p className="text-muted-foreground mb-4">
                BC uses a four-tier progressive system that significantly increases on
                high-value properties. While most buyers pay 1-2%, luxury property
                buyers face rates up to 5% on the portion above $3 million, making BC
                one of the most expensive provinces for high-end real estate transfers.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Best First-Time Buyer Program in Canada
              </h3>
              <p className="text-muted-foreground mb-4">
                BC offers Canada's highest first-time buyer rebate of up to $8,000 on
                homes valued up to $500,000. The rebate gradually reduces between
                $500,000-$835,000. First-time buyers purchasing a newly built home may
                qualify for additional exemptions.
              </p>
            </div>

            <div className="bg-secondary/10 p-6 rounded-lg">
              <h4 className="font-semibold text-secondary mb-2">💡 BC Tax Tip</h4>
              <p className="text-sm text-muted-foreground">
                Newly built homes valued under $750,000 may qualify for a full PTT
                exemption for first-time buyers. This can save significantly more than
                the standard $8,000 rebate on qualifying properties.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Buy in BC?
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
