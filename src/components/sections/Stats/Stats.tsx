import { motion } from 'framer-motion';
import { Github, Star, Code, Clock, Users, TrendingUp } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { GITHUB_CONFIG } from '@/utils/constants';

export const Stats = () => {
  const { theme } = useTheme();

  const stats = [
    {
      icon: <Github className="text-slate-700 dark:text-slate-300" size={24} />,
      label: 'GitHub Repositories',
      value: '25+',
      description: 'Public projects and contributions',
    },
    {
      icon: <Star className="text-yellow-500" size={24} />,
      label: 'Featured Projects',
      value: '8+',
      description: 'Highlighted technical work',
    },
    {
      icon: <Code className="text-green-500" size={24} />,
      label: 'Technologies Used',
      value: '20+',
      description: 'Different tools and frameworks',
    },
    {
      icon: <Clock className="text-purple-500" size={24} />,
      label: 'Years Coding',
      value: '2',
      description: 'Active development experience',
    },
    {
      icon: <Users className="text-blue-500" size={24} />,
      label: 'Community',
      value: 'Active',
      description: 'Participating in dev communities',
    },
    {
      icon: <TrendingUp className="text-red-500" size={24} />,
      label: 'Growth',
      value: 'Continuous',
      description: 'Learning new technologies weekly',
    },
  ];

  const githubStatsUrl = `https://github-readme-stats.vercel.app/api?username=${GITHUB_CONFIG.username}&show_icons=true&theme=${theme === 'dark' ? GITHUB_CONFIG.theme.dark : GITHUB_CONFIG.theme.light}&hide_border=true&bg_color=00000000`;
  
  const topLangsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_CONFIG.username}&layout=compact&theme=${theme === 'dark' ? GITHUB_CONFIG.theme.dark : GITHUB_CONFIG.theme.light}&hide_border=true&bg_color=00000000`;
  
  const streakUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_CONFIG.username}&theme=${theme === 'dark' ? GITHUB_CONFIG.theme.dark : GITHUB_CONFIG.theme.light}&hide_border=true&background=00000000`;

  return (
    <section id="stats" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-brand/10 text-primary-brand rounded-full text-sm font-medium mb-4">
            By The Numbers
          </span>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Progress & Metrics
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Tracking growth through projects, contributions, and continuous learning
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400">
                {stat.description}
              </div>
            </div>
          ))}
        </motion.div>

        {/* GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              GitHub Activity
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              These stats update automatically based on my GitHub activity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 hover:shadow-lg transition-shadow duration-300 border border-slate-200 dark:border-slate-700"
            >
              <img
                src={githubStatsUrl}
                alt="GitHub Stats"
                className="w-full rounded-lg"
                loading="lazy"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 hover:shadow-lg transition-shadow duration-300 border border-slate-200 dark:border-slate-700"
            >
              <img
                src={topLangsUrl}
                alt="Top Languages"
                className="w-full rounded-lg"
                loading="lazy"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 hover:shadow-lg transition-shadow duration-300 border border-slate-200 dark:border-slate-700"
            >
              <img
                src={streakUrl}
                alt="GitHub Streak"
                className="w-full rounded-lg"
                loading="lazy"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Coding Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-800"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Coding Practice Platforms
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: 'LeetCode', problems: '150+', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300' },
                { name: 'CodeChef', contests: '25+', color: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' },
                { name: 'HackerRank', badges: '15+', color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' },
                { name: 'Codewars', rank: '6 kyu', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' },
              ].map((platform, index) => (
                <div
                  key={index}
                  className={`px-6 py-4 rounded-xl ${platform.color} font-medium`}
                >
                  <div className="font-bold">{platform.name}</div>
                  <div className="text-sm mt-1">
                    {platform.problems || platform.contests || platform.badges || platform.rank}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};