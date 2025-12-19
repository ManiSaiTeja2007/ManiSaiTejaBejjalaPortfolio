// NEW: src/components/common/Icon/IconUtils.ts
// Enhanced icon mapping with fallbacks
export const ICON_MAP = new Map([
  // Programming Languages
  ['react', 'simple-icons:react'],
  ['typescript', 'simple-icons:typescript'],
  ['javascript', 'simple-icons:javascript'],
  ['python', 'simple-icons:python'],
  ['java', 'simple-icons:java'],
  ['c', 'simple-icons:c'],
  ['cpp', 'simple-icons:cplusplus'],
  ['rust', 'simple-icons:rust'],
  ['go', 'simple-icons:go'],
  ['kotlin', 'simple-icons:kotlin'],
  ['swift', 'simple-icons:swift'],
  ['php', 'simple-icons:php'],
  ['ruby', 'simple-icons:ruby'],
  
  // Web Technologies
  ['html5', 'simple-icons:html5'],
  ['css3', 'simple-icons:css3'],
  ['sass', 'simple-icons:sass'],
  ['tailwindcss', 'simple-icons:tailwindcss'],
  ['bootstrap', 'simple-icons:bootstrap'],
  
  // Frameworks & Libraries
  ['nextjs', 'simple-icons:nextdotjs'],
  ['vuejs', 'simple-icons:vuedotjs'],
  ['angular', 'simple-icons:angular'],
  ['svelte', 'simple-icons:svelte'],
  ['nodejs', 'simple-icons:nodedotjs'],
  ['express', 'simple-icons:express'],
  ['django', 'simple-icons:django'],
  ['flask', 'simple-icons:flask'],
  ['spring', 'simple-icons:spring'],
  
  // Databases
  ['mongodb', 'simple-icons:mongodb'],
  ['postgresql', 'simple-icons:postgresql'],
  ['mysql', 'simple-icons:mysql'],
  ['redis', 'simple-icons:redis'],
  ['sqlite', 'simple-icons:sqlite'],
  ['firebase', 'simple-icons:firebase'],
  ['supabase', 'simple-icons:supabase'],
  
  // Cloud & DevOps
  ['aws', 'simple-icons:amazonaws'],
  ['azure', 'simple-icons:microsoftazure'],
  ['googlecloud', 'simple-icons:googlecloud'],
  ['docker', 'simple-icons:docker'],
  ['kubernetes', 'simple-icons:kubernetes'],
  ['terraform', 'simple-icons:terraform'],
  ['ansible', 'simple-icons:ansible'],
  ['jenkins', 'simple-icons:jenkins'],
  
  // Tools
  ['git', 'simple-icons:git'],
  ['github', 'simple-icons:github'],
  ['gitlab', 'simple-icons:gitlab'],
  ['bitbucket', 'simple-icons:bitbucket'],
  ['vscode', 'simple-icons:visualstudiocode'],
  ['intellij', 'simple-icons:intellijidea'],
  ['figma', 'simple-icons:figma'],
  ['postman', 'simple-icons:postman'],
  ['npm', 'simple-icons:npm'],
  ['yarn', 'simple-icons:yarn'],
  ['webpack', 'simple-icons:webpack'],
  ['vite', 'simple-icons:vite'],
  
  // Hardware & IoT
  ['arduino', 'simple-icons:arduino'],
  ['raspberrypi', 'simple-icons:raspberrypi'],
  ['esp32', 'mdi:chip'],
  
  // AI/ML
  ['tensorflow', 'simple-icons:tensorflow'],
  ['pytorch', 'simple-icons:pytorch'],
  ['keras', 'simple-icons:keras'],
  ['scikitlearn', 'simple-icons:scikitlearn'],
  ['pandas', 'simple-icons:pandas'],
  ['numpy', 'simple-icons:numpy'],
  ['opencv', 'simple-icons:opencv'],
  ['jupyter', 'simple-icons:jupyter'],
  
  // Mobile
  ['reactnative', 'simple-icons:react'],
  ['flutter', 'simple-icons:flutter'],
  ['android', 'simple-icons:android'],
  ['ios', 'simple-icons:ios'],
  
  // Testing
  ['jest', 'simple-icons:jest'],
  ['cypress', 'simple-icons:cypress'],
  ['playwright', 'simple-icons:playwright'],
  ['mocha', 'simple-icons:mocha'],
  ['chai', 'simple-icons:chai'],
  
  // Additional common ones
  ['graphql', 'simple-icons:graphql'],
  ['apollo', 'simple-icons:apollographql'],
  ['redux', 'simple-icons:redux'],
  ['socketio', 'simple-icons:socketdotio'],
  ['threejs', 'simple-icons:threedotjs'],
  ['d3', 'simple-icons:d3dotjs'],
  ['chartjs', 'simple-icons:chartdotjs'],
]);

