import React from 'react';
import { SectionLayout } from '../../layouts/SectionLayout';
import { InnovationTab } from '../../types';
import { CheckCircle2, Zap, Dna, Cpu, Network, Sparkles } from 'lucide-react';
import { useAudioFeedback } from '../../hooks/useAudioFeedback';
import { withScrollReveal } from '../../HOC/withScrollReveal';

interface AboutPresenterProps {
  tabs: InnovationTab[];
  activeTabId: string;
  onTabChange: (id: string) => void;
}

const AboutPresenterBase: React.FC<AboutPresenterProps> = ({
  tabs,
  activeTabId,
  onTabChange,
}) => {
  const { handleHover } = useAudioFeedback();
  const currentTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  const getTabIcon = (id: string) => {
    switch (id) {
      case 'crispr': return <Dna className="w-5 h-5 text-bio-glow" />;
      case 'ai-folding': return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'synthetic-bio': return <Network className="w-5 h-5 text-purple-400" />;
      default: return <Sparkles className="w-5 h-5 text-bio-glow" />;
    }
  };

  return (
    <SectionLayout
      id="about"
      badge="QUANTUM INNOVATION FRAMEWORK"
      title="Redefining Synthetic Biology through Autonomous Intelligence"
      subtitle="Our multi-layered computational ecosystem integrates quantum molecular dynamics with high-throughput bio-synthetic engineering."
      glowColor="cyan"
    >
      {/* Tab Navigation Buttons */}
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

      {/* Active Tab Detailed Panel */}
      <div
        id={`panel-${currentTab.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${currentTab.id}`}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch glass-panel p-6 sm:p-10 rounded-3xl border border-bio-glow/25 shadow-2xl relative overflow-hidden"
      >
        {/* Background Radial Light Accent */}
        <div className="pointer-events-none absolute -top-32 -left-32 w-80 h-80 bg-bio-glow/15 rounded-full blur-3xl" />

        {/* Left Information */}
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

        {/* Right Interactive Visual Graphic */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[300px]">
          <div className="w-full h-full glass-card rounded-2xl p-6 border border-white/10 flex flex-col items-center justify-center relative overflow-hidden group">
            
            {/* Animated Molecular Structure Representation */}
            <div className="relative w-48 h-48 flex items-center justify-center">
              {/* Outer Rotating Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-bio-glow/40 animate-spin-slow" />
              {/* Inner Pulsing Ring */}
              <div className="absolute inset-4 rounded-full border border-purple-500/30 animate-pulse-glow" />

              {/* Core Nucleus */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-bio-glow via-cyan-400 to-emerald-400 p-0.5 shadow-[0_0_30px_rgba(0,242,254,0.6)] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <div className="w-full h-full bg-bio-dark rounded-full flex items-center justify-center">
                  {getTabIcon(currentTab.id)}
                </div>
              </div>

              {/* Orbiting Satellite Atoms */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-bio-glow shadow-[0_0_12px_#00f2fe] animate-bounce" />
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-400 shadow-[0_0_12px_#10b981] animate-bounce" style={{ animationDelay: '0.3s' }} />
              <div className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-400 shadow-[0_0_12px_#8b5cf6] animate-bounce" style={{ animationDelay: '0.6s' }} />
            </div>

            <div className="mt-6 text-center">
              <span className="text-xs font-mono text-slate-400">Simulation Target: {currentTab.title}</span>
              <div className="mt-1 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-mono text-emerald-400 font-semibold">100% Fidelity Rendered</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </SectionLayout>
  );
};

export const AboutPresenter = withScrollReveal(AboutPresenterBase, { direction: 'up' });
