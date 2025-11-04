"use client";

import { useState } from "react";
import { formatCurrency, calculateAffordability } from "@/lib/utils";

export default function AffordabilityCalculator() {
  const [annualIncome, setAnnualIncome] = useState(100000);
  const [monthlyDebts, setMonthlyDebts] = useState(500);
  const [downPayment, setDownPayment] = useState(100000);
  const [interestRate, setInterestRate] = useState(5.5);
  const [amortization, setAmortization] = useState(25);

  const maxHomePrice = calculateAffordability(
    annualIncome,
    monthlyDebts,
    downPayment,
    interestRate,
    amortization
  );

  const monthlyIncome = annualIncome / 12;
  const maxMonthlyPayment = monthlyIncome * 0.32; // GDS ratio
  const totalDebtService = maxMonthlyPayment + monthlyDebts;
  const tdsRatio = (totalDebtService / monthlyIncome) * 100;

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-bold mb-6 text-gray-900">Affordability Calculator</h3>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Annual Income: {formatCurrency(annualIncome)}
            </label>
            <input
              type="range"
              min="30000"
              max="300000"
              step="5000"
              value={annualIncome}
              onChange={(e) => setAnnualIncome(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
            />
            <input
              type="number"
              value={annualIncome}
              onChange={(e) => setAnnualIncome(Number(e.target.value))}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Monthly Debts: {formatCurrency(monthlyDebts)}
            </label>
            <input
              type="range"
              min="0"
              max="5000"
              step="50"
              value={monthlyDebts}
              onChange={(e) => setMonthlyDebts(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
            />
            <input
              type="number"
              value={monthlyDebts}
              onChange={(e) => setMonthlyDebts(Number(e.target.value))}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">
              Include car loans, credit cards, student loans, etc.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Down Payment: {formatCurrency(downPayment)}
            </label>
            <input
              type="range"
              min="0"
              max="500000"
              step="5000"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
            />
            <input
              type="number"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Interest Rate: {interestRate.toFixed(2)}%
            </label>
            <input
              type="range"
              min="1"
              max="10"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Amortization: {amortization} years
            </label>
            <select
              value={amortization}
              onChange={(e) => setAmortization(Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="15">15 years</option>
              <option value="20">20 years</option>
              <option value="25">25 years</option>
              <option value="30">30 years</option>
            </select>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          <div className="bg-primary-50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">You Can Afford</h4>
            <div className="text-4xl font-bold text-primary-600 mb-2">
              {formatCurrency(maxHomePrice)}
            </div>
            <p className="text-gray-600">Maximum home price</p>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700 font-medium">GDS Ratio</span>
                <span className={`font-semibold ${32 <= 32 ? 'text-green-600' : 'text-red-600'}`}>
                  32%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-500 h-2 rounded-full" 
                  style={{ width: '32%' }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">Should be ≤ 32%</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700 font-medium">TDS Ratio</span>
                <span className={`font-semibold ${tdsRatio <= 40 ? 'text-green-600' : 'text-red-600'}`}>
                  {tdsRatio.toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${tdsRatio <= 40 ? 'bg-green-500' : 'bg-red-500'}`}
                  style={{ width: `${Math.min(tdsRatio, 100)}%` }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">Should be ≤ 40%</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Monthly Income</span>
              <span className="text-gray-900 font-semibold">{formatCurrency(monthlyIncome)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Max Monthly Payment</span>
              <span className="text-gray-900 font-semibold">{formatCurrency(maxMonthlyPayment)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Monthly Debts</span>
              <span className="text-gray-900 font-semibold">{formatCurrency(monthlyDebts)}</span>
            </div>
          </div>

          <div className="pt-4 border-t">
            <p className="text-sm text-gray-600 mb-4">
              <strong>Note:</strong> This is an estimate. Actual affordability depends on credit score, employment history, and lender requirements.
            </p>
            <button className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
              Get Pre-Qualified
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
