import { motion } from 'framer-motion';
import { Github, Star, Code, Clock, Users, TrendingUp } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { GITHUB_CONFIG } from '@/utils/constants';

export const Stats = () => {
  const { theme } = useTheme();
  
  // Use the actual GitHub username from constants
  const githubUsername = GITHUB_CONFIG.username;
  
  // Proper GitHub Stats URLs
  const githubStatsUrl = `https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&count_private=true&hide_border=true&bg_color=00000000&title_color=${theme === 'dark' ? 'ffffff' : '000000'}&text_color=${theme === 'dark' ? 'ffffff' : '000000'}&icon_color=${theme === 'dark' ? '58a6ff' : '0366d6'}`;
  
  const topLangsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&hide_border=true&bg_color=00000000&title_color=${theme === 'dark' ? 'ffffff' : '000000'}&text_color=${theme === 'dark' ? 'ffffff' : '000000'}`;
  
  const streakUrl = `https://streak-stats.demolab.com/?user=${githubUsername}&theme=${theme === 'dark' ? 'dark' : 'light'}&hide_border=true&background=00000000&fire=${theme === 'dark' ? 'DD2727' : 'DD2727'}&currStreakLabel=${theme === 'dark' ? 'FFFFFF' : '000000'}`;

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

  return (
    <section id="stats" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-4">
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
            {/* GitHub Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center min-h-[200px]"
            >
              <div className="mb-4">
                <Github className="text-slate-700 dark:text-slate-300" size={32} />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                GitHub Stats
              </h4>
              <div className="w-full h-[200px] flex items-center justify-center">
                <img
                  src={githubStatsUrl}
                  alt="GitHub Stats"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback if image fails to load
                    console.log('GitHub stats image failed to load');
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `
                      <div class="text-center">
                        <p class="text-slate-600 dark:text-slate-400 mb-2">GitHub stats temporarily unavailable</p>
                        <a href="https://github.com/${githubUsername}" target="_blank" rel="noopener noreferrer" 
                           class="text-primary-600 dark:text-primary-400 hover:underline">
                          Visit GitHub Profile
                        </a>
                      </div>
                    `;
                  }}
                />
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
                Updates automatically
              </p>
            </motion.div>
            
            {/* Top Languages Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center min-h-[200px]"
            >
              <div className="mb-4">
                <Code className="text-slate-700 dark:text-slate-300" size={32} />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Top Languages
              </h4>
              <div className="w-full h-[200px] flex items-center justify-center">
                <img
                  src={topLangsUrl}
                  alt="Top Languages"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                  onError={(e) => {
                    console.log('Top languages image failed to load');
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `
                      <div class="text-center">
                        <p class="text-slate-600 dark:text-slate-400 mb-2">Language stats temporarily unavailable</p>
                        <a href="https://github.com/${githubUsername}?tab=repositories" target="_blank" rel="noopener noreferrer"
                           class="text-primary-600 dark:text-primary-400 hover:underline">
                          View Repositories
                        </a>
                      </div>
                    `;
                  }}
                />
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
                Based on public repositories
              </p>
            </motion.div>
            
            {/* GitHub Streak Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center min-h-[200px]"
            >
              <div className="mb-4">
                <TrendingUp className="text-slate-700 dark:text-slate-300" size={32} />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Contribution Streak
              </h4>
              <div className="w-full h-[200px] flex items-center justify-center">
                <img
                  src={streakUrl}
                  alt="GitHub Streak"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                  onError={(e) => {
                    console.log('Streak stats image failed to load');
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `
                      <div class="text-center">
                        <p class="text-slate-600 dark:text-slate-400 mb-2">Streak stats temporarily unavailable</p>
                        <a href="https://github.com/${githubUsername}" target="_blank" rel="noopener noreferrer"
                           class="text-primary-600 dark:text-primary-400 hover:underline">
                          Check GitHub Activity
                        </a>
                      </div>
                    `;
                  }}
                />
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
                Daily coding commitment
              </p>
            </motion.div>
          </div>

          {/* GitHub Profile Link */}
          <div className="text-center mt-8">
            <a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-slate-700 text-white rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors duration-300"
            >
              <Github size={20} />
              <span>View Full GitHub Profile</span>
            </a>
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
                { 
                  name: 'LeetCode', 
                  problems: '150+', 
                  color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
                  url: 'https://leetcode.com/u/manisaiteja2007/'
                },
                { 
                  name: 'CodeChef', 
                  contests: '25+', 
                  color: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
                  url: 'https://www.codechef.com/users/manisaiteja2007'
                },
                { 
                  name: 'HackerRank', 
                  badges: '15+', 
                  color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
                  url: 'https://www.hackerrank.com/profile/manisaiteja2007'
                },
                { 
                  name: 'Codewars', 
                  rank: '6 kyu', 
                  color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
                  url: 'https://www.codewars.com/users/manisaiteja2007'
                },
              ].map((platform, index) => (
                <a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-4 rounded-xl ${platform.color} font-medium hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1`}
                >
                  <div className="font-bold">{platform.name}</div>
                  <div className="text-sm mt-1">
                    {platform.problems || platform.contests || platform.badges || platform.rank}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};