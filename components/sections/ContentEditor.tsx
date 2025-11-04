'use client';

import { RichTextEditor } from './RichTextEditor';
import { Card } from '@/components/ui/card';

interface ContentEditorProps {
  content?: string;
  onChange?: (html: string) => void;
  title?: string;
  description?: string;
}

export function ContentEditor({
  content = '',
  onChange,
  title = 'Content',
  description = 'Edit your content using the rich text editor',
}: ContentEditorProps) {
  return (
    <Card className="p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      <RichTextEditor content={content} onChange={onChange} />
    </Card>
  );
}
