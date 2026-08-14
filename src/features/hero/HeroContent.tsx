import React from 'react';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { ArrowRight, Play } from 'lucide-react';

interface HeroContentProps {
  onExploreClick: () => void;
  onLaunchDemoClick: () => void;
}

export const HeroContent: React.FC<HeroContentProps> = React.memo(({
  onExploreClick,
  onLaunchDemoClick,
}) => {
  return (
    <div className="space-y-8 text-left">
      <div className="inline-flex items-center gap-3">
        <Badge variant="cyan" pulse={true}>
          SYNTHEX-V4 • QUANTUM BIOLOGY ENGINE ONLINE
        </Badge>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-heading font-black tracking-tight text-white leading-[1.08]">
        Architecting <br />
        <span className="text-gradient-cyan">Precision Biology</span> <br />
        At Quantum Speed.
      </h1>

      <p className="text-lg sm:text-xl text-slate-300 font-light max-w-2xl leading-relaxed">
        Synthesizing autonomous protein folding, CRISPR-Cas13 target gene editing, and computational molecular therapeutics to conquer genetic disorders.
      </p>

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
    </div>
  );
});

HeroContent.displayName = 'HeroContent';
