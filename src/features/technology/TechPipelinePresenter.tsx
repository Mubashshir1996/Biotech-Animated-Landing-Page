import React from 'react';
import { SectionLayout } from '../../layouts/SectionLayout';
import { GeneEditorWidget } from './GeneEditorWidget';
import { GeneBasePair } from '../../types';
import { Database, Binary, Microscope, ShieldCheck } from 'lucide-react';
import { PipelineStepCard } from './PipelineStepCard';
import { withScrollReveal } from '../../HOC/withScrollReveal';

interface TechPipelinePresenterProps {
  sequence: GeneBasePair[];
  stabilityIndex: number;
  bindingEnergy: number;
  isOptimal: boolean;
  onMutatePair: (id: string) => void;
  onResetSequence: () => void;
  onAutoOptimize: () => void;
}

const pipelineSteps = [
  { phase: 'PHASE 01', title: 'Genomic Target Discovery', description: 'Quantum screening of 10B+ transcriptomic sequences for mutation nodes.', icon: <Database className="w-5 h-5 text-bio-glow" /> },
  { phase: 'PHASE 02', title: 'In Silico Ligand Docking', description: 'Autonomous 3D molecular simulation evaluating binding affinities under strain.', icon: <Binary className="w-5 h-5 text-emerald-400" /> },
  { phase: 'PHASE 03', title: 'Single-Molecule Editing', description: 'Targeted Cas13 RNA-guided sequence insertion with sub-nanometer control.', icon: <Microscope className="w-5 h-5 text-purple-400" /> },
  { phase: 'PHASE 04', title: 'GMP Bio-Manufacturing', description: 'Scaled cell-free synthesis of therapeutic candidates with mass spec validation.', icon: <ShieldCheck className="w-5 h-5 text-amber-400" /> },
];

const TechPipelinePresenterBase: React.FC<TechPipelinePresenterProps> = React.memo(({
  sequence, stabilityIndex, bindingEnergy, isOptimal, onMutatePair, onResetSequence, onAutoOptimize
}) => {
  return (
    <SectionLayout
      id="technology"
      badge="AUTONOMOUS RESEARCH PIPELINE"
      title="From Quantum Code to Clinical Therapeutics"
      subtitle="Experience our interactive genome splicer and explore how Aetheria Bio accelerates drug candidate discovery."
      glowColor="violet"
    >
      <div className="space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pipelineSteps.map((step, idx) => (
            <PipelineStepCard key={step.phase} step={step} isLast={idx === pipelineSteps.length - 1} />
          ))}
        </div>
        <GeneEditorWidget
          sequence={sequence} stabilityIndex={stabilityIndex} bindingEnergy={bindingEnergy}
          isOptimal={isOptimal} onMutatePair={onMutatePair} onResetSequence={onResetSequence} onAutoOptimize={onAutoOptimize}
        />
      </div>
    </SectionLayout>
  );
});

TechPipelinePresenterBase.displayName = 'TechPipelinePresenterBase';

export const TechPipelinePresenter = withScrollReveal(TechPipelinePresenterBase, { direction: 'up' });
