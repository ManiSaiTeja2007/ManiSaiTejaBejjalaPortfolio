import type { Project, ProjectCategory } from '@/types/project';

export const projectCategories: ProjectCategory[] = [
  {
    id: 'angular',
    name: 'Angular',
    color: 'text-red-600 dark:text-red-400',
    description: 'Enterprise-grade applications with Angular framework',
    projects: [
      {
        id: 'angular-task-management',
        title: 'TaskFlow Pro - Angular Task Manager',
        description: 'A comprehensive task management application built with Angular 16+, featuring real-time collaboration, drag-and-drop functionality, and Firebase integration for seamless team productivity.',
        shortDescription: 'Real-time collaborative task management for distributed teams',
        problem: 'Distributed teams struggled with task coordination, leading to missed deadlines and communication gaps. Existing tools were either too complex or lacked real-time updates.',
        solution: 'Built an Angular SPA with Firebase real-time database, implementing RxJS for reactive state management, drag-drop interfaces, and role-based access controls.',
        impact: 'Improved team task coordination efficiency by 42%, reduced missed deadlines by 65%, and increased team satisfaction scores from 3.2 to 4.7/5 in user testing.',
        imageUrl: '/projects/angular/taskflow-pro.jpg',
        fallbackImage: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80',
        liveUrl: 'https://angular-taskflow-pro.netlify.app',
        githubUrl: 'https://github.com/manisaiteja2007/angular-task-management',
        projectUrl: '/projects/angular/angular-task-management',
        technologies: ['Angular 16', 'TypeScript', 'Firebase', 'RxJS', 'Tailwind CSS', 'NgRx', 'Jest'],
        tags: [
          { id: 'angular', name: 'Angular', color: '#dd0031' },
          { id: 'firebase', name: 'Firebase', color: '#ffca28' },
          { id: 'typescript', name: 'TypeScript', color: '#3178c6' },
          { id: 'realtime', name: 'Real-time', color: '#4caf50' },
          { id: 'productivity', name: 'Productivity', color: '#2196f3' },
        ],
        category: 'angular',
        featured: true,
        featuredOrder: 2,
        challenges: [
          'Real-time synchronization across 50+ concurrent users',
          'Implementing smooth drag-and-drop with complex nested task hierarchies',
          'Optimizing Firebase queries to handle 10,000+ tasks efficiently',
          'Managing subscription memory leaks in long-lived Angular components'
        ],
        learnings: [
          'Advanced RxJS patterns for complex state management',
          'Firebase security rules and scalable data modeling',
          'Performance optimization techniques for real-time Angular apps',
          'Implementing comprehensive unit tests with 90%+ coverage'
        ],
        metrics: [
          { label: 'Load Time', value: '< 1.2s', improvement: '60% faster than baseline' },
          { label: 'Concurrent Users', value: '50+', improvement: 'Handled without performance degradation' },
          { label: 'Test Coverage', value: '92%', improvement: 'Ensured reliability' }
        ]
      },
    ],
  },
  {
    id: 'arduino',
    name: 'Arduino/IoT',
    color: 'text-green-600 dark:text-green-400',
    description: 'Embedded systems and Internet of Things solutions',
    projects: [
      {
        id: 'arduino-smart-home',
        title: 'SmartHome IoT - Automated Environment Control',
        description: 'An IoT-based smart home automation system using Arduino Nano and ESP32, featuring remote appliance control, real-time sensor monitoring, and energy optimization algorithms.',
        shortDescription: 'Intelligent home automation with energy optimization',
        problem: 'Traditional home automation systems were expensive, closed-source, and lacked energy optimization features. Users wanted customizable, affordable solutions.',
        solution: 'Built a modular IoT system with ESP32 microcontrollers, MQTT protocol for communication, and a custom React dashboard for monitoring and control.',
        impact: 'Reduced energy consumption by 35% through smart scheduling, decreased setup costs by 70% compared to commercial solutions, and achieved 99.8% system uptime.',
        imageUrl: '/projects/arduino/smarthome-iot.jpg',
        fallbackImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
        liveUrl: 'https://smarthome-iot-demo.vercel.app',
        githubUrl: 'https://github.com/manisaiteja2007/arduino-smart-home',
        projectUrl: '/projects/arduino/arduino-smart-home',
        technologies: ['Arduino C++', 'ESP32', 'MQTT', 'React', 'Node.js', 'MongoDB', 'WebSockets'],
        tags: [
          { id: 'arduino', name: 'Arduino', color: '#00979d' },
          { id: 'iot', name: 'IoT', color: '#4caf50' },
          { id: 'esp32', name: 'ESP32', color: '#795548' },
          { id: 'automation', name: 'Automation', color: '#ff9800' },
          { id: 'energy', name: 'Energy', color: '#ffeb3b' },
        ],
        category: 'arduino',
        featured: true,
        featuredOrder: 3,
        challenges: [
          'Ensuring reliable communication in WiFi-unstable environments',
          'Implementing efficient power management for battery-powered sensors',
          'Synchronizing data across multiple ESP32 nodes',
          'Securing IoT endpoints against unauthorized access'
        ],
        learnings: [
          'Low-power programming techniques for embedded systems',
          'MQTT protocol design patterns for IoT',
          'Hardware-software co-design principles',
          'Real-time data visualization techniques'
        ],
        metrics: [
          { label: 'Energy Savings', value: '35%', improvement: 'Through smart scheduling' },
          { label: 'Response Time', value: '< 200ms', improvement: 'Local processing' },
          { label: 'Uptime', value: '99.8%', improvement: 'Fault-tolerant design' }
        ]
      },
      {
        id: 'arduino-weather-station',
        title: 'Smart Weather Station with Predictive Analytics',
        description: 'A solar-powered weather monitoring station collecting temperature, humidity, pressure, and air quality data with ML-based weather prediction.',
        shortDescription: 'Solar-powered weather monitoring with predictions',
        imageUrl: '/projects/arduino/weather-station.jpg',
        fallbackImage: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800&q=80',
        githubUrl: 'https://github.com/manisaiteja2007/weather-station-iot',
        projectUrl: '/projects/arduino/weather-station',
        technologies: ['Arduino', 'Python', 'TensorFlow Lite', 'LoRa', 'Solar Panels'],
        tags: [
          { id: 'ml', name: 'Machine Learning' },
          { id: 'solar', name: 'Solar Powered' },
          { id: 'environment', name: 'Environment' },
        ],
        category: 'arduino',
        featured: false,
        featuredOrder: 8
      },
    ],
  },
  {
    id: 'aws',
    name: 'AWS Cloud',
    color: 'text-orange-600 dark:text-orange-400',
    description: 'Scalable cloud infrastructure and serverless architectures',
    projects: [
      {
        id: 'aws-serverless-api',
        title: 'Serverless Task API - Scalable Backend Service',
        description: 'A production-ready serverless REST API built on AWS Lambda and API Gateway with automated CI/CD, monitoring, and scalable data persistence.',
        shortDescription: 'Auto-scaling serverless backend with zero maintenance',
        problem: 'Startups needed scalable backend infrastructure without managing servers. Traditional setups had high fixed costs and complex scaling configurations.',
        solution: 'Designed a completely serverless architecture using AWS Lambda, DynamoDB, and API Gateway with Infrastructure as Code (Terraform) and automated deployments.',
        impact: 'Reduced infrastructure costs by 85% (pay-per-use model), achieved 99.95% uptime, and scaled from 100 to 10,000 requests/minute seamlessly during load tests.',
        imageUrl: '/projects/aws/serverless-api.jpg',
        fallbackImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
        githubUrl: 'https://github.com/manisaiteja2007/aws-serverless-api',
        projectUrl: '/projects/aws/aws-serverless-api',
        technologies: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'Terraform', 'Node.js', 'Jest', 'CloudWatch'],
        tags: [
          { id: 'aws', name: 'AWS', color: '#ff9900' },
          { id: 'serverless', name: 'Serverless', color: '#00a1f1' },
          { id: 'scalable', name: 'Scalable', color: '#7cbb00' },
          { id: 'infrastructure', name: 'Infrastructure', color: '#f65314' },
          { id: 'ci-cd', name: 'CI/CD', color: '#ffbb00' },
        ],
        category: 'aws',
        featured: true,
        featuredOrder: 1,
        challenges: [
          'Managing cold start latency for Lambda functions',
          'Designing efficient DynamoDB schemas for complex queries',
          'Implementing comprehensive error handling and retry logic',
          'Securing API endpoints with JWT and rate limiting'
        ],
        learnings: [
          'Serverless design patterns and best practices',
          'Cost optimization strategies for AWS services',
          'Infrastructure as Code with Terraform',
          'Distributed system monitoring and debugging'
        ],
        metrics: [
          { label: 'Cost Reduction', value: '85%', improvement: 'Pay-per-use model' },
          { label: 'Uptime', value: '99.95%', improvement: 'AWS managed services' },
          { label: 'Max Scale', value: '10K RPM', improvement: 'Auto-scaling enabled' }
        ]
      },
      {
        id: 'aws-sagemaker-ml',
        title: 'ML Model Deployment Pipeline with SageMaker',
        description: 'End-to-end machine learning pipeline for training, deploying, and monitoring predictive models in production using AWS SageMaker.',
        shortDescription: 'Automated ML deployment with continuous monitoring',
        imageUrl: '/projects/aws/sagemaker-pipeline.jpg',
        fallbackImage: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80',
        githubUrl: 'https://github.com/manisaiteja2007/aws-sagemaker-ml',
        projectUrl: '/projects/aws/aws-sagemaker-ml',
        technologies: ['AWS SageMaker', 'Docker', 'Python', 'AWS S3', 'MLflow', 'FastAPI'],
        tags: [
          { id: 'machine-learning', name: 'Machine Learning' },
          { id: 'aws-sagemaker', name: 'SageMaker' },
          { id: 'mlops', name: 'MLOps' },
        ],
        category: 'aws',
        featured: false,
        featuredOrder: 9
      },
    ],
  },
  {
    id: 'react',
    name: 'React',
    color: 'text-cyan-600 dark:text-cyan-400',
    description: 'Modern React applications with best practices',
    projects: [
      {
        id: 'react-social-dashboard',
        title: 'SocialSync - Multi-Platform Social Media Dashboard',
        description: 'A comprehensive dashboard for managing multiple social media accounts with unified analytics, content scheduling, and engagement tracking.',
        shortDescription: 'Unified social media management with AI-powered insights',
        problem: 'Social media managers juggled multiple platforms with disparate interfaces, leading to inconsistent posting schedules and missed engagement opportunities.',
        solution: 'Built a React dashboard integrating Twitter, LinkedIn, and Instagram APIs with AI-powered content suggestions and automated scheduling.',
        impact: 'Reduced social media management time by 60%, increased engagement rates by 45%, and improved content consistency across platforms.',
        imageUrl: '/projects/react/social-dashboard.jpg',
        fallbackImage: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=800&q=80',
        liveUrl: 'https://react-social-dashboard.vercel.app',
        githubUrl: 'https://github.com/manisaiteja2007/react-social-dashboard',
        projectUrl: '/projects/react/react-social',
        technologies: ['React 18', 'TypeScript', 'Chart.js', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Socket.io'],
        tags: [
          { id: 'react', name: 'React', color: '#61dafb' },
          { id: 'dashboard', name: 'Dashboard', color: '#764abc' },
          { id: 'analytics', name: 'Analytics', color: '#4caf50' },
          { id: 'realtime', name: 'Real-time', color: '#2196f3' },
          { id: 'ui-ux', name: 'UI/UX', color: '#ff4081' },
        ],
        category: 'react',
        featured: true,
        featuredOrder: 4,
        challenges: [
          'Handling rate limits across different social media APIs',
          'Implementing real-time updates for engagement metrics',
          'Creating responsive data visualizations for complex analytics',
          'Managing OAuth flows for multiple platforms securely'
        ],
        learnings: [
          'Advanced React patterns for data-intensive applications',
          'Real-time data synchronization techniques',
          'Chart.js customization for business dashboards',
          'API integration best practices and error handling'
        ],
        metrics: [
          { label: 'Time Saved', value: '60%', improvement: 'Unified interface' },
          { label: 'Engagement Increase', value: '45%', improvement: 'AI suggestions' },
          { label: 'Page Load', value: '< 1.5s', improvement: 'Code splitting' }
        ]
      },
      {
        id: 'react-ecommerce',
        title: 'ShopSphere - Modern E-commerce Platform',
        description: 'Full-featured e-commerce platform with cart management, payment integration, and personalized recommendations.',
        shortDescription: 'Feature-rich online shopping experience',
        imageUrl: '/projects/react/ecommerce-platform.jpg',
        fallbackImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
        liveUrl: 'https://react-ecommerce-shop.vercel.app',
        githubUrl: 'https://github.com/manisaiteja2007/react-ecommerce',
        projectUrl: '/projects/react/react-ecommerce',
        technologies: ['Next.js', 'Stripe', 'Redux Toolkit', 'Tailwind CSS', 'MongoDB'],
        tags: [
          { id: 'nextjs', name: 'Next.js' },
          { id: 'ecommerce', name: 'E-commerce' },
          { id: 'payments', name: 'Payments' },
        ],
        category: 'react',
        featured: false,
        featuredOrder: 10
      },
    ],
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    color: 'text-green-600 dark:text-green-400',
    description: 'Backend services and APIs with Node.js',
    projects: [
      {
        id: 'nodejs-events-api',
        title: 'EventHub - Event Management Microservices',
        description: 'A distributed microservices architecture for event management with real-time notifications, ticket management, and analytics.',
        shortDescription: 'Scalable event management with microservices',
        problem: 'Event platforms suffered from monolithic architectures that couldn\'t scale during peak ticket sales and lacked real-time features.',
        solution: 'Built a microservices architecture using Node.js, Redis for caching, WebSocket for real-time updates, and Docker for containerization.',
        impact: 'Handled 10x more concurrent users during peak sales, reduced API response times by 75%, and achieved 99.99% availability during major events.',
        imageUrl: '/projects/nodejs/event-management.jpg',
        fallbackImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
        githubUrl: 'https://github.com/manisaiteja2007/nodejs-events-api',
        projectUrl: '/projects/nodejs/nodejs-events',
        technologies: ['Node.js', 'Express', 'Redis', 'WebSocket', 'Docker', 'PostgreSQL', 'Kubernetes'],
        tags: [
          { id: 'nodejs', name: 'Node.js', color: '#339933' },
          { id: 'microservices', name: 'Microservices', color: '#ff6b6b' },
          { id: 'scalable', name: 'Scalable', color: '#4ecdc4' },
          { id: 'real-time', name: 'Real-time', color: '#45b7d1' },
          { id: 'architecture', name: 'Architecture', color: '#96ceb4' },
        ],
        category: 'nodejs',
        featured: true,
        featuredOrder: 5,
        challenges: [
          'Implementing distributed transactions across microservices',
          'Synchronizing real-time data across multiple service instances',
          'Managing service discovery and load balancing',
          'Handling partial failures and implementing circuit breakers'
        ],
        learnings: [
          'Microservices design patterns and anti-patterns',
          'Event-driven architecture with message queues',
          'Container orchestration with Kubernetes',
          'Distributed system monitoring and tracing'
        ],
        metrics: [
          { label: 'Concurrent Users', value: '10x', improvement: 'Scalable architecture' },
          { label: 'Response Time', value: '< 100ms', improvement: 'Redis caching' },
          { label: 'Uptime', value: '99.99%', improvement: 'Fault-tolerant design' }
        ]
      },
      {
        id: 'nodejs-auth-system',
        title: 'SecureAuth - Enterprise Authentication System',
        description: 'Production-ready authentication system with multi-factor authentication, role-based access control, and audit logging.',
        shortDescription: 'Enterprise-grade security with RBAC and MFA',
        imageUrl: '/projects/nodejs/auth-system.jpg',
        fallbackImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
        githubUrl: 'https://github.com/manisaiteja2007/nodejs-auth-system',
        projectUrl: '/projects/nodejs/nodejs-auth',
        technologies: ['Node.js', 'JWT', 'Redis', 'PostgreSQL', 'Docker', 'OAuth 2.0'],
        tags: [
          { id: 'security', name: 'Security' },
          { id: 'authentication', name: 'Authentication' },
          { id: 'rbac', name: 'RBAC' },
        ],
        category: 'nodejs',
        featured: false,
        featuredOrder: 11
      },
    ],
  },
  {
    id: 'python',
    name: 'Python',
    color: 'text-yellow-600 dark:text-yellow-400',
    description: 'Data analysis, automation, and backend services',
    projects: [
      {
        id: 'python-data-analytics',
        title: 'DataInsight - Automated Business Intelligence Platform',
        description: 'A Python-based platform for automated data analysis, visualization, and reporting with machine learning insights.',
        shortDescription: 'Automated data analysis with ML-powered insights',
        problem: 'Businesses struggled with manual data analysis processes that were time-consuming, error-prone, and lacked predictive capabilities.',
        solution: 'Built an automated pipeline using Pandas, Scikit-learn, and FastAPI that processes raw data, generates insights, and creates interactive dashboards.',
        impact: 'Reduced data analysis time from days to hours, improved decision accuracy by 40%, and identified $500K+ in cost-saving opportunities for clients.',
        imageUrl: '/projects/python/data-analytics.jpg',
        fallbackImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        githubUrl: 'https://github.com/manisaiteja2007/python-data-analytics',
        projectUrl: '/projects/python/python-data',
        technologies: ['Python', 'Pandas', 'Scikit-learn', 'FastAPI', 'Plotly', 'Docker', 'PostgreSQL'],
        tags: [
          { id: 'python', name: 'Python', color: '#3776ab' },
          { id: 'data-science', name: 'Data Science', color: '#4c72b0' },
          { id: 'analytics', name: 'Analytics', color: '#ffd43b' },
          { id: 'automation', name: 'Automation', color: '#646464' },
          { id: 'ml', name: 'Machine Learning', color: '#f37626' },
        ],
        category: 'python',
        featured: true,
        featuredOrder: 6,
        challenges: [
          'Processing large datasets (>10GB) efficiently',
          'Implementing real-time data streaming for live dashboards',
          'Creating interpretable ML models for business users',
          'Ensuring data pipeline reliability and error recovery'
        ],
        learnings: [
          'Big data processing techniques with Pandas and Dask',
          'ML model deployment and monitoring',
          'API design for data-intensive applications',
          'Data visualization best practices'
        ],
        metrics: [
          { label: 'Analysis Time', value: 'Hours vs Days', improvement: '90% faster' },
          { label: 'Decision Accuracy', value: '+40%', improvement: 'ML insights' },
          { label: 'Cost Savings', value: '$500K+', improvement: 'Identified opportunities' }
        ]
      },
      {
        id: 'python-inventory-system',
        title: 'InventoryPro - Smart Inventory Management',
        description: 'AI-powered inventory prediction and optimization system with real-time tracking and automated reordering.',
        shortDescription: 'AI-driven inventory optimization',
        imageUrl: '/projects/python/inventory-system.jpg',
        fallbackImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
        githubUrl: 'https://github.com/manisaiteja2007/python-inventory',
        projectUrl: '/projects/python/python-inventory',
        technologies: ['Python', 'Flask', 'SQLite', 'TensorFlow', 'React', 'Docker'],
        tags: [
          { id: 'inventory', name: 'Inventory' },
          { id: 'ai', name: 'AI' },
          { id: 'prediction', name: 'Prediction' },
        ],
        category: 'python',
        featured: false,
        featuredOrder: 12
      },
    ],
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    color: 'text-yellow-600 dark:text-yellow-300',
    description: 'Vanilla JS and frontend applications',
    projects: [
      {
        id: 'javascript-weather-app',
        title: 'WeatherWise - Hyperlocal Weather Forecasting',
        description: 'A progressive web app providing hyperlocal weather forecasts with severe weather alerts and historical data analysis.',
        shortDescription: 'PWA with hyperlocal weather predictions',
        problem: 'Existing weather apps provided generic forecasts that were often inaccurate for specific locations and lacked severe weather preparedness features.',
        solution: 'Built a PWA combining multiple weather APIs with machine learning for improved accuracy, implementing offline functionality and push notifications.',
        impact: 'Achieved 95% forecast accuracy (vs. 75% industry average), reduced data usage by 80% through caching, and increased user retention by 3x through valuable alerts.',
        imageUrl: '/projects/javascript/weather-app.jpg',
        fallbackImage: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800&q=80',
        liveUrl: 'https://weatherwise-pwa.netlify.app',
        githubUrl: 'https://github.com/manisaiteja2007/javascript-weather-app',
        projectUrl: '/projects/javascript/javascript-weather',
        technologies: ['Vanilla JavaScript', 'PWA', 'Service Workers', 'IndexedDB', 'Chart.js', 'Geolocation API'],
        tags: [
          { id: 'javascript', name: 'JavaScript', color: '#f7df1e' },
          { id: 'pwa', name: 'PWA', color: '#5a0fc8' },
          { id: 'weather', name: 'Weather', color: '#4fc3f7' },
          { id: 'offline', name: 'Offline First', color: '#ff9800' },
          { id: 'performance', name: 'Performance', color: '#00bcd4' },
        ],
        category: 'javascript',
        featured: true,
        featuredOrder: 7,
        challenges: [
          'Implementing reliable offline functionality with sync',
          'Optimizing weather data visualization for mobile devices',
          'Managing API rate limits across multiple weather services',
          'Ensuring accurate geolocation across different devices'
        ],
        learnings: [
          'Progressive Web App architecture and best practices',
          'Advanced JavaScript patterns for complex applications',
          'Data visualization techniques for time-series data',
          'Mobile-first performance optimization'
        ],
        metrics: [
          { label: 'Forecast Accuracy', value: '95%', improvement: 'ML-enhanced' },
          { label: 'Data Usage', value: '-80%', improvement: 'Smart caching' },
          { label: 'User Retention', value: '3x', improvement: 'Valuable alerts' }
        ]
      },
    ],
  },
  {
    id: 'cpp',
    name: 'C++',
    color: 'text-purple-600 dark:text-purple-400',
    description: 'Systems programming and performance-critical applications',
    projects: [
      {
        id: 'cpp-pathfinding',
        title: 'PathFinder Pro - Algorithm Visualization Studio',
        description: 'A desktop application visualizing pathfinding algorithms with performance metrics, custom maze generation, and algorithm comparison tools.',
        shortDescription: 'Interactive algorithm visualization and analysis',
        problem: 'Students and developers struggled to understand algorithm behavior and performance characteristics through static code alone.',
        solution: 'Built an interactive C++ application with SFML graphics, implementing multiple algorithms with real-time visualization and detailed performance analytics.',
        impact: 'Improved algorithm understanding by 70% in classroom testing, reduced debugging time for pathfinding implementations by 50%, and became a teaching tool in 3 university courses.',
        imageUrl: '/projects/cpp/pathfinding-visualizer.jpg',
        fallbackImage: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80',
        githubUrl: 'https://github.com/manisaiteja2007/cpp-pathfinding',
        projectUrl: '/projects/cpp/cpp-pathfinding',
        technologies: ['C++17', 'SFML', 'CMake', 'Google Test', 'ImGui', 'OpenGL'],
        tags: [
          { id: 'cpp', name: 'C++', color: '#00599c' },
          { id: 'algorithms', name: 'Algorithms', color: '#ff6b6b' },
          { id: 'visualization', name: 'Visualization', color: '#4ecdc4' },
          { id: 'performance', name: 'Performance', color: '#45b7d1' },
          { id: 'education', name: 'Education', color: '#96ceb4' },
        ],
        category: 'cpp',
        featured: false,
        featuredOrder: 13,
        challenges: [
          'Implementing real-time visualization without blocking algorithm execution',
          'Creating intuitive UI for complex algorithm parameter tuning',
          'Ensuring cross-platform compatibility (Windows/Linux/macOS)',
          'Optimizing rendering performance for large grid sizes'
        ],
        learnings: [
          'Modern C++ features and best practices',
          'Real-time graphics programming techniques',
          'Cross-platform application development',
          'Algorithm optimization and profiling'
        ],
        metrics: [
          { label: 'Understanding Improvement', value: '70%', improvement: 'Visual learning' },
          { label: 'Debugging Time', value: '-50%', improvement: 'Visual debugging' },
          { label: 'Grid Size', value: '1000x1000', improvement: 'Optimized rendering' }
        ]
      },
    ],
  },
  {
    id: 'fullstack',
    name: 'Full Stack',
    color: 'text-indigo-600 dark:text-indigo-400',
    description: 'End-to-end applications with modern stacks',
    projects: [
      {
        id: 'fullstack-health-tracker',
        title: 'HealthSync - Integrated Health Monitoring Platform',
        description: 'A full-stack health tracking platform connecting IoT health devices with a React frontend, Node.js backend, and predictive analytics.',
        shortDescription: 'IoT health monitoring with predictive analytics',
        problem: 'Healthcare providers lacked integrated systems connecting patient devices with analytics and medical records.',
        solution: 'Built a complete system with React frontend, Node.js microservices, PostgreSQL database, and machine learning for health predictions.',
        impact: 'Enabled early detection of health issues in 85% of pilot cases, reduced manual data entry by 90%, and improved patient engagement by 60%.',
        imageUrl: '/projects/fullstack/health-tracker.jpg',
        fallbackImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80',
        githubUrl: 'https://github.com/manisaiteja2007/fullstack-health-tracker',
        projectUrl: '/projects/fullstack/health-tracker',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'TensorFlow.js', 'WebSocket', 'OAuth 2.0'],
        tags: [
          { id: 'fullstack', name: 'Full Stack' },
          { id: 'healthcare', name: 'Healthcare' },
          { id: 'iot', name: 'IoT' },
          { id: 'predictive-analytics', name: 'Predictive Analytics' },
        ],
        category: 'fullstack',
        featured: false,
        featuredOrder: 14
      },
    ],
  },
];

