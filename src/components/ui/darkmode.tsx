import { useState, useEffect } from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';

type Theme = 'light' | 'dark' | 'system';

interface DarkModeProps {
  className?: string;
}

const DarkMode: React.FC<DarkModeProps> = ({ className = '' }) => {
  const [theme, setTheme] = useState<Theme>('system');
  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>('light');

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    
    setSystemTheme(systemPreference);
    
    if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
      setTheme(savedTheme);
      applyTheme(savedTheme, systemPreference);
    } else {
      setTheme('system');
      applyTheme('system', systemPreference);
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      const newSystemTheme = e.matches ? 'dark' : 'light';
      setSystemTheme(newSystemTheme);
      if (theme === 'system') {
        applyTheme('system', newSystemTheme);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Apply theme to document
  const applyTheme = (newTheme: Theme, currentSystemTheme: 'light' | 'dark' = systemTheme): void => {
    const root = document.documentElement;
    
    if (newTheme === 'dark' || (newTheme === 'system' && currentSystemTheme === 'dark')) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Save to localStorage
    localStorage.setItem('theme', newTheme);
  };

  // Cycle through themes: light -> system -> dark -> light
  const cycleTheme = (): void => {
    const themes: Theme[] = ['light', 'system', 'dark'];
    const currentIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  const getThemeIcon = (): JSX.Element => {
    switch (theme) {
      case 'light':
        return <Sun className="w-3 h-3 text-orange-500" />;
      case 'system':
        return <Monitor className="w-3 h-3 text-blue-500" />;
      case 'dark':
        return <Moon className="w-3 h-3 text-indigo-600" />;
      default:
        return <Sun className="w-3 h-3" />;
    }
  };

  return (
    // REMOVED: fixed positioning - now uses relative positioning for navbar integration
    <div className={`flex items-center ${className}`}>
      {/* Compact Toggle Button */}
      <button
        onClick={cycleTheme}
        className="relative w-10 h-10 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary/50 flex items-center justify-center group"
        title={`Current: ${theme}${theme === 'system' ? ` (${systemTheme})` : ''}`}
        type="button"
        aria-label={`Toggle theme. Current: ${theme}`}
      >
        {/* Background with theme color */}
        <div className={`absolute inset-1 rounded-md transition-all duration-300 ${
          theme === 'light' 
            ? 'bg-gradient-to-br from-yellow-400/20 to-orange-400/20' 
            : theme === 'system'
            ? 'bg-gradient-to-br from-blue-400/20 to-purple-400/20'
            : 'bg-gradient-to-br from-indigo-500/20 to-purple-600/20'
        }`} />
        
        {/* Icon */}
        <div className="relative z-10 group-hover:scale-110 transition-transform duration-200">
          {getThemeIcon()}
        </div>
      </button>
    </div>
  );
};

export default DarkMode;