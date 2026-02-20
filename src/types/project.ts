// src/types/project.ts
export interface ProjectTag {
  id: string;
  name: string;
  color?: string;
}

export interface ProjectCategory {
  id: string;
  name: string;
  color: string;
  description: string;
  projects: Project[];
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

  longDescription?: string;
  features?: string[];
  screenshots?: string[];
  demoVideo?: string;
  documentation?: string;
  complexity?: 'beginner' | 'intermediate' | 'advanced';
}
