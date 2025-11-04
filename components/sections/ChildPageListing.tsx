import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface ChildPage {
  id?: string;
  title: string;
  description?: string;
  excerpt?: string;
  href?: string;
  path?: string;
  icon?: string;
  badge?: string;
  featured?: boolean;
  featured_image?: string;
  order_position?: number;
}

interface ChildPageListingProps {
  pages: ChildPage[];
  layout?: "grid" | "list";
  columns?: 2 | 3 | 4;
  showIcons?: boolean;
  showImages?: boolean;
  className?: string;
}

export default function ChildPageListing({
  pages,
  layout = "grid",
  columns = 3,
  showIcons = true,
  showImages = false,
  className = "",
}: ChildPageListingProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  // Sort pages by order_position if available
  const sortedPages = [...pages].sort(
    (a, b) => (a.order_position || 0) - (b.order_position || 0)
  );

  // Helper to get the correct href
  const getHref = (page: ChildPage): string => page.href || page.path || "#";

  // Helper to get the description
  const getDescription = (page: ChildPage): string =>
    page.description || page.excerpt || "";

  if (layout === "list") {
    return (
      <div className={`space-y-4 ${className}`}>
        {sortedPages.map((page, index) => (
          <Link
            key={page.id || index}
            href={getHref(page)}
            className="block group animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <Card className="hover:shadow-lg transition-all duration-300 hover:border-primary">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {showIcons && page.icon && (
                        <span className="text-2xl flex-shrink-0">{page.icon}</span>
                      )}
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {page.title}
                        {page.featured && <Badge className="ml-2 bg-amber-500">Featured</Badge>}
                        {page.badge && !page.featured && (
                          <Badge variant="secondary" className="ml-2">
                            {page.badge}
                          </Badge>
                        )}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {getDescription(page)}
                    </CardDescription>
                  </div>
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className={`grid gap-6 ${gridCols[columns]} ${className}`}>
      {sortedPages.map((page, index) => (
        <Link
          key={page.id || index}
          href={getHref(page)}
          className="block group animate-fade-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-primary">
            {showImages && page.featured_image && (
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={page.featured_image}
                  alt={page.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            )}
            <CardHeader>
              {showIcons && page.icon && (
                <div className="text-4xl mb-3 group-hover:animate-gentle-bounce">{page.icon}</div>
              )}
              <CardTitle className="group-hover:text-primary transition-colors">
                {page.title}
                {page.featured && <Badge className="ml-2 bg-amber-500">Featured</Badge>}
                {page.badge && !page.featured && (
                  <Badge variant="secondary" className="ml-2">
                    {page.badge}
                  </Badge>
                )}
              </CardTitle>
              <CardDescription>{getDescription(page)}</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );
}
