import { notFound } from 'next/navigation';
import { createServerSupabaseClient } from '@/lib/supabase/server';
import { DynamicPageRenderer } from '@/components/templates/DynamicPageRenderer';
import { Metadata } from 'next';

// Force dynamic rendering for all pages
export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

// Generate metadata for the page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug: slugArray } = await params;
  const slug = slugArray.join('/');
  const supabase = await createServerSupabaseClient();

  const { data: page } = await supabase
    .from('pages' as any)
    .select('*')
    .eq('path', slug)  // Changed from 'slug' to 'path'
    .eq('status', 'published')
    .single();

  if (!page) {
    return {
      title: 'Page Not Found',
    };
  }

  const pageData = page as any;

  return {
    title: pageData.seo_title || pageData.title,
    description: pageData.meta_description || '',
    keywords: pageData.meta_keywords || '',
    openGraph: {
      title: pageData.seo_title || pageData.title,
      description: pageData.meta_description || '',
      images: pageData.og_image ? [pageData.og_image] : [],
    },
  };
}

// Main page component
export default async function DynamicPage({ params }: PageProps) {
  const { slug: slugArray } = await params;
  const slug = slugArray.join('/');
  
  // Skip static file paths (images, fonts, etc.)
  const staticExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.ico', '.pdf', '.woff', '.woff2', '.ttf', '.eot'];
  const isStaticFile = staticExtensions.some(ext => slug.toLowerCase().endsWith(ext));
  
  if (isStaticFile || slug.startsWith('images/') || slug.startsWith('_next/')) {
    notFound();
    return null;
  }
  
  const supabase = await createServerSupabaseClient();

  // Fetch page data - database uses 'path' not 'slug'
  const { data: page, error } = await supabase
    .from('pages' as any)
    .select('*')
    .eq('path', slug)  // Changed from 'slug' to 'path'
    .eq('status', 'published')
    .single();

  if (error || !page) {
    notFound();
  }

  return <DynamicPageRenderer page={page as any} />;
}
