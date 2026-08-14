import React from 'react';

export const ImpactTimelineComparison: React.FC = React.memo(() => {
  return (
    <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-mono text-bio-glow uppercase tracking-wider">
            TRANSLATIONAL BENCHMARK • TRADITIONAL VS AETHERIA
          </span>
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
            Compressing 5-Year Lead Discovery into 72 Hours
          </h3>
          <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
            By replacing iterative wet-lab trial and error with quantum molecular modeling, our partners achieve unprecedented acceleration across phase pipelines.
          </p>

          <div className="space-y-4 pt-2">
            <div>
              <div className="flex justify-between text-xs font-mono text-slate-300 mb-1">
                <span>Traditional Wet-Lab Pipeline</span>
                <span>54 Months</span>
              </div>
              <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full bg-slate-600 rounded-full w-full" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-mono text-bio-glow mb-1">
                <span>Aetheria Bio AI Platform</span>
                <span>3 Months (18x Faster)</span>
              </div>
              <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-bio-glow via-cyan-400 to-emerald-400 rounded-full w-[16%] animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 flex items-center justify-center">
          <div className="w-full p-6 glass-card rounded-2xl border border-bio-glow/30 space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-mono text-slate-400">BENCHMARK DATA MATRIX</span>
              <span className="text-xs font-mono text-emerald-400">VERIFIED BY PHARMA AUDIT</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 rounded-xl bg-white/5">
                <div className="text-xs text-slate-400 font-mono">Off-Target Risk</div>
                <div className="text-xl font-heading font-bold text-emerald-400">-99.4%</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5">
                <div className="text-xs text-slate-400 font-mono">Cost per Candidate</div>
                <div className="text-xl font-heading font-bold text-bio-glow">-84.2%</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5">
                <div className="text-xs text-slate-400 font-mono">Ligand Selectivity</div>
                <div className="text-xl font-heading font-bold text-purple-400">100x</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5">
                <div className="text-xs text-slate-400 font-mono">Phase I Success</div>
                <div className="text-xl font-heading font-bold text-amber-300">94.8%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

ImpactTimelineComparison.displayName = 'ImpactTimelineComparison';
