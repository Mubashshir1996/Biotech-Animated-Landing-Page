import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PipelineStepCardProps {
  step: {
    phase: string;
    title: string;
    description: string;
    icon: React.ReactNode;
  };
  isLast: boolean;
}

export const PipelineStepCard: React.FC<PipelineStepCardProps> = React.memo(({ step, isLast }) => {
  return (
    <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-bio-glow/40 transition-all duration-300 relative group">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-mono font-bold text-bio-glow px-2.5 py-1 rounded-md bg-bio-glow/10 border border-bio-glow/20">
          {step.phase}
        </span>
        <div className="p-2 rounded-lg bg-white/5 group-hover:scale-110 transition-transform">
          {step.icon}
        </div>
      </div>
      <h3 className="text-lg font-heading font-bold text-white mb-2 group-hover:text-bio-glow transition-colors">
        {step.title}
      </h3>
      <p className="text-xs text-slate-300 font-light leading-relaxed">
        {step.description}
      </p>
      {!isLast && (
        <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-bio-glow/40">
          <ArrowRight className="w-5 h-5" />
        </div>
      )}
    </div>
  );
});

PipelineStepCard.displayName = 'PipelineStepCard';
