import React, { useState, useEffect } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface AnimatedCounterProps {
  target: number;
  suffix: string;
  decimals?: number;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = React.memo(({
  target,
  suffix,
  decimals = 0,
}) => {
  const [count, setCount] = useState(0);
  const isReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isReducedMotion) {
      setCount(target);
      return;
    }
    const duration = 2000;
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(target * easeProgress);

      if (progress < 1) requestAnimationFrame(updateCounter);
    };

    requestAnimationFrame(updateCounter);
  }, [target, isReducedMotion]);

  return (
    <span>
      {count.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
});

AnimatedCounter.displayName = 'AnimatedCounter';
