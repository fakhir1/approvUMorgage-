import { Metadata } from "next";
import DownPaymentCalculatorComponent from "@/components/calculators/DownPaymentCalculatorComponent";

export const metadata: Metadata = {
  title: "Down Payment Calculator - Canadian Home Down Payment Requirements | approvU",
  description:
    "Calculate exact down payment requirements for Canadian homes. Includes CMHC insurance costs, first-time buyer programs, and minimum down payment by price.",
};

export default function DownPaymentCalculator() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Down Payment Calculator
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Calculate exact down payment requirements for Canadian homes
            </p>
          </div>
        </section>

        {/* Calculator Component */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <DownPaymentCalculatorComponent />
          </div>
        </section>

        {/* Educational Content */}
        <section className="py-20 px-4 bg-muted">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8">
              Understanding Down Payments in Canada
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Minimum Down Payment Rules
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• <strong>Under $500,000:</strong> 5% minimum down payment</li>
                  <li>• <strong>$500,000 - $999,999:</strong> 5% on first $500K, 10% on remainder</li>
                  <li>• <strong>$1,000,000+:</strong> 20% minimum down payment (no CMHC insurance available)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  CMHC Insurance
                </h3>
                <p className="text-muted-foreground mb-4">
                  If you put down less than 20%, you'll need CMHC mortgage default insurance. The premium is calculated as a percentage of your mortgage amount and can be added to your mortgage or paid upfront.
                </p>
                <p className="text-muted-foreground">
                  <strong>Premium rates range from 0.6% to 4%</strong> depending on your down payment percentage.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">
                First-Time Home Buyer Programs
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Home Buyers' Plan (HBP)</h4>
                  <p className="text-sm text-muted-foreground">
                    Withdraw up to $60,000 from your RRSP tax-free to use as a down payment. Must be repaid over 15 years.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">First Home Savings Account (FHSA)</h4>
                  <p className="text-sm text-muted-foreground">
                    Save up to $40,000 tax-free for your first home. Contributions are tax-deductible and withdrawals are tax-free.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Land Transfer Tax Rebate</h4>
                  <p className="text-sm text-muted-foreground">
                    Many provinces offer land transfer tax rebates for first-time buyers, saving thousands in closing costs.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">GST/HST New Housing Rebate</h4>
                  <p className="text-sm text-muted-foreground">
                    Get a partial rebate of GST/HST paid on new home construction (up to $30,000 on qualifying purchases).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-secondary mb-4">
                💡 Down Payment Tips
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• <strong>Save for 20%</strong> to avoid CMHC insurance premiums and reduce monthly payments</li>
                <li>• <strong>Gift funds are allowed</strong> from immediate family members (requires gift letter)</li>
                <li>• <strong>Consider closing costs</strong> – budget an additional 1.5-4% of purchase price</li>
                <li>• <strong>Pre-approval helps</strong> – know exactly how much you need to save</li>
                <li>• <strong>Automate savings</strong> – set up regular transfers to a dedicated down payment account</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Start Your Home Buying Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get expert mortgage advice and find the best rates for your situation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/mortgage/approval/"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition"
              >
                Get Pre-Approved
              </a>
              <a
                href="/mortgage/calculators/land-transfer-tax/"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary border-2 border-primary rounded-lg font-semibold hover:bg-primary/5 transition"
              >
                Calculate Land Transfer Tax
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
