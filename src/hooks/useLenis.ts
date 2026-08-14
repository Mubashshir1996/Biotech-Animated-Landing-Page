import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { useAccessibility } from '../context/AccessibilityContext';

export const useLenis = () => {
  const lenisRef = useRef<Lenis | null>(null);
  const { settings } = useAccessibility();

  useEffect(() => {
    if (settings.reducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2.0,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [settings.reducedMotion]);

  return lenisRef;
};
