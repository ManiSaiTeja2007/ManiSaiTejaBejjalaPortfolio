// src/components/common/Cards/TechStackDisplay.tsx
import { memo } from 'react';
import { TechIcon } from '../Icon/Icon';

interface TechStackDisplayProps {
  technologies: string[];
  maxDisplay?: number;
  showIcons?: boolean;
}

export const TechStackDisplay = memo(({ 
  technologies, 
  maxDisplay = 4,
  showIcons = true 
}: TechStackDisplayProps) => {
  const displayTechs = technologies.slice(0, maxDisplay);
  
  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-2 mb-3">
        {displayTechs.map((tech, index) => (
          <div
            key={`${tech}-${index}`}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 dark:bg-slate-700 rounded-lg"
          >
            {showIcons && (
              <TechIcon 
                name={tech}
                size={14}
                color="default"
              />
            )}
            <span className="text-xs text-slate-700 dark:text-slate-300">
              {tech}
            </span>
          </div>
        ))}
        {technologies.length > maxDisplay && (
          <span className="text-xs text-slate-500 px-2 py-1.5">
            +{technologies.length - maxDisplay} more
          </span>
        )}
      </div>
    </div>
  );
});

TechStackDisplay.displayName = 'TechStackDisplay';