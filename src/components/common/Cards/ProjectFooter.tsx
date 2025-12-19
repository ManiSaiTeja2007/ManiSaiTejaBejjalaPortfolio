// src/components/common/Cards/ProjectFooter.tsx
import { memo } from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectFooterProps {
  isFeatured?: boolean;
  viewText?: string;
}

export const ProjectFooter = memo(({ 
  isFeatured = false, 
  viewText = 'View Details' 
}: ProjectFooterProps) => {
  return (
    <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
      <div className="text-sm text-slate-500 dark:text-slate-400">
        {isFeatured ? '⭐ Featured' : 'Project'}
      </div>
      <div className="flex items-center text-primary-600 dark:text-primary-400 text-sm font-medium">
        {viewText}
        <ExternalLink size={16} className="ml-1" />
      </div>
    </div>
  );
});

ProjectFooter.displayName = 'ProjectFooter';