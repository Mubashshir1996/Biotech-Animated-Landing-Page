import React from 'react';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { ArrowRight, Dna, Play, ShieldCheck, Cpu, Activity } from 'lucide-react';
import { DnaHelixCanvas } from './DnaHelixCanvas';
import { withScrollReveal } from '../../HOC/withScrollReveal';

interface HeroPresenterProps {
  mouseX: number;
  mouseY: number;
  onExploreClick: () => void;
  onLaunchDemoClick: () => void;
}

const HeroPresenterBase: React.FC<HeroPresenterProps> = ({
  mouseX,
  mouseY,
  onExploreClick,
  onLaunchDemoClick,
}) => {
  return (
    <section aria-label="Hero Section" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Background Ambient Lights */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-bio-glow/10 rounded-full blur-[160px] z-0" />
      <div className="pointer-events-none absolute top-1/3 right-10 w-[400px] h-[400px] bg-bio-violet/15 rounded-full blur-[140px] z-0 animate-pulse-glow" />
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-40 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Live System Badge */}
            <div className="inline-flex items-center gap-3">
              <Badge variant="cyan" pulse={true}>
                SYNTHEX-V4 • QUANTUM BIOLOGY ENGINE ONLINE
              </Badge>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-heading font-black tracking-tight text-white leading-[1.08]">
              Architecting <br />
              <span className="text-gradient-cyan">Precision Biology</span> <br />
              At Quantum Speed.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 font-light max-w-2xl leading-relaxed">
              Synthesizing autonomous protein folding, CRISPR-Cas13 target gene editing, and computational molecular therapeutics to conquer previously undruggable genetic diseases.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                onClick={onLaunchDemoClick}
              >
                Launch Gene Splicer
              </Button>

              <Button
                variant="glass"
                size="lg"
                icon={<Play className="w-4 h-4 text-bio-glow" />}
                iconPosition="left"
                onClick={onExploreClick}
              >
                Explore Platform Architecture
              </Button>
            </div>

            {/* Micro Stats Bar */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10 max-w-xl">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-bio-glow/10 border border-bio-glow/20 text-bio-glow">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-heading font-bold text-white">99.84%</div>
                  <div className="text-xs text-slate-400 font-mono">Folding Accuracy</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-heading font-bold text-white">1.4M+</div>
                  <div className="text-xs text-slate-400 font-mono">Molecules Folded</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-heading font-bold text-white">FDA Phase II</div>
                  <div className="text-xs text-slate-400 font-mono">Accelerated Pipeline</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Interactive 3D Canvas */}
          <div className="lg:col-span-5 relative">
            <div className="glass-panel rounded-3xl p-4 sm:p-6 border border-bio-glow/30 shadow-[0_0_50px_rgba(0,242,254,0.15)] relative overflow-hidden group">
              
              {/* Corner Bioluminescent Accents */}
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-bio-glow/30 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-bio-violet/30 rounded-full blur-2xl pointer-events-none" />

              <DnaHelixCanvas mouseX={mouseX} mouseY={mouseY} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export const HeroPresenter = withScrollReveal(HeroPresenterBase, { direction: 'up', duration: 0.8 });
