import React, { useState } from 'react';
import { useAudioFeedback } from '../hooks/useAudioFeedback';

export function withGlassmorphicCard<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const ComponentWithGlassmorphicCard: React.FC<P & { className?: string }> = ({ className = '', ...props }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const { handleHover } = useAudioFeedback();

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
      handleHover();
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    return (
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`relative group rounded-2xl glass-card transition-all duration-300 overflow-hidden ${className}`}
        style={
          isHovered
            ? ({
                '--mouse-x': `${mousePos.x}px`,
                '--mouse-y': `${mousePos.y}px`,
              } as React.CSSProperties)
            : undefined
        }
      >
        {/* Dynamic Light Beam Follower */}
        {isHovered && (
          <div
            className="pointer-events-none absolute -inset-px opacity-100 transition-opacity duration-300 rounded-2xl z-10"
            style={{
              background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(0, 242, 254, 0.15), transparent 70%)`,
            }}
          />
        )}
        
        {/* Border Glow Gradient */}
        <div className="absolute inset-0 rounded-2xl border border-bio-glow/20 group-hover:border-bio-glow/50 transition-colors duration-300 pointer-events-none" />

        <WrappedComponent {...(props as P)} />
      </div>
    );
  };

  ComponentWithGlassmorphicCard.displayName = `WithGlassmorphicCard(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return ComponentWithGlassmorphicCard;
}
