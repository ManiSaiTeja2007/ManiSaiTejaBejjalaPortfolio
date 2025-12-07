import { motion } from 'framer-motion';
import { Cpu, Layers, TrendingUp, ArrowRight } from 'lucide-react';

export const ValuePropositions = () => {
  const cards = [
    {
      icon: <Cpu className="text-white" size={24} />,
      title: "Hardware Understanding → Better Software",
      description: "My Electronics & Communication Engineering background provides unique system-level insights. I understand performance constraints from silicon to interface, enabling me to build software that's not just functional, but optimally resource-aware.",
      color: "from-blue-500 to-cyan-500",
      delay: 0.1,
    },
    {
      icon: <Layers className="text-white" size={24} />,
      title: "Full-Stack Mindset → End-to-End Solutions",
      description: "I approach problems holistically. From sensor data acquisition on ESP32 to cloud deployment on AWS, I architect complete systems rather than isolated components. This ensures seamless integration and maintainable architecture.",
      color: "from-purple-500 to-pink-500",
      delay: 0.2,
    },
    {
      icon: <TrendingUp className="text-white" size={24} />,
      title: "Continuous Learning → Cutting-Edge Tech",
      description: "Technology evolves rapidly. I maintain a disciplined learning routine, exploring new frameworks, architectural patterns, and best practices. This ensures the solutions I build are modern, scalable, and future-proof.",
      color: "from-green-500 to-emerald-500",
      delay: 0.3,
    },
  ];

  return (
    <section id="value-propositions" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 bg-primary-brand/10 text-primary-brand rounded-full text-sm font-medium mb-4 inline-block">
            My Unique Approach
          </span>
          <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-primary-brand mb-6">
            Where Hardware Meets Software
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            The intersection of electronics engineering and modern web development creates 
            a unique problem-solving perspective that delivers exceptional results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: card.delay, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${card.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {card.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-default mb-4 group-hover:text-primary-brand transition-colors">
                  {card.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {card.description}
                </p>
                
                <div className="flex items-center text-primary-brand font-medium">
                  <span className="mr-2">See it in action</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-primary-brand/10 to-secondary-brand/10 rounded-2xl">
            <div className="text-left">
              <h4 className="text-xl font-bold text-default mb-2">This blend delivers:</h4>
              <div className="flex flex-wrap justify-center gap-4">
                {['Performance-Optimized Code', 'System-Level Thinking', 'Future-Proof Architecture', 'Seamless Integration'].map((item, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};