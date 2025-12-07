import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { Navigation } from './Navigation';
import { MobileMenu } from './MobileMenu';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { SECTION_IDS } from '@/utils/constants';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#connect', label: 'Connect' },
    { href: '#stats', label: 'Stats' },
    { href: '#contact', label: 'Contact' },
    { href: '#fun-fact', label: 'Fun Fact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 dark:bg-slate-800/95 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 bg-primary-brand rounded-lg flex items-center justify-center">
            <span className="text-white font-poppins font-bold text-2xl">M</span>
          </div>
          <a
            href="#hero"
            className="text-2xl font-poppins font-bold text-primary-brand hidden md:block"
          >
            Mani Sai Teja <span className="md:inline lg:block">Bejjala</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Navigation links={navLinks} activeSection={activeSection} />
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        links={navLinks}
        activeSection={activeSection}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
};