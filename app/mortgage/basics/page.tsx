import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mortgage Basics",
  description: "Learn the fundamentals of mortgages in Canada including terms, concepts, and essential information.",
};

export default function MortgageBasicsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Mortgage Basics Hub</h1>
      <p className="text-lg text-gray-700 mb-8">
        Understanding mortgage fundamentals is crucial for making informed decisions about home financing.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <a href="/mortgage/basics/mortgage-basics" className="p-6 border rounded-lg hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">What is a Mortgage?</h3>
          <p className="text-gray-600">Learn the basic definition and components of a mortgage</p>
        </a>
        <a href="/mortgage/basics/conventional-mortgage" className="p-6 border rounded-lg hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Conventional Mortgage</h3>
          <p className="text-gray-600">Understanding conventional mortgage requirements</p>
        </a>
        <a href="/mortgage/basics/high-ratio-mortgage" className="p-6 border rounded-lg hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">High Ratio Mortgage</h3>
          <p className="text-gray-600">When you have less than 20% down payment</p>
        </a>
        <a href="/mortgage/basics/mortgage-amortization" className="p-6 border rounded-lg hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Mortgage Amortization</h3>
          <p className="text-gray-600">How your mortgage is paid off over time</p>
        </a>
      </div>
    </div>
  );
}
