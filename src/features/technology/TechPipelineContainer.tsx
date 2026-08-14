import React, { useState } from 'react';
import { TechPipelinePresenter } from './TechPipelinePresenter';
import { GeneBasePair } from '../../types';
import { useAudioFeedback } from '../../hooks/useAudioFeedback';
import confetti from 'canvas-confetti';

const initialSequence: GeneBasePair[] = [
  { id: '1', code: 'A', complement: 'T', label: 'Adenine-Thymine', color: '#00f2fe', status: 'normal' },
  { id: '2', code: 'C', complement: 'G', label: 'Cytosine-Guanine', color: '#8b5cf6', status: 'normal' },
  { id: '3', code: 'G', complement: 'C', label: 'Guanine-Cytosine', color: '#f59e0b', status: 'normal' },
  { id: '4', code: 'T', complement: 'A', label: 'Thymine-Adenine', color: '#10b981', status: 'normal' },
  { id: '5', code: 'A', complement: 'T', label: 'Adenine-Thymine', color: '#00f2fe', status: 'normal' },
  { id: '6', code: 'C', complement: 'G', label: 'Cytosine-Guanine', color: '#8b5cf6', status: 'normal' },
  { id: '7', code: 'T', complement: 'A', label: 'Thymine-Adenine', color: '#10b981', status: 'normal' },
  { id: '8', code: 'G', complement: 'C', label: 'Guanine-Cytosine', color: '#f59e0b', status: 'normal' },
  { id: '9', code: 'A', complement: 'T', label: 'Adenine-Thymine', color: '#00f2fe', status: 'normal' },
  { id: '10', code: 'C', complement: 'G', label: 'Cytosine-Guanine', color: '#8b5cf6', status: 'normal' },
  { id: '11', code: 'T', complement: 'A', label: 'Thymine-Adenine', color: '#10b981', status: 'normal' },
  { id: '12', code: 'G', complement: 'C', label: 'Guanine-Cytosine', color: '#f59e0b', status: 'normal' },
];

const targetOptimalCodes = ['A', 'G', 'C', 'T', 'G', 'C', 'A', 'T', 'C', 'G', 'A', 'T'];

export const TechPipelineContainer: React.FC = () => {
  const [sequence, setSequence] = useState<GeneBasePair[]>(initialSequence);
  const { handleSplice, handleSuccess } = useAudioFeedback();

  const getComplement = (code: 'A' | 'T' | 'C' | 'G'): 'A' | 'T' | 'C' | 'G' => {
    switch (code) {
      case 'A': return 'T';
      case 'T': return 'A';
      case 'C': return 'G';
      case 'G': return 'C';
    }
  };

  const getNextCode = (code: 'A' | 'T' | 'C' | 'G'): 'A' | 'T' | 'C' | 'G' => {
    const cycle: Array<'A' | 'T' | 'C' | 'G'> = ['A', 'C', 'G', 'T'];
    const idx = cycle.indexOf(code);
    return cycle[(idx + 1) % cycle.length];
  };

  const calculateStability = (seq: GeneBasePair[]) => {
    let matches = 0;
    seq.forEach((pair, idx) => {
      if (pair.code === targetOptimalCodes[idx]) matches++;
    });
    const ratio = matches / seq.length;
    const stability = Math.min(100, Math.round(75 + ratio * 24.5));
    const bindingEnergy = Number((-10.2 - ratio * 4.6).toFixed(2));
    const isOptimal = matches >= 10;

    return { stability, bindingEnergy, isOptimal };
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00f2fe', '#10b981', '#a855f7'],
    });
  };

  const handleMutatePair = (id: string) => {
    handleSplice();
    setSequence((prev) => {
      const nextSeq = prev.map((pair) => {
        if (pair.id === id) {
          const nextCode = getNextCode(pair.code);
          return {
            ...pair,
            code: nextCode,
            complement: getComplement(nextCode),
            status: 'mutated' as const,
          };
        }
        return pair;
      });

      const { isOptimal } = calculateStability(nextSeq);
      if (isOptimal) {
        handleSuccess();
        triggerConfetti();
      }

      return nextSeq;
    });
  };

  const handleResetSequence = () => {
    handleSplice();
    setSequence(initialSequence);
  };

  const handleAutoOptimize = () => {
    handleSuccess();
    triggerConfetti();
    const optimized = initialSequence.map((pair, idx) => {
      const code = targetOptimalCodes[idx] as 'A' | 'T' | 'C' | 'G';
      return {
        ...pair,
        code,
        complement: getComplement(code),
        status: 'stabilized' as const,
      };
    });
    setSequence(optimized);
  };

  const { stability, bindingEnergy, isOptimal } = calculateStability(sequence);

  return (
    <TechPipelinePresenter
      sequence={sequence}
      stabilityIndex={stability}
      bindingEnergy={bindingEnergy}
      isOptimal={isOptimal}
      onMutatePair={handleMutatePair}
      onResetSequence={handleResetSequence}
      onAutoOptimize={handleAutoOptimize}
    />
  );
};
