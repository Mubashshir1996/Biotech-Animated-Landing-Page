import React from 'react';
import { GeneBasePair } from '../../types';
import { Button } from '../../components/ui/Button';
import { Dna, RefreshCcw, Sparkles } from 'lucide-react';
import { GeneSequenceBar } from './GeneSequenceBar';
import { GeneMetricsDashboard } from './GeneMetricsDashboard';

interface GeneEditorWidgetProps {
  sequence: GeneBasePair[];
  stabilityIndex: number;
  bindingEnergy: number;
  isOptimal: boolean;
  onMutatePair: (id: string) => void;
  onResetSequence: () => void;
  onAutoOptimize: () => void;
}

export const GeneEditorWidget: React.FC<GeneEditorWidgetProps> = React.memo(({
  sequence,
  stabilityIndex,
  bindingEnergy,
  isOptimal,
  onMutatePair,
  onResetSequence,
  onAutoOptimize,
}) => {
  return (
    <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-bio-glow/30 shadow-2xl relative overflow-hidden">
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

      <div className="sr-only" aria-live="polite">
        Gene Sequence Stability Index is currently {stabilityIndex} percent. Binding energy is {bindingEnergy} kcal/mol.
      </div>

      <GeneSequenceBar sequence={sequence} onMutatePair={onMutatePair} />
      <GeneMetricsDashboard stabilityIndex={stabilityIndex} bindingEnergy={bindingEnergy} isOptimal={isOptimal} />
    </div>
  );
});

GeneEditorWidget.displayName = 'GeneEditorWidget';
