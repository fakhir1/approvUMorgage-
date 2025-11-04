'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { Save, Eye, ArrowLeft, Calendar } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { RichTextEditor } from '@/components/sections/RichTextEditor';
import Link from 'next/link';

const blogPostSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title must be 200 characters or less'),
  slug: z.string()
    .min(1, 'Slug is required')
    .max(200, 'Slug must be 200 characters or less')
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug must be lowercase with hyphens'),
  excerpt: z.string().max(300, 'Excerpt must be 300 characters or less').optional(),
  content: z.string().min(1, 'Content is required'),
  featured_image: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  status: z.enum(['draft', 'published', 'archived']),
  category: z.string().min(1, 'Category is required'),
  tags: z.string().optional(),
  meta_description: z.string().max(160, 'Meta description must be 160 characters or less').optional(),
  meta_keywords: z.string().optional(),
  seo_title: z.string().max(60, 'SEO title must be 60 characters or less').optional(),
  author_id: z.string().uuid('Author is required'),
  published_at: z.string().optional(),
});

type BlogPostFormData = z.infer<typeof blogPostSchema>;

interface BlogPostEditorFormProps {
  initialData?: Partial<BlogPostFormData> & { id?: string };
  mode: 'create' | 'edit';
}

export function BlogPostEditorForm({ initialData, mode }: BlogPostEditorFormProps) {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [authors, setAuthors] = useState<Array<{ id: string; email: string; first_name?: string; last_name?: string }>>([]);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<BlogPostFormData>({
    resolver: zodResolver(blogPostSchema),
    defaultValues: {
      title: initialData?.title || '',
      slug: initialData?.slug || '',
      excerpt: initialData?.excerpt || '',
      content: initialData?.content || '',
      featured_image: initialData?.featured_image || '',
      status: initialData?.status || 'draft',
      category: initialData?.category || '',
      tags: initialData?.tags || '',
      meta_description: initialData?.meta_description || '',
      meta_keywords: initialData?.meta_keywords || '',
      seo_title: initialData?.seo_title || '',
      author_id: initialData?.author_id || '',
      published_at: initialData?.published_at || '',
    },
  });

  const title = watch('title');
  const slug = watch('slug');
  const excerpt = watch('excerpt');
  const content = watch('content');
  const metaDescription = watch('meta_description');
  const seoTitle = watch('seo_title');
  const status = watch('status');

  // Fetch authors and set current user as default
  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await fetch('/api/admin/users?role=admin');
        if (response.ok) {
          const data = await response.json();
          const authorsList = data.data || [];
          setAuthors(authorsList);
          
          // If creating new post and no author selected, try to set current user
          if (mode === 'create' && !initialData?.author_id && authorsList.length > 0) {
            // Fetch current user
            const userResponse = await fetch('/api/auth/user');
            if (userResponse.ok) {
              const userData = await userResponse.json();
              if (userData.user?.id) {
                // Check if current user is in the authors list
                const currentUserIsAuthor = authorsList.some((a: any) => a.id === userData.user.id);
                if (currentUserIsAuthor) {
                  setValue('author_id', userData.user.id);
                } else {
                  // Default to first author if current user not in list
                  setValue('author_id', authorsList[0].id);
                }
              }
            } else {
              // Fallback: set first author as default
              setValue('author_id', authorsList[0].id);
            }
          }
        }
      } catch (error) {
        console.error('Failed to fetch authors:', error);
      }
    };
    fetchAuthors();
  }, [mode, initialData?.author_id, setValue]);

  // Auto-generate slug from title
  useEffect(() => {
    if (mode === 'create' && title && !slug) {
      const generatedSlug = title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
      setValue('slug', generatedSlug);
    }
  }, [title, slug, mode, setValue]);

  // Track unsaved changes
  useEffect(() => {
    const subscription = watch(() => {
      setHasUnsavedChanges(true);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  // Auto-save (edit mode only)
  useEffect(() => {
    if (mode === 'edit' && hasUnsavedChanges && initialData?.id) {
      const timer = setTimeout(() => {
        handleSubmit(onSubmit)();
      }, 10000); // Auto-save every 10 seconds

      return () => clearTimeout(timer);
    }
  }, [content, hasUnsavedChanges, mode]);

  // Warn before leaving with unsaved changes
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [hasUnsavedChanges]);

  const onSubmit = async (data: BlogPostFormData) => {
    setIsSaving(true);
    try {
      const url = mode === 'create' 
        ? '/api/admin/blog' 
        : `/api/admin/blog?id=${initialData?.id}`;
      
      const method = mode === 'create' ? 'POST' : 'PUT';

      const payload = {
        ...data,
        // If status is published and no published_at date, set to now
        published_at: data.status === 'published' && !data.published_at 
          ? new Date().toISOString() 
          : data.published_at || null,
      };

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to save blog post');
      }

      const result = await response.json();
      
      toast.success(mode === 'create' ? 'Blog post created successfully' : 'Blog post updated successfully');
      setHasUnsavedChanges(false);

      if (mode === 'create' && result.data?.id) {
        router.push(`/admin/blog/${result.data.id}`);
      }
    } catch (error) {
      console.error('Error saving blog post:', error);
      toast.error('Failed to save blog post');
    } finally {
      setIsSaving(false);
    }
  };

  const handlePreview = () => {
    if (slug) {
      window.open(`/blog/${slug}`, '_blank');
    } else {
      toast.error('Please enter a slug to preview');
    }
  };

  const getAuthorName = (author: typeof authors[0]) => {
    if (author.first_name && author.last_name) {
      return `${author.first_name} ${author.last_name}`;
    }
    return author.email;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Header Actions */}
      <div className="flex items-center justify-between">
        <Link href="/admin/blog">
          <Button variant="ghost" type="button">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog Posts
          </Button>
        </Link>
        <div className="flex items-center gap-2">
          {hasUnsavedChanges && (
            <Badge variant="secondary">Unsaved Changes</Badge>
          )}
          <Button
            type="button"
            variant="outline"
            onClick={handlePreview}
            disabled={!slug}
          >
            <Eye className="mr-2 h-4 w-4" />
            Preview
          </Button>
          <Button type="submit" disabled={isSaving}>
            <Save className="mr-2 h-4 w-4" />
            {isSaving ? 'Saving...' : 'Save'}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Main Content - Left Column (2/3) */}
        <div className="space-y-6 lg:col-span-2">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>
                Enter the main details of your blog post
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title">
                  Title <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="title"
                  {...register('title')}
                  placeholder="Enter blog post title"
                  maxLength={200}
                />
                <div className="flex justify-between text-xs">
                  {errors.title && (
                    <p className="text-destructive">{errors.title.message}</p>
                  )}
                  <p className={`ml-auto ${title.length > 180 ? 'text-destructive' : 'text-muted-foreground'}`}>
                    {title.length}/200
                  </p>
                </div>
              </div>

              {/* Slug */}
              <div className="space-y-2">
                <Label htmlFor="slug">
                  Slug <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="slug"
                  {...register('slug')}
                  placeholder="blog-post-url-slug"
                  maxLength={200}
                />
                {errors.slug && (
                  <p className="text-xs text-destructive">{errors.slug.message}</p>
                )}
                <p className="text-xs text-muted-foreground">
                  URL: /blog/{slug || 'your-slug'}
                </p>
              </div>

              {/* Excerpt */}
              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  {...register('excerpt')}
                  placeholder="Brief summary of the blog post (optional)"
                  rows={3}
                  maxLength={300}
                />
                <div className="flex justify-between text-xs">
                  {errors.excerpt && (
                    <p className="text-destructive">{errors.excerpt.message}</p>
                  )}
                  <p className={`ml-auto ${(excerpt?.length || 0) > 270 ? 'text-destructive' : 'text-muted-foreground'}`}>
                    {excerpt?.length || 0}/300
                  </p>
                </div>
              </div>

              {/* Featured Image */}
              <div className="space-y-2">
                <Label htmlFor="featured_image">Featured Image URL</Label>
                <Input
                  id="featured_image"
                  {...register('featured_image')}
                  placeholder="https://example.com/image.jpg"
                  type="url"
                />
                {errors.featured_image && (
                  <p className="text-xs text-destructive">{errors.featured_image.message}</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Content Editor */}
          <Card>
            <CardHeader>
              <CardTitle>Content</CardTitle>
              <CardDescription>
                Write your blog post content using the rich text editor
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RichTextEditor
                content={content}
                onChange={(value) => setValue('content', value, { shouldValidate: true })}
              />
              {errors.content && (
                <p className="text-xs text-destructive mt-2">{errors.content.message}</p>
              )}
            </CardContent>
          </Card>

          {/* SEO Settings */}
          <Card>
            <CardHeader>
              <CardTitle>SEO Settings</CardTitle>
              <CardDescription>
                Optimize your blog post for search engines
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* SEO Title */}
              <div className="space-y-2">
                <Label htmlFor="seo_title">SEO Title</Label>
                <Input
                  id="seo_title"
                  {...register('seo_title')}
                  placeholder="Custom title for search results (optional)"
                  maxLength={60}
                />
                <div className="flex justify-between text-xs">
                  {errors.seo_title && (
                    <p className="text-destructive">{errors.seo_title.message}</p>
                  )}
                  <p className={`ml-auto ${(seoTitle?.length || 0) > 50 ? 'text-destructive' : 'text-muted-foreground'}`}>
                    {seoTitle?.length || 0}/60
                  </p>
                </div>
              </div>

              {/* Meta Description */}
              <div className="space-y-2">
                <Label htmlFor="meta_description">Meta Description</Label>
                <Textarea
                  id="meta_description"
                  {...register('meta_description')}
                  placeholder="Brief description for search results (optional)"
                  rows={2}
                  maxLength={160}
                />
                <div className="flex justify-between text-xs">
                  {errors.meta_description && (
                    <p className="text-destructive">{errors.meta_description.message}</p>
                  )}
                  <p className={`ml-auto ${(metaDescription?.length || 0) > 140 ? 'text-destructive' : 'text-muted-foreground'}`}>
                    {metaDescription?.length || 0}/160
                  </p>
                </div>
              </div>

              {/* Meta Keywords */}
              <div className="space-y-2">
                <Label htmlFor="meta_keywords">Meta Keywords</Label>
                <Input
                  id="meta_keywords"
                  {...register('meta_keywords')}
                  placeholder="keyword1, keyword2, keyword3"
                />
                <p className="text-xs text-muted-foreground">
                  Comma-separated keywords
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar - Right Column (1/3) */}
        <div className="space-y-6">
          {/* Publish Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Publish Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Status */}
              <div className="space-y-2">
                <Label htmlFor="status">
                  Status <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={status}
                  onValueChange={(value) => setValue('status', value as 'draft' | 'published' | 'archived')}
                >
                  <SelectTrigger id="status">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
                {errors.status && (
                  <p className="text-xs text-destructive">{errors.status.message}</p>
                )}
              </div>

              {/* Author */}
              <div className="space-y-2">
                <Label htmlFor="author_id">
                  Author <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={watch('author_id')}
                  onValueChange={(value) => setValue('author_id', value)}
                >
                  <SelectTrigger id="author_id">
                    <SelectValue placeholder="Select author" />
                  </SelectTrigger>
                  <SelectContent>
                    {authors.map((author) => (
                      <SelectItem key={author.id} value={author.id}>
                        {getAuthorName(author)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.author_id && (
                  <p className="text-xs text-destructive">{errors.author_id.message}</p>
                )}
              </div>

              {/* Published Date */}
              <div className="space-y-2">
                <Label htmlFor="published_at">
                  <Calendar className="inline h-4 w-4 mr-1" />
                  Publish Date
                </Label>
                <Input
                  id="published_at"
                  type="datetime-local"
                  {...register('published_at')}
                />
                <p className="text-xs text-muted-foreground">
                  Leave empty to publish immediately
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Category & Tags */}
          <Card>
            <CardHeader>
              <CardTitle>Organization</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Category */}
              <div className="space-y-2">
                <Label htmlFor="category">
                  Category <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={watch('category')}
                  onValueChange={(value) => setValue('category', value)}
                >
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mortgage-tips">Mortgage Tips</SelectItem>
                    <SelectItem value="market-news">Market News</SelectItem>
                    <SelectItem value="guides">Guides</SelectItem>
                    <SelectItem value="company-news">Company News</SelectItem>
                    <SelectItem value="first-time-buyers">First Time Buyers</SelectItem>
                    <SelectItem value="refinancing">Refinancing</SelectItem>
                  </SelectContent>
                </Select>
                {errors.category && (
                  <p className="text-xs text-destructive">{errors.category.message}</p>
                )}
              </div>

              {/* Tags */}
              <div className="space-y-2">
                <Label htmlFor="tags">Tags</Label>
                <Input
                  id="tags"
                  {...register('tags')}
                  placeholder="mortgage, rates, tips"
                />
                <p className="text-xs text-muted-foreground">
                  Comma-separated tags
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Post Info (Edit Mode) */}
          {mode === 'edit' && initialData?.id && (
            <Card>
              <CardHeader>
                <CardTitle>Post Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div>
                  <span className="text-muted-foreground">ID:</span>
                  <p className="font-mono text-xs break-all">{initialData.id}</p>
                </div>
                {initialData.published_at && (
                  <div>
                    <span className="text-muted-foreground">Published:</span>
                    <p>{new Date(initialData.published_at).toLocaleString()}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </form>
  );
}
