import { useAccessibility } from '../context/AccessibilityContext';

export const useReducedMotion = () => {
  const { settings } = useAccessibility();
  return settings.reducedMotion;
};
