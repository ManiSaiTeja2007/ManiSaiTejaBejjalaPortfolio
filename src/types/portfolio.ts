export interface ApexProject {
  id: string;
  title: string;
  tagline: string;
  category: 'frontend' | 'fullstack' | 'systems' | 'ai' | 'devops';
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  technologies: {
    name: string;
    purpose: string;
  }[];
  metrics?: {
    label: string;
    value: string;
    improvement?: string;
  }[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  featuredOrder: number;
}

export interface TechnicalSkill {
  category: string;
  skills: {
    name: string;
    expertise: number; // 0-100
    description: string;
  }[];
}

export interface ProfessionalPrinciple {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// New types for portfolioData.ts
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  technologies: string[];
}

export interface Skill {
  id: string;
  name: string;
  level: number;
  category: string;
}

export interface ValueProposition {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
  technologies: string[];
  timeline: string;
  link?: string;
}

// For availability
export interface Availability {
  status: 'available' | 'unavailable' | 'actively-seeking';
  type: string[];
  timeline: string;
  location: string;
}