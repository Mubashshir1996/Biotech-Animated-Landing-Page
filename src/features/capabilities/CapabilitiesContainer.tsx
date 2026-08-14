import React, { useState } from 'react';
import { CapabilitiesPresenter } from './CapabilitiesPresenter';
import { CapabilityItem } from '../../types';
import { Modal } from '../../components/ui/Modal';
import { Button } from '../../components/ui/Button';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { useAudioFeedback } from '../../hooks/useAudioFeedback';

const capabilitiesList: CapabilityItem[] = [
  {
    id: 'target-discovery',
    title: 'Autonomous Target Discovery',
    subtitle: 'Deep Single-Cell Transcriptomics',
    description: 'High-dimensional single-cell RNA indexing coupled with AI graph attention networks identifying novel pathogenic disease vectors.',
    metrics: '99.92% Precision Accuracy',
    icon: 'target',
    tag: 'GENOME SCREENING',
  },
  {
    id: 'docking-simulator',
    title: 'Molecular Docking Engine',
    subtitle: 'Quantum Electro-Dynamics (QED)',
    description: 'Simulating ligand-receptor binding free energy variations across millions of candidate conformations in parallel WebGL clusters.',
    metrics: '< 1.2 Å RMSD Resolution',
    icon: 'docking',
    tag: 'MOLECULAR DYNAMICS',
  },
  {
    id: 'cellular-reprogramming',
    title: 'Epigenetic Cell Reprogramming',
    subtitle: 'Chromatin State Rewiring',
    description: 'Targeted synthetic transcription factor cocktails inducing cell state conversion with microfluidic feedback stabilization.',
    metrics: '8.4x Transfection Yield',
    icon: 'cell',
    tag: 'CELLULAR THERAPEUTICS',
  },
  {
    id: 'federated-mesh',
    title: 'Bio-Data Federated Mesh',
    subtitle: 'Zero-Knowledge Privacy Computing',
    description: 'Secure multi-party machine learning trained across distributed international clinical research repositories without raw data exposure.',
    metrics: 'HIPAA & GDPR Tier 4 Verified',
    icon: 'data',
    tag: 'FEDERATED AI',
  },
];

interface CapabilitiesContainerProps {
  onLaunchDemoClick: () => void;
}

export const CapabilitiesContainer: React.FC<CapabilitiesContainerProps> = ({ onLaunchDemoClick }) => {
  const [selectedCap, setSelectedCap] = useState<CapabilityItem | null>(null);
  const { handleClick } = useAudioFeedback();

  const handleSelectCapability = (cap: CapabilityItem) => {
    handleClick();
    setSelectedCap(cap);
  };

  return (
    <>
      <CapabilitiesPresenter
        capabilities={capabilitiesList}
        onSelectCapability={handleSelectCapability}
      />

      {/* Detail Inspector Modal */}
      {selectedCap && (
        <Modal
          isOpen={!!selectedCap}
          onClose={() => setSelectedCap(null)}
          title={selectedCap.title}
        >
          <div className="space-y-6 text-slate-200">
            <div className="text-sm font-mono text-bio-glow">{selectedCap.subtitle} • {selectedCap.tag}</div>
            
            <p className="text-base text-slate-300 font-light leading-relaxed">
              {selectedCap.description}
            </p>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <div className="text-xs font-mono text-slate-400">BENCHMARK SPECIFICATION</div>
              <div className="text-xl font-heading font-bold text-emerald-400">{selectedCap.metrics}</div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono text-slate-400 uppercase">Enterprise Integration Features</div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-bio-glow" /> RESTful API & GraphQL endpoints
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-bio-glow" /> High-throughput WebGL batch visualization
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-bio-glow" /> Automated PDB file export & validation
              </div>
            </div>

            <div className="pt-4 flex justify-end gap-3 border-t border-white/10">
              <Button variant="ghost" onClick={() => setSelectedCap(null)}>
                Close
              </Button>
              <Button
                variant="primary"
                icon={<Sparkles className="w-4 h-4" />}
                onClick={() => {
                  setSelectedCap(null);
                  onLaunchDemoClick();
                }}
              >
                Access Capability API
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
