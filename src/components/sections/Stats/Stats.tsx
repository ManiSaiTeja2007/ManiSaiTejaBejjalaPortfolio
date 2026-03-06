// src/components/sections/Stats/Stats.tsx
'use client';

import { LazyMotion, domAnimation, m } from 'framer-motion';
import { 
  Github, 
  Star, 
  Code, 
  Users,
  GitFork, 
  Calendar, 
  Award, 
  Zap, 
  ExternalLink 
} from 'lucide-react'; // Removed: Clock, TrendingUp, BookOpen
import { GITHUB_CONFIG } from '@/utils/constants';
import { useEffect, useReducer, useCallback, memo } from 'react';
import { statsService } from '@/services/statsService';

// Types
interface GitHubStats {
  publicRepos: number;
  totalStars: number;
  followers: number;
  accountAge: number;
  updatedAt: string;
  _note?: string;
}

interface Language {
  name: string;
  percentage: number;
}

interface Streak {
  currentStreak: number;
  longestStreak: number;
  totalContributionsThisYear: number;
  updatedAt: string;
  _note?: string;
}

interface StatsState {
  stats: GitHubStats | null;
  languages: Language[];
  streak: Streak | null;
  loading: boolean;
  error: string | null;
}

type StatsAction =
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: { stats: GitHubStats; languages: Language[]; streak: Streak } }
  | { type: 'FETCH_ERROR'; payload: string };

const initialState: StatsState = {
  stats: null,
  languages: [],
  streak: null,
  loading: true,
  error: null
};

function statsReducer(state: StatsState, action: StatsAction): StatsState {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        stats: action.payload.stats,
        languages: action.payload.languages,
        streak: action.payload.streak,
        loading: false,
        error: null
      };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

// Stat Card Component
interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  subValue?: string;
  color: string;
  loading: boolean;
}

const StatCard = memo(({ icon, label, value, subValue, color, loading }: StatCardProps) => (
  <m.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
  >
    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center mb-4`}>
      <div className="text-white">
        {icon}
      </div>
    </div>
    
    {loading ? (
      <>
        <div className="h-8 w-20 bg-slate-200 dark:bg-slate-700 rounded animate-pulse mb-2" />
        <div className="h-4 w-32 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
      </>
    ) : (
      <>
        <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
          {value}
        </div>
        <div className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">
          {label}
        </div>
        {subValue && (
          <div className="text-xs text-primary-600 dark:text-primary-400">
            {subValue}
          </div>
        )}
      </>
    )}
  </m.div>
));

StatCard.displayName = 'StatCard';

// Language Progress Bar Component
interface LanguageBarProps {
  language: Language;
}

const LanguageBar = memo(({ language }: LanguageBarProps) => (
  <div className="space-y-1">
    <div className="flex justify-between text-sm">
      <span className="font-medium text-slate-700 dark:text-slate-300">
        {language.name}
      </span>
      <span className="text-slate-600 dark:text-slate-400">
        {language.percentage}%
      </span>
    </div>
    <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
      <m.div
        initial={{ width: 0 }}
        whileInView={{ width: `${language.percentage}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
      />
    </div>
  </div>
));

LanguageBar.displayName = 'LanguageBar';

// Platform Link Component
interface PlatformLinkProps {
  name: string;
  value: string;
  icon: React.ReactNode;
  color: string;
  url: string;
}

const PlatformLink = memo(({ name, value, icon, color, url }: PlatformLinkProps) => (
  <m.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -2 }}
    className={`flex items-center gap-3 px-4 py-3 rounded-lg ${color} transition-all duration-300 hover:shadow-md`}
  >
    <div className="text-current">
      {icon}
    </div>
    <div>
      <div className="font-semibold text-sm">{name}</div>
      <div className="text-xs opacity-90">{value}</div>
    </div>
    <ExternalLink size={14} className="ml-auto opacity-60" />
  </m.a>
));

PlatformLink.displayName = 'PlatformLink';