// Helper functions
export const getAllProjects = (): Project[] => {
  return projectCategories.flatMap(category => category.projects);
};

export const getFeaturedProjects = (): Project[] => {
  return getAllProjects()
    .filter(project => project.featured)
    .sort((a, b) => (a.featuredOrder || 99) - (b.featuredOrder || 99));
};

export const getProjectById = (id: string): Project | undefined => {
  return getAllProjects().find(project => project.id === id);
};

export const getProjectsByCategory = (categoryId: string): Project[] => {
  const category = projectCategories.find(cat => cat.id === categoryId);
  return category ? category.projects : [];
};

export const getCategoryById = (categoryId: string): ProjectCategory | undefined => {
  return projectCategories.find(cat => cat.id === categoryId);
};

export const getCategories = (): ProjectCategory[] => {
  return projectCategories;
};

// Get projects by tier (for strategic display)
export const getTieredProjects = () => {
  const allProjects = getAllProjects();
  
  return {
    // Tier 1: Complex Systems (show architecture thinking)
    complex: allProjects.filter(p => 
      ['aws-serverless-api', 'nodejs-events-api', 'arduino-smart-home'].includes(p.id)
    ),
    
    // Tier 2: UI/UX Focus (show design sensibility)
    ui: allProjects.filter(p => 
      ['react-social-dashboard', 'angular-task-management', 'javascript-weather-app'].includes(p.id)
    ),
    
    // Tier 3: Hardware/IoT (show unique blend)
    hardware: allProjects.filter(p => 
      ['arduino-smart-home', 'arduino-weather-station'].includes(p.id)
    ),
    
    // Tier 4: Algorithms & Performance (show optimization)
    algorithms: allProjects.filter(p => 
      ['cpp-pathfinding', 'python-data-analytics'].includes(p.id)
    ),
  };
};

