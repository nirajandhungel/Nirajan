import { cn } from '@/lib/utils';
// import { AlertCircle, CheckCircle2, Info, XCircle } from 'lucide-react';
// import React from 'react';

interface CalloutProps {
  type?: 'default' | 'warning' | 'danger' | 'success';
  title?: string;
  children: React.ReactNode;
}

const styles: any = {
  default: 'bg-blue-50 dark:bg-blue-900/20 text-blue-900 dark:text-blue-100 border-blue-200 dark:border-blue-800',
  warning: 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-900 dark:text-yellow-100 border-yellow-200 dark:border-yellow-800',
  danger: 'bg-red-50 dark:bg-red-900/20 text-red-900 dark:text-red-100 border-red-200 dark:border-red-800',
  success: 'bg-green-50 dark:bg-green-900/20 text-green-900 dark:text-green-100 border-green-200 dark:border-green-800',
};

export function Callout({ type = 'default', title, children }: any) {
  // Simple version without icons for now to avoid circular deps
  return (
    <div className={cn('my-6 flex gap-3 rounded-lg border p-4', styles[type])}>
      <div className="flex-1">
        {title && <div className="font-medium mb-1">{title}</div>}
        <div className="text-sm [&>p]:m-0">{children}</div>
      </div>
    </div>
  );
}
