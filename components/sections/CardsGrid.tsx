import Link from "next/link";

interface Card {
  title: string;
  description: string;
  href: string;
  icon?: string;
}

interface CardsGridProps {
  cards: Card[];
  columns?: 2 | 3 | 4;
}

export default function CardsGrid({ cards, columns = 3 }: CardsGridProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6`}>
      {cards.map((card, index) => (
        <Link
          key={index}
          href={card.href}
          className="group block p-6 bg-white rounded-lg border border-gray-200 hover:border-primary-500 hover:shadow-lg transition-all duration-200"
        >
          {card.icon && (
            <div className="text-4xl mb-4">{card.icon}</div>
          )}
          <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-primary-600 transition">
            {card.title}
          </h3>
          <p className="text-gray-600 mb-3">{card.description}</p>
          <span className="text-primary-600 font-medium inline-flex items-center">
            Learn More
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </Link>
      ))}
    </div>
  );
}
