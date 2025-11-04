"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

export default function RefinanceSavingsCalculator() {
  const [currentBalance, setCurrentBalance] = useState("300000");
  const [currentRate, setCurrentRate] = useState("5.5");
  const [currentYearsRemaining, setCurrentYearsRemaining] = useState("20");
  const [newRate, setNewRate] = useState("4.5");
  const [refinanceCosts, setRefinanceCosts] = useState("3000");

  const calculateSavings = () => {
    const balance = parseFloat(currentBalance) || 0;
    const oldRate = parseFloat(currentRate) / 100 / 12;
    const newRateMonthly = parseFloat(newRate) / 100 / 12;
    const monthsRemaining = parseFloat(currentYearsRemaining) * 12;
    const costs = parseFloat(refinanceCosts) || 0;

    // Calculate current monthly payment
    const currentPayment =
      (balance * oldRate * Math.pow(1 + oldRate, monthsRemaining)) /
      (Math.pow(1 + oldRate, monthsRemaining) - 1);

    // Calculate new monthly payment
    const newPayment =
      (balance * newRateMonthly * Math.pow(1 + newRateMonthly, monthsRemaining)) /
      (Math.pow(1 + newRateMonthly, monthsRemaining) - 1);

    // Calculate total interest paid (current vs new)
    const currentTotalInterest = currentPayment * monthsRemaining - balance;
    const newTotalInterest = newPayment * monthsRemaining - balance;

    // Calculate savings
    const monthlyPaymentSavings = currentPayment - newPayment;
    const totalInterestSavings = currentTotalInterest - newTotalInterest;
    const netSavings = totalInterestSavings - costs;

    // Break-even point (months to recover costs)
    const breakEvenMonths = monthlyPaymentSavings > 0 ? costs / monthlyPaymentSavings : 0;

    return {
      currentPayment: isNaN(currentPayment) ? 0 : currentPayment,
      newPayment: isNaN(newPayment) ? 0 : newPayment,
      monthlyPaymentSavings: isNaN(monthlyPaymentSavings) ? 0 : monthlyPaymentSavings,
      totalInterestSavings: isNaN(totalInterestSavings) ? 0 : totalInterestSavings,
      netSavings: isNaN(netSavings) ? 0 : netSavings,
      breakEvenMonths: isNaN(breakEvenMonths) ? 0 : breakEvenMonths,
      breakEvenYears: isNaN(breakEvenMonths) ? 0 : breakEvenMonths / 12,
    };
  };

  const result = calculateSavings();
  const isWorthIt = result.netSavings > 0;

  return (
    <div className="w-full">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <Card className="bg-white shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">
              Calculate Refinancing Savings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="currentBalance" className="text-primary font-medium">
                Current Mortgage Balance ($)
              </Label>
              <Input
                id="currentBalance"
                type="number"
                value={currentBalance}
                onChange={(e) => setCurrentBalance(e.target.value)}
                className="mt-2"
                placeholder="300000"
              />
            </div>

            <div>
              <Label htmlFor="currentRate" className="text-primary font-medium">
                Current Interest Rate (%)
              </Label>
              <Input
                id="currentRate"
                type="number"
                step="0.1"
                value={currentRate}
                onChange={(e) => setCurrentRate(e.target.value)}
                className="mt-2"
                placeholder="5.5"
              />
            </div>

            <div>
              <Label htmlFor="currentYearsRemaining" className="text-primary font-medium">
                Years Remaining on Current Mortgage
              </Label>
              <Input
                id="currentYearsRemaining"
                type="number"
                value={currentYearsRemaining}
                onChange={(e) => setCurrentYearsRemaining(e.target.value)}
                className="mt-2"
                placeholder="20"
              />
            </div>

            <div>
              <Label htmlFor="newRate" className="text-primary font-medium">
                New Interest Rate (%)
              </Label>
              <Input
                id="newRate"
                type="number"
                step="0.1"
                value={newRate}
                onChange={(e) => setNewRate(e.target.value)}
                className="mt-2"
                placeholder="4.5"
              />
            </div>

            <div>
              <Label htmlFor="refinanceCosts" className="text-primary font-medium">
                Refinancing Costs ($)
              </Label>
              <Input
                id="refinanceCosts"
                type="number"
                value={refinanceCosts}
                onChange={(e) => setRefinanceCosts(e.target.value)}
                className="mt-2"
                placeholder="3000"
              />
              <p className="text-sm text-muted-foreground mt-1">
                Include penalties, legal fees, and appraisal costs
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        <div className="space-y-6">
          {/* Main Result */}
          <Card className={isWorthIt ? "bg-green-600 text-white" : "bg-orange-600 text-white"}>
            <CardContent className="p-8 text-center">
              <h3 className="text-lg font-medium mb-2 opacity-90">
                {isWorthIt ? "Total Savings" : "Net Cost"}
              </h3>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {isWorthIt ? "" : "-"}$
                {Math.abs(result.netSavings).toLocaleString("en-CA", { maximumFractionDigits: 0 })}
              </div>
              <p className="opacity-80">
                {isWorthIt ? "Refinancing will save you money" : "Refinancing may not be worth it"}
              </p>
            </CardContent>
          </Card>

          {/* Monthly Savings */}
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Monthly Payment Comparison</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Current Monthly Payment:</span>
                <span className="font-semibold">
                  ${result.currentPayment.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                </span>
              </div>

              <div className="flex justify-between">
                <span>New Monthly Payment:</span>
                <span className="font-semibold text-green-600">
                  ${result.newPayment.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                </span>
              </div>

              <div className="flex justify-between pt-2 border-t">
                <span className="font-medium">Monthly Savings:</span>
                <span className="font-bold text-green-600 text-lg">
                  ${result.monthlyPaymentSavings.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Total Savings Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Total Savings Breakdown</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Interest Savings:</span>
                <span className="font-semibold text-green-600">
                  ${result.totalInterestSavings.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Refinancing Costs:</span>
                <span className="font-semibold text-red-600">
                  -${parseFloat(refinanceCosts).toLocaleString("en-CA")}
                </span>
              </div>

              <div className="flex justify-between pt-2 border-t font-bold text-lg">
                <span>Net Savings:</span>
                <span className={isWorthIt ? "text-green-600" : "text-orange-600"}>
                  {isWorthIt ? "" : "-"}$
                  {Math.abs(result.netSavings).toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Break-Even Analysis */}
          {isWorthIt && (
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h4 className="font-semibold text-blue-900 mb-3">Break-Even Point</h4>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-blue-900">
                    {result.breakEvenYears < 1
                      ? `${Math.round(result.breakEvenMonths)} months`
                      : `${result.breakEvenYears.toFixed(1)} years`}
                  </div>
                  <p className="text-sm text-blue-700 mt-1">
                    Time to recover refinancing costs
                  </p>
                </div>
                <p className="text-sm text-blue-800">
                  {result.breakEvenYears < 2
                    ? "✓ Quick payback period - refinancing looks good!"
                    : result.breakEvenYears < 5
                    ? "⚠ Consider if you plan to stay in this home"
                    : "⚠ Long payback period - carefully consider your plans"}
                </p>
              </CardContent>
            </Card>
          )}

          {/* Recommendation */}
          <Card className={isWorthIt ? "bg-green-50 border-green-200" : "bg-orange-50 border-orange-200"}>
            <CardContent className="p-6">
              <h4 className={`font-semibold mb-2 ${isWorthIt ? "text-green-900" : "text-orange-900"}`}>
                {isWorthIt ? "✓ Refinancing Recommended" : "⚠ Review Your Options"}
              </h4>
              <ul className={`space-y-2 text-sm ${isWorthIt ? "text-green-800" : "text-orange-800"}`}>
                {isWorthIt ? (
                  <>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>You could save ${result.monthlyPaymentSavings.toFixed(0)}/month</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Total savings of ${result.netSavings.toFixed(0)} over {currentYearsRemaining} years</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Contact us to lock in your new rate</span>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Current costs outweigh potential savings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Consider waiting for better rates or lower costs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Speak with an advisor about other options</span>
                    </li>
                  </>
                )}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
