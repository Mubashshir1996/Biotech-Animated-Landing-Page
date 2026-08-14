import { CapabilityItem } from '../../types';

export const capabilitiesList: CapabilityItem[] = [
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
