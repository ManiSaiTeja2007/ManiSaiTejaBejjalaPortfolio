import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-primary-brand" size={24} />,
      label: 'Email',
      value: 'manisaiteja2007@gmail.com',
      href: 'mailto:manisaiteja2007@gmail.com',
    },
    {
      icon: <MapPin className="text-primary-brand" size={24} />,
      label: 'Location',
      value: 'Chittoor, Andhra Pradesh, India',
      href: null,
    },
    {
      icon: <Phone className="text-primary-brand" size={24} />,
      label: 'Available for',
      value: 'Internships & Projects',
      href: null,
    },
  ];

  return (
    <section id="contact" className="bg-section">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Contact Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-description"
        >
          For inquiries, project discussions, or networking, please feel free to
          contact me. You can reach me directly via email or connect through my
          social media profiles listed above.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
        >
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg text-center hover-lift"
            >
              <div className="flex justify-center mb-4">
                {info.icon}
              </div>
              <div className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                {info.label}
              </div>
              {info.href ? (
                <a
                  href={info.href}
                  className="text-primary-brand hover:text-primary-brand/80 transition-colors duration-300"
                >
                  {info.value}
                </a>
              ) : (
                <div className="text-slate-600 dark:text-slate-400">
                  {info.value}
                </div>
              )}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <a
            href="mailto:manisaiteja2007@gmail.com"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <Mail size={20} />
            <span>Send an Email</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};