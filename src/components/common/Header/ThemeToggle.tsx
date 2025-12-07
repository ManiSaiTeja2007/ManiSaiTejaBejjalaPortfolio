import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme'; // This stays the same

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-full bg-primary-brand text-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-brand focus:ring-offset-2 dark:focus:ring-offset-slate-800"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon size={20} className="text-white" />
      ) : (
        <Sun size={20} className="text-white" />
      )}
    </button>
  );
};