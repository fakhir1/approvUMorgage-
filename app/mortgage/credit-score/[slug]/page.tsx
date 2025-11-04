import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  return {
    title,
    description: `${title} - Essential credit score information for mortgage approval in Canada.`,
  };
}

export default async function CreditScoreArticle({ params }: Props) {
  const { slug } = await params;
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      <nav className="text-sm mb-6">
        <a href="/mortgage" className="text-primary-600 hover:underline">Mortgage</a>
        {' > '}
        <a href="/mortgage/credit-score" className="text-primary-600 hover:underline">Credit Score</a>
        {' > '}
        <span className="text-gray-600">{title}</span>
      </nav>

      <h1 className="text-4xl font-bold mb-6">{title}</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Understanding credit scores is crucial for mortgage approval and getting the best rates.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Credit Score Impact on Mortgages</h2>
        <p>Your credit score plays a significant role in your mortgage application and the interest rate you'll receive.</p>
      </div>

      <div className="mt-12 p-6 bg-primary-50 rounded-lg">
        <h3 className="text-xl font-semibold mb-3">Check Your Mortgage Options</h3>
        <p className="mb-4">Get pre-approved regardless of your credit score</p>
        <a 
          href="/mortgage-appointment-online"
          className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
        >
          Get Pre-Approved
        </a>
      </div>
    </article>
  );
}
