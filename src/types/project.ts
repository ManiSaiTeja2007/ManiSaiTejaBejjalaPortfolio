export interface ProjectTag {
  id: string;
  name: string;
  color?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription?: string;
  
  // Story elements
  problem?: string;
  solution?: string;
  impact?: string;
  challenges?: string[];
  learnings?: string[];
  
  // Media
  imageUrl: string;
  fallbackImage?: string;
  
  // Links
  liveUrl?: string;
  githubUrl?: string;
  projectUrl: string;
  
  // Technical details
  technologies: string[];
  tags: ProjectTag[];
  category: string;
  
  // Display properties
  featured: boolean;
  featuredOrder?: number;
  
  // Metrics for impact display
  metrics?: {
    label: string;
    value: string;
    improvement?: string;
  }[];
}

export interface ProjectCategory {
  id: string;
  name: string;
  description?: string;
  color: string;
  projects: Project[];
}

// For tiered display
export interface ProjectTier {
  id: 'complex' | 'ui' | 'hardware' | 'algorithms';
  name: string;
  description: string;
  icon: string;
  projects: Project[];
}