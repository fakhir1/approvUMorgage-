import { Metadata } from "next";

type Props = {
  params: Promise<{ province: string; city: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { province, city } = await params;
  const cityName = city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const provinceName = province.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  return {
    title: `Mortgage Broker in ${cityName}, ${provinceName}`,
    description: `Find the best mortgage brokers in ${cityName}, ${provinceName}. Local experts ready to help you.`,
  };
}

export default async function CityBrokerPage({ params }: Props) {
  const { province, city } = await params;
  const cityName = city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const provinceName = province.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      <nav className="text-sm mb-6">
        <a href="/mortgage" className="text-primary-600 hover:underline">Mortgage</a>
        {' > '}
        <a href="/mortgage/brokers" className="text-primary-600 hover:underline">Brokers</a>
        {' > '}
        <a href={`/mortgage/brokers/${province}`} className="text-primary-600 hover:underline">{provinceName}</a>
        {' > '}
        <span className="text-gray-600">{cityName}</span>
      </nav>

      <h1 className="text-4xl font-bold mb-6">Mortgage Broker in {cityName}, {provinceName}</h1>
      
      <div className="prose prose-lg max-w-none mb-12">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Looking for a trusted mortgage broker in {cityName}? Our local experts can help you navigate the mortgage process and find the best rates.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose a Local Broker in {cityName}?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Deep knowledge of the {cityName} real estate market</li>
          <li>Understanding of local property values and trends</li>
          <li>Relationships with lenders serving {provinceName}</li>
          <li>Personalized service and face-to-face meetings</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Mortgage Services in {cityName}</h2>
        <p>Our brokers offer comprehensive mortgage services including:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>First-time homebuyer mortgages</li>
          <li>Mortgage refinancing</li>
          <li>Renewal assistance</li>
          <li>Investment property financing</li>
          <li>Self-employed mortgage solutions</li>
        </ul>
      </div>

      <div className="bg-primary-50 p-8 rounded-lg">
        <h3 className="text-2xl font-semibold mb-4">Connect with a {cityName} Mortgage Broker</h3>
        <p className="mb-6">Get expert mortgage advice from local professionals</p>
        <a 
          href="/mortgage-appointment-online"
          className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
        >
          Book Your Appointment
        </a>
      </div>
    </article>
  );
}
