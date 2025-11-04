"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface LandTransferTaxCalculatorProps {
  defaultProvince?: string;
  showProvinceSelector?: boolean;
}

interface TaxResult {
  provincialTax: number;
  municipalTax: number;
  totalTax: number;
  firstTimeBuyerRebate: number;
  netTax: number;
}

const provinces = [
  { code: "ON", name: "Ontario" },
  { code: "BC", name: "British Columbia" },
  { code: "QC", name: "Quebec" },
  { code: "AB", name: "Alberta" },
  { code: "MB", name: "Manitoba" },
  { code: "SK", name: "Saskatchewan" },
  { code: "NS", name: "Nova Scotia" },
  { code: "NB", name: "New Brunswick" },
  { code: "PE", name: "Prince Edward Island" },
  { code: "NL", name: "Newfoundland and Labrador" },
];

export default function LandTransferTaxCalculator({
  defaultProvince = "ON",
  showProvinceSelector = true,
}: LandTransferTaxCalculatorProps) {
  const [purchasePrice, setPurchasePrice] = useState("500000");
  const [province, setProvince] = useState(defaultProvince);
  const [isFirstTimeBuyer, setIsFirstTimeBuyer] = useState(false);
  const [isToronto, setIsToronto] = useState(false);

  // Calculate land transfer tax based on province
  const calculateTax = (): TaxResult => {
    const price = parseFloat(purchasePrice) || 0;
    let provincialTax = 0;
    let municipalTax = 0;
    let firstTimeBuyerRebate = 0;

    switch (province) {
      case "ON":
        // Ontario provincial tax (tiered)
        if (price <= 55000) {
          provincialTax = price * 0.005;
        } else if (price <= 250000) {
          provincialTax = 275 + (price - 55000) * 0.01;
        } else if (price <= 400000) {
          provincialTax = 2225 + (price - 250000) * 0.015;
        } else if (price <= 2000000) {
          provincialTax = 4475 + (price - 400000) * 0.02;
        } else {
          provincialTax = 36475 + (price - 2000000) * 0.025;
        }

        // Toronto municipal tax (if applicable)
        if (isToronto) {
          if (price <= 55000) {
            municipalTax = price * 0.005;
          } else if (price <= 250000) {
            municipalTax = 275 + (price - 55000) * 0.01;
          } else if (price <= 400000) {
            municipalTax = 2225 + (price - 250000) * 0.015;
          } else if (price <= 2000000) {
            municipalTax = 4475 + (price - 400000) * 0.02;
          } else {
            municipalTax = 36475 + (price - 2000000) * 0.025;
          }
        }

        // First-time buyer rebate (Ontario)
        if (isFirstTimeBuyer && price <= 500000) {
          firstTimeBuyerRebate = Math.min(provincialTax, 4000);
        }

        // Toronto first-time buyer rebate
        if (isFirstTimeBuyer && isToronto && price <= 400000) {
          firstTimeBuyerRebate += Math.min(municipalTax, 4475);
        }
        break;

      case "BC":
        // BC property transfer tax (tiered)
        if (price <= 200000) {
          provincialTax = price * 0.01;
        } else if (price <= 2000000) {
          provincialTax = 2000 + (price - 200000) * 0.02;
        } else if (price <= 3000000) {
          provincialTax = 38000 + (price - 2000000) * 0.03;
        } else {
          provincialTax = 68000 + (price - 3000000) * 0.05;
        }

        // First-time buyer exemption (BC)
        if (isFirstTimeBuyer && price <= 835000) {
          firstTimeBuyerRebate = provincialTax;
        } else if (isFirstTimeBuyer && price <= 860000) {
          // Partial exemption for 835k-860k
          const exemptionReduction = (price - 835000) / 25000;
          firstTimeBuyerRebate = provincialTax * (1 - exemptionReduction);
        }
        break;

      case "QC":
        // Quebec welcome tax (tiered)
        if (price <= 59200) {
          provincialTax = price * 0.005;
        } else if (price <= 296200) {
          provincialTax = 296 + (price - 59200) * 0.01;
        } else {
          provincialTax = 2666 + (price - 296200) * 0.015;
        }
        break;

      case "AB":
        // Alberta has no land transfer tax
        provincialTax = 0;
        break;

      case "MB":
        // Manitoba land transfer tax (flat rate)
        provincialTax = price * 0.02;
        break;

      case "SK":
        // Saskatchewan has no land transfer tax (only title registration fees)
        provincialTax = 0;
        break;

      case "NS":
        // Nova Scotia deed transfer tax
        if (price <= 250000) {
          provincialTax = price * 0.015;
        } else {
          provincialTax = 3750 + (price - 250000) * 0.02;
        }

        // First-time buyer rebate (NS)
        if (isFirstTimeBuyer && price <= 500000) {
          firstTimeBuyerRebate = Math.min(provincialTax, 1500);
        }
        break;

      case "NB":
        // New Brunswick property transfer tax
        provincialTax = price * 0.01;
        break;

      case "PE":
        // PEI real property transfer tax
        provincialTax = price * 0.01;

        // First-time buyer rebate (PEI)
        if (isFirstTimeBuyer && price <= 200000) {
          firstTimeBuyerRebate = provincialTax;
        }
        break;

      case "NL":
        // Newfoundland and Labrador registration of deeds
        if (price <= 500) {
          provincialTax = 100;
        } else if (price <= 5000) {
          provincialTax = 200;
        } else {
          provincialTax = 200 + Math.ceil((price - 5000) / 1000) * 100;
        }
        break;

      default:
        provincialTax = 0;
    }

    const totalTax = provincialTax + municipalTax;
    const netTax = totalTax - firstTimeBuyerRebate;

    return {
      provincialTax,
      municipalTax,
      totalTax,
      firstTimeBuyerRebate,
      netTax,
    };
  };

  const result = calculateTax();
  const provinceName = provinces.find((p) => p.code === province)?.name || "";

  return (
    <div className="w-full">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <Card className="bg-white shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">
              Calculate Land Transfer Tax
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Province Selector */}
            {showProvinceSelector && (
              <div>
                <Label htmlFor="province" className="text-primary font-medium">
                  Province
                </Label>
                <Select value={province} onValueChange={setProvince}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select province" />
                  </SelectTrigger>
                  <SelectContent>
                    {provinces.map((p) => (
                      <SelectItem key={p.code} value={p.code}>
                        {p.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Purchase Price */}
            <div>
              <Label htmlFor="purchasePrice" className="text-primary font-medium">
                Purchase Price ($)
              </Label>
              <Input
                id="purchasePrice"
                type="number"
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(e.target.value)}
                className="mt-2"
                placeholder="500000"
              />
            </div>

            {/* First-Time Buyer Checkbox */}
            {(province === "ON" || province === "BC" || province === "NS" || province === "PE") && (
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="firstTime"
                  checked={isFirstTimeBuyer}
                  onChange={(e) => setIsFirstTimeBuyer(e.target.checked)}
                  className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <Label htmlFor="firstTime" className="text-primary font-medium cursor-pointer">
                  I am a first-time homebuyer
                </Label>
              </div>
            )}

            {/* Toronto Checkbox (Ontario only) */}
            {province === "ON" && (
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="toronto"
                  checked={isToronto}
                  onChange={(e) => setIsToronto(e.target.checked)}
                  className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <Label htmlFor="toronto" className="text-primary font-medium cursor-pointer">
                  Property is located in Toronto
                </Label>
              </div>
            )}

            {/* No Tax Notice */}
            {(province === "AB" || province === "SK") && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-medium">
                  ✓ Good news! {provinceName} does not have a land transfer tax.
                </p>
                <p className="text-green-700 text-sm mt-1">
                  {province === "AB"
                    ? "You may only need to pay title registration fees."
                    : "You may only need to pay minimal title registration fees."}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Results Section */}
        <div className="space-y-6">
          <Card className="bg-primary text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-lg font-medium mb-2 text-white/90">
                Total Land Transfer Tax
              </h3>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                ${result.netTax.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
              </div>
              <p className="text-white/80">
                {provinceName}
                {isToronto && " (including Toronto)"}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Tax Breakdown</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Purchase Price:</span>
                <span className="font-semibold">
                  ${parseFloat(purchasePrice || "0").toLocaleString("en-CA")}
                </span>
              </div>

              {result.provincialTax > 0 && (
                <div className="flex justify-between">
                  <span>Provincial Tax:</span>
                  <span className="font-semibold">
                    ${result.provincialTax.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                  </span>
                </div>
              )}

              {result.municipalTax > 0 && (
                <div className="flex justify-between">
                  <span>Toronto Municipal Tax:</span>
                  <span className="font-semibold">
                    ${result.municipalTax.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                  </span>
                </div>
              )}

              {result.totalTax > 0 && (
                <div className="flex justify-between pt-2 border-t">
                  <span>Total Tax:</span>
                  <span className="font-semibold">
                    ${result.totalTax.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                  </span>
                </div>
              )}

              {result.firstTimeBuyerRebate > 0 && (
                <>
                  <div className="flex justify-between text-green-600">
                    <span>First-Time Buyer Rebate:</span>
                    <span className="font-semibold">
                      -${result.firstTimeBuyerRebate.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t font-bold text-lg">
                    <span>Amount You Pay:</span>
                    <span className="text-primary">
                      ${result.netTax.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Info Card */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h4 className="font-semibold text-blue-900 mb-2">Important Notes</h4>
              <ul className="space-y-2 text-sm text-blue-800">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>Land transfer tax is due on closing day</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>Your lawyer will typically handle the payment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>First-time buyer rebates have eligibility requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>This is an estimate - consult with a lawyer for exact amounts</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
