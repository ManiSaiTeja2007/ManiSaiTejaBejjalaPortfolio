interface NavigationLink {
  href: string;
  label: string;
}

interface NavigationProps {
  links: NavigationLink[];
  activeSection: string;
}

export const Navigation = ({ links, activeSection }: NavigationProps) => {
  return (
    <nav className="flex space-x-6">
      {links.map((link) => {
        const isActive = activeSection === link.href.substring(1);
        return (
          <a
            key={link.href}
            href={link.href}
            className={`font-semibold transition-colors duration-200 ${
              isActive
                ? 'text-primary-brand font-bold'
                : 'text-slate-700 dark:text-slate-300 hover:text-primary-brand'
            }`}
          >
            {link.label}
          </a>
        );
      })}
    </nav>
  );
};