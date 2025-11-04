"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function RentVsBuyCalculator() {
  // Buying inputs
  const [homePrice, setHomePrice] = useState("500000");
  const [downPayment, setDownPayment] = useState("100000");
  const [interestRate, setInterestRate] = useState("5.5");
  const [propertyTax, setPropertyTax] = useState("3500");
  const [homeInsurance, setHomeInsurance] = useState("1200");
  const [maintenance, setMaintenance] = useState("2000");
  const [condoFees, setCondoFees] = useState("0");

  // Renting inputs
  const [monthlyRent, setMonthlyRent] = useState("2200");
  const [rentersInsurance, setRentersInsurance] = useState("300");
  const [rentIncrease, setRentIncrease] = useState("3");

  // Investment inputs
  const [yearsToCompare, setYearsToCompare] = useState("5");
  const [homeAppreciation, setHomeAppreciation] = useState("3");
  const [investmentReturn, setInvestmentReturn] = useState("6");

  const calculateComparison = () => {
    const price = parseFloat(homePrice) || 0;
    const down = parseFloat(downPayment) || 0;
    const rate = parseFloat(interestRate) / 100 / 12;
    const years = parseFloat(yearsToCompare) || 5;
    const months = years * 12;

    // Buying calculations
    const principal = price - down;
    const monthlyPayment =
      principal > 0
        ? (principal * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1)
        : 0;

    const monthlyPropTax = parseFloat(propertyTax) / 12 || 0;
    const monthlyInsurance = parseFloat(homeInsurance) / 12 || 0;
    const monthlyMaintenance = parseFloat(maintenance) / 12 || 0;
    const monthlyCondo = parseFloat(condoFees) || 0;

    const totalMonthlyBuying =
      monthlyPayment + monthlyPropTax + monthlyInsurance + monthlyMaintenance + monthlyCondo;

    // Total paid over period (buying)
    let totalPaidBuying = down; // Down payment
    let currentMonthlyBuying = totalMonthlyBuying;

    for (let i = 0; i < months; i++) {
      totalPaidBuying += currentMonthlyBuying;
    }

    // Home equity gained
    const appreciationRate = parseFloat(homeAppreciation) / 100;
    const futureHomeValue = price * Math.pow(1 + appreciationRate / 12, months);

    // Remaining mortgage balance
    let balance = principal;
    for (let i = 0; i < months; i++) {
      const interest = balance * rate;
      const principalPaid = monthlyPayment - interest;
      balance -= principalPaid;
    }
    const remainingMortgage = Math.max(0, balance);
    const homeEquity = futureHomeValue - remainingMortgage;

    // Renting calculations
    const rent = parseFloat(monthlyRent) || 0;
    const rentersIns = parseFloat(rentersInsurance) / 12 || 0;
    const rentIncreaseRate = parseFloat(rentIncrease) / 100;

    let totalPaidRenting = 0;
    let currentRent = rent;

    for (let i = 0; i < months; i++) {
      totalPaidRenting += currentRent + rentersIns;
      // Annual rent increase
      if (i > 0 && i % 12 === 0) {
        currentRent *= 1 + rentIncreaseRate;
      }
    }

    // Investment of down payment (if renting)
    const returnRate = parseFloat(investmentReturn) / 100 / 12;
    const investmentValue = down * Math.pow(1 + returnRate, months);

    // Monthly savings if renting is cheaper
    const monthlySavings = totalMonthlyBuying - (rent + rentersIns);
    let savingsInvested = 0;
    if (monthlySavings > 0) {
      // If buying costs more, invest the difference
      for (let i = 0; i < months; i++) {
        savingsInvested = (savingsInvested + monthlySavings) * (1 + returnRate);
      }
    }

    const totalInvestments = investmentValue + savingsInvested;

    // Net worth comparison
    const netWorthBuying = homeEquity - totalPaidBuying;
    const netWorthRenting = totalInvestments - totalPaidRenting;

    const buyingIsBetter = netWorthBuying > netWorthRenting;
    const difference = Math.abs(netWorthBuying - netWorthRenting);

    return {
      // Buying
      monthlyPaymentBuying: totalMonthlyBuying,
      totalPaidBuying,
      homeEquity,
      futureHomeValue,
      netWorthBuying,

      // Renting
      monthlyPaymentRenting: rent + rentersIns,
      totalPaidRenting,
      totalInvestments,
      netWorthRenting,

      // Comparison
      buyingIsBetter,
      difference,
      breakdownBuying: {
        mortgage: monthlyPayment,
        propertyTax: monthlyPropTax,
        insurance: monthlyInsurance,
        maintenance: monthlyMaintenance,
        condoFees: monthlyCondo,
      },
    };
  };

  const result = calculateComparison();

  return (
    <div className="w-full">
      <Tabs defaultValue="inputs" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="inputs">Calculator Inputs</TabsTrigger>
          <TabsTrigger value="results">Results & Comparison</TabsTrigger>
        </TabsList>

        <TabsContent value="inputs">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Buying Inputs */}
            <Card className="bg-white shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2">
                  🏠 Buying a Home
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
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

                <div>
                  <Label htmlFor="propertyTax" className="text-primary font-medium">
                    Annual Property Tax ($)
                  </Label>
                  <Input
                    id="propertyTax"
                    type="number"
                    value={propertyTax}
                    onChange={(e) => setPropertyTax(e.target.value)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="homeInsurance" className="text-primary font-medium">
                    Annual Home Insurance ($)
                  </Label>
                  <Input
                    id="homeInsurance"
                    type="number"
                    value={homeInsurance}
                    onChange={(e) => setHomeInsurance(e.target.value)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="maintenance" className="text-primary font-medium">
                    Annual Maintenance ($)
                  </Label>
                  <Input
                    id="maintenance"
                    type="number"
                    value={maintenance}
                    onChange={(e) => setMaintenance(e.target.value)}
                    className="mt-2"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Rule of thumb: 1% of home value
                  </p>
                </div>

                <div>
                  <Label htmlFor="condoFees" className="text-primary font-medium">
                    Monthly Condo Fees ($)
                  </Label>
                  <Input
                    id="condoFees"
                    type="number"
                    value={condoFees}
                    onChange={(e) => setCondoFees(e.target.value)}
                    className="mt-2"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Renting Inputs */}
            <Card className="bg-white shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2">
                  🔑 Renting
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="monthlyRent" className="text-primary font-medium">
                    Monthly Rent ($)
                  </Label>
                  <Input
                    id="monthlyRent"
                    type="number"
                    value={monthlyRent}
                    onChange={(e) => setMonthlyRent(e.target.value)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="rentersInsurance" className="text-primary font-medium">
                    Annual Renters Insurance ($)
                  </Label>
                  <Input
                    id="rentersInsurance"
                    type="number"
                    value={rentersInsurance}
                    onChange={(e) => setRentersInsurance(e.target.value)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="rentIncrease" className="text-primary font-medium">
                    Annual Rent Increase (%)
                  </Label>
                  <Input
                    id="rentIncrease"
                    type="number"
                    step="0.1"
                    value={rentIncrease}
                    onChange={(e) => setRentIncrease(e.target.value)}
                    className="mt-2"
                  />
                </div>

                <div className="pt-6 border-t">
                  <h3 className="font-semibold text-primary mb-4">Assumptions</h3>

                  <div>
                    <Label htmlFor="yearsToCompare" className="text-primary font-medium">
                      Time Period (Years)
                    </Label>
                    <Input
                      id="yearsToCompare"
                      type="number"
                      value={yearsToCompare}
                      onChange={(e) => setYearsToCompare(e.target.value)}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="homeAppreciation" className="text-primary font-medium">
                    Home Appreciation (%)
                  </Label>
                  <Input
                    id="homeAppreciation"
                    type="number"
                    step="0.1"
                    value={homeAppreciation}
                    onChange={(e) => setHomeAppreciation(e.target.value)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="investmentReturn" className="text-primary font-medium">
                    Investment Return (%)
                  </Label>
                  <Input
                    id="investmentReturn"
                    type="number"
                    step="0.1"
                    value={investmentReturn}
                    onChange={(e) => setInvestmentReturn(e.target.value)}
                    className="mt-2"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Return on invested down payment
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="results">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Winner Card */}
            <div className="lg:col-span-2">
              <Card
                className={
                  result.buyingIsBetter
                    ? "bg-gradient-to-r from-green-600 to-green-700 text-white"
                    : "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                }
              >
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl font-bold mb-4">
                    {result.buyingIsBetter ? "🏠 Buying is Better" : "🔑 Renting is Better"}
                  </h2>
                  <div className="text-5xl font-bold mb-2">
                    ${result.difference.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                  </div>
                  <p className="text-lg opacity-90">
                    {result.buyingIsBetter ? "More wealth" : "Savings"} over {yearsToCompare} years
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Buying Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">🏠 Buying Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-lg font-semibold pb-3 border-b">
                  <span>Monthly Payment:</span>
                  <span className="text-primary">
                    ${result.monthlyPaymentBuying.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                  </span>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Mortgage:</span>
                    <span>${result.breakdownBuying.mortgage.toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Property Tax:</span>
                    <span>${result.breakdownBuying.propertyTax.toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Insurance:</span>
                    <span>${result.breakdownBuying.insurance.toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Maintenance:</span>
                    <span>${result.breakdownBuying.maintenance.toFixed(0)}</span>
                  </div>
                  {result.breakdownBuying.condoFees > 0 && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Condo Fees:</span>
                      <span>${result.breakdownBuying.condoFees.toFixed(0)}</span>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t space-y-3">
                  <div className="flex justify-between">
                    <span>Total Paid:</span>
                    <span className="font-semibold">
                      ${result.totalPaidBuying.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Home Equity:</span>
                    <span className="font-semibold text-green-600">
                      ${result.homeEquity.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t font-bold text-lg">
                    <span>Net Worth:</span>
                    <span className="text-primary">
                      ${result.netWorthBuying.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Renting Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">🔑 Renting Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-lg font-semibold pb-3 border-b">
                  <span>Monthly Payment:</span>
                  <span className="text-primary">
                    ${result.monthlyPaymentRenting.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                  </span>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rent:</span>
                    <span>${parseFloat(monthlyRent).toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Renters Insurance:</span>
                    <span>${(parseFloat(rentersInsurance) / 12).toFixed(0)}</span>
                  </div>
                </div>

                <div className="pt-4 border-t space-y-3">
                  <div className="flex justify-between">
                    <span>Total Paid:</span>
                    <span className="font-semibold">
                      ${result.totalPaidRenting.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Investments:</span>
                    <span className="font-semibold text-green-600">
                      ${result.totalInvestments.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t font-bold text-lg">
                    <span>Net Worth:</span>
                    <span className="text-primary">
                      ${result.netWorthRenting.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Insights */}
            <Card className="lg:col-span-2 bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-blue-900 mb-4">Key Insights</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">•</span>
                      <span>
                        Buying costs ${result.monthlyPaymentBuying.toFixed(0)}/month vs renting at $
                        {result.monthlyPaymentRenting.toFixed(0)}/month
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">•</span>
                      <span>
                        After {yearsToCompare} years, your home would be worth approximately $
                        {result.futureHomeValue.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">•</span>
                      <span>This assumes {homeAppreciation}% annual home appreciation</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">•</span>
                      <span>Investment returns assume {investmentReturn}% annual return</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">•</span>
                      <span>Consider your long-term plans and lifestyle preferences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">•</span>
                      <span>Buying makes more sense the longer you stay</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
