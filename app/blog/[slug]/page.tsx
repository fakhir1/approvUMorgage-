import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { createServerSupabaseClient } from '@/lib/supabase/server';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import Link from 'next/link';
import { SchemaMarkup, generateArticleSchema, generateBreadcrumbSchema } from '@/components/seo/SchemaMarkup';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  featured_image_url: string | null;
  author_id: string | null;
  category: string | null;
  tags: string[] | null;
  meta_description: string | null;
  meta_title: string | null;
  published_at: string | null;
  created_at: string;
  updated_at: string;
  status: string;
  profiles?: {
    first_name: string | null;
    last_name: string | null;
    email: string;
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const supabase = await createServerSupabaseClient();

  const { data: post } = await supabase
    .from('blog_posts')
    .select('title, excerpt, meta_title, meta_description, featured_image_url')
    .eq('slug', slug)
    .eq('status', 'published')
    .single();

  if (!post) {
    return {
      title: 'Blog Post Not Found | approvU',
    };
  }

  return {
    title: post.meta_title || `${post.title} | approvU Blog`,
    description: post.meta_description || post.excerpt || '',
    openGraph: {
      title: post.title,
      description: post.excerpt || '',
      images: post.featured_image_url ? [post.featured_image_url] : [],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = await createServerSupabaseClient();

  const { data: postData, error } = await supabase
    .from('blog_posts')
    .select('*, profiles(first_name, last_name, email)')
    .eq('slug', slug)
    .eq('status', 'published')
    .single();

  if (error || !postData) {
    notFound();
  }

  const post = postData as unknown as BlogPost;

  // Fetch related posts
  const { data: relatedPosts } = await supabase
    .from('blog_posts')
    .select('id, title, slug, excerpt, featured_image_url, published_at, category')
    .eq('status', 'published')
    .eq('category', post.category || '')
    .neq('id', post.id)
    .order('published_at', { ascending: false })
    .limit(3);

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Unknown date';
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch {
      return 'Unknown date';
    }
  };

  const getAuthorName = () => {
    const profiles = post.profiles as { first_name: string | null; last_name: string | null; email: string } | undefined;
    if (profiles?.first_name && profiles?.last_name) {
      return `${profiles.first_name} ${profiles.last_name}`;
    }
    return profiles?.email || 'approvU Team';
  };

  const getReadTime = (content: string | null) => {
    if (!content) return '5 min';
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min`;
  };

  // Generate schema markup for SEO
  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.excerpt || post.meta_description || '',
    url: `https://www.approvu.ca/blog/${post.slug}`,
    datePublished: post.published_at || post.created_at,
    dateModified: post.updated_at,
    authorName: getAuthorName(),
    imageUrl: post.featured_image_url || undefined
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.approvu.ca' },
    { name: 'Blog', url: 'https://www.approvu.ca/blog' },
    { name: post.title, url: `https://www.approvu.ca/blog/${post.slug}` }
  ]);

  return (
    <div className="min-h-screen bg-background">
      {/* Schema Markup for Article SEO */}
      <SchemaMarkup schema={[articleSchema, breadcrumbSchema]} />
      
      <main>
        {/* Back Navigation */}
        <section className="py-6 px-4 bg-muted/30 border-b">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </section>

        {/* Hero/Header */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Category Badge */}
            {post.category && (
              <div>
                <Badge variant="secondary" className="text-sm capitalize">
                  {post.category.replace('-', ' ')}
                </Badge>
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-xl text-muted-foreground">{post.excerpt}</p>
            )}

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{getAuthorName()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.published_at)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{getReadTime(post.content)} read</span>
              </div>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Featured Image */}
        {post.featured_image_url && (
          <section className="py-8 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <img
                  src={post.featured_image_url}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
        )}

        {/* Content */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div
              className="prose prose-lg max-w-none
                         prose-headings:text-primary prose-headings:font-bold
                         prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
                         prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
                         prose-p:text-muted-foreground prose-p:leading-relaxed
                         prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                         prose-strong:text-foreground prose-strong:font-semibold
                         prose-ul:my-6 prose-li:my-2
                         prose-img:rounded-lg prose-img:shadow-lg"
              dangerouslySetInnerHTML={{ __html: post.content || '' }}
            />
          </div>
        </section>

        {/* Share Section */}
        <section className="py-8 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Found this article helpful?
                    </h3>
                    <p className="text-muted-foreground">
                      Share it with others who might benefit
                    </p>
                  </div>
                  <Button className="gap-2">
                    <Share2 className="h-4 w-4" />
                    Share Article
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts && relatedPosts.length > 0 && (
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Related Articles
                </h2>
                <p className="text-lg text-muted-foreground">
                  Continue exploring mortgage insights
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="group"
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                      {relatedPost.featured_image_url && (
                        <div className="relative aspect-video overflow-hidden rounded-t-lg">
                          <img
                            src={relatedPost.featured_image_url}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <CardContent className="p-6">
                        {relatedPost.category && (
                          <Badge variant="secondary" className="mb-3 capitalize">
                            {relatedPost.category.replace('-', ' ')}
                          </Badge>
                        )}
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        {relatedPost.excerpt && (
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {relatedPost.excerpt}
                          </p>
                        )}
                        <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>{formatDate(relatedPost.published_at)}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-12">
                <Link href="/blog">
                  <Button variant="outline" size="lg">
                    View All Articles
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get expert mortgage advice tailored to your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/mortgage/approval/">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Get Pre-Approved
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white/10"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
