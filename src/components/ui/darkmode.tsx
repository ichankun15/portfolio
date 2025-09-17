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
        return <Sun className="w-4 h-4 text-orange-500" />;
      case 'system':
        return <Monitor className="w-4 h-4 text-blue-500" />;
      case 'dark':
        return <Moon className="w-4 h-4 text-indigo-600" />;
      default:
        return <Sun className="w-4 h-4" />;
    }
  };

  return (
    <div className="fixed top-6 left-6 z-50">
      <div className="flex items-center space-x-3 px-6 py-3">
        
        {/* Toggle Track */}
        <div className="relative">
          <div className="flex items-center space-x-1">
            <Sun className="w-4 h-4 text-muted-foreground" />
            <Monitor className="w-4 h-4 text-muted-foreground" />
            <Moon className="w-4 h-4 text-muted-foreground" />
          </div>
          
          {/* Toggle Button */}
          <button
            onClick={cycleTheme}
            className="absolute top-1/2 -translate-y-1/2 w-20 h-8 rounded-full bg-muted/30 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary/50 overflow-hidden"
            title={`Current: ${theme}${theme === 'system' ? ` (${systemTheme})` : ''}`}
            type="button"
            aria-label={`Toggle theme. Current: ${theme}`}
          >
            {/* Track Background */}
            <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
              theme === 'light' 
                ? 'bg-gradient-to-r from-yellow-400 to-orange-400' 
                : theme === 'system'
                ? 'bg-gradient-to-r from-blue-400 to-purple-400'
                : 'bg-gradient-to-r from-indigo-500 to-purple-600'
            }`} />
            
            {/* Sliding Circle */}
            <div
              className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out flex items-center justify-center ${
                theme === 'light' 
                  ? 'translate-x-1' 
                  : theme === 'system'
                  ? 'translate-x-7'
                  : 'translate-x-[52px]'
              }`}
            >
              {getThemeIcon()}
            </div>
          </button>
        </div>
        
        {/* Theme Labels */}
        <div className="flex flex-col text-xs text-muted-foreground">
          <span className={`transition-colors duration-200 ${theme === 'light' ? 'text-primary font-semibold' : ''}`}>
          </span>
          <span className={`transition-colors duration-200 ${theme === 'system' ? 'text-primary font-semibold' : ''}`}>
          </span>
          <span className={`transition-colors duration-200 ${theme === 'dark' ? 'text-primary font-semibold' : ''}`}>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DarkMode;