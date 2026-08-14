import React, { useState, useCallback } from 'react';
import { TechPipelinePresenter } from './TechPipelinePresenter';
import { GeneBasePair } from '../../types';
import { useAudioFeedback } from '../../hooks/useAudioFeedback';
import { initialSequence, targetOptimalCodes } from './geneData';
import confetti from 'canvas-confetti';

export const TechPipelineContainer: React.FC = () => {
  const [sequence, setSequence] = useState<GeneBasePair[]>(initialSequence);
  const { handleSplice, handleSuccess } = useAudioFeedback();

  const getComplement = (code: 'A' | 'T' | 'C' | 'G'): 'A' | 'T' | 'C' | 'G' => {
    return code === 'A' ? 'T' : code === 'T' ? 'A' : code === 'C' ? 'G' : 'C';
  };

  const getNextCode = (code: 'A' | 'T' | 'C' | 'G'): 'A' | 'T' | 'C' | 'G' => {
    const cycle: Array<'A' | 'T' | 'C' | 'G'> = ['A', 'C', 'G', 'T'];
    return cycle[(cycle.indexOf(code) + 1) % 4];
  };

  const calculateStability = useCallback((seq: GeneBasePair[]) => {
    let matches = 0;
    seq.forEach((pair, idx) => {
      if (pair.code === targetOptimalCodes[idx]) matches++;
    });
    const ratio = matches / seq.length;
    return {
      stability: Math.min(100, Math.round(75 + ratio * 24.5)),
      bindingEnergy: Number((-10.2 - ratio * 4.6).toFixed(2)),
      isOptimal: matches >= 10,
    };
  }, []);

  const triggerConfetti = () => {
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 }, colors: ['#00f2fe', '#10b981', '#a855f7'] });
  };

  const handleMutatePair = useCallback((id: string) => {
    handleSplice();
    setSequence((prev) => {
      const nextSeq = prev.map((pair) => {
        if (pair.id === id) {
          const nextCode = getNextCode(pair.code);
          return { ...pair, code: nextCode, complement: getComplement(nextCode), status: 'mutated' as const };
        }
        return pair;
      });
      if (calculateStability(nextSeq).isOptimal) {
        handleSuccess(); triggerConfetti();
      }
      return nextSeq;
    });
  }, [handleSplice, handleSuccess, calculateStability]);

  const handleResetSequence = useCallback(() => {
    handleSplice(); setSequence(initialSequence);
  }, [handleSplice]);

  const handleAutoOptimize = useCallback(() => {
    handleSuccess(); triggerConfetti();
    setSequence(initialSequence.map((pair, idx) => {
      const code = targetOptimalCodes[idx] as 'A' | 'T' | 'C' | 'G';
      return { ...pair, code, complement: getComplement(code), status: 'stabilized' as const };
    }));
  }, [handleSuccess]);

  const { stability, bindingEnergy, isOptimal } = calculateStability(sequence);

  return (
    <TechPipelinePresenter
      sequence={sequence} stabilityIndex={stability} bindingEnergy={bindingEnergy}
      isOptimal={isOptimal} onMutatePair={handleMutatePair} onResetSequence={handleResetSequence} onAutoOptimize={handleAutoOptimize}
    />
  );
};
