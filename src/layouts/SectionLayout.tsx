import React from 'react';
import { ContainerLayout } from './ContainerLayout';

interface SectionLayoutProps {
  id: string;
  badge?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'violet' | 'emerald';
  fullWidth?: boolean;
}

export const SectionLayout: React.FC<SectionLayoutProps> = ({
  id,
  badge,
  title,
  subtitle,
  children,
  className = '',
  glowColor = 'cyan',
  fullWidth = false,
}) => {
  const getGlowBg = () => {
    switch (glowColor) {
      case 'emerald': return 'rgba(16, 185, 129, 0.08)';
      case 'violet': return 'rgba(139, 92, 246, 0.08)';
      default: return 'rgba(0, 242, 254, 0.08)';
    }
  };

  return (
    <section
      id={id}
      aria-labelledby={title ? `${id}-heading` : undefined}
      className={`relative py-20 sm:py-28 md:py-32 overflow-hidden scroll-mt-20 ${className}`}
    >
      {/* Background Glow Orb */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] z-0 opacity-50"
        style={{ background: getGlowBg() }}
      />

      <div className="relative z-10">
        {(badge || title || subtitle) && (
          <ContainerLayout className="mb-14 md:mb-20 text-center">
            {badge && (
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-bio-card border border-bio-glow/30 text-bio-glow mb-4 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-bio-glow animate-pulse" />
                {badge}
              </span>
            )}
            
            {title && (
              <h2
                id={`${id}-heading`}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.15]"
              >
                {title}
              </h2>
            )}

            {subtitle && (
              <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                {subtitle}
              </p>
            )}
          </ContainerLayout>
        )}

        {fullWidth ? children : <ContainerLayout>{children}</ContainerLayout>}
      </div>
    </section>
  );
};
