import React from 'react';
import { Dna, Github, Twitter, Linkedin } from 'lucide-react';
import { useAudioFeedback } from '../../hooks/useAudioFeedback';

export const FooterBrandSection: React.FC = React.memo(() => {
  const { handleHover, handleClick } = useAudioFeedback();

  return (
    <div className="lg:col-span-2 space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-bio-glow to-bio-violet p-0.5 shadow-md">
          <div className="w-full h-full bg-bio-dark rounded-[10px] flex items-center justify-center">
            <Dna className="w-5 h-5 text-bio-glow" />
          </div>
        </div>
        <span className="text-xl font-heading font-black tracking-wider text-white">
          AETHERIA<span className="text-bio-glow font-mono font-light text-sm">.BIO</span>
        </span>
      </div>

      <p className="text-sm text-slate-400 font-light max-w-sm leading-relaxed">
        Pioneering quantum-accelerated synthetic genomics, targeted CRISPR gene editing, and computational molecular therapeutics.
      </p>

      <div className="flex items-center gap-3 pt-2">
        <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" onMouseEnter={handleHover} onClick={handleClick} className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-bio-glow transition-colors cursor-pointer">
          <Github className="w-4 h-4" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" onMouseEnter={handleHover} onClick={handleClick} className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-bio-glow transition-colors cursor-pointer">
          <Twitter className="w-4 h-4" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" onMouseEnter={handleHover} onClick={handleClick} className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-bio-glow transition-colors cursor-pointer">
          <Linkedin className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
});

FooterBrandSection.displayName = 'FooterBrandSection';
