import React, { createContext, useContext, useState, useEffect } from 'react';
import { AccessibilitySettings } from '../types';

interface AccessibilityContextType {
  settings: AccessibilitySettings;
  toggleReducedMotion: () => void;
  toggleHighContrast: () => void;
  toggleLargeText: () => void;
  toggleDyslexicFont: () => void;
  resetSettings: () => void;
}

const defaultSettings: AccessibilitySettings = {
  reducedMotion: false,
  highContrast: false,
  largeText: false,
  dyslexicFont: false,
};

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    const saved = localStorage.getItem('aetheria_acc_settings');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* fallback */ }
    }
    return defaultSettings;
  });

  useEffect(() => {
    // Detect OS reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setSettings(prev => ({ ...prev, reducedMotion: true }));
    }

    const handleChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({ ...prev, reducedMotion: e.matches }));
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    localStorage.setItem('aetheria_acc_settings', JSON.stringify(settings));
    
    // Apply document level classes
    const root = document.documentElement;
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (settings.largeText) {
      root.style.fontSize = '18px';
    } else {
      root.style.fontSize = '';
    }

    if (settings.dyslexicFont) {
      root.classList.add('font-dyslexic');
    } else {
      root.classList.remove('font-dyslexic');
    }
  }, [settings]);

  const toggleReducedMotion = () => setSettings(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }));
  const toggleHighContrast = () => setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
  const toggleLargeText = () => setSettings(prev => ({ ...prev, largeText: !prev.largeText }));
  const toggleDyslexicFont = () => setSettings(prev => ({ ...prev, dyslexicFont: !prev.dyslexicFont }));
  const resetSettings = () => setSettings(defaultSettings);

  return (
    <AccessibilityContext.Provider
      value={{
        settings,
        toggleReducedMotion,
        toggleHighContrast,
        toggleLargeText,
        toggleDyslexicFont,
        resetSettings,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};
