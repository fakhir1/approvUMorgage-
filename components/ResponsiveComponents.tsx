/**
 * Responsive Table Component
 * Makes tables mobile-friendly with horizontal scroll and card view option
 */

import { ReactNode } from 'react';

interface ResponsiveTableProps {
  children: ReactNode;
  className?: string;
}

/**
 * Wrapper for tables that need horizontal scroll on mobile
 */
export function ResponsiveTable({ children, className = '' }: ResponsiveTableProps) {
  return (
    <div className="w-full overflow-x-auto -mx-4 sm:mx-0">
      <div className="inline-block min-w-full align-middle">
        <div className={`overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg ${className}`}>
          {children}
        </div>
      </div>
    </div>
  );
}

/**
 * Mobile-friendly card view for list items
 * Use this as an alternative to tables on mobile
 */
interface MobileCardProps {
  children: ReactNode;
  className?: string;
}

export function MobileCard({ children, className = '' }: MobileCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow p-4 mb-3 ${className}`}>
      {children}
    </div>
  );
}

/**
 * Responsive stats grid that adapts to screen size
 */
interface StatsGridProps {
  children: ReactNode;
  columns?: 2 | 3 | 4;
}

export function StatsGrid({ children, columns = 4 }: StatsGridProps) {
  const gridCols = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid gap-4 md:gap-6 ${gridCols[columns]}`}>
      {children}
    </div>
  );
}

/**
 * Responsive form grid
 */
interface FormGridProps {
  children: ReactNode;
  columns?: 1 | 2;
}

export function FormGrid({ children, columns = 2 }: FormGridProps) {
  return (
    <div className={`grid gap-4 ${columns === 2 ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
      {children}
    </div>
  );
}

/**
 * Mobile-friendly action buttons container
 */
interface ActionButtonsProps {
  children: ReactNode;
  align?: 'left' | 'right' | 'center';
}

export function ActionButtons({ children, align = 'right' }: ActionButtonsProps) {
  const alignClass = {
    left: 'justify-start',
    right: 'justify-end',
    center: 'justify-center',
  };

  return (
    <div className={`flex flex-col sm:flex-row gap-2 sm:gap-3 ${alignClass[align]}`}>
      {children}
    </div>
  );
}

/**
 * Responsive search and filter bar
 */
interface FilterBarProps {
  children: ReactNode;
}

export function FilterBar({ children }: FilterBarProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6">
      <div className="flex flex-col lg:flex-row gap-4">
        {children}
      </div>
    </div>
  );
}

/**
 * Mobile-optimized modal/dialog
 */
interface ResponsiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
}

export function ResponsiveModal({ isOpen, onClose, title, children, footer }: ResponsiveModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-xl transform transition-all">
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
            >
              ×
            </button>
          </div>
          
          {/* Content */}
          <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto">
            {children}
          </div>
          
          {/* Footer */}
          {footer && (
            <div className="flex flex-col-reverse sm:flex-row gap-2 sm:gap-3 p-4 sm:p-6 border-t bg-gray-50">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Show/hide component based on screen size
 */
export function HideOnMobile({ children }: { children: ReactNode }) {
  return <div className="hidden sm:block">{children}</div>;
}

export function ShowOnMobile({ children }: { children: ReactNode }) {
  return <div className="block sm:hidden">{children}</div>;
}

export function HideOnTablet({ children }: { children: ReactNode }) {
  return <div className="hidden lg:block">{children}</div>;
}

export function ShowOnTablet({ children }: { children: ReactNode }) {
  return <div className="block lg:hidden">{children}</div>;
}
