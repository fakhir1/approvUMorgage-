"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  slug: string;
  category: string;
  tags?: string[];
  author?: {
    name: string;
    avatar?: string;
  };
  publishedAt: string;
  updatedAt?: string;
  featured_image?: string;
  thumbnail?: string;
  readTime?: string;
  featured?: boolean;
}

interface PostGridProps {
  posts: Post[];
  columns?: 2 | 3 | 4;
  showFilters?: boolean;
  showPagination?: boolean;
  postsPerPage?: number;
  showFeatured?: boolean;
  showAuthor?: boolean;
  showDate?: boolean;
  showReadTime?: boolean;
  showExcerpt?: boolean;
  className?: string;
}

export default function PostGrid({
  posts,
  columns = 3,
  showFilters = true,
  showPagination = true,
  postsPerPage = 9,
  showFeatured = true,
  showAuthor = true,
  showDate = true,
  showReadTime = true,
  showExcerpt = true,
  className = "",
}: PostGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(posts.map((post) => post.category)))];

  // Filter posts
  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  // Separate featured posts
  const featuredPosts = showFeatured
    ? filteredPosts.filter((post) => post.featured)
    : [];
  const regularPosts = showFeatured
    ? filteredPosts.filter((post) => !post.featured)
    : filteredPosts;

  // Pagination
  const totalPages = Math.ceil(regularPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = regularPosts.slice(startIndex, endIndex);

  // Grid columns
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  // Format date
  const formatDate = (dateString: string): string => {
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

  // Get image
  const getImage = (post: Post): string | undefined => post.featured_image || post.thumbnail;

  // Reset page when category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  // Post card component
  const PostCard = ({ post, featured = false }: { post: Post; featured?: boolean }) => (
    <Link href={`/blog/${post.slug}`} className="block group animate-fade-in h-full">
      <Card
        className={`h-full hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-primary ${
          featured ? "border-2 border-primary/50" : ""
        }`}
      >
        {getImage(post) && (
          <div className={`${featured ? "aspect-[2/1]" : "aspect-video"} overflow-hidden`}>
            <img
              src={getImage(post)}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        )}
        <CardHeader>
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <Badge className="bg-primary">{post.category}</Badge>
            {featured && <Badge className="bg-amber-500">Featured</Badge>}
            {showReadTime && post.readTime && (
              <span className="text-xs text-muted-foreground">📖 {post.readTime}</span>
            )}
          </div>
          <CardTitle
            className={`group-hover:text-primary transition-colors ${featured ? "text-2xl" : "text-xl"} line-clamp-2`}
          >
            {post.title}
          </CardTitle>
        </CardHeader>
        {showExcerpt && (
          <CardContent>
            <CardDescription className={`${featured ? "text-base" : "text-sm"} line-clamp-3`}>
              {post.excerpt}
            </CardDescription>
            {(showAuthor || showDate) && (
              <div className="flex items-center gap-3 mt-4 pt-4 border-t text-sm text-muted-foreground">
                {showAuthor && post.author && (
                  <div className="flex items-center gap-2">
                    {post.author.avatar && (
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-6 h-6 rounded-full"
                      />
                    )}
                    <span>{post.author.name}</span>
                  </div>
                )}
                {showDate && <span>•</span>}
                {showDate && <span>{formatDate(post.publishedAt)}</span>}
              </div>
            )}
          </CardContent>
        )}
      </Card>
    </Link>
  );

  return (
    <div className={`w-full ${className}`}>
      {/* Category Filters */}
      {showFilters && categories.length > 1 && (
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => handleCategoryChange(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>
      )}

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">Featured Articles</h2>
          <div className={`grid gap-8 ${featuredPosts.length === 1 ? "grid-cols-1" : "md:grid-cols-2"}`}>
            {featuredPosts.map((post, index) => (
              <div key={post.id} style={{ animationDelay: `${index * 100}ms` }}>
                <PostCard post={post} featured={true} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Regular Posts Grid */}
      {paginatedPosts.length > 0 ? (
        <>
          {featuredPosts.length > 0 && (
            <h2 className="text-2xl font-bold text-primary mb-6">All Articles</h2>
          )}
          <div className={`grid gap-6 ${gridCols[columns]} mb-12`}>
            {paginatedPosts.map((post, index) => (
              <div
                key={post.id}
                style={{ animationDelay: `${(index + featuredPosts.length) * 100}ms` }}
              >
                <PostCard post={post} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">
            No articles found in this category.
          </p>
        </div>
      )}

      {/* Pagination */}
      {showPagination && totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <Button
            variant="outline"
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            ← Previous
          </Button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              // Show first page, last page, current page, and pages around current
              const showPage =
                page === 1 ||
                page === totalPages ||
                (page >= currentPage - 1 && page <= currentPage + 1);

              if (!showPage) {
                // Show ellipsis
                if (page === currentPage - 2 || page === currentPage + 2) {
                  return (
                    <span key={page} className="px-2 text-muted-foreground">
                      ...
                    </span>
                  );
                }
                return null;
              }

              return (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  onClick={() => setCurrentPage(page)}
                  className="w-10"
                >
                  {page}
                </Button>
              );
            })}
          </div>

          <Button
            variant="outline"
            onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
          >
            Next →
          </Button>
        </div>
      )}

      {/* Results Summary */}
      {showPagination && regularPosts.length > 0 && (
        <p className="text-center text-sm text-muted-foreground mt-4">
          Showing {startIndex + 1}-{Math.min(endIndex, regularPosts.length)} of{" "}
          {regularPosts.length} articles
          {selectedCategory !== "All" && ` in ${selectedCategory}`}
        </p>
      )}
    </div>
  );
}
