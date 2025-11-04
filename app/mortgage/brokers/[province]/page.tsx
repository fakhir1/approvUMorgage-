import { Metadata } from "next";

type Props = {
  params: Promise<{ province: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { province } = await params;
  const provinceName = province.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  return {
    title: `Mortgage Brokers in ${provinceName}`,
    description: `Find experienced mortgage brokers in ${provinceName}. Compare local experts and get the best rates.`,
  };
}

export default async function ProvinceBrokersPage({ params }: Props) {
  const { province } = await params;
  const provinceName = province.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  // Example cities for Ontario
  const cities = province === 'ontario' ? [
    "Toronto", "Ottawa", "Mississauga", "Brampton", "Hamilton", "London",
    "Markham", "Vaughan", "Kitchener", "Windsor", "Oakville", "Burlington"
  ] : ["City 1", "City 2", "City 3"];

  return (
    <div className="container mx-auto px-4 py-12">
      <nav className="text-sm mb-6">
        <a href="/mortgage" className="text-primary-600 hover:underline">Mortgage</a>
        {' > '}
        <a href="/mortgage/brokers" className="text-primary-600 hover:underline">Brokers</a>
        {' > '}
        <span className="text-gray-600">{provinceName}</span>
      </nav>

      <h1 className="text-4xl font-bold mb-6">Mortgage Brokers in {provinceName}</h1>
      <p className="text-lg text-gray-700 mb-8">
        Find trusted mortgage brokers in cities across {provinceName}.
      </p>
      
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cities.map((city) => (
          <a 
            key={city}
            href={`/mortgage/brokers/${province}/${city.toLowerCase().replace(/\s+/g, '-')}`}
            className="p-4 border rounded-lg hover:shadow-md transition hover:border-primary-500"
          >
            <h3 className="font-semibold text-gray-900">{city}</h3>
            <span className="text-sm text-primary-600">View Brokers →</span>
          </a>
        ))}
      </div>
    </div>
  );
}
