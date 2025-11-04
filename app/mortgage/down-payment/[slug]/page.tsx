import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  return {
    title,
    description: `${title} - Down payment strategies and information for Canadian homebuyers.`,
  };
}

export default async function DownPaymentArticle({ params }: Props) {
  const { slug } = await params;
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      <nav className="text-sm mb-6">
        <a href="/mortgage" className="text-primary-600 hover:underline">Mortgage</a>
        {' > '}
        <a href="/mortgage/down-payment" className="text-primary-600 hover:underline">Down Payment</a>
        {' > '}
        <span className="text-gray-600">{title}</span>
      </nav>

      <h1 className="text-4xl font-bold mb-6">{title}</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Learn about down payment requirements and strategies for home purchases in Canada.
        </p>
      </div>

      <div className="mt-12 p-6 bg-primary-50 rounded-lg">
        <h3 className="text-xl font-semibold mb-3">Calculate Your Down Payment</h3>
        <p className="mb-4">Use our calculator to determine how much you need</p>
        <a 
          href="/mortgage/calculators/down-payment-calculator"
          className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
        >
          Calculate Now
        </a>
      </div>
    </article>
  );
}
