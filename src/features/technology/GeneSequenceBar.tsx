import React from 'react';
import { GeneBasePair } from '../../types';
import { useAudioFeedback } from '../../hooks/useAudioFeedback';

interface GeneSequenceBarProps {
  sequence: GeneBasePair[];
  onMutatePair: (id: string) => void;
}

export const GeneSequenceBar: React.FC<GeneSequenceBarProps> = React.memo(({
  sequence,
  onMutatePair,
}) => {
  const { handleHover } = useAudioFeedback();

  const getBaseBg = (code: string) => {
    switch (code) {
      case 'A': return 'bg-bio-glow/20 border-bio-glow text-bio-glow';
      case 'T': return 'bg-emerald-500/20 border-emerald-400 text-emerald-400';
      case 'C': return 'bg-purple-500/20 border-purple-400 text-purple-300';
      case 'G': return 'bg-amber-500/20 border-amber-400 text-amber-300';
      default: return 'bg-slate-800 border-slate-600 text-slate-300';
    }
  };

  return (
    <div className="mb-8">
      <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3 flex items-center justify-between">
        <span>Target Strand [5' → 3']</span>
        <span>Click to Splice</span>
      </div>

      <div className="grid grid-cols-6 sm:grid-cols-12 gap-2 sm:gap-3 p-3 rounded-2xl bg-bio-dark/80 border border-white/10">
        {sequence.map((pair, idx) => (
          <button
            key={pair.id}
            onClick={() => onMutatePair(pair.id)}
            onMouseEnter={handleHover}
            aria-label={`Nucleotide ${idx + 1}: ${pair.code} paired with ${pair.complement}. Click to splice.`}
            className={`flex flex-col items-center justify-center p-2 rounded-xl border transition-all duration-300 cursor-pointer hover:scale-110 active:scale-95 ${getBaseBg(
              pair.code
            )} ${pair.status === 'mutated' ? 'ring-2 ring-bio-glow shadow-[0_0_15px_rgba(0,242,254,0.5)]' : ''}`}
          >
            <span className="text-lg font-mono font-black">{pair.code}</span>
            <span className="w-full h-px bg-white/20 my-1" />
            <span className="text-xs font-mono opacity-80">{pair.complement}</span>
          </button>
        ))}
      </div>
    </div>
  );
});

GeneSequenceBar.displayName = 'GeneSequenceBar';
