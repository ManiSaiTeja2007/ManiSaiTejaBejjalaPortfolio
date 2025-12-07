import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export const FunFact = () => {
  return (
    <section id="fun-fact" className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Fun Fact
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="inline-flex items-center justify-center p-3 bg-primary-brand/10 rounded-full mb-6">
          <Zap className="text-primary-brand" size={32} />
        </div>
        
        <blockquote className="text-2xl font-poppins font-semibold italic text-slate-800 dark:text-slate-200 mb-6">
          "I love blending my ECE background with frontend development,
          constantly experimenting with new tech stacks to create innovative
          projects that seamlessly bridge hardware and software!"
        </blockquote>
        
        <div className="text-slate-600 dark:text-slate-400">
          <p className="mb-4">
            When I'm not coding, you can find me exploring new IoT projects,
            contributing to open-source, or learning about the latest advancements
            in web technologies.
          </p>
          <p>
            I believe that the best solutions come from understanding both the
            hardware and software sides of technology.
          </p>
        </div>
      </motion.div>
    </section>
  );
};