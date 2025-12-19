// Update src/types/project.ts - Add these properties
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
  projectUrl: string; // This should match the route path
  
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
  
  // NEW: Add these fields for project detail page
  longDescription?: string;
  features?: string[];
  screenshots?: string[];
  demoVideo?: string;
  documentation?: string;
  complexity?: 'beginner' | 'intermediate' | 'advanced';
}