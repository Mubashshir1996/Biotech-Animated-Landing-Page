import React from 'react';
import { Dna, Cpu, Network, Sparkles } from 'lucide-react';

interface InnovationMolecularGraphicProps {
  tabId: string;
  tabTitle: string;
}

export const InnovationMolecularGraphic: React.FC<InnovationMolecularGraphicProps> = React.memo(({
  tabId,
  tabTitle,
}) => {
  const getTabIcon = (id: string) => {
    switch (id) {
      case 'crispr': return <Dna className="w-5 h-5 text-bio-glow" />;
      case 'ai-folding': return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'synthetic-bio': return <Network className="w-5 h-5 text-purple-400" />;
      default: return <Sparkles className="w-5 h-5 text-bio-glow" />;
    }
  };

  return (
    <div className="lg:col-span-5 relative flex items-center justify-center min-h-[300px]">
      <div className="w-full h-full glass-card rounded-2xl p-6 border border-white/10 flex flex-col items-center justify-center relative overflow-hidden group">
        <div className="relative w-48 h-48 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-bio-glow/40 animate-spin-slow" />
          <div className="absolute inset-4 rounded-full border border-purple-500/30 animate-pulse-glow" />
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-bio-glow via-cyan-400 to-emerald-400 p-0.5 shadow-[0_0_30px_rgba(0,242,254,0.6)] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
            <div className="w-full h-full bg-bio-dark rounded-full flex items-center justify-center">
              {getTabIcon(tabId)}
            </div>
          </div>
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-bio-glow shadow-[0_0_12px_#00f2fe] animate-bounce" />
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-400 shadow-[0_0_12px_#10b981] animate-bounce" style={{ animationDelay: '0.3s' }} />
          <div className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-400 shadow-[0_0_12px_#8b5cf6] animate-bounce" style={{ animationDelay: '0.6s' }} />
        </div>
        <div className="mt-6 text-center">
          <span className="text-xs font-mono text-slate-400">Simulation Target: {tabTitle}</span>
          <div className="mt-1 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-mono text-emerald-400 font-semibold">100% Fidelity Rendered</span>
          </div>
        </div>
      </div>
    </div>
  );
});

InnovationMolecularGraphic.displayName = 'InnovationMolecularGraphic';
