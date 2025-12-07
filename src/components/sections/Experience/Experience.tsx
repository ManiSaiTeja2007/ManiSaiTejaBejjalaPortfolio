import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Users, Trophy } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      title: 'Self-Directed Learning',
      organization: 'Personal Projects & Online Courses',
      period: '2022 - Present',
      description: [
        'Building full-stack web applications with modern technologies',
        'Exploring IoT systems and embedded programming',
        'Learning AI/ML concepts and applications',
        'Participating in coding challenges and hackathons',
      ],
      icon: <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />,
      type: 'learning',
    },
    {
      title: 'College Projects & Activities',
      organization: 'IIIT Sri City',
      period: '2023 - Present',
      description: [
        'Working on academic projects in Electronics and Computer Science',
        'Participating in college technical clubs and events',
        'Collaborating with peers on coding projects',
        'Attending workshops and tech seminars',
      ],
      icon: <Users className="text-green-600 dark:text-green-400" size={24} />,
      type: 'academic',
    },
    {
      title: 'Competitive Programming',
      organization: 'LeetCode, CodeChef',
      period: '2023 - Present',
      description: [
        'Regularly solving DSA problems',
        'Participating in coding contests',
        'Improving problem-solving skills',
        'Learning optimization techniques',
      ],
      icon: <Trophy className="text-yellow-600 dark:text-yellow-400" size={24} />,
      type: 'competitive',
    },
    {
      title: 'Open Source Contributions',
      organization: 'GitHub',
      period: '2023 - Present',
      description: [
        'Contributing to open-source projects',
        'Maintaining personal project repositories',
        'Documenting code and writing READMEs',
        'Collaborating with developers globally',
      ],
      icon: <Briefcase className="text-purple-600 dark:text-purple-400" size={24} />,
      type: 'opensource',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-brand/10 text-primary-brand rounded-full text-sm font-medium mb-4">
            My Journey So Far
          </span>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Learning & Growth Path
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            As a 2nd year student, I'm building my foundation through projects, 
            self-learning, and active participation in the developer community
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-brand via-secondary-brand to-transparent" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-brand rounded-full border-4 border-white dark:border-slate-900 z-10" />
                
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-slate-100 dark:bg-slate-700 rounded-xl">
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400">
                          {exp.organization}
                        </p>
                      </div>
                    </div>
                    
                    <span className="inline-block px-3 py-1 bg-primary-brand/10 text-primary-brand rounded-full text-sm font-medium mb-4">
                      {exp.period}
                    </span>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-slate-700 dark:text-slate-300 flex items-start"
                        >
                          <span className="text-primary-brand mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Badge based on type */}
                    <div className="mt-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        exp.type === 'learning' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                        exp.type === 'academic' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                        exp.type === 'competitive' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                        'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
                      }`}>
                        {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Looking Ahead */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 pt-12 border-t border-slate-200 dark:border-slate-800 text-center"
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            What's Next?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                goal: 'Technical Internships',
                description: 'Apply skills in real-world projects at tech companies'
              },
              {
                goal: 'Advanced Projects',
                description: 'Build complex systems combining hardware and software'
              },
              {
                goal: 'Community Leadership',
                description: 'Contribute to open source and mentor fellow developers'
              },
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                <div className="text-2xl mb-4">🎯</div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">{item.goal}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};