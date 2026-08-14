import React from 'react';
import { ContainerLayout } from '../../layouts/ContainerLayout';
import { Dna, Github, Twitter, Linkedin, Shield, Activity, Globe } from 'lucide-react';
import { useAudioFeedback } from '../../hooks/useAudioFeedback';

export const FooterPresenter: React.FC = () => {
  const { handleHover, handleClick } = useAudioFeedback();

  return (
    <footer aria-label="Site Footer" className="relative pt-16 pb-12 bg-bio-dark border-t border-white/10 overflow-hidden">
      
      {/* Live System Status Ticker */}
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

      <ContainerLayout>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
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
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Repository"
                onMouseEnter={handleHover}
                onClick={handleClick}
                className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-bio-glow transition-colors cursor-pointer"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter Profile"
                onMouseEnter={handleHover}
                onClick={handleClick}
                className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-bio-glow transition-colors cursor-pointer"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                onMouseEnter={handleHover}
                onClick={handleClick}
                className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-bio-glow transition-colors cursor-pointer"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">Platform</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><a href="#about" onMouseEnter={handleHover} className="hover:text-bio-glow transition-colors">CRISPR Splicer</a></li>
              <li><a href="#technology" onMouseEnter={handleHover} className="hover:text-bio-glow transition-colors">AI Folding Grid</a></li>
              <li><a href="#capabilities" onMouseEnter={handleHover} className="hover:text-bio-glow transition-colors">Molecular Docking</a></li>
              <li><a href="#impact" onMouseEnter={handleHover} className="hover:text-bio-glow transition-colors">Federated Bio-Mesh</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">Research & Papers</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><a href="#" onMouseEnter={handleHover} className="hover:text-bio-glow transition-colors">Nature Genomics 2026</a></li>
              <li><a href="#" onMouseEnter={handleHover} className="hover:text-bio-glow transition-colors">Cas13 Specificity Study</a></li>
              <li><a href="#" onMouseEnter={handleHover} className="hover:text-bio-glow transition-colors">Quantum QED Benchmarks</a></li>
              <li><a href="#" onMouseEnter={handleHover} className="hover:text-bio-glow transition-colors">Clinical Trial Datasets</a></li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">Compliance</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-2"><Shield className="w-3.5 h-3.5 text-emerald-400" /> HIPAA Compliant</li>
              <li className="flex items-center gap-2"><Activity className="w-3.5 h-3.5 text-bio-glow" /> FDA Phase II Ready</li>
              <li className="flex items-center gap-2"><Globe className="w-3.5 h-3.5 text-purple-400" /> GDPR Tier 4</li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} Aetheria Bio Inc. All rights reserved. Designed for Next-Gen Biotech.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <a href="#" className="hover:text-slate-300">WCAG Accessibility Audit</a>
          </div>
        </div>
      </ContainerLayout>
    </footer>
  );
};