// Main Component
export const Stats = () => {
  const [state, dispatch] = useReducer(statsReducer, initialState);

  const fetchGitHubData = useCallback(async () => {
    try {
      dispatch({ type: 'FETCH_START' });
      
      const [statsData, langsData, streakData] = await Promise.all([
        statsService.getStats(),
        statsService.getLanguages(),
        statsService.getStreak()
      ]);

      dispatch({
        type: 'FETCH_SUCCESS',
        payload: {
          stats: statsData,
          languages: langsData.languages || [],
          streak: streakData
        }
      });
    } catch {
      dispatch({ type: 'FETCH_ERROR', payload: 'Failed to load GitHub statistics' });
    }
  }, []);

  useEffect(() => {
    fetchGitHubData();
  }, [fetchGitHubData]);

  const mainStats = [
    {
      id: 'repos',
      icon: <Github size={20} />,
      label: 'Public Repositories',
      value: state.stats?.publicRepos || 25,
      subValue: 'Active projects',
      color: 'from-slate-600 to-slate-700'
    },
    {
      id: 'stars',
      icon: <Star size={20} />,
      label: 'Total Stars Earned',
      value: state.stats?.totalStars || 20,
      subValue: 'Across all repos',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      id: 'followers',
      icon: <Users size={20} />,
      label: 'GitHub Followers',
      value: state.stats?.followers || 10,
      subValue: 'Developer community',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'streak',
      icon: <Zap size={20} />,
      label: 'Current Streak',
      value: state.streak?.currentStreak ? `${state.streak.currentStreak} days` : 'Active',
      subValue: state.streak?.longestStreak ? `Longest: ${state.streak.longestStreak} days` : 'Contributing daily',
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'contributions',
      icon: <Calendar size={20} />,
      label: 'Contributions (Year)',
      value: state.streak?.totalContributionsThisYear || 150,
      subValue: 'This year',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'forks',
      icon: <GitFork size={20} />,
      label: 'Technologies',
      value: state.languages.length || 15,
      subValue: 'Programming languages',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const platforms = [
    {
      id: 'leetcode',
      name: 'LeetCode',
      value: '150+ problems solved',
      icon: <Code size={18} />,
      color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 hover:bg-orange-200 dark:hover:bg-orange-900/50',
      url: 'https://leetcode.com/u/manisaiteja2007/'
    },
    {
      id: 'codechef',
      name: 'CodeChef',
      value: '25+ contests',
      icon: <Award size={18} />,
      color: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-900/50',
      url: 'https://www.codechef.com/users/manisaiteja2007'
    }
  ];

  return (
    <LazyMotion features={domAnimation}>
      <section id="stats" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-4">
              Live GitHub Statistics
            </span>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Development Metrics
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Real-time data from my GitHub activity and coding platforms
            </p>
          </m.div>

          {/* Error State */}
          {state.error && (
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-8 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-center"
            >
              <p className="text-red-600 dark:text-red-400 mb-2">{state.error}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Showing cached or estimated data
              </p>
            </m.div>
          )}

          {/* Main Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {mainStats.map((stat) => (
              <StatCard
                key={stat.id}
                icon={stat.icon}
                label={stat.label}
                value={stat.value}
                subValue={stat.subValue}
                color={stat.color}
                loading={state.loading}
              />
            ))}
          </div>

          {/* GitHub Profile Link */}
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <a
              href={`https://github.com/${GITHUB_CONFIG.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-slate-700 transition-colors duration-300"
            >
              <Github size={20} />
              <span>View GitHub Profile</span>
              <ExternalLink size={16} />
            </a>
          </m.div>

          {/* Top Languages */}
          {state.languages.length > 0 && (
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Code size={20} className="text-primary-500" />
                Top Languages
              </h3>
              <div className="space-y-4">
                {state.languages.slice(0, 5).map((lang) => (
                  <LanguageBar key={lang.name} language={lang} />
                ))}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 text-right">
                Updated: {new Date(state.stats?.updatedAt || '').toLocaleDateString()}
              </p>
            </m.div>
          )}

          {/* Coding Platforms */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-slate-200 dark:border-slate-800"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 text-center">
              Coding Practice Platforms
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {platforms.map((platform) => (
                <PlatformLink
                  key={platform.id}
                  name={platform.name}
                  value={platform.value}
                  icon={platform.icon}
                  color={platform.color}
                  url={platform.url}
                />
              ))}
            </div>
          </m.div>

          {/* Cache Note */}
          {state.stats?._note && (
            <div className="mt-6 text-center">
              <p className="text-xs text-amber-600 dark:text-amber-400">
                ⚠️ {state.stats._note}
              </p>
            </div>
          )}
        </div>
      </section>
    </LazyMotion>
  );
};