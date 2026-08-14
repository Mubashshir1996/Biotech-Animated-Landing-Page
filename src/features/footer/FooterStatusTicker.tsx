import React from 'react';
import { ContainerLayout } from '../../layouts/ContainerLayout';

export const FooterStatusTicker: React.FC = React.memo(() => {
  return (
    <div className="border-b border-white/10 pb-8 mb-12">
      <ContainerLayout className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono font-medium text-slate-300">
            SYSTEM STATUS: 100% OPERATIONAL
          </span>
        </div>

        <div className="flex items-center gap-6 text-xs font-mono text-slate-400">
          <span className="hidden sm:inline">CLUSTER: US-EAST-QUANTUM-01</span>
          <span>LATENCY: 1.2ms</span>
          <span className="text-bio-glow">BUILD: v4.8.2-GA</span>
        </div>
      </ContainerLayout>
    </div>
  );
});

FooterStatusTicker.displayName = 'FooterStatusTicker';
