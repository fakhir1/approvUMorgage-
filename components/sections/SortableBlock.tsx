'use client';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  GripVertical,
  Edit,
  Trash2,
  Copy,
  Settings,
  Eye,
  EyeOff,
} from 'lucide-react';
import { ContentBlock } from './ContentBuilder';
import { useState } from 'react';

interface SortableBlockProps {
  id: string;
  block: ContentBlock;
  icon: string;
  onEdit: () => void;
  onDelete: () => void;
  onDuplicate: () => void;
  isSelected?: boolean;
}

export function SortableBlock({
  id,
  block,
  icon,
  onEdit,
  onDelete,
  onDuplicate,
  isSelected,
}: SortableBlockProps) {
  const [isVisible, setIsVisible] = useState(true);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <Card
      ref={setNodeRef}
      style={style}
      className={`group relative ${
        isSelected ? 'ring-2 ring-primary' : ''
      } ${isDragging ? 'cursor-grabbing' : ''} ${
        !isVisible ? 'opacity-50' : ''
      }`}
    >
      <div className="flex items-center gap-3 p-4">
        {/* Drag Handle */}
        <div
          {...attributes}
          {...listeners}
          className="cursor-grab touch-none hover:bg-muted rounded p-1 -m-1"
        >
          <GripVertical className="h-5 w-5 text-muted-foreground" />
        </div>

        {/* Block Icon */}
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-2xl">
          {icon}
        </div>

        {/* Block Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-medium truncate">{block.title}</h4>
            <Badge variant="secondary" className="capitalize text-xs">
              {block.type}
            </Badge>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span>Order: {block.order + 1}</span>
            {block.settings?.backgroundColor && (
              <span className="flex items-center gap-1">
                <div
                  className="h-3 w-3 rounded-full border"
                  style={{ backgroundColor: block.settings.backgroundColor }}
                />
                {block.settings.backgroundColor}
              </span>
            )}
            {block.settings?.padding && (
              <span>Padding: {block.settings.padding}</span>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsVisible(!isVisible)}
            title={isVisible ? 'Hide block' : 'Show block'}
          >
            {isVisible ? (
              <Eye className="h-4 w-4" />
            ) : (
              <EyeOff className="h-4 w-4" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onEdit}
            title="Edit block"
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onDuplicate}
            title="Duplicate block"
          >
            <Copy className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onDelete}
            title="Delete block"
          >
            <Trash2 className="h-4 w-4 text-destructive" />
          </Button>
        </div>
      </div>

      {/* Block Preview/Settings (collapsed by default) */}
      {isSelected && (
        <div className="border-t bg-muted/30 p-4">
          <div className="text-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-medium">Block Settings</span>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 text-muted-foreground">
              <div>
                <span className="font-medium">Type:</span> {block.type}
              </div>
              <div>
                <span className="font-medium">ID:</span> {block.id}
              </div>
              {block.settings && Object.keys(block.settings).length > 0 && (
                <div className="col-span-2">
                  <span className="font-medium">Custom Settings:</span>
                  <pre className="mt-1 text-xs bg-muted p-2 rounded overflow-auto">
                    {JSON.stringify(block.settings, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
