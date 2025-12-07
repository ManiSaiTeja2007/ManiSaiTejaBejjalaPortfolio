import { motion } from 'framer-motion';
import { ArrowRight, Code2, Cpu, Zap, GraduationCap, MapPin } from 'lucide-react';
import { PERSONAL_INFO, ACADEMIC_INFO } from '@/utils/constants';

export const Hero = () => {
  // Generate deterministic positions based on index
  const dotPositions = Array.from({ length: 15 }, (_, i) => ({
    x: (i * 7) % 100, // Deterministic based on index
    y: (i * 11) % 100, // Deterministic based on index
  }));

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-gray-900 dark:to-blue-900/20"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dotPositions.map((position, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-brand/20 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + (i % 3), // Deterministic duration based on index
              repeat: Infinity,
              delay: i * 0.2,
            }}
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200 dark:border-slate-700 mb-8 shadow-sm"
            >
              <div className="flex items-center gap-1">
                <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <Code2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <Zap className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
              </div>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Electronics Meets Software
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4"
            >
              <span className="block text-slate-900 dark:text-white">Mani Sai Teja</span>
              <motion.span
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400"
              >
                Bejjala
              </motion.span>
            </motion.h1>

            {/* Title and Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-4 mb-10"
            >
              <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-medium">
                <span className="text-slate-900 dark:text-white">Frontend Developer</span> • 
                <span className="mx-2">ECE Student</span> • 
                <span className="text-primary-brand font-semibold ml-2">IIIT Sri City</span>
              </p>
              
              {/* Quick Info */}
              <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <GraduationCap size={18} className="text-blue-600 dark:text-blue-400" />
                  <span>{ACADEMIC_INFO.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-green-600 dark:text-green-400" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Building bridges between hardware intelligence and software elegance. 
              Exploring the intersection of Electronics Engineering, Web Development, 
              and Artificial Intelligence to create innovative solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-brand to-blue-600 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-primary-brand/30 transition-all duration-300 hover:-translate-y-1"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-xl font-semibold hover:border-primary-brand hover:text-primary-brand dark:hover:text-primary-brand transition-all duration-300 hover:-translate-y-1"
              >
                <span>Get In Touch</span>
              </a>
            </motion.div>

            {/* Stats Preview */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-20 pt-12 border-t border-slate-200 dark:border-slate-800"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                {[
                  { value: '20+', label: 'Projects Built' },
                  { value: '15+', label: 'Technologies' },
                  { value: '2', label: 'Years Coding' },
                  { value: '100%', label: 'Passionate' },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary-brand mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};