"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface LandTransferTaxCalculatorProps {
  defaultProvince?: string;
  showProvinceSelector?: boolean;
}

export default function LandTransferTaxCalculatorComponent({
  defaultProvince = "ontario",
  showProvinceSelector = true,
}: LandTransferTaxCalculatorProps) {
  const [purchasePrice, setPurchasePrice] = useState<string>("");
  const [selectedProvince, setSelectedProvince] = useState(defaultProvince);
  const [isFirstTimeBuyer, setIsFirstTimeBuyer] = useState(false);
  const [results, setResults] = useState<any>(null);

  const provinces = {
    ontario: "Ontario",
    toronto: "Toronto",
    "british-columbia": "British Columbia",
    quebec: "Quebec",
    alberta: "Alberta",
    manitoba: "Manitoba",
    saskatchewan: "Saskatchewan",
    "nova-scotia": "Nova Scotia",
    "new-brunswick": "New Brunswick",
    "prince-edward-island": "Prince Edward Island",
    newfoundland: "Newfoundland & Labrador",
  };

  const handleCalculate = () => {
    const price = parseFloat(purchasePrice.replace(/,/g, ""));
    if (isNaN(price) || price <= 0) {
      alert("Please enter a valid purchase price");
      return;
    }

    // Simplified calculation - in production, use actual provincial rates
    let provincialTax = 0;
    let municipalTax = 0;
    let provincialRebate = 0;
    let municipalRebate = 0;

    // Ontario rates (simplified)
    if (selectedProvince === "ontario" || selectedProvince === "toronto") {
      if (price <= 55000) provincialTax = price * 0.005;
      else if (price <= 250000)
        provincialTax = 55000 * 0.005 + (price - 55000) * 0.01;
      else if (price <= 400000)
        provincialTax = 55000 * 0.005 + 195000 * 0.01 + (price - 250000) * 0.015;
      else if (price <= 2000000)
        provincialTax =
          55000 * 0.005 +
          195000 * 0.01 +
          150000 * 0.015 +
          (price - 400000) * 0.02;
      else
        provincialTax =
          55000 * 0.005 +
          195000 * 0.01 +
          150000 * 0.015 +
          1600000 * 0.02 +
          (price - 2000000) * 0.025;

      if (isFirstTimeBuyer && price <= 500000) {
        provincialRebate = Math.min(provincialTax, 4000);
      }

      // Toronto municipal tax
      if (selectedProvince === "toronto") {
        municipalTax = provincialTax;
        if (isFirstTimeBuyer && price <= 400000) {
          municipalRebate = Math.min(municipalTax, 4475);
        }
      }
    }
    // BC rates (simplified)
    else if (selectedProvince === "british-columbia") {
      if (price <= 200000) provincialTax = price * 0.01;
      else if (price <= 2000000)
        provincialTax = 200000 * 0.01 + (price - 200000) * 0.02;
      else if (price <= 3000000)
        provincialTax = 200000 * 0.01 + 1800000 * 0.02 + (price - 2000000) * 0.03;
      else
        provincialTax =
          200000 * 0.01 +
          1800000 * 0.02 +
          1000000 * 0.03 +
          (price - 3000000) * 0.05;

      if (isFirstTimeBuyer && price <= 500000) {
        provincialRebate = Math.min(provincialTax, 8000);
      }
    }
    // Other provinces (simplified flat rates)
    else {
      const rates: Record<string, number> = {
        quebec: 0.015,
        alberta: 0,
        manitoba: 0.015,
        saskatchewan: 0.003,
        "nova-scotia": 0.015,
        "new-brunswick": 0.01,
        "prince-edward-island": 0.01,
        newfoundland: 0.004,
      };
      provincialTax = price * (rates[selectedProvince] || 0);

      // First-time buyer rebates for some provinces
      if (isFirstTimeBuyer) {
        if (selectedProvince === "nova-scotia") {
          provincialRebate = Math.min(provincialTax, 1500);
        } else if (selectedProvince === "new-brunswick") {
          provincialRebate = Math.min(provincialTax, 1000);
        }
      }
    }

    const totalTax = provincialTax + municipalTax;
    const totalRebate = provincialRebate + municipalRebate;
    const netTax = totalTax - totalRebate;

    setResults({
      purchasePrice: price,
      provincialTax,
      municipalTax,
      totalTax,
      provincialRebate,
      municipalRebate,
      totalRebate,
      netTax,
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="space-y-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-primary">
            Land Transfer Tax Calculator
          </CardTitle>
          <p className="text-center text-muted-foreground">
            Calculate your land transfer tax for{" "}
            {provinces[selectedProvince as keyof typeof provinces] || "your province"}
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {showProvinceSelector && (
            <div>
              <Label htmlFor="province">Province/Territory</Label>
              <Select value={selectedProvince} onValueChange={setSelectedProvince}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your province" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(provinces).map(([key, name]) => (
                    <SelectItem key={key} value={key}>
                      {name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          <div>
            <Label htmlFor="purchasePrice">Home Purchase Price</Label>
            <Input
              id="purchasePrice"
              type="text"
              placeholder="$500,000"
              value={purchasePrice}
              onChange={(e) => {
                const value = e.target.value.replace(/[^\d,]/g, "");
                setPurchasePrice(value);
              }}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="firstTimeBuyer"
              checked={isFirstTimeBuyer}
              onCheckedChange={(checked) => setIsFirstTimeBuyer(checked as boolean)}
            />
            <Label htmlFor="firstTimeBuyer">I am a first-time home buyer</Label>
          </div>

          <Button onClick={handleCalculate} className="w-full" size="lg">
            Calculate Land Transfer Tax
          </Button>
        </CardContent>
      </Card>

      {results && (
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-xl text-primary">
              Tax Calculation Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Purchase Price</h3>
                <p className="text-2xl font-bold text-primary">
                  {formatCurrency(results.purchasePrice)}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h3 className="font-semibold text-primary">Tax Breakdown</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Provincial Tax:</span>
                      <span className="font-medium">
                        {formatCurrency(results.provincialTax)}
                      </span>
                    </div>
                    {results.municipalTax > 0 && (
                      <div className="flex justify-between">
                        <span>Municipal Tax:</span>
                        <span className="font-medium">
                          {formatCurrency(results.municipalTax)}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between font-semibold border-t pt-2">
                      <span>Total Tax:</span>
                      <span>{formatCurrency(results.totalTax)}</span>
                    </div>
                  </div>
                </div>

                {results.totalRebate > 0 && (
                  <div className="space-y-3">
                    <h3 className="font-semibold text-secondary">
                      First-Time Buyer Rebates
                    </h3>
                    <div className="space-y-2">
                      {results.provincialRebate > 0 && (
                        <div className="flex justify-between">
                          <span>Provincial Rebate:</span>
                          <span className="font-medium text-secondary">
                            -{formatCurrency(results.provincialRebate)}
                          </span>
                        </div>
                      )}
                      {results.municipalRebate > 0 && (
                        <div className="flex justify-between">
                          <span>Municipal Rebate:</span>
                          <span className="font-medium text-secondary">
                            -{formatCurrency(results.municipalRebate)}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between font-semibold border-t pt-2">
                        <span>Total Rebate:</span>
                        <span className="text-secondary">
                          -{formatCurrency(results.totalRebate)}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-primary text-primary-foreground p-4 rounded-lg text-center">
                <h3 className="font-semibold mb-1">Final Amount Due</h3>
                <p className="text-3xl font-bold">
                  {formatCurrency(results.netTax)}
                </p>
              </div>

              <div className="text-center space-y-3">
                <p className="text-sm text-muted-foreground">
                  Ready to move forward with your home purchase?
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    variant="default"
                    onClick={() => (window.location.href = "/mortgage/approval/")}
                  >
                    Get Pre-Approved
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() =>
                      (window.location.href = "/mortgage/first-time-buyer/")
                    }
                  >
                    First-Time Buyer Guide
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
