export interface AccessibilitySettings {
  reducedMotion: boolean;
  highContrast: boolean;
  largeText: boolean;
  dyslexicFont: boolean;
}

export interface SoundSettings {
  isMuted: boolean;
  volume: number;
}

export interface GeneBasePair {
  id: string;
  code: 'A' | 'T' | 'C' | 'G';
  complement: 'T' | 'A' | 'G' | 'C';
  label: string;
  color: string;
  status: 'normal' | 'editing' | 'mutated' | 'stabilized';
}

export interface CapabilityItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  metrics: string;
  icon: string;
  tag: string;
}

export interface InnovationTab {
  id: string;
  title: string;
  badge: string;
  description: string;
  keyFeatures: string[];
  statsLabel: string;
  statsValue: string;
}

export interface MetricItem {
  id: string;
  label: string;
  numericValue: number;
  suffix: string;
  decimals?: number;
  description: string;
  icon: string;
}
