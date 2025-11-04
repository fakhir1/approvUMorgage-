import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  return {
    title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    description: `Use our free ${slug.replace(/-/g, ' ')} to plan your mortgage.`,
  };
}

export default async function CalculatorPage({ params }: Props) {
  const { slug } = await params;
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <nav className="text-sm mb-6">
        <a href="/mortgage" className="text-primary-600 hover:underline">Mortgage</a>
        {' > '}
        <a href="/mortgage/calculators" className="text-primary-600 hover:underline">Calculators</a>
        {' > '}
        <span className="text-gray-600">{title}</span>
      </nav>

      <h1 className="text-4xl font-bold mb-6">{title}</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="text-center text-gray-500 py-12">
          <p className="text-xl mb-4">📊 Calculator Component</p>
          <p>Interactive calculator for {title.toLowerCase()} will be implemented here.</p>
          <p className="text-sm mt-4">This will include input fields, calculations, and visual results.</p>
        </div>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-semibold mb-4">How to Use This Calculator</h2>
        <p className="text-gray-700 mb-4">
          Enter your information in the fields above to calculate your mortgage details. Our calculator provides accurate estimates based on current market rates.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Understanding Your Results</h2>
        <p className="text-gray-700">
          The results will help you understand your mortgage costs and make informed decisions about your home purchase.
        </p>
      </div>

      <div className="mt-12 p-6 bg-primary-50 rounded-lg">
        <h3 className="text-xl font-semibold mb-3">Ready to Get Pre-Approved?</h3>
        <p className="mb-4">Talk to a mortgage expert about your options</p>
        <a 
          href="/mortgage-appointment-online"
          className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
        >
          Book Appointment
        </a>
      </div>
    </div>
  );
}
