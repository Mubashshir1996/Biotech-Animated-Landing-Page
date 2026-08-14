import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

export interface ScrollRevealOptions {
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  distance?: number;
}

export function withScrollReveal<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  options: ScrollRevealOptions = {}
) {
  const { delay = 0, duration = 0.6, direction = 'up', distance = 40 } = options;

  const ComponentWithScrollReveal: React.FC<P> = (props) => {
    const isReducedMotion = useReducedMotion();

    if (isReducedMotion) {
      return <WrappedComponent {...props} />;
    }

    const getInitialPosition = () => {
      switch (direction) {
        case 'up': return { y: distance, opacity: 0 };
        case 'down': return { y: -distance, opacity: 0 };
        case 'left': return { x: distance, opacity: 0 };
        case 'right': return { x: -distance, opacity: 0 };
        case 'fade': return { opacity: 0 };
        default: return { y: distance, opacity: 0 };
      }
    };

    return (
      <motion.div
        initial={getInitialPosition()}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <WrappedComponent {...props} />
      </motion.div>
    );
  };

  ComponentWithScrollReveal.displayName = `WithScrollReveal(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return ComponentWithScrollReveal;
}
