import { motion } from 'framer-motion';
import { ExternalLink, Github, AlertCircle, CheckCircle } from 'lucide-react';
import type { Project } from '@/types/project';
import { useState } from 'react';

interface ProjectCardProps {
  project: Project;
  className?: string;
  showDescription?: boolean;
}

export const ProjectCard = ({ project, className = '', showDescription = true }: ProjectCardProps) => {
  const [showStory, setShowStory] = useState(false);
  
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (project.fallbackImage) {
      e.currentTarget.src = project.fallbackImage;
    }
    e.currentTarget.classList.add('project-image-placeholder');
  };

  const handleExternalLinkClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCardClick = () => {
    window.location.href = project.projectUrl;
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer ${className}`}
      onMouseEnter={() => setShowStory(true)}
      onMouseLeave={() => setShowStory(false)}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleCardClick()}
    >
      {/* Project Header with Category Badge */}
      <div className="relative h-48 overflow-hidden group">
        <motion.img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: showStory ? 1.05 : 1 }}
          transition={{ duration: 0.4 }}
          onError={handleImageError}
          loading="lazy"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full text-xs font-medium">
            {project.category.toUpperCase()}
          </span>
        </div>
        
        {/* Project Links Overlay */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: showStory ? 1 : 0, y: showStory ? 0 : 10 }}
          transition={{ duration: 0.3 }}
          className="absolute top-4 right-4 flex space-x-2"
        >
          {project.githubUrl && (
            <button
              onClick={(e) => handleExternalLinkClick(e, project.githubUrl!)}
              className="p-2 bg-white/90 dark:bg-slate-800/90 rounded-full hover:bg-white dark:hover:bg-slate-700 backdrop-blur-sm transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-brand"
              aria-label={`View ${project.title} on GitHub`}
              type="button"
            >
              <Github size={18} />
            </button>
          )}
          {project.liveUrl && (
            <button
              onClick={(e) => handleExternalLinkClick(e, project.liveUrl!)}
              className="p-2 bg-white/90 dark:bg-slate-800/90 rounded-full hover:bg-white dark:hover:bg-slate-700 backdrop-blur-sm transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-brand"
              aria-label={`View ${project.title} live demo`}
              type="button"
            >
              <ExternalLink size={18} />
            </button>
          )}
        </motion.div>
        
        {/* Story Toggle Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showStory ? 1 : 0 }}
          className="absolute bottom-4 right-4"
        >
          <div className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white">
            Story Mode
          </div>
        </motion.div>
      </div>

      <div className="p-6">
        {/* Project Title */}
        <h3 className="text-xl font-bold text-default mb-3 line-clamp-1 group-hover:text-primary-brand transition-colors">
          {project.title}
        </h3>
        
        {/* Story Mode Content */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: showStory ? 'auto' : 0,
            opacity: showStory ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden mb-4"
        >
          <div className="space-y-3">
            {/* Problem Statement */}
            <div className="flex items-start gap-2">
              <AlertCircle className="text-red-500 mt-0.5 flex-shrink-0" size={16} />
              <div>
                <div className="text-sm font-medium text-slate-700 dark:text-slate-300">Challenge</div>
                <div className="text-xs text-slate-600 dark:text-slate-400">
                  {project.shortDescription || 'Addressing a complex technical challenge with innovative solutions'}
                </div>
              </div>
            </div>
            
            {/* Solution Highlight */}
            <div className="flex items-start gap-2">
              <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
              <div>
                <div className="text-sm font-medium text-slate-700 dark:text-slate-300">Key Solution</div>
                <div className="text-xs text-slate-600 dark:text-slate-400">
                  Leveraged {project.technologies.slice(0, 2).join(' & ')} to create an efficient solution
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Default Description */}
        {showDescription && !showStory && (
          <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
            {project.shortDescription || project.description}
          </p>
        )}

        {/* Technologies Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 4).map(tag => (
            <motion.span
              key={tag.id}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="project-tag text-xs"
            >
              {tag.name}
            </motion.span>
          ))}
          {project.tags.length > 4 && (
            <span className="project-tag text-xs">
              +{project.tags.length - 4} more
            </span>
          )}
        </div>

        {/* Footer with View Details */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
          <div className="text-sm text-slate-500 dark:text-slate-400">
            {project.featured ? '⭐ Featured Project' : 'Project Case Study'}
          </div>
          <motion.div
            animate={{ x: showStory ? 5 : 0 }}
            transition={{ repeat: showStory ? Infinity : 0, duration: 0.8 }}
            className="flex items-center text-primary-brand font-medium text-sm"
          >
            View Details
            <ExternalLink size={16} className="ml-1" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};