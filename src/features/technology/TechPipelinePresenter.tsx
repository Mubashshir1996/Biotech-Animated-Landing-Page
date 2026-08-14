import React from 'react';
import { SectionLayout } from '../../layouts/SectionLayout';
import { GeneEditorWidget } from './GeneEditorWidget';
import { GeneBasePair } from '../../types';
import { Database, Binary, ShieldCheck, Microscope, ArrowRight } from 'lucide-react';
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
  {
    phase: 'PHASE 01',
    title: 'Genomic Target Discovery',
    description: 'Quantum screening of 10B+ transcriptomic sequences for pathogenic mutation nodes.',
    icon: <Database className="w-5 h-5 text-bio-glow" />,
  },
  {
    phase: 'PHASE 02',
    title: 'In Silico Ligand Docking',
    description: 'Autonomous 3D molecular simulation evaluating binding affinities under thermodynamic strain.',
    icon: <Binary className="w-5 h-5 text-emerald-400" />,
  },
  {
    phase: 'PHASE 03',
    title: 'Single-Molecule Editing',
    description: 'Targeted Cas13 RNA-guided sequence insertion with sub-nanometer positional control.',
    icon: <Microscope className="w-5 h-5 text-purple-400" />,
  },
  {
    phase: 'PHASE 04',
    title: 'GMP Bio-Manufacturing',
    description: 'Scaled cell-free synthesis of therapeutic candidates with automated mass spectrometry validation.',
    icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
  },
];

const TechPipelinePresenterBase: React.FC<TechPipelinePresenterProps> = ({
  sequence,
  stabilityIndex,
  bindingEnergy,
  isOptimal,
  onMutatePair,
  onResetSequence,
  onAutoOptimize,
}) => {
  return (
    <SectionLayout
      id="technology"
      badge="AUTONOMOUS RESEARCH PIPELINE"
      title="From Quantum Code to Clinical Therapeutics"
      subtitle="Experience our interactive genome splicer and explore how Aetheria Bio accelerates drug candidate discovery from years to days."
      glowColor="violet"
    >
      <div className="space-y-16">
        {/* Step-by-Step Research Pipeline Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pipelineSteps.map((step, idx) => (
            <div
              key={step.phase}
              className="glass-card p-6 rounded-2xl border border-white/10 hover:border-bio-glow/40 transition-all duration-300 relative group"
            >
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

              {idx < pipelineSteps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-bio-glow/40">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Interactive Live Gene Editor Widget */}
        <GeneEditorWidget
          sequence={sequence}
          stabilityIndex={stabilityIndex}
          bindingEnergy={bindingEnergy}
          isOptimal={isOptimal}
          onMutatePair={onMutatePair}
          onResetSequence={onResetSequence}
          onAutoOptimize={onAutoOptimize}
        />
      </div>
    </SectionLayout>
  );
};

export const TechPipelinePresenter = withScrollReveal(TechPipelinePresenterBase, { direction: 'up' });
