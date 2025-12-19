// Update src/components/common/Cards/ProjectCard.tsx
import { BaseCard } from './BaseCard';
import { ProjectHeader } from './ProjectHeader';
import { TechStackDisplay } from './TechStackDisplay';
import { ProjectFooter } from './ProjectFooter';
import type { Project } from '@/types/project';
import { useNavigate } from 'react-router-dom';

interface ProjectCardProps {
  project: Project;
  className?: string;
  showDescription?: boolean;
  variant?: 'compact' | 'detailed' | 'featured';
}

export const ProjectCard = ({ 
  project, 
  className = '', 
  showDescription = true,
  variant = 'detailed'
}: ProjectCardProps) => {
  const navigate = useNavigate();
  const isCompact = variant === 'compact';
  const isFeatured = variant === 'featured';
  
  const handleClick = () => {
    // Navigate to project detail page
    navigate(`/projects/${project.category}/${project.id}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };
  
  return (
    <BaseCard
      hoverable
      animateOnHover
      padding={isCompact ? 'sm' : 'md'}
      elevation={isFeatured ? 'high' : 'medium'}
      className={`cursor-pointer ${className}`}
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <ProjectHeader
        title={project.title}
        category={project.category}
        githubUrl={project.githubUrl}
        liveUrl={project.liveUrl}
      />
      
      {showDescription && !isCompact && (
        <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">
          {project.shortDescription || project.description}
        </p>
      )}
      
      <TechStackDisplay 
        technologies={project.technologies}
        maxDisplay={isCompact ? 2 : 4}
        showIcons={!isCompact}
      />
      
      {!isCompact && (
        <>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.slice(0, 3).map(tag => (
              <span
                key={tag.id}
                className="px-2 py-1 bg-primary-500/5 text-primary-600 dark:text-primary-400 rounded text-xs"
              >
                {tag.name}
              </span>
            ))}
          </div>
          
          <ProjectFooter 
            isFeatured={project.featured}
            viewText={isFeatured ? 'Explore Project' : 'View Details'}
          />
        </>
      )}
    </BaseCard>
  );
};