import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface RelatedItem {
  id?: string;
  title: string;
  description?: string;
  excerpt?: string;
  href?: string;
  path?: string;
  category?: string;
  date?: string;
  publishedAt?: string;
  thumbnail?: string;
  featured_image?: string;
}

interface RelatedContentProps {
  items: RelatedItem[];
  title?: string;
  layout?: "grid" | "sidebar" | "list";
  columns?: 2 | 3 | 4;
  showCategory?: boolean;
  showDate?: boolean;
  showImages?: boolean;
  className?: string;
}

export default function RelatedContent({
  items,
  title = "Related Content",
  layout = "grid",
  columns = 3,
  showCategory = true,
  showDate = true,
  showImages = true,
  className = "",
}: RelatedContentProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  // Helper functions
  const getHref = (item: RelatedItem): string => item.href || item.path || "#";
  const getDescription = (item: RelatedItem): string =>
    item.description || item.excerpt || "";
  const getDate = (item: RelatedItem): string | undefined =>
    item.date || item.publishedAt;
  const getImage = (item: RelatedItem): string | undefined =>
    item.thumbnail || item.featured_image;

  const formatDate = (dateString?: string): string => {
    if (!dateString) return "";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  // Sidebar layout (vertical, compact)
  if (layout === "sidebar") {
    return (
      <div className={`space-y-4 ${className}`}>
        {title && <h3 className="text-xl font-bold text-primary mb-4">{title}</h3>}
        <div className="space-y-4">
          {items.map((item, index) => (
            <Link
              key={item.id || index}
              href={getHref(item)}
              className="block group animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <Card className="hover:shadow-md transition-all duration-300 hover:border-primary">
                <CardHeader className="p-4">
                  {showImages && getImage(item) && (
                    <div className="aspect-video overflow-hidden rounded-lg mb-3">
                      <img
                        src={getImage(item)}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  )}
                  <CardTitle className="text-base group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </CardTitle>
                  {(showCategory || showDate) && (
                    <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                      {showCategory && item.category && (
                        <Badge variant="secondary" className="text-xs">
                          {item.category}
                        </Badge>
                      )}
                      {showDate && getDate(item) && <span>{formatDate(getDate(item))}</span>}
                    </div>
                  )}
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // List layout (horizontal, full-width)
  if (layout === "list") {
    return (
      <div className={`space-y-6 ${className}`}>
        {title && <h2 className="text-2xl font-bold text-primary mb-6">{title}</h2>}
        <div className="space-y-4">
          {items.map((item, index) => (
            <Link
              key={item.id || index}
              href={getHref(item)}
              className="block group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="hover:shadow-lg transition-all duration-300 hover:border-primary">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    {showImages && getImage(item) && (
                      <div className="w-48 h-32 flex-shrink-0 overflow-hidden rounded-lg">
                        <img
                          src={getImage(item)}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {item.title}
                        </CardTitle>
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
                      <CardDescription className="text-base mb-3">
                        {getDescription(item)}
                      </CardDescription>
                      {(showCategory || showDate) && (
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          {showCategory && item.category && (
                            <Badge variant="secondary">{item.category}</Badge>
                          )}
                          {showDate && getDate(item) && <span>{formatDate(getDate(item))}</span>}
                        </div>
                      )}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // Grid layout (default)
  return (
    <div className={className}>
      {title && <h2 className="text-2xl font-bold text-primary mb-8 text-center">{title}</h2>}
      <div className={`grid gap-6 ${gridCols[columns]}`}>
        {items.map((item, index) => (
          <Link
            key={item.id || index}
            href={getHref(item)}
            className="block group animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-primary">
              {showImages && getImage(item) && (
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={getImage(item)}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {getDescription(item)}
                </CardDescription>
                {(showCategory || showDate) && (
                  <div className="flex items-center gap-3 text-sm text-muted-foreground pt-3">
                    {showCategory && item.category && (
                      <Badge variant="secondary">{item.category}</Badge>
                    )}
                    {showDate && getDate(item) && <span>{formatDate(getDate(item))}</span>}
                  </div>
                )}
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
