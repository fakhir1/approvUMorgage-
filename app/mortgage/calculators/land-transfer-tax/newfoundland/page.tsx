import { Metadata } from "next";
import LandTransferTaxCalculatorComponent from "@/components/calculators/LandTransferTaxCalculatorComponent";

export const metadata: Metadata = {
  title: "Newfoundland and Labrador Land Transfer Tax Calculator 2024 - Low 0.4% Rate | approvU",
  description:
    "Calculate Newfoundland and Labrador's land transfer tax with our free calculator. Canada's lowest rate at just 0.4%.",
};

export default function NewfoundlandLandTransferTax() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">🎉</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Newfoundland & Labrador Land Transfer Tax Calculator
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Newfoundland and Labrador has Canada's lowest land transfer tax at just
              0.4% on all property purchases.
            </p>
          </div>
        </section>

        <section className="py-20 px-4" id="calculator">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Newfoundland & Labrador Land Transfer Tax Calculator
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Canada's lowest land transfer tax rate
              </p>
            </div>
            <LandTransferTaxCalculatorComponent
              defaultProvince="newfoundland"
              showProvinceSelector={false}
            />
          </div>
        </section>

        <section className="py-20 px-4 bg-muted">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Understanding Canada's most affordable land transfer tax
              </h2>
              <p className="text-muted-foreground mb-4">
                Newfoundland and Labrador offers Canada's lowest land transfer tax at
                just 0.4% on all property transfers. This makes it the most affordable
                province for land transfer costs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Canada's Lowest Rate
              </h3>
              <p className="text-muted-foreground mb-4">
                At 0.4%, Newfoundland and Labrador's land transfer tax is significantly
                lower than any other province. A $200,000 home incurs only $800 in
                transfer tax, compared to $2,000 in New Brunswick, $3,000 in Nova Scotia,
                or $6,000+ in Ontario.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                No First-Time Buyer Programs
              </h3>
              <p className="text-muted-foreground mb-4">
                While the province doesn't offer specific first-time buyer rebates for
                land transfer tax, the exceptionally low rate means the absolute cost is
                minimal even without rebates. The tax savings compared to other provinces
                can exceed $5,000 on typical purchases.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Economic Opportunities
              </h3>
              <p className="text-muted-foreground">
                Combined with affordable housing prices and low transfer taxes,
                Newfoundland and Labrador offers excellent value for homebuyers. The
                province's growing economy and quality of life make it an attractive
                option for those looking to establish roots in Atlantic Canada.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">
                🎉 Newfoundland Advantage
              </h4>
              <p className="text-sm text-green-700">
                On a $300,000 home, Newfoundland buyers pay only $1,200 in land transfer
                tax - saving $2,800 compared to Nova Scotia, $4,500 compared to Ontario,
                and $7,800 compared to Toronto. These are substantial savings that can go
                toward your down payment or renovations.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Buy in Newfoundland & Labrador?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Take advantage of Canada's lowest land transfer tax
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
