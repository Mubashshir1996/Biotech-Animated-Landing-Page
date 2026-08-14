import { useAccessibility } from './useAccessibility';

export const useReducedMotion = () => {
  const { settings } = useAccessibility();
  return settings.reducedMotion;
};
