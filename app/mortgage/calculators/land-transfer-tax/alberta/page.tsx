import { Metadata } from "next";
import LandTransferTaxCalculatorComponent from "@/components/calculators/LandTransferTaxCalculatorComponent";

export const metadata: Metadata = {
  title: "Alberta Land Transfer Tax - No Transfer Tax Province | approvU",
  description:
    "Alberta has no land transfer tax! Learn about closing costs, title registration fees, and why Alberta is unique among Canadian provinces.",
};

export default function AlbertaLandTransferTax() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="py-20 px-4 bg-gradient-to-br from-green-600 to-green-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">🎉</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Alberta Land Transfer Tax
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Great news! Alberta has no land transfer tax, making it one of the most
              cost-effective provinces for home buyers in Canada.
            </p>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Why Alberta Doesn't Charge Land Transfer Tax
              </h2>
              <p className="text-muted-foreground mb-4">
                Alberta is one of only two Canadian provinces (along with Saskatchewan
                in most cases) that does not charge land transfer tax. This can save
                homebuyers thousands of dollars compared to other provinces.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Why No Land Transfer Tax?
              </h3>
              <p className="text-muted-foreground mb-4">
                Alberta has chosen to fund provincial services through other means,
                including natural resource revenues and property taxes. This policy makes
                Alberta particularly attractive for real estate investment and home
                ownership.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                What You Still Need to Pay
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  • <strong>Title Registration Fee:</strong> Approximately $50-$300
                </li>
                <li>
                  • <strong>Mortgage Registration Fee:</strong> Approximately $50-$300
                </li>
                <li>
                  • <strong>Legal Fees:</strong> $800-$1,500 for your real estate lawyer
                </li>
                <li>
                  • <strong>Title Insurance:</strong> $200-$400 (one-time premium)
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Savings Comparison
              </h3>
              <p className="text-muted-foreground mb-4">
                The savings are substantial. A $500,000 home purchase would incur
                approximately $6,475 in land transfer tax in Ontario, $8,000 in BC, or
                $16,800 in Toronto. In Alberta, you save this entire amount.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">
                🎉 Alberta Advantage
              </h4>
              <p className="text-sm text-green-700">
                On a $500,000 home, Alberta buyers save $6,000-$17,000 in land transfer
                taxes compared to other provinces. These savings can be put toward your
                down payment, renovations, or furnishing your new home.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-muted">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Buy in Alberta?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Take advantage of Alberta's no land transfer tax policy
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
