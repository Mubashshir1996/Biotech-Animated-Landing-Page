import React, { useState, useEffect } from 'react';
import { HeroPresenter } from './HeroPresenter';

interface HeroContainerProps {
  onLaunchDemoClick: () => void;
}

export const HeroContainer: React.FC<HeroContainerProps> = ({ onLaunchDemoClick }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleExploreClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroPresenter
      mouseX={mousePos.x}
      mouseY={mousePos.y}
      onExploreClick={handleExploreClick}
      onLaunchDemoClick={onLaunchDemoClick}
    />
  );
};
