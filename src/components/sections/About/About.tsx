import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, MapPin, Calendar, BookOpen, Target } from 'lucide-react';
import { PERSONAL_INFO, ACADEMIC_INFO, FOCUS_AREAS } from '@/utils/constants';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* Left Column - Personal Narrative */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 bg-primary-brand/10 text-primary-brand rounded-full text-sm font-medium mb-4">
                My Journey
              </span>
              
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                From Circuits to Code
              </h2>
              
              <div className="space-y-4 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                <p>
                  Hello! I'm <strong>{PERSONAL_INFO.name}</strong>, a passionate 
                  <strong> 2nd year Electronics and Communication Engineering student at {PERSONAL_INFO.college}</strong>. 
                  My journey began with curiosity about how things work at the hardware level, 
                  which naturally evolved into exploring how software brings hardware to life.
                </p>
                
                <p>
                  What makes my approach unique is the <strong>systems-level perspective</strong> from my ECE background. 
                  I understand that every line of code runs on physical hardware, and this awareness 
                  fundamentally shapes how I architect solutions—always considering performance, 
                  efficiency, and real-world constraints.
                </p>
                
                <p>
                  I'm constantly exploring the intersection of <strong>electronics, software development, 
                  and artificial intelligence</strong>. This blend allows me to approach problems from 
                  multiple angles, creating solutions that are not just functional, but optimal 
                  across the entire technology stack.
                </p>
              </div>
            </div>

            {/* Current Focus */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Target className="text-primary-brand" size={24} />
                Current Focus
              </h3>
              <ul className="space-y-3">
                {FOCUS_AREAS.map((area, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-brand rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Right Column - Information Cards */}
          <div className="space-y-6">
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/20 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                  <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Education</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{ACADEMIC_INFO.year}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">{PERSONAL_INFO.college}</h4>
                  <p className="text-slate-700 dark:text-slate-300">{ACADEMIC_INFO.degree}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    CGPA: {ACADEMIC_INFO.gpa}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Relevant Courses</h4>
                  <div className="flex flex-wrap gap-2">
                    {ACADEMIC_INFO.relevantCourses.slice(0, 4).map((course, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white dark:bg-slate-700 rounded-full text-sm text-slate-700 dark:text-slate-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Availability Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-slate-50 to-green-50 dark:from-slate-800 dark:to-green-900/20 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                  <Briefcase className="text-green-600 dark:text-green-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Availability</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Open to opportunities</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="text-slate-500" size={20} />
                  <span className="text-slate-700 dark:text-slate-300">{PERSONAL_INFO.location}</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Calendar className="text-slate-500" size={20} />
                  <span className="text-slate-700 dark:text-slate-300">Summer 2025 & Beyond</span>
                </div>
                
                <div className="mt-4">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-medium">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Actively seeking internships
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Learning Approach Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-800 dark:to-purple-900/20 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                  <BookOpen className="text-purple-600 dark:text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Learning Philosophy</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Build, Learn, Iterate</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {[
                  "Learning through hands-on projects",
                  "Exploring documentation and source code",
                  "Participating in coding communities",
                  "Regular practice on coding platforms",
                  "Staying updated with tech trends"
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Core Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 pt-12 border-t border-slate-200 dark:border-slate-800"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              My Development Philosophy
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Principles that guide my approach to building technology solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🔍',
                title: 'Understand First',
                description: 'Spend time understanding the problem domain, constraints, and requirements before writing any code.'
              },
              {
                icon: '⚡',
                title: 'Optimize Intelligently',
                description: 'Write efficient code that considers both algorithmic complexity and hardware constraints.'
              },
              {
                icon: '🌱',
                title: 'Build to Evolve',
                description: 'Create solutions that can adapt and grow, not just solve today\'s requirements.'
              },
              {
                icon: '🎯',
                title: 'Focus on Impact',
                description: 'Prioritize work that creates real value and solves meaningful problems.'
              },
              {
                icon: '🤝',
                title: 'Collaborate Openly',
                description: 'Share knowledge, learn from others, and contribute to the developer community.'
              },
              {
                icon: '📚',
                title: 'Learn Continuously',
                description: 'Stay curious and keep updating skills with emerging technologies and best practices.'
              },
            ].map((principle, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl mb-4">{principle.icon}</div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{principle.title}</h4>
                <p className="text-slate-600 dark:text-slate-400">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};