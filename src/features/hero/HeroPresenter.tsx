import React from 'react';
import { HeroContent } from './HeroContent';
import { HeroStatsBar } from './HeroStatsBar';
import { DnaHelixCanvas } from './DnaHelixCanvas';
import { withScrollReveal } from '../../HOC/withScrollReveal';

interface HeroPresenterProps {
  mouseX: number;
  mouseY: number;
  onExploreClick: () => void;
  onLaunchDemoClick: () => void;
}

const HeroPresenterBase: React.FC<HeroPresenterProps> = React.memo(({
  mouseX,
  mouseY,
  onExploreClick,
  onLaunchDemoClick,
}) => {
  return (
    <section aria-label="Hero Section" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden min-h-screen flex items-center">
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-bio-glow/10 rounded-full blur-[160px] z-0" />
      <div className="pointer-events-none absolute top-1/3 right-10 w-[400px] h-[400px] bg-bio-violet/15 rounded-full blur-[140px] z-0 animate-pulse-glow" />
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-40 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-8">
            <HeroContent onExploreClick={onExploreClick} onLaunchDemoClick={onLaunchDemoClick} />
            <HeroStatsBar />
          </div>
          <div className="lg:col-span-5 relative">
            <div className="glass-panel rounded-3xl p-4 sm:p-6 border border-bio-glow/30 shadow-[0_0_50px_rgba(0,242,254,0.15)] relative overflow-hidden group">
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-bio-glow/30 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-bio-violet/30 rounded-full blur-2xl pointer-events-none" />
              <DnaHelixCanvas mouseX={mouseX} mouseY={mouseY} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroPresenterBase.displayName = 'HeroPresenterBase';

export const HeroPresenter = withScrollReveal(HeroPresenterBase, { direction: 'up', duration: 0.8 });
