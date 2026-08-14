import React from 'react';
import { InnovationTab } from '../../types';
import { Dna, Cpu, Network, Sparkles } from 'lucide-react';
import { useAudioFeedback } from '../../hooks/useAudioFeedback';

interface InnovationTabNavProps {
  tabs: InnovationTab[];
  activeTabId: string;
  onTabChange: (id: string) => void;
}

export const InnovationTabNav: React.FC<InnovationTabNavProps> = React.memo(({
  tabs,
  activeTabId,
  onTabChange,
}) => {
  const { handleHover } = useAudioFeedback();

  const getTabIcon = (id: string) => {
    switch (id) {
      case 'crispr': return <Dna className="w-5 h-5 text-bio-glow" />;
      case 'ai-folding': return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'synthetic-bio': return <Network className="w-5 h-5 text-purple-400" />;
      default: return <Sparkles className="w-5 h-5 text-bio-glow" />;
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12" role="tablist" aria-label="Innovation Features">
      {tabs.map((tab) => {
        const isActive = tab.id === activeTabId;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            aria-controls={`panel-${tab.id}`}
            id={`tab-${tab.id}`}
            onClick={() => onTabChange(tab.id)}
            onMouseEnter={handleHover}
            className={`flex items-center gap-3 px-6 py-3.5 rounded-2xl font-heading font-semibold text-sm sm:text-base transition-all duration-300 cursor-pointer ${
              isActive
                ? 'glass-panel border-bio-glow text-white shadow-[0_0_25px_rgba(0,242,254,0.3)] bg-bio-glow/10 scale-[1.02]'
                : 'glass-panel text-slate-400 border-white/5 hover:border-white/20 hover:text-slate-200'
            }`}
          >
            {getTabIcon(tab.id)}
            <span>{tab.title}</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-bio-glow">
              {tab.badge}
            </span>
          </button>
        );
      })}
    </div>
  );
});

InnovationTabNav.displayName = 'InnovationTabNav';
