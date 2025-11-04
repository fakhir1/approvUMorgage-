import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  return {
    title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    description: `Learn about ${slug.replace(/-/g, ' ')} and how it applies to your mortgage in Canada.`,
  };
}

export default async function BasicsArticlePage({ params }: Props) {
  const { slug } = await params;
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      <nav className="text-sm mb-6">
        <a href="/mortgage" className="text-primary-600 hover:underline">Mortgage</a>
        {' > '}
        <a href="/mortgage/basics" className="text-primary-600 hover:underline">Basics</a>
        {' > '}
        <span className="text-gray-600">{title}</span>
      </nav>

      <h1 className="text-4xl font-bold mb-6">{title}</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          This is a placeholder article for <strong>{title}</strong>. Content will be managed through your CMS or Markdown files.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">What You Need to Know</h2>
        <p>
          Detailed information about {slug.replace(/-/g, ' ')} will be displayed here once you integrate your content management system.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Key Takeaways</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Important point about this topic</li>
          <li>Another crucial aspect to understand</li>
          <li>How this affects your mortgage decision</li>
        </ul>
      </div>

      <div className="mt-12 p-6 bg-primary-50 rounded-lg">
        <h3 className="text-xl font-semibold mb-3">Ready to Apply?</h3>
        <p className="mb-4">Get pre-approved for your mortgage today</p>
        <a 
          href="/mortgage-appointment-online"
          className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
        >
          Get Started
        </a>
      </div>
    </article>
  );
}
