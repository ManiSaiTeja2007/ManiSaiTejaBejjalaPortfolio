// src/utils/principlesData.ts
import type { ProfessionalPrinciple } from '@/types/portfolio';

export const principlesData: ProfessionalPrinciple[] = [
  {
    id: 'engineering-excellence',
    title: 'Engineering Excellence',
    description: 'Building systems that are not just functional, but exemplary in their architecture, performance, and maintainability.',
    icon: '⚙️'
  },
  {
    id: 'strategic-impact',
    title: 'Strategic Impact',
    description: 'Focusing on work that creates measurable business value through elegant, scalable solutions.',
    icon: '🎯'
  },
  {
    id: 'continuous-evolution',
    title: 'Continuous Evolution',
    description: 'Mastery through constant refinement while staying ahead of technology curves.',
    icon: '📈'
  },
  {
    id: 'precision-communication',
    title: 'Precision Communication',
    description: 'Clear, concise technical communication making complex concepts understandable.',
    icon: '💬'
  }
];

// Named export
export { principlesData as principles };
