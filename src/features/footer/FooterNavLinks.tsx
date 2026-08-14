import React from 'react';
import { Shield, Activity, Globe } from 'lucide-react';
import { useAudioFeedback } from '../../hooks/useAudioFeedback';

export const FooterNavLinks: React.FC = React.memo(() => {
  const { handleHover } = useAudioFeedback();

  return (
    <>
      <div>
        <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">Platform</h4>
        <ul className="space-y-2.5 text-sm text-slate-400">
          <li><a href="#about" onMouseEnter={handleHover} className="hover:text-bio-glow transition-colors">CRISPR Splicer</a></li>
          <li><a href="#technology" onMouseEnter={handleHover} className="hover:text-bio-glow transition-colors">AI Folding Grid</a></li>
          <li><a href="#capabilities" onMouseEnter={handleHover} className="hover:text-bio-glow transition-colors">Molecular Docking</a></li>
          <li><a href="#impact" onMouseEnter={handleHover} className="hover:text-bio-glow transition-colors">Federated Bio-Mesh</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">Research & Papers</h4>
        <ul className="space-y-2.5 text-sm text-slate-400">
          <li><a href="#" onMouseEnter={handleHover} className="hover:text-bio-glow transition-colors">Nature Genomics 2026</a></li>
          <li><a href="#" onMouseEnter={handleHover} className="hover:text-bio-glow transition-colors">Cas13 Specificity Study</a></li>
          <li><a href="#" onMouseEnter={handleHover} className="hover:text-bio-glow transition-colors">Quantum QED Benchmarks</a></li>
          <li><a href="#" onMouseEnter={handleHover} className="hover:text-bio-glow transition-colors">Clinical Trial Datasets</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">Compliance</h4>
        <ul className="space-y-2.5 text-sm text-slate-400">
          <li className="flex items-center gap-2"><Shield className="w-3.5 h-3.5 text-emerald-400" /> HIPAA Compliant</li>
          <li className="flex items-center gap-2"><Activity className="w-3.5 h-3.5 text-bio-glow" /> FDA Phase II Ready</li>
          <li className="flex items-center gap-2"><Globe className="w-3.5 h-3.5 text-purple-400" /> GDPR Tier 4</li>
        </ul>
      </div>
    </>
  );
});

FooterNavLinks.displayName = 'FooterNavLinks';
