import React from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

interface GeneMetricsDashboardProps {
  stabilityIndex: number;
  bindingEnergy: number;
  isOptimal: boolean;
}

export const GeneMetricsDashboard: React.FC<GeneMetricsDashboardProps> = React.memo(({
  stabilityIndex,
  bindingEnergy,
  isOptimal,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
        <div className="text-xs font-mono text-slate-400">Protein Thermodynamic Stability</div>
        <div className="my-2 flex items-baseline gap-2">
          <span className="text-3xl font-heading font-black text-white">{stabilityIndex}%</span>
          <span className="text-xs text-emerald-400 font-mono">+12.4% vs native</span>
        </div>
        <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-bio-glow to-emerald-400 transition-all duration-500"
            style={{ width: `${stabilityIndex}%` }}
          />
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
        <div className="text-xs font-mono text-slate-400">Gibbs Free Energy ($\Delta G$)</div>
        <div className="my-2 flex items-baseline gap-2">
          <span className="text-3xl font-heading font-black text-bio-glow">{bindingEnergy}</span>
          <span className="text-xs font-mono text-slate-400">kcal/mol</span>
        </div>
        <div className="text-[11px] text-slate-400 font-mono">
          Optimal Threshold: &lt; -12.0 kcal/mol
        </div>
      </div>

      <div className={`p-4 rounded-2xl border flex flex-col justify-between transition-colors ${
        isOptimal ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400' : 'bg-amber-500/10 border-amber-500/30 text-amber-300'
      }`}>
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono uppercase">Target Affinity State</span>
          {isOptimal ? <CheckCircle className="w-5 h-5 text-emerald-400" /> : <AlertCircle className="w-5 h-5 text-amber-400" />}
        </div>
        <div className="my-2 text-lg font-heading font-bold">
          {isOptimal ? 'Thermodynamic Optimum Achieved!' : 'Sub-Optimal Sequence Pair'}
        </div>
        <div className="text-xs opacity-80">
          {isOptimal ? 'Ready for bio-synthetic production' : 'Click base pairs or hit AI Auto-Optimize'}
        </div>
      </div>
    </div>
  );
});

GeneMetricsDashboard.displayName = 'GeneMetricsDashboard';
