import type { Skill } from '@/types/skill';

export const skillsData: Skill[] = [
  // Frontend
  { id: 'react', name: 'React', iconUrl: 'react', category: 'frontend' },
  { id: 'typescript', name: 'TypeScript', iconUrl: 'typescript', category: 'frontend' },
  { id: 'javascript', name: 'JavaScript', iconUrl: 'javascript', category: 'frontend' },
  { id: 'html5', name: 'HTML5', iconUrl: 'html5', category: 'frontend' },
  { id: 'css3', name: 'CSS3', iconUrl: 'css3', category: 'frontend' },
  { id: 'tailwindcss', name: 'Tailwind CSS', iconUrl: 'tailwindcss', category: 'frontend' },
  { id: 'nextjs', name: 'Next.js', iconUrl: 'nextjs', category: 'frontend' },
  
  // Backend
  { id: 'nodejs', name: 'Node.js', iconUrl: 'nodejs', category: 'backend' },
  { id: 'express', name: 'Express.js', iconUrl: 'express', category: 'backend' },
  { id: 'python', name: 'Python', iconUrl: 'python', category: 'backend' },
  { id: 'flask', name: 'Flask', iconUrl: 'flask', category: 'backend' },
  
  // Database
  { id: 'mongodb', name: 'MongoDB', iconUrl: 'mongodb', category: 'database' },
  { id: 'postgresql', name: 'PostgreSQL', iconUrl: 'postgresql', category: 'database' },
  { id: 'firebase', name: 'Firebase', iconUrl: 'firebase', category: 'database' },
  
  // Tools
  { id: 'git', name: 'Git', iconUrl: 'git', category: 'tools' },
  { id: 'github', name: 'GitHub', iconUrl: 'github', category: 'tools' },
  { id: 'docker', name: 'Docker', iconUrl: 'docker', category: 'tools' },
  { id: 'aws', name: 'AWS', iconUrl: 'aws', category: 'tools' },
  { id: 'figma', name: 'Figma', iconUrl: 'figma', category: 'tools' },
  
  // IoT & Hardware
  { id: 'arduino', name: 'Arduino', iconUrl: 'arduino', category: 'iot' },
  { id: 'raspberrypi', name: 'Raspberry Pi', iconUrl: 'raspberrypi', category: 'iot' },
  { id: 'c', name: 'C Programming', iconUrl: 'c', category: 'iot' },
  
  // AI/ML
  { id: 'tensorflow', name: 'TensorFlow', iconUrl: 'tensorflow', category: 'ai_ml' },
  { id: 'pytorch', name: 'PyTorch', iconUrl: 'pytorch', category: 'ai_ml' },
  { id: 'scikit', name: 'scikit-learn', iconUrl: 'scikit-learn', category: 'ai_ml' },
  
  // Languages
  { id: 'cpp', name: 'C++', iconUrl: 'c++', category: 'languages' },
  { id: 'java', name: 'Java', iconUrl: 'java', category: 'languages' },
];

// Group skills by category for easy access
export const getSkillsByCategory = () => {
  const categories: Record<string, Skill[]> = {};
  
  skillsData.forEach(skill => {
    if (!categories[skill.category]) {
      categories[skill.category] = [];
    }
    categories[skill.category].push(skill);
  });
  
  return categories;
};

// Get all unique categories
export const getSkillCategories = () => {
  return [...new Set(skillsData.map(skill => skill.category))];
};