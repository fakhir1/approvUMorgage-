"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { AlertCircle, Info } from "lucide-react";

export default function DownPaymentCalculatorComponent() {
  const [homePrice, setHomePrice] = useState("500000");
  const [isFirstTime, setIsFirstTime] = useState(true);

  const calculateDownPayment = () => {
    const price = parseFloat(homePrice);
    let minDownPayment = 0;
    let cmhcRate = 0;

    if (price <= 500000) {
      minDownPayment = price * 0.05;
      cmhcRate = 0.04;
    } else if (price <= 999999) {
      minDownPayment = 500000 * 0.05 + (price - 500000) * 0.1;
      cmhcRate = 0.031;
    } else {
      minDownPayment = price * 0.2;
      cmhcRate = 0;
    }

    const cmhcInsurance = price < 1000000 ? (price - minDownPayment) * cmhcRate : 0;
    const totalFundsNeeded = minDownPayment + cmhcInsurance;

    return {
      minDownPayment,
      cmhcInsurance,
      totalFundsNeeded,
      downPaymentPercent: (minDownPayment / price) * 100,
    };
  };

  const results = calculateDownPayment();

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Input Form */}
      <Card className="bg-white shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">
            Home Purchase Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label htmlFor="homePrice" className="text-primary font-medium">
              Home Purchase Price
            </Label>
            <Input
              id="homePrice"
              type="number"
              value={homePrice}
              onChange={(e) => setHomePrice(e.target.value)}
              className="text-lg mt-2"
              placeholder="$500,000"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="firstTime"
              checked={isFirstTime}
              onCheckedChange={(checked) => setIsFirstTime(checked as boolean)}
            />
            <Label
              htmlFor="firstTime"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I am a first-time home buyer
            </Label>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <div className="flex items-start gap-2">
              <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-blue-900">
                <p className="font-medium mb-1">Canadian Down Payment Rules:</p>
                <ul className="space-y-1 text-xs">
                  <li>• Under $500K: 5% minimum</li>
                  <li>• $500K-$999K: 5% on first $500K, 10% on remainder</li>
                  <li>• $1M+: 20% minimum (no CMHC insurance)</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Display */}
      <div className="space-y-6">
        <Card className="bg-primary text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-lg font-medium mb-2 text-white/90">
              Minimum Down Payment Required
            </h3>
            <div className="text-4xl md:text-5xl font-bold mb-2">
              $
              {results.minDownPayment.toLocaleString("en-CA", {
                maximumFractionDigits: 0,
              })}
            </div>
            <p className="text-white/80">
              {results.downPaymentPercent.toFixed(1)}% of purchase price
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Down Payment Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span>Home Purchase Price:</span>
              <span className="font-semibold">
                ${parseFloat(homePrice).toLocaleString("en-CA")}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Minimum Down Payment:</span>
              <span className="font-semibold">
                ${results.minDownPayment.toLocaleString("en-CA")}
              </span>
            </div>
            {results.cmhcInsurance > 0 && (
              <div className="flex justify-between">
                <span>CMHC Insurance Premium:</span>
                <span className="font-semibold">
                  ${results.cmhcInsurance.toLocaleString("en-CA")}
                </span>
              </div>
            )}
            <div className="flex justify-between border-t pt-2">
              <span>Total Funds Needed:</span>
              <span className="font-bold text-primary">
                ${results.totalFundsNeeded.toLocaleString("en-CA")}
              </span>
            </div>
          </CardContent>
        </Card>

        {parseFloat(homePrice) < 1000000 && (
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">
                    CMHC Insurance Required
                  </h4>
                  <p className="text-sm text-blue-800">
                    Since your down payment is less than 20%, CMHC mortgage default
                    insurance is required. This premium can be added to your
                    mortgage amount.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {isFirstTime && (
          <Card className="bg-secondary/10 border-secondary/30">
            <CardContent className="p-6">
              <h4 className="font-semibold text-secondary mb-2">
                💡 First-Time Buyer Programs
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                As a first-time buyer, you may be eligible for:
              </p>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Home Buyers' Plan (HBP): Withdraw up to $60,000 from RRSP</li>
                <li>
                  • First Home Savings Account (FHSA): Save up to $40,000 tax-free
                </li>
                <li>• Provincial land transfer tax rebates (save up to $8,000)</li>
                <li>• GST/HST new housing rebate (up to $30,000)</li>
              </ul>
            </CardContent>
          </Card>
        )}

        <div className="flex gap-3">
          <Button
            variant="default"
            className="flex-1"
            onClick={() => (window.location.href = "/mortgage/approval/")}
          >
            Get Pre-Approved
          </Button>
          <Button
            variant="outline"
            className="flex-1"
            onClick={() =>
              (window.location.href = "/mortgage/first-time-buyer/")
            }
          >
            First-Time Buyer Guide
          </Button>
        </div>
      </div>
    </div>
  );
}
