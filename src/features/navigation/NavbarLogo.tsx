import React from 'react';
import { Dna } from 'lucide-react';
import { useAudioFeedback } from '../../hooks/useAudioFeedback';

export const NavbarLogo: React.FC = React.memo(() => {
  const { handleHover, handleClick } = useAudioFeedback();

  return (
    <a
      href="#"
      onMouseEnter={handleHover}
      onClick={handleClick}
      className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-bio-glow rounded-xl p-1"
    >
      <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-bio-glow to-bio-violet p-0.5 shadow-[0_0_15px_rgba(0,242,254,0.4)] group-hover:shadow-[0_0_25px_rgba(0,242,254,0.7)] transition-shadow">
        <div className="w-full h-full bg-bio-dark rounded-[10px] flex items-center justify-center">
          <Dna className="w-6 h-6 text-bio-glow group-hover:rotate-180 transition-transform duration-700" />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-heading font-black tracking-wider text-white flex items-center gap-1">
          AETHERIA<span className="text-bio-glow font-mono font-light text-sm">.BIO</span>
        </span>
        <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase -mt-1">
          Quantum Genomics
        </span>
      </div>
    </a>
  );
});

NavbarLogo.displayName = 'NavbarLogo';
