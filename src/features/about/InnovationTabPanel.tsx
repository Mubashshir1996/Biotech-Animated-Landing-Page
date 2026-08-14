import React from 'react';
import { InnovationTab } from '../../types';
import { CheckCircle2, Zap } from 'lucide-react';
import { InnovationMolecularGraphic } from './InnovationMolecularGraphic';

interface InnovationTabPanelProps {
  currentTab: InnovationTab;
}

export const InnovationTabPanel: React.FC<InnovationTabPanelProps> = React.memo(({ currentTab }) => {
  return (
    <div
      id={`panel-${currentTab.id}`}
      role="tabpanel"
      aria-labelledby={`tab-${currentTab.id}`}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch glass-panel p-6 sm:p-10 rounded-3xl border border-bio-glow/25 shadow-2xl relative overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-32 -left-32 w-80 h-80 bg-bio-glow/15 rounded-full blur-3xl" />
      
      <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-bio-glow uppercase tracking-wider mb-2">
            <Zap className="w-4 h-4 text-bio-glow animate-pulse" />
            Feature Specification • {currentTab.badge}
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            {currentTab.title}
          </h3>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed mb-6">
            {currentTab.description}
          </p>
          <div className="space-y-3 pt-2">
            {currentTab.keyFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-bio-glow shrink-0 mt-0.5" />
                <span className="text-slate-200 text-sm sm:text-base">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex items-center justify-between">
          <div>
            <div className="text-xs font-mono text-slate-400 uppercase">{currentTab.statsLabel}</div>
            <div className="text-2xl font-heading font-black text-bio-glow">{currentTab.statsValue}</div>
          </div>
          <div className="px-4 py-2 rounded-xl bg-bio-glow/10 border border-bio-glow/30 text-xs font-mono text-bio-glow">
            Status: Verified Optimal
          </div>
        </div>
      </div>

      <InnovationMolecularGraphic tabId={currentTab.id} tabTitle={currentTab.title} />
    </div>
  );
});

InnovationTabPanel.displayName = 'InnovationTabPanel';
