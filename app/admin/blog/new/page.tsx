'use client';

import { AdminLayout } from '@/components/layout/AdminLayout';
import { BlogPostEditorForm } from '@/components/forms/BlogPostEditorForm';

export default function NewBlogPostPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Create Blog Post</h1>
          <p className="text-muted-foreground">
            Create a new blog post or article
          </p>
        </div>

        <BlogPostEditorForm mode="create" />
      </div>
    </AdminLayout>
  );
}
