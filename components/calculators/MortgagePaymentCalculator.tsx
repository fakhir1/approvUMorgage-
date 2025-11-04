"use client";

import { useState } from "react";
import { formatCurrency, calculateMonthlyPayment } from "@/lib/utils";

export default function MortgagePaymentCalculator() {
  const [homePrice, setHomePrice] = useState(500000);
  const [downPayment, setDownPayment] = useState(100000);
  const [interestRate, setInterestRate] = useState(5.5);
  const [amortization, setAmortization] = useState(25);
  const [paymentFrequency, setPaymentFrequency] = useState<'monthly' | 'biweekly' | 'weekly'>('monthly');

  const principal = homePrice - downPayment;
  const monthlyPayment = calculateMonthlyPayment(principal, interestRate, amortization);
  
  const payments = {
    monthly: monthlyPayment,
    biweekly: (monthlyPayment * 12) / 26,
    weekly: (monthlyPayment * 12) / 52,
  };

  const totalPaid = monthlyPayment * 12 * amortization;
  const totalInterest = totalPaid - principal;

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-bold mb-6 text-gray-900">Mortgage Payment Calculator</h3>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Home Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Home Price: {formatCurrency(homePrice)}
            </label>
            <input
              type="range"
              min="100000"
              max="2000000"
              step="10000"
              value={homePrice}
              onChange={(e) => setHomePrice(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
            />
            <input
              type="number"
              value={homePrice}
              onChange={(e) => setHomePrice(Number(e.target.value))}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          {/* Down Payment */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Down Payment: {formatCurrency(downPayment)} ({((downPayment / homePrice) * 100).toFixed(1)}%)
            </label>
            <input
              type="range"
              min="0"
              max={homePrice * 0.5}
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

          {/* Interest Rate */}
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
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              step="0.1"
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          {/* Amortization */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Amortization: {amortization} years
            </label>
            <input
              type="range"
              min="5"
              max="30"
              step="1"
              value={amortization}
              onChange={(e) => setAmortization(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
            />
            <select
              value={amortization}
              onChange={(e) => setAmortization(Number(e.target.value))}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="5">5 years</option>
              <option value="10">10 years</option>
              <option value="15">15 years</option>
              <option value="20">20 years</option>
              <option value="25">25 years</option>
              <option value="30">30 years</option>
            </select>
          </div>

          {/* Payment Frequency */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Payment Frequency
            </label>
            <select
              value={paymentFrequency}
              onChange={(e) => setPaymentFrequency(e.target.value as any)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="monthly">Monthly</option>
              <option value="biweekly">Bi-weekly</option>
              <option value="weekly">Weekly</option>
            </select>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          <div className="bg-primary-50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Your Payment</h4>
            <div className="text-4xl font-bold text-primary-600 mb-2">
              {formatCurrency(payments[paymentFrequency])}
            </div>
            <p className="text-gray-600 capitalize">{paymentFrequency}</p>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-700 font-medium">Mortgage Amount</span>
              <span className="text-gray-900 font-semibold">{formatCurrency(principal)}</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-700 font-medium">Total Interest</span>
              <span className="text-gray-900 font-semibold">{formatCurrency(totalInterest)}</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-700 font-medium">Total Paid</span>
              <span className="text-gray-900 font-semibold">{formatCurrency(totalPaid)}</span>
            </div>
          </div>

          <div className="pt-4 border-t">
            <h5 className="font-semibold text-gray-900 mb-3">Payment Breakdown</h5>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Principal + Interest</span>
                <span className="text-gray-900">{formatCurrency(monthlyPayment)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Property Tax (est.)</span>
                <span className="text-gray-900">{formatCurrency(homePrice * 0.01 / 12)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Insurance (est.)</span>
                <span className="text-gray-900">{formatCurrency(100)}</span>
              </div>
            </div>
          </div>

          <button className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
            Get Pre-Approved
          </button>
        </div>
      </div>
    </div>
  );
}
