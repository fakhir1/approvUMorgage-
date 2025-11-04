'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { PageEditorForm } from '@/components/forms/PageEditorForm';
import { Loader2 } from 'lucide-react';

export default function EditPagePage() {
  const params = useParams();
  const pageId = params.id as string;
  const [pageData, setPageData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await fetch(`/api/admin/pages?id=${pageId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch page');
        }
        const data = await response.json();
        setPageData(data.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load page');
      } finally {
        setIsLoading(false);
      }
    };

    if (pageId) {
      fetchPage();
    }
  }, [pageId]);

  if (isLoading) {
    return (
      <AdminLayout title="Loading...">
        <div className="flex h-64 items-center justify-center">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
            <p className="text-muted-foreground">Loading page...</p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  if (error || !pageData) {
    return (
      <AdminLayout title="Error">
        <div className="flex h-64 items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
            <p className="text-muted-foreground mb-4">
              {error || 'The page you are looking for does not exist.'}
            </p>
            <a href="/admin/pages" className="text-primary hover:underline">
              Back to Pages
            </a>
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title={`Edit: ${pageData.title}`}>
      <PageEditorForm initialData={pageData} isNew={false} />
    </AdminLayout>
  );
}
