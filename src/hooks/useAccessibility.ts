import { useContext } from 'react';
import { AccessibilityContext, defaultAccessibilitySettings } from '../context/AccessibilityContext';

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    return {
      settings: defaultAccessibilitySettings,
      toggleReducedMotion: () => {},
      toggleHighContrast: () => {},
      toggleLargeText: () => {},
      toggleDyslexicFont: () => {},
      resetSettings: () => {},
    };
  }
  return context;
};
