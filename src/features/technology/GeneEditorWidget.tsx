import React from 'react';
import { GeneBasePair } from '../../types';
import { Button } from '../../components/ui/Button';
import { Dna, RefreshCcw, Sparkles, AlertCircle, CheckCircle } from 'lucide-react';
import { useAudioFeedback } from '../../hooks/useAudioFeedback';

interface GeneEditorWidgetProps {
  sequence: GeneBasePair[];
  stabilityIndex: number;
  bindingEnergy: number;
  isOptimal: boolean;
  onMutatePair: (id: string) => void;
  onResetSequence: () => void;
  onAutoOptimize: () => void;
}

export const GeneEditorWidget: React.FC<GeneEditorWidgetProps> = ({
  sequence,
  stabilityIndex,
  bindingEnergy,
  isOptimal,
  onMutatePair,
  onResetSequence,
  onAutoOptimize,
}) => {
  const { handleHover } = useAudioFeedback();

  const getBaseBg = (code: string) => {
    switch (code) {
      case 'A': return 'bg-bio-glow/20 border-bio-glow text-bio-glow';
      case 'T': return 'bg-emerald-500/20 border-emerald-400 text-emerald-400';
      case 'C': return 'bg-purple-500/20 border-purple-400 text-purple-300';
      case 'G': return 'bg-amber-500/20 border-amber-400 text-amber-300';
      default: return 'bg-slate-800 border-slate-600 text-slate-300';
    }
  };

  return (
    <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-bio-glow/30 shadow-2xl relative overflow-hidden">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-bio-glow/10 border border-bio-glow/30 text-bio-glow">
            <Dna className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h4 className="text-lg sm:text-xl font-heading font-bold text-white">
              CRISPR-Cas13 Live Sequence Splicer
            </h4>
            <p className="text-xs font-mono text-slate-400">
              Click any nucleotide base pair to mutate complement & recalculate binding energy
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" icon={<RefreshCcw className="w-3.5 h-3.5" />} onClick={onResetSequence}>
            Reset
          </Button>
          <Button variant="outline" size="sm" icon={<Sparkles className="w-3.5 h-3.5 text-bio-glow" />} onClick={onAutoOptimize}>
            AI Auto-Optimize
          </Button>
        </div>
      </div>

      {/* ARIA Live Region for Screen Readers */}
      <div className="sr-only" aria-live="polite">
        Gene Sequence Stability Index is currently {stabilityIndex} percent. Binding energy is {bindingEnergy} kilocalories per mole.
      </div>

      {/* Interactive Nucleotide Sequence Bar */}
      <div className="mb-8">
        <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3 flex items-center justify-between">
          <span>Target Strand [5' → 3']</span>
          <span>Click to Splice</span>
        </div>

        <div className="grid grid-cols-6 sm:grid-cols-12 gap-2 sm:gap-3 p-3 rounded-2xl bg-bio-dark/80 border border-white/10">
          {sequence.map((pair, idx) => (
            <button
              key={pair.id}
              onClick={() => onMutatePair(pair.id)}
              onMouseEnter={handleHover}
              aria-label={`Nucleotide ${idx + 1}: ${pair.code} paired with ${pair.complement}. Click to splice.`}
              className={`flex flex-col items-center justify-center p-2 rounded-xl border transition-all duration-300 cursor-pointer hover:scale-110 active:scale-95 ${getBaseBg(
                pair.code
              )} ${pair.status === 'mutated' ? 'ring-2 ring-bio-glow shadow-[0_0_15px_rgba(0,242,254,0.5)]' : ''}`}
            >
              <span className="text-lg font-mono font-black">{pair.code}</span>
              <span className="w-full h-px bg-white/20 my-1" />
              <span className="text-xs font-mono opacity-80">{pair.complement}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Metrics Calculations Dashboard */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        
        {/* Metric 1: Stability */}
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

        {/* Metric 2: Binding Energy */}
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

        {/* Metric 3: Optimization Status */}
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
    </div>
  );
};
