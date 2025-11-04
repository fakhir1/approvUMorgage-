"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

export default function DownPaymentCalculator() {
  const [homePrice, setHomePrice] = useState("500000");
  const [downPayment, setDownPayment] = useState("50000");
  const [interestRate, setInterestRate] = useState("5.5");

  const calculateDownPayment = () => {
    const price = parseFloat(homePrice) || 0;
    const down = parseFloat(downPayment) || 0;
    const rate = parseFloat(interestRate) / 100 / 12;

    // Canadian down payment rules
    let minimumDown = 0;
    if (price <= 500000) {
      minimumDown = price * 0.05; // 5% for homes up to $500k
    } else if (price <= 1000000) {
      // 5% on first $500k, 10% on remainder
      minimumDown = 500000 * 0.05 + (price - 500000) * 0.1;
    } else {
      // 20% minimum for homes over $1M
      minimumDown = price * 0.2;
    }

    const downPaymentPercent = (down / price) * 100;
    const loanAmount = price - down;

    // CMHC insurance (required if down payment < 20%)
    let cmhcInsurance = 0;
    let cmhcRate = 0;

    if (downPaymentPercent < 20 && price < 1000000) {
      // CMHC insurance rates (2024)
      if (downPaymentPercent >= 15 && downPaymentPercent < 20) {
        cmhcRate = 2.8;
      } else if (downPaymentPercent >= 10 && downPaymentPercent < 15) {
        cmhcRate = 3.1;
      } else if (downPaymentPercent >= 5 && downPaymentPercent < 10) {
        cmhcRate = 4.0;
      } else {
        cmhcRate = 0; // Below minimum
      }
      cmhcInsurance = loanAmount * (cmhcRate / 100);
    }

    const totalMortgage = loanAmount + cmhcInsurance;
    const monthlyPayment =
      totalMortgage > 0
        ? (totalMortgage * rate * Math.pow(1 + rate, 300)) / (Math.pow(1 + rate, 300) - 1)
        : 0;

    // Compare different down payment scenarios
    const scenarios = [
      { percent: 5, label: "Minimum (5%)" },
      { percent: 10, label: "10%" },
      { percent: 15, label: "15%" },
      { percent: 20, label: "20% (No CMHC)" },
      { percent: 25, label: "25%" },
    ];

    const comparisons = scenarios
      .filter((s) => {
        // Filter valid scenarios based on home price
        if (price > 1000000) return s.percent >= 20;
        return true;
      })
      .map((scenario) => {
        const scenarioDown = price * (scenario.percent / 100);
        const scenarioLoan = price - scenarioDown;

        let scenarioCMHC = 0;
        let scenarioCMHCRate = 0;

        if (scenario.percent < 20 && price < 1000000) {
          if (scenario.percent >= 15) scenarioCMHCRate = 2.8;
          else if (scenario.percent >= 10) scenarioCMHCRate = 3.1;
          else scenarioCMHCRate = 4.0;
          scenarioCMHC = scenarioLoan * (scenarioCMHCRate / 100);
        }

        const scenarioTotalMortgage = scenarioLoan + scenarioCMHC;
        const scenarioMonthlyPayment =
          scenarioTotalMortgage > 0
            ? (scenarioTotalMortgage * rate * Math.pow(1 + rate, 300)) /
              (Math.pow(1 + rate, 300) - 1)
            : 0;

        return {
          ...scenario,
          downPayment: scenarioDown,
          loanAmount: scenarioLoan,
          cmhcInsurance: scenarioCMHC,
          totalMortgage: scenarioTotalMortgage,
          monthlyPayment: scenarioMonthlyPayment,
        };
      });

    return {
      homePrice: price,
      downPayment: down,
      downPaymentPercent,
      minimumDown,
      meetsMinimum: down >= minimumDown,
      loanAmount,
      cmhcInsurance,
      cmhcRate,
      totalMortgage,
      monthlyPayment,
      requiresCMHC: downPaymentPercent < 20 && price < 1000000,
      isHighRatio: downPaymentPercent < 20,
      comparisons,
    };
  };

  const result = calculateDownPayment();

  return (
    <div className="w-full space-y-8">
      {/* Input Section */}
      <Card className="bg-white shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">Down Payment Calculator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <Label htmlFor="homePrice" className="text-primary font-medium">
                Home Price ($)
              </Label>
              <Input
                id="homePrice"
                type="number"
                value={homePrice}
                onChange={(e) => setHomePrice(e.target.value)}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="downPayment" className="text-primary font-medium">
                Down Payment ($)
              </Label>
              <Input
                id="downPayment"
                type="number"
                value={downPayment}
                onChange={(e) => setDownPayment(e.target.value)}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="interestRate" className="text-primary font-medium">
                Interest Rate (%)
              </Label>
              <Input
                id="interestRate"
                type="number"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="mt-2"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Section */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Current Down Payment Analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="text-primary flex items-center justify-between">
              Your Down Payment
              {result.meetsMinimum ? (
                <Badge className="bg-green-600">Valid</Badge>
              ) : (
                <Badge variant="destructive">Below Minimum</Badge>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b">
              <div>
                <div className="text-3xl font-bold text-primary">
                  {result.downPaymentPercent.toFixed(1)}%
                </div>
                <div className="text-sm text-muted-foreground">of home price</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-semibold">
                  ${result.downPayment.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                </div>
                <div className="text-sm text-muted-foreground">down payment</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Minimum Required:</span>
                <span className="font-semibold">
                  ${result.minimumDown.toLocaleString("en-CA", { maximumFractionDigits: 0 })} (
                  {((result.minimumDown / result.homePrice) * 100).toFixed(1)}%)
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Loan Amount:</span>
                <span className="font-semibold">
                  ${result.loanAmount.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                </span>
              </div>

              {result.requiresCMHC && (
                <>
                  <div className="flex justify-between text-orange-600">
                    <span>CMHC Insurance ({result.cmhcRate}%):</span>
                    <span className="font-semibold">
                      ${result.cmhcInsurance.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                  <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg text-sm text-orange-800">
                    <p className="font-medium mb-1">CMHC Insurance Required</p>
                    <p>Down payment is less than 20%. Insurance added to mortgage.</p>
                  </div>
                </>
              )}

              {!result.requiresCMHC && result.downPaymentPercent >= 20 && (
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-sm text-green-800">
                  <p className="font-medium mb-1">✓ No CMHC Insurance</p>
                  <p>Down payment is 20% or more. No insurance required!</p>
                </div>
              )}

              <div className="flex justify-between pt-3 border-t font-bold text-lg">
                <span>Total Mortgage:</span>
                <span className="text-primary">
                  ${result.totalMortgage.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Monthly Payment:</span>
                <span className="font-semibold text-primary">
                  ${result.monthlyPayment.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Canadian Rules */}
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-900">Canadian Down Payment Rules</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Minimum Down Payment</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>
                    <strong>Up to $500,000:</strong> 5% minimum
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>
                    <strong>$500,001 to $999,999:</strong> 5% on first $500k, 10% on remainder
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>
                    <strong>$1,000,000+:</strong> 20% minimum (no CMHC available)
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-blue-300">
              <h3 className="font-semibold text-blue-900 mb-2">CMHC Insurance Rates</h3>
              <div className="space-y-2 text-sm text-blue-800">
                <div className="flex justify-between">
                  <span>5% - 9.99% down:</span>
                  <span className="font-semibold">4.0% of loan</span>
                </div>
                <div className="flex justify-between">
                  <span>10% - 14.99% down:</span>
                  <span className="font-semibold">3.1% of loan</span>
                </div>
                <div className="flex justify-between">
                  <span>15% - 19.99% down:</span>
                  <span className="font-semibold">2.8% of loan</span>
                </div>
                <div className="flex justify-between">
                  <span>20%+ down:</span>
                  <span className="font-semibold text-green-700">No insurance</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-blue-300">
              <h3 className="font-semibold text-blue-900 mb-2">Key Benefits of Larger Down</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>Lower monthly payments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>Reduced or no CMHC insurance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>Less interest paid over time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>Better mortgage rates possible</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Compare Down Payment Scenarios</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="text-left py-3 px-4 font-semibold text-primary">Scenario</th>
                  <th className="text-right py-3 px-4 font-semibold text-primary">Down Payment</th>
                  <th className="text-right py-3 px-4 font-semibold text-primary">Loan Amount</th>
                  <th className="text-right py-3 px-4 font-semibold text-primary">
                    CMHC Insurance
                  </th>
                  <th className="text-right py-3 px-4 font-semibold text-primary">
                    Total Mortgage
                  </th>
                  <th className="text-right py-3 px-4 font-semibold text-primary">
                    Monthly Payment
                  </th>
                </tr>
              </thead>
              <tbody>
                {result.comparisons.map((scenario, index) => (
                  <tr
                    key={index}
                    className={`border-b ${
                      Math.abs(scenario.percent - result.downPaymentPercent) < 0.5
                        ? "bg-blue-50 font-semibold"
                        : ""
                    }`}
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        {scenario.label}
                        {Math.abs(scenario.percent - result.downPaymentPercent) < 0.5 && (
                          <Badge variant="secondary" className="text-xs">
                            Current
                          </Badge>
                        )}
                        {scenario.percent === 20 && (
                          <Badge className="bg-green-600 text-xs">No CMHC</Badge>
                        )}
                      </div>
                    </td>
                    <td className="text-right py-3 px-4">
                      ${scenario.downPayment.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                    </td>
                    <td className="text-right py-3 px-4">
                      ${scenario.loanAmount.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                    </td>
                    <td className="text-right py-3 px-4">
                      {scenario.cmhcInsurance > 0 ? (
                        <span className="text-orange-600">
                          $
                          {scenario.cmhcInsurance.toLocaleString("en-CA", {
                            maximumFractionDigits: 0,
                          })}
                        </span>
                      ) : (
                        <span className="text-green-600">$0</span>
                      )}
                    </td>
                    <td className="text-right py-3 px-4">
                      $
                      {scenario.totalMortgage.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                    </td>
                    <td className="text-right py-3 px-4 font-semibold">
                      $
                      {scenario.monthlyPayment.toLocaleString("en-CA", {
                        maximumFractionDigits: 0,
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">💡 Tip</h4>
            <p className="text-sm text-muted-foreground">
              Reaching 20% down payment saves you thousands in CMHC insurance. For a $
              {result.homePrice.toLocaleString("en-CA", { maximumFractionDigits: 0 })} home, that's
              a difference of up to $
              {result.comparisons
                .find((s) => s.percent === 5)
                ?.cmhcInsurance.toLocaleString("en-CA", { maximumFractionDigits: 0 })}{" "}
              in insurance costs!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
