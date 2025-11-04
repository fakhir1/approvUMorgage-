'use client';

import { AdminLayout } from '@/components/layout/AdminLayout';
import { PageEditorForm } from '@/components/forms/PageEditorForm';

export default function NewPagePage() {
  return (
    <AdminLayout title="Create New Page">
      <PageEditorForm isNew />
    </AdminLayout>
  );
}
