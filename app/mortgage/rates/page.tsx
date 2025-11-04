import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mortgage Rates Canada",
  description: "Current mortgage rates across Canada. Compare fixed and variable rates by province.",
};

export default function RatesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Current Mortgage Rates in Canada</h1>
      <p className="text-lg text-gray-700 mb-8">
        Compare the latest mortgage rates across Canada. Updated regularly.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="p-6 bg-white border rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Fixed Rates</h3>
          <a href="/mortgage/rates/fixed" className="text-primary-600 hover:underline">View All Fixed Rates →</a>
        </div>
        <div className="p-6 bg-white border rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Variable Rates</h3>
          <a href="/mortgage/rates/variable" className="text-primary-600 hover:underline">View All Variable Rates →</a>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-6">Rates by Province</h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {['Ontario', 'British Columbia', 'Alberta', 'Quebec', 'Manitoba', 'Saskatchewan', 'Nova Scotia', 'New Brunswick'].map((province) => (
          <a 
            key={province}
            href={`/mortgage/rates/${province.toLowerCase().replace(/\s+/g, '-')}`}
            className="p-4 border rounded-lg hover:shadow-md transition hover:border-primary-500"
          >
            <h3 className="font-semibold">{province}</h3>
            <span className="text-sm text-primary-600">View Rates →</span>
          </a>
        ))}
      </div>
    </div>
  );
}
