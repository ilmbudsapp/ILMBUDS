import React, { createContext, useState, useContext, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'system';

type ThemeContextType = {
  theme: Theme;
  isDarkMode: boolean;
  setTheme: (theme: Theme) => void;
  toggleDarkMode: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // FORCE LIGHT MODE - disable dark mode
    return 'light';
  });

  const [isDarkMode, setIsDarkMode] = useState(false); // ALWAYS FALSE - no dark mode

  // Determine if dark mode should be active
  useEffect(() => {
    const updateTheme = () => {
      // FORCE LIGHT MODE ALWAYS - no dark mode allowed
      const shouldBeDark = false;
      
      setIsDarkMode(false);
      
      // Force light theme - safe access
      try {
        if (typeof document !== 'undefined') {
          document.documentElement.setAttribute('data-theme', 'light');
          document.documentElement.classList.remove('dark');
        }
      } catch (error) {
        console.warn('document not available for theme:', error);
      }
      
      console.log('🎯 FORCED LIGHT MODE - Dark mode disabled');
    };

    updateTheme();

    // Listen for system theme changes - safe access
    try {
      if (typeof window !== 'undefined' && window.matchMedia) {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
          if (theme === 'system') {
            updateTheme();
          }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
      }
    } catch (error) {
      console.warn('matchMedia not available:', error);
    }
  }, [theme]);

  // Save theme to localStorage
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('ilmbuds-theme', theme);
      }
    } catch (error) {
      console.warn('localStorage not available for theme:', error);
    }
  }, [theme]);

  const toggleDarkMode = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, setTheme, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}