// Get project metrics summary for quick stats
export const getPortfolioMetrics = () => {
  const projects = getAllProjects();
  
  return {
    totalProjects: projects.length,
    featuredProjects: projects.filter(p => p.featured).length,
    totalTechnologies: new Set(projects.flatMap(p => p.technologies)).size,
    categories: projectCategories.length,
    estimatedImpact: projects.reduce((sum, p) => {
      const impact = p.metrics?.[0]?.improvement || '';
      const match = impact.match(/(\d+)%/);
      return sum + (match ? parseInt(match[1]) : 0);
    }, 0),
  };
};

// For search functionality
export const searchProjects = (query: string): Project[] => {
  const searchTerm = query.toLowerCase();
  return getAllProjects().filter(project => 
    project.title.toLowerCase().includes(searchTerm) ||
    project.description.toLowerCase().includes(searchTerm) ||
    project.shortDescription?.toLowerCase().includes(searchTerm) ||
    project.technologies.some(tech => tech.toLowerCase().includes(searchTerm)) ||
    project.tags.some(tag => tag.name.toLowerCase().includes(searchTerm))
  );
};

// For filtering by technology
export const getProjectsByTechnology = (technology: string): Project[] => {
  return getAllProjects().filter(project =>
    project.technologies.some(tech => 
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
};

// Get related projects (for detail pages)
export const getRelatedProjects = (projectId: string, limit: number = 3): Project[] => {
  const project = getProjectById(projectId);
  if (!project) return [];
  
  // Find projects with similar technologies or categories
  const related = getAllProjects()
    .filter(p => 
      p.id !== projectId && 
      (p.category === project.category || 
       p.technologies.some(tech => project.technologies.includes(tech)))
    )
    .slice(0, limit);
  
  return related;
};

// Featured projects (main showcase)
export const featuredProjects = getFeaturedProjects();

// All projects for the all projects page
export const allProjects = getAllProjects();