import type { 
  Service, 
  Skill, 
  ValueProposition, 
  PortfolioProject,
  Availability 
} from '@/types/portfolio';

export const services: Service[] = [
  {
    id: 'frontend-development',
    title: 'Frontend Development',
    description: 'Build responsive, accessible web applications with modern frameworks.',
    icon: '💻',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
  },
  {
    id: 'api-integration',
    title: 'API Integration',
    description: 'Connect frontend applications with backend services and third-party APIs.',
    icon: '🔌',
    technologies: ['REST APIs', 'GraphQL', 'Authentication', 'WebSockets'],
  },
  {
    id: 'performance-optimization',
    title: 'Performance Optimization',
    description: 'Improve application speed, reduce bundle size, and optimize user experience.',
    icon: '⚡',
    technologies: ['Lighthouse', 'Bundle Analysis', 'Lazy Loading', 'Caching'],
  },
  {
    id: 'code-quality',
    title: 'Code Quality',
    description: 'Maintainable code with testing, type safety, and consistent patterns.',
    icon: '🏗️',
    technologies: ['TypeScript', 'Jest', 'ESLint', 'Clean Architecture'],
  },
];

export const skills: Skill[] = [
  // Frontend
  { id: 'react', name: 'React', level: 4, category: 'frontend' },
  { id: 'typescript', name: 'TypeScript', level: 4, category: 'frontend' },
  { id: 'javascript', name: 'JavaScript', level: 5, category: 'frontend' },
  { id: 'html', name: 'HTML5', level: 5, category: 'frontend' },
  { id: 'css', name: 'CSS3', level: 5, category: 'frontend' },
  { id: 'tailwind', name: 'Tailwind CSS', level: 4, category: 'frontend' },
  { id: 'nextjs', name: 'Next.js', level: 3, category: 'frontend' },
  
  // Backend
  { id: 'nodejs', name: 'Node.js', level: 3, category: 'backend' },
  { id: 'express', name: 'Express.js', level: 3, category: 'backend' },
  { id: 'mongodb', name: 'MongoDB', level: 3, category: 'backend' },
  { id: 'firebase', name: 'Firebase', level: 3, category: 'backend' },
  
  // Languages
  { id: 'python', name: 'Python', level: 4, category: 'language' },
  { id: 'c', name: 'C', level: 4, category: 'language' },
  { id: 'cpp', name: 'C++', level: 3, category: 'language' },
  { id: 'java', name: 'Java', level: 3, category: 'language' },
  
  // Tools
  { id: 'git', name: 'Git', level: 4, category: 'tool' },
  { id: 'docker', name: 'Docker', level: 2, category: 'tool' },
  { id: 'aws', name: 'AWS', level: 2, category: 'tool' },
  { id: 'linux', name: 'Linux', level: 3, category: 'tool' },
  { id: 'arduino', name: 'Arduino', level: 3, category: 'tool' },
];

export const valuePropositions: ValueProposition[] = [
  {
    id: 'technical-precision',
    title: 'Technical Precision',
    description: 'Clean, efficient code with attention to detail and best practices.',
    icon: '🎯',
  },
  {
    id: 'problem-solving',
    title: 'Problem Solving',
    description: 'Analytical approach to break down complex challenges into solvable parts.',
    icon: '🧩',
  },
  {
    id: 'continuous-learning',
    title: 'Continuous Learning',
    description: 'Stay updated with modern technologies and adapt to new requirements.',
    icon: '📚',
  },
  {
    id: 'collaboration',
    title: 'Collaboration',
    description: 'Clear communication and effective teamwork in technical environments.',
    icon: '🤝',
  },
];

export const projects: PortfolioProject[] = [
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    description: 'This responsive portfolio built with React, TypeScript, and Tailwind CSS.',
    status: 'completed',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    timeline: 'Dec 2023',
    link: '/',
  },
  {
    id: 'coming-soon-1',
    title: 'Coming Soon',
    description: 'Project in planning phase - focused on real-time applications.',
    status: 'planned',
    technologies: ['Next.js', 'WebSockets', 'Real-time'],
    timeline: 'Q1 2024',
  },
  {
    id: 'coming-soon-2',
    title: 'Coming Soon',
    description: 'Project in planning phase - API integration focused.',
    status: 'planned',
    technologies: ['Node.js', 'REST API', 'Authentication'],
    timeline: 'Q1 2024',
  },
];

export const availability: Availability = {
  status: 'actively-seeking',
  type: ['Internship', 'Freelance', 'Project-based'],
  timeline: 'Immediate',
  location: 'Remote',
};

// Helper functions
export const getServices = () => services;
export const getSkills = () => skills;
export const getValuePropositions = () => valuePropositions;
export const getProjects = () => projects;
export const getAvailability = () => availability;