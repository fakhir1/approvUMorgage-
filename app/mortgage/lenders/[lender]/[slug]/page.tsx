import { Metadata } from "next";

type Props = {
  params: Promise<{ lender: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lender, slug } = await params;
  const lenderName = lender.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  return {
    title: `${lenderName} - ${title}`,
    description: `${title} from ${lenderName}. Compare rates and mortgage products.`,
  };
}

export default async function LenderPage({ params }: Props) {
  const { lender, slug } = await params;
  const lenderName = lender.split('-').map(word => word.toUpperCase()).join(' ');
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      <nav className="text-sm mb-6">
        <a href="/mortgage" className="text-primary-600 hover:underline">Mortgage</a>
        {' > '}
        <a href="/mortgage/lenders" className="text-primary-600 hover:underline">Lenders</a>
        {' > '}
        <a href={`/mortgage/lenders/${lender}`} className="text-primary-600 hover:underline">{lenderName}</a>
        {' > '}
        <span className="text-gray-600">{title}</span>
      </nav>

      <h1 className="text-4xl font-bold mb-6">{lenderName} - {title}</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Detailed information about {lenderName} mortgage products and rates.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">About {lenderName}</h2>
        <p>Information about this lender's mortgage offerings, rates, and terms.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Compare Rates</h2>
        <p>We can help you compare {lenderName} rates with other lenders to find your best option.</p>
      </div>

      <div className="mt-12 p-6 bg-primary-50 rounded-lg">
        <h3 className="text-xl font-semibold mb-3">Compare Mortgage Lenders</h3>
        <p className="mb-4">Get the best rates from multiple lenders</p>
        <a 
          href="/mortgage-appointment-online"
          className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
        >
          Compare Rates
        </a>
      </div>
    </article>
  );
}
