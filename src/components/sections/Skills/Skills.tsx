import { motion } from 'framer-motion';
import { TechIcon } from '@/components/common/Icon/Icon';
import { getSkillsByCategory } from '@/utils/skillsData';

export const Skills = () => {
  const skillsByCategory = getSkillsByCategory();

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-4">
            Technical Toolkit
          </span>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Technologies I Work With
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Combining hardware knowledge with modern software development tools
          </p>
        </motion.div>

        <div className="space-y-16">
          {Object.entries(skillsByCategory).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-8 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full" />
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 capitalize">
                  {category.replace('_', '/')}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700 h-full flex flex-col items-center justify-center gap-3 hover:bg-white/50 dark:hover:bg-slate-800/50">
                      <div className="w-16 h-16 flex items-center justify-center bg-slate-100 dark:bg-slate-700 rounded-xl group-hover:scale-110 transition-transform duration-300 group-hover:shadow-md">
                        <TechIcon 
                          name={skill.name}
                          size={32}
                          color="primary"
                          variant="rounded"
                        />
                      </div>
                      <span className="text-sm font-medium text-center text-slate-700 dark:text-slate-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Path */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-slate-200 dark:border-slate-800"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Currently Exploring
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: 'Next.js 14', icon: 'nextjs' },
                { name: 'Three.js', icon: 'three.js' },
                { name: 'Rust', icon: 'rust' },
                { name: 'Edge Computing', icon: 'aws' },
                { name: 'MLOps', icon: 'kubernetes' },
                { name: 'Cloud Native', icon: 'docker' },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium border border-primary-500/20"
                >
                  <TechIcon 
                    name={tech.icon}
                    size={16}
                    color="primary"
                  />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};