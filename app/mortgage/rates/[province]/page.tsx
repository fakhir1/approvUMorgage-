import { Metadata } from "next";

type Props = {
  params: Promise<{ province: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { province } = await params;
  const provinceName = province.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  return {
    title: `Mortgage Rates in ${provinceName}`,
    description: `Current mortgage rates in ${provinceName}. Compare fixed and variable rates from multiple lenders.`,
  };
}

export default async function ProvinceRatesPage({ params }: Props) {
  const { province } = await params;
  const provinceName = province.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <nav className="text-sm mb-6">
        <a href="/mortgage" className="text-primary-600 hover:underline">Mortgage</a>
        {' > '}
        <a href="/mortgage/rates" className="text-primary-600 hover:underline">Rates</a>
        {' > '}
        <span className="text-gray-600">{provinceName}</span>
      </nav>

      <h1 className="text-4xl font-bold mb-6">Mortgage Rates in {provinceName}</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6">Current {provinceName} Rates</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left">Term</th>
                <th className="px-4 py-3 text-left">Fixed Rate</th>
                <th className="px-4 py-3 text-left">Variable Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="px-4 py-3">1 Year</td>
                <td className="px-4 py-3 font-semibold text-primary-600">5.99%</td>
                <td className="px-4 py-3 font-semibold text-primary-600">6.45%</td>
              </tr>
              <tr>
                <td className="px-4 py-3">3 Year</td>
                <td className="px-4 py-3 font-semibold text-primary-600">5.49%</td>
                <td className="px-4 py-3 font-semibold text-primary-600">6.20%</td>
              </tr>
              <tr>
                <td className="px-4 py-3">5 Year</td>
                <td className="px-4 py-3 font-semibold text-primary-600">4.99%</td>
                <td className="px-4 py-3 font-semibold text-primary-600">5.95%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          * Rates shown are examples and subject to change. Contact us for current rates.
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Understanding {provinceName} Mortgage Rates</h2>
        <p className="text-gray-700">
          Mortgage rates in {provinceName} are influenced by various factors including the Bank of Canada's policy rate, economic conditions, and lender competition.
        </p>
      </div>

      <div className="mt-12 p-6 bg-primary-50 rounded-lg">
        <h3 className="text-xl font-semibold mb-3">Get Your Best Rate</h3>
        <p className="mb-4">Let our experts find you the lowest rate in {provinceName}</p>
        <a 
          href="/mortgage-appointment-online"
          className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
        >
          Compare Rates
        </a>
      </div>
    </div>
  );
}
