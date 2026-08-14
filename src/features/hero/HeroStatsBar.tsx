import React from 'react';
import { ShieldCheck, Cpu, Activity } from 'lucide-react';

export const HeroStatsBar: React.FC = React.memo(() => {
  return (
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
  );
});

HeroStatsBar.displayName = 'HeroStatsBar';
