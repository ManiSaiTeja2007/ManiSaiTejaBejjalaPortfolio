// NEW: src/utils/skillsData.ts
import type { Skill } from '@/types/skill';

export const skillsData: Skill[] = [
  // Frontend Technologies
  { id: 'react', name: 'React', iconUrl: 'simple-icons:react', category: 'frontend' },
  { id: 'typescript', name: 'TypeScript', iconUrl: 'simple-icons:typescript', category: 'frontend' },
  { id: 'javascript', name: 'JavaScript', iconUrl: 'simple-icons:javascript', category: 'frontend' },
  { id: 'html5', name: 'HTML5', iconUrl: 'simple-icons:html5', category: 'frontend' },
  { id: 'css3', name: 'CSS3', iconUrl: 'simple-icons:css3', category: 'frontend' },
  { id: 'tailwindcss', name: 'Tailwind CSS', iconUrl: 'simple-icons:tailwindcss', category: 'frontend' },
  { id: 'nextjs', name: 'Next.js', iconUrl: 'simple-icons:nextdotjs', category: 'frontend' },
  { id: 'angular', name: 'Angular', iconUrl: 'simple-icons:angular', category: 'frontend' },
  
  // Backend Technologies
  { id: 'nodejs', name: 'Node.js', iconUrl: 'simple-icons:nodedotjs', category: 'backend' },
  { id: 'express', name: 'Express.js', iconUrl: 'simple-icons:express', category: 'backend' },
  { id: 'python', name: 'Python', iconUrl: 'simple-icons:python', category: 'backend' },
  { id: 'django', name: 'Django', iconUrl: 'simple-icons:django', category: 'backend' },
  { id: 'flask', name: 'Flask', iconUrl: 'simple-icons:flask', category: 'backend' },
  
  // Databases
  { id: 'mongodb', name: 'MongoDB', iconUrl: 'simple-icons:mongodb', category: 'database' },
  { id: 'postgresql', name: 'PostgreSQL', iconUrl: 'simple-icons:postgresql', category: 'database' },
  { id: 'mysql', name: 'MySQL', iconUrl: 'simple-icons:mysql', category: 'database' },
  { id: 'firebase', name: 'Firebase', iconUrl: 'simple-icons:firebase', category: 'database' },
  { id: 'redis', name: 'Redis', iconUrl: 'simple-icons:redis', category: 'database' },
  
  // Cloud & DevOps
  { id: 'aws', name: 'AWS', iconUrl: 'simple-icons:amazonaws', category: 'cloud_devops' },
  { id: 'docker', name: 'Docker', iconUrl: 'simple-icons:docker', category: 'cloud_devops' },
  { id: 'kubernetes', name: 'Kubernetes', iconUrl: 'simple-icons:kubernetes', category: 'cloud_devops' },
  { id: 'git', name: 'Git', iconUrl: 'simple-icons:git', category: 'cloud_devops' },
  { id: 'github', name: 'GitHub', iconUrl: 'simple-icons:github', category: 'cloud_devops' },
  
  // Programming Languages
  { id: 'java', name: 'Java', iconUrl: 'simple-icons:java', category: 'languages' },
  { id: 'c', name: 'C', iconUrl: 'simple-icons:c', category: 'languages' },
  { id: 'cpp', name: 'C++', iconUrl: 'simple-icons:cplusplus', category: 'languages' },
  { id: 'rust', name: 'Rust', iconUrl: 'simple-icons:rust', category: 'languages' },
  { id: 'go', name: 'Go', iconUrl: 'simple-icons:go', category: 'languages' },
  
  // AI/ML
  { id: 'tensorflow', name: 'TensorFlow', iconUrl: 'simple-icons:tensorflow', category: 'ai_ml' },
  { id: 'pytorch', name: 'PyTorch', iconUrl: 'simple-icons:pytorch', category: 'ai_ml' },
  { id: 'keras', name: 'Keras', iconUrl: 'simple-icons:keras', category: 'ai_ml' },
  { id: 'scikitlearn', name: 'Scikit-learn', iconUrl: 'simple-icons:scikitlearn', category: 'ai_ml' },
  { id: 'pandas', name: 'Pandas', iconUrl: 'simple-icons:pandas', category: 'ai_ml' },
  { id: 'numpy', name: 'NumPy', iconUrl: 'simple-icons:numpy', category: 'ai_ml' },
  { id: 'opencv', name: 'OpenCV', iconUrl: 'simple-icons:opencv', category: 'ai_ml' },
  
  // Hardware & IoT
  { id: 'arduino', name: 'Arduino', iconUrl: 'simple-icons:arduino', category: 'hardware_iot' },
  { id: 'raspberrypi', name: 'Raspberry Pi', iconUrl: 'simple-icons:raspberrypi', category: 'hardware_iot' },
  { id: 'esp32', name: 'ESP32', iconUrl: 'mdi:chip', category: 'hardware_iot' },
  
  // Tools & Others
  { id: 'vscode', name: 'VS Code', iconUrl: 'simple-icons:visualstudiocode', category: 'tools' },
  { id: 'figma', name: 'Figma', iconUrl: 'simple-icons:figma', category: 'tools' },
  { id: 'postman', name: 'Postman', iconUrl: 'simple-icons:postman', category: 'tools' },
  { id: 'npm', name: 'npm', iconUrl: 'simple-icons:npm', category: 'tools' },
  { id: 'yarn', name: 'Yarn', iconUrl: 'simple-icons:yarn', category: 'tools' },
  
  // Testing
  { id: 'jest', name: 'Jest', iconUrl: 'simple-icons:jest', category: 'testing' },
  { id: 'cypress', name: 'Cypress', iconUrl: 'simple-icons:cypress', category: 'testing' },
  { id: 'playwright', name: 'Playwright', iconUrl: 'simple-icons:playwright', category: 'testing' },
  
  // Mobile
  { id: 'reactnative', name: 'React Native', iconUrl: 'simple-icons:react', category: 'mobile' },
  { id: 'flutter', name: 'Flutter', iconUrl: 'simple-icons:flutter', category: 'mobile' },
];

// Helper functions
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

export const getAllSkills = () => skillsData;

export const getSkillsByNames = (skillNames: string[]): Skill[] => {
  return skillsData.filter(skill => 
    skillNames.some(name => 
      skill.name.toLowerCase().includes(name.toLowerCase()) || 
      name.toLowerCase().includes(skill.name.toLowerCase())
    )
  );
};

// Fallback icon resolver
export const getIconForSkill = (skillName: string): string => {
  const skill = skillsData.find(s => 
    s.name.toLowerCase() === skillName.toLowerCase() ||
    skillName.toLowerCase().includes(s.name.toLowerCase())
  );
  
  return skill?.iconUrl || 'simple-icons:code';
};