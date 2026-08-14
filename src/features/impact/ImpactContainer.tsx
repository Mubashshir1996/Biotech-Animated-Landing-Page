import React from 'react';
import { ImpactPresenter } from './ImpactPresenter';
import { MetricItem } from '../../types';

const impactMetrics: MetricItem[] = [
  {
    id: '1',
    label: 'Ligand Binding Precision',
    numericValue: 99.84,
    suffix: '%',
    decimals: 2,
    description: 'Calculated across 10,000+ protein-ligand target pairs',
    icon: 'accuracy',
  },
  {
    id: '2',
    label: 'Molecules Synthesized',
    numericValue: 1.42,
    suffix: 'M+',
    decimals: 2,
    description: 'De novo computational drug candidates generated',
    icon: 'molecules',
  },
  {
    id: '3',
    label: 'Pipeline Acceleration',
    numericValue: 4.8,
    suffix: 'x',
    decimals: 1,
    description: 'Reduction in Phase I pre-clinical validation timelines',
    icon: 'speed',
  },
  {
    id: '4',
    label: 'FDA Fast-Track Candidates',
    numericValue: 12,
    suffix: '',
    decimals: 0,
    description: 'Therapeutic compounds currently undergoing expedited review',
    icon: 'fda',
  },
];

export const ImpactContainer: React.FC = () => {
  return <ImpactPresenter metrics={impactMetrics} />;
};