const iconCache = new Map<string, string>();

// Improved normalization function
export const normalizeTechName = (techName: string): string => {
  return techName.toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .replace(/\s+/g, '')
    .replace(/\./g, '')
    .replace(/-/g, '')
    .replace(/_/g, '');
};

// Function to find best matching icon
export const findBestIcon = (normalizedTech: string): string => {
  // Direct match
  if (ICON_MAP.has(normalizedTech)) {
    return ICON_MAP.get(normalizedTech)!;
  }
  
  // Try common variations
  const variations: Record<string, string> = {
    'typescript': 'typescript',
    'ts': 'typescript',
    'javascript': 'javascript',
    'js': 'javascript',
    'python': 'python',
    'py': 'python',
    'java': 'java',
    'c++': 'cpp',
    'cpp': 'cpp',
    'cplusplus': 'cpp',
    'reactjs': 'react',
    'react.js': 'react',
    'next.js': 'nextjs',
    'node.js': 'nodejs',
    'express.js': 'express',
    'mongodb': 'mongodb',
    'mongo': 'mongodb',
    'postgres': 'postgresql',
    'postgresql': 'postgresql',
    'mysql': 'mysql',
    'sql': 'mysql',
    'aws': 'aws',
    'amazonwebservices': 'aws',
    'docker': 'docker',
    'kubernetes': 'kubernetes',
    'k8s': 'kubernetes',
    'git': 'git',
    'github': 'github',
    'gitlab': 'gitlab',
    'html': 'html5',
    'css': 'css3',
    'tailwind': 'tailwindcss',
    'bootstrap': 'bootstrap',
    'tensorflow': 'tensorflow',
    'tf': 'tensorflow',
    'pytorch': 'pytorch',
    'torch': 'pytorch',
    'numpy': 'numpy',
    'np': 'numpy',
    'pandas': 'pandas',
    'pd': 'pandas',
    'scikit': 'scikitlearn',
    'scikitlearn': 'scikitlearn',
    'sklearn': 'scikitlearn',
    'jupyter': 'jupyter',
    'jupyternotebook': 'jupyter',
    'vscode': 'vscode',
    'visualstudiocode': 'vscode',
    'figma': 'figma',
    'postman': 'postman',
    'npm': 'npm',
    'yarn': 'yarn',
    'webpack': 'webpack',
    'vite': 'vite',
    'arduino': 'arduino',
    'raspberry': 'raspberrypi',
    'raspberrypi': 'raspberrypi',
    'rpi': 'raspberrypi',
    'esp32': 'esp32',
    'jest': 'jest',
    'cypress': 'cypress',
    'playwright': 'playwright',
    'mocha': 'mocha',
    'chai': 'chai',
    'graphql': 'graphql',
    'gql': 'graphql',
    'redux': 'redux',
    'socket.io': 'socketio',
    'socketio': 'socketio',
    'three.js': 'threejs',
    'threejs': 'threejs',
    'd3.js': 'd3',
    'd3': 'd3',
    'chart.js': 'chartjs',
    'chartjs': 'chartjs',
  };
  
  // Check variations
  if (variations[normalizedTech]) {
    const variation = variations[normalizedTech];
    if (ICON_MAP.has(variation)) {
      return ICON_MAP.get(variation)!;
    }
  }
  
  // Check partial matches
  for (const [key] of ICON_MAP.entries()) {
    if (normalizedTech.includes(key) || key.includes(normalizedTech)) {
      return ICON_MAP.get(key)!;
    }
  }
  
  // Fallback icon
  return 'simple-icons:code';
};

// Helper function to check if icon exists
export const hasIcon = (techName: string): boolean => {
  const normalized = normalizeTechName(techName);
  const icon = findBestIcon(normalized);
  return icon !== 'simple-icons:code';
};

// Export icon names for debugging
export const getAvailableIcons = (): string[] => {
  return Array.from(ICON_MAP.keys());
};

// Get cached icon or find new one
export const getCachedIcon = (techName: string): string => {
  const normalized = normalizeTechName(techName);
  
  if (iconCache.has(normalized)) {
    return iconCache.get(normalized)!;
  }
  
  const foundIcon = findBestIcon(normalized);
  iconCache.set(normalized, foundIcon);
  
  return foundIcon;
};