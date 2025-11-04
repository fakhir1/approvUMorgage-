"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export interface MortgageRate {
  term: string;
  rate: number;
  type: "fixed" | "variable";
  change?: number; // Positive = increase, Negative = decrease
  lastUpdated?: string;
}

export interface RateData {
  province?: string;
  rates: MortgageRate[];
  lastUpdated: string;
  disclaimer?: string;
}

interface MortgageRateWidgetProps {
  data: RateData;
  variant?: "compact" | "full" | "comparison";
  showTrends?: boolean;
  showCTA?: boolean;
  ctaText?: string;
  ctaLink?: string;
  highlightBest?: boolean;
  className?: string;
}

export default function MortgageRateWidget({
  data,
  variant = "full",
  showTrends = true,
  showCTA = true,
  ctaText = "Get Your Rate Quote",
  ctaLink = "/mortgage-appointment-online",
  highlightBest = true,
  className = "",
}: MortgageRateWidgetProps) {
  // Find best (lowest) rate
  const bestRate = highlightBest
    ? Math.min(...data.rates.map((r) => r.rate))
    : null;

  // Format date
  const formatDate = (dateString: string): string => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return dateString;
    }
  };

  // Rate change indicator
  const RateChange = ({ change }: { change?: number }) => {
    if (!showTrends || !change) return null;

    const isIncrease = change > 0;
    const color = isIncrease ? "text-red-600" : "text-green-600";
    const arrow = isIncrease ? "↑" : "↓";

    return (
      <span className={`text-sm font-medium ${color} ml-2`}>
        {arrow} {Math.abs(change).toFixed(2)}%
      </span>
    );
  };

  // Compact variant - single column, minimal
  if (variant === "compact") {
    return (
      <Card className={`bg-white shadow-lg ${className}`}>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg text-primary">Current Rates</CardTitle>
            {data.province && (
              <Badge variant="secondary" className="text-xs">
                {data.province}
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          {data.rates.slice(0, 3).map((rate, index) => (
            <div
              key={index}
              className={`flex justify-between items-center py-2 ${
                index !== data.rates.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm">{rate.term}</span>
                <Badge variant="outline" className="text-xs">
                  {rate.type}
                </Badge>
              </div>
              <div className="flex items-center">
                <span className="text-lg font-bold text-primary">{rate.rate.toFixed(2)}%</span>
                <RateChange change={rate.change} />
              </div>
            </div>
          ))}
          <div className="text-xs text-muted-foreground pt-2">
            Updated: {formatDate(data.lastUpdated)}
          </div>
          {showCTA && (
            <Link href={ctaLink} className="block pt-2">
              <Button className="w-full" size="sm">
                {ctaText}
              </Button>
            </Link>
          )}
        </CardContent>
      </Card>
    );
  }

  // Comparison variant - side-by-side fixed vs variable
  if (variant === "comparison") {
    const fixedRates = data.rates.filter((r) => r.type === "fixed");
    const variableRates = data.rates.filter((r) => r.type === "variable");

    return (
      <Card className={`bg-white shadow-xl ${className}`}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl text-primary">
              Rate Comparison
              {data.province && (
                <Badge variant="secondary" className="ml-3">
                  {data.province}
                </Badge>
              )}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Fixed Rates */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                🔒 Fixed Rates
              </h3>
              <div className="space-y-3">
                {fixedRates.map((rate, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-2 ${
                      bestRate === rate.rate
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 bg-gray-50"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">{rate.term}</span>
                      <div className="flex items-center">
                        <span className="text-2xl font-bold text-primary">
                          {rate.rate.toFixed(2)}%
                        </span>
                        <RateChange change={rate.change} />
                      </div>
                    </div>
                    {bestRate === rate.rate && (
                      <Badge className="mt-2 bg-green-600">Best Rate</Badge>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Variable Rates */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                📊 Variable Rates
              </h3>
              <div className="space-y-3">
                {variableRates.map((rate, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-2 ${
                      bestRate === rate.rate
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 bg-gray-50"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">{rate.term}</span>
                      <div className="flex items-center">
                        <span className="text-2xl font-bold text-primary">
                          {rate.rate.toFixed(2)}%
                        </span>
                        <RateChange change={rate.change} />
                      </div>
                    </div>
                    {bestRate === rate.rate && (
                      <Badge className="mt-2 bg-green-600">Best Rate</Badge>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {data.disclaimer && (
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800 mb-4">
              <p className="font-medium mb-1">ℹ️ Important Note</p>
              <p>{data.disclaimer}</p>
            </div>
          )}

          <div className="text-sm text-muted-foreground mb-4">
            Last updated: {formatDate(data.lastUpdated)}
          </div>

          {showCTA && (
            <Link href={ctaLink}>
              <Button className="w-full" variant="glow" size="lg">
                {ctaText}
              </Button>
            </Link>
          )}
        </CardContent>
      </Card>
    );
  }

  // Full variant - complete table view
  return (
    <Card className={`bg-white shadow-xl ${className}`}>
      <CardHeader>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <CardTitle className="text-2xl text-primary">
            Current Mortgage Rates
            {data.province && (
              <Badge variant="secondary" className="ml-3">
                {data.province}
              </Badge>
            )}
          </CardTitle>
          <div className="text-sm text-muted-foreground">
            Updated: {formatDate(data.lastUpdated)}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-primary">
                <th className="text-left py-3 px-4 font-semibold text-primary">Term</th>
                <th className="text-left py-3 px-4 font-semibold text-primary">Type</th>
                <th className="text-right py-3 px-4 font-semibold text-primary">Rate</th>
                {showTrends && (
                  <th className="text-right py-3 px-4 font-semibold text-primary">Change</th>
                )}
              </tr>
            </thead>
            <tbody>
              {data.rates.map((rate, index) => (
                <tr
                  key={index}
                  className={`border-b transition-colors hover:bg-gray-50 ${
                    bestRate === rate.rate ? "bg-green-50" : ""
                  }`}
                >
                  <td className="py-4 px-4 font-medium">{rate.term}</td>
                  <td className="py-4 px-4">
                    <Badge
                      variant={rate.type === "fixed" ? "default" : "secondary"}
                      className="capitalize"
                    >
                      {rate.type}
                    </Badge>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <span className="text-2xl font-bold text-primary">
                        {rate.rate.toFixed(2)}%
                      </span>
                      {bestRate === rate.rate && (
                        <Badge className="bg-green-600 text-xs">Best</Badge>
                      )}
                    </div>
                  </td>
                  {showTrends && (
                    <td className="py-4 px-4 text-right">
                      <RateChange change={rate.change} />
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {data.disclaimer && (
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800">
            <p className="font-medium mb-1">ℹ️ Important Note</p>
            <p>{data.disclaimer}</p>
          </div>
        )}

        {showCTA && (
          <div className="mt-6 text-center">
            <Link href={ctaLink}>
              <Button variant="glow" size="lg">
                {ctaText}
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground mt-3">
              Get personalized rates based on your situation
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
