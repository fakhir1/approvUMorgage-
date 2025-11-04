import { ReactNode } from "react";
import Breadcrumbs, { BreadcrumbItem } from "@/components/layout/Breadcrumbs";
import CTASection from "@/components/sections/CTASection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export interface RelatedPage {
  id: string;
  title: string;
  path: string;
  excerpt: string;
}

interface ArticlePageTemplateProps {
  // SEO
  title: string;
  metaDescription?: string;

  // Article
  headline: string;
  excerpt?: string;
  author?: string;
  publishedAt?: Date;
  featuredImage?: string;
  category?: string;
  tags?: string[];

  // Navigation
  breadcrumbs?: BreadcrumbItem[];

  // Content
  content: ReactNode;

  // Related
  relatedPages?: RelatedPage[];
  relatedTitle?: string;

  // CTA
  showCTA?: boolean;
  ctaHeadline?: string;
  ctaDescription?: string;
  ctaPrimaryText?: string;
  ctaPrimaryLink?: string;
}

export function ArticlePageTemplate({
  title,
  metaDescription,
  headline,
  excerpt,
  author = "approvU Mortgage Team",
  publishedAt = new Date(),
  featuredImage,
  category,
  tags = [],
  breadcrumbs = [],
  content,
  relatedPages = [],
  relatedTitle = "Related Articles",
  showCTA = true,
  ctaHeadline = "Ready to Take the Next Step?",
  ctaDescription = "Get expert mortgage advice tailored to your needs",
  ctaPrimaryText = "Get Pre-Approved",
  ctaPrimaryLink = "/mortgage-appointment-online/",
}: ArticlePageTemplateProps) {
  const formattedDate = publishedAt.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      {/* Breadcrumbs */}
      {breadcrumbs.length > 0 && (
        <section className="py-4 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        </section>
      )}

      {/* Article Header */}
      <article className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            {category && (
              <div className="mb-4">
                <Badge variant="secondary" className="text-sm">
                  {category}
                </Badge>
              </div>
            )}

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              {headline}
            </h1>

            {/* Excerpt */}
            {excerpt && (
              <p className="text-xl text-muted-foreground mb-6">
                {excerpt}
              </p>
            )}

            {/* Article Meta */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{author}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{formattedDate}</span>
              </div>
            </div>

            {/* Featured Image */}
            {featuredImage && (
              <div className="mb-8 rounded-lg overflow-hidden">
                <img
                  src={featuredImage}
                  alt={headline}
                  className="w-full h-auto"
                />
              </div>
            )}

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-8 animate-fade-in">
              {content}
            </div>

            {/* Tags */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-8 border-t">
                <span className="text-sm font-medium text-muted-foreground">Tags:</span>
                {tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </article>

        {/* Related Articles */}
        {relatedPages.length > 0 && (
          <section className="py-16 px-4 bg-muted/30">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-primary">
                {relatedTitle}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPages.map((page) => (
                  <Link key={page.id} href={page.path} className="group">
                    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border-2 border-transparent hover:border-primary/20">
                      <CardHeader>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {page.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="line-clamp-3">
                          {page.excerpt}
                        </CardDescription>
                        <div className="mt-4 flex items-center text-sm text-primary group-hover:translate-x-1 transition-transform">
                          Read more
                          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

      {/* Bottom CTA */}
      {showCTA && (
        <CTASection
          title={ctaHeadline}
          description={ctaDescription}
          ctaText={ctaPrimaryText}
          ctaLink={ctaPrimaryLink}
        />
      )}
    </>
  );
}