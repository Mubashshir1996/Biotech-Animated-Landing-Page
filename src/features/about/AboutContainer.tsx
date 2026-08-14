import React, { useState } from 'react';
import { AboutPresenter } from './AboutPresenter';
import { InnovationTab } from '../../types';
import { useAudioFeedback } from '../../hooks/useAudioFeedback';

const innovationTabs: InnovationTab[] = [
  {
    id: 'crispr',
    title: 'CRISPR-V Splicing Engine',
    badge: 'GENOME EDITING',
    description: 'Autonomous CRISPR-Cas13 single-molecule precision targeted cleavage system eliminating off-target genomic cleavage to zero.',
    keyFeatures: [
      'Zero off-target cytotoxicity across human genomic sequence',
      'Integrated dual-strand RNA guide synthesis',
      'Real-time fluorescent single-molecule tracking'
    ],
    statsLabel: 'Off-Target Cleavage Rate',
    statsValue: '< 0.0001%',
  },
  {
    id: 'ai-folding',
    title: 'AI Protein Folding Grid',
    badge: 'COMPUTATIONAL BIO',
    description: 'Deep neural graph transformers capable of predicting complex macromolecular tertiary structures in under 42 milliseconds.',
    keyFeatures: [
      'Sub-angstrom atomic coordinate resolution',
      'Multi-chain ligand binding affinity prediction',
      'Automated de novo de-immunization screening'
    ],
    statsLabel: 'Structure Resolution Speed',
    statsValue: '42ms per Chain',
  },
  {
    id: 'synthetic-bio',
    title: 'Synthetic Bio-Manufacturing',
    badge: 'CELLULAR FOUNDRY',
    description: 'Cellular reprogramming platform engineering microbial and mammalian bio-reactors for continuous high-yield antibody synthesis.',
    keyFeatures: [
      '10x higher volumetric protein yield per liter',
      'Closed-loop automated microfluidic bio-reactors',
      'GMP-compliant automated batch validation'
    ],
    statsLabel: 'Yield Acceleration Multiplier',
    statsValue: '10.4x Scale Factor',
  },
];

export const AboutContainer: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState('crispr');
  const { handleTabChange } = useAudioFeedback();

  const onTabChange = (id: string) => {
    setActiveTabId(id);
    handleTabChange();
  };

  return (
    <AboutPresenter
      tabs={innovationTabs}
      activeTabId={activeTabId}
      onTabChange={onTabChange}
    />
  );
};
