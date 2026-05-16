import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language } from '@shared/translations';

interface LanguageContextProps {
  currentLanguage: Language;
  language: Language;  // Alias for currentLanguage for more intuitive usage
  changeLanguage: (language: Language) => void;
}

interface LanguageProviderProps {
  children: ReactNode;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: LanguageProviderProps) {
  // Initialize with browser language or saved preference
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    // Safe localStorage access for Capacitor/React Native
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const savedLanguage = localStorage.getItem('language') as Language;
        return savedLanguage || 'en';
      }
    } catch (error) {
      console.warn('localStorage not available:', error);
    }
    return 'en';
  });

  // Check for Bosnian language preference on initialization
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        if (localStorage.getItem('useBosanski') === 'true') {
          window.isBosanski = true;
        }
      }
    } catch (error) {
      console.warn('localStorage not available for Bosnian check:', error);
    }
  }, []);

  // Save language preference when it changes
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('language', currentLanguage);
      }
      // Set html lang attribute for accessibility
      if (typeof document !== 'undefined') {
        document.documentElement.lang = currentLanguage;
      }
    } catch (error) {
      console.warn('localStorage not available for saving language:', error);
    }
  }, [currentLanguage]);

  const changeLanguage = (language: Language) => {
    setCurrentLanguage(language);
  };

  return (
    <LanguageContext.Provider value={{ 
      currentLanguage, 
      language: currentLanguage, // Add language as alias to currentLanguage
      changeLanguage 
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}