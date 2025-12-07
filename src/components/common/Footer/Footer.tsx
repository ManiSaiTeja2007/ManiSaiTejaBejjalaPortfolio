import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card text-center py-8 border-t border-slate-200 dark:border-slate-700">
      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
        &copy; {new Date().getFullYear()} Mani Sai Teja Bejjala. All rights reserved.
      </p>
      <button
        onClick={scrollToTop}
        className="inline-flex items-center space-x-2 text-primary-brand hover:text-primary-brand/80 transition-colors duration-200"
        aria-label="Back to top"
      >
        <ArrowUp size={16} />
        <span className="text-sm font-medium">Back to Top</span>
      </button>
    </footer>
  );
};