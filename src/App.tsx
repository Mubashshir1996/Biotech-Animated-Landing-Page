import React, { useState, useCallback, Suspense, lazy } from 'react';
import { MainLayout } from './layouts/MainLayout';
import { NavbarContainer } from './features/navigation/NavbarContainer';
import { HeroContainer } from './features/hero/HeroContainer';
import { Modal } from './components/ui/Modal';
import { Button } from './components/ui/Button';
import { Sparkles, Dna, Terminal, CheckCircle2 } from 'lucide-react';
import { useAudioFeedback } from './hooks/useAudioFeedback';

// Lazy Loaded Feature Modules for Code Splitting & Performance Optimization
const AboutContainer = lazy(() => import('./features/about/AboutContainer').then(m => ({ default: m.AboutContainer })));
const TechPipelineContainer = lazy(() => import('./features/technology/TechPipelineContainer').then(m => ({ default: m.TechPipelineContainer })));
const CapabilitiesContainer = lazy(() => import('./features/capabilities/CapabilitiesContainer').then(m => ({ default: m.CapabilitiesContainer })));
const ImpactContainer = lazy(() => import('./features/impact/ImpactContainer').then(m => ({ default: m.ImpactContainer })));
const CtaContainer = lazy(() => import('./features/cta/CtaContainer').then(m => ({ default: m.CtaContainer })));
const FooterPresenter = lazy(() => import('./features/footer/FooterPresenter').then(m => ({ default: m.FooterPresenter })));

const SectionFallback: React.FC = () => (
  <div className="py-20 text-center text-slate-500 font-mono text-xs flex items-center justify-center gap-2">
    <span className="w-2 h-2 rounded-full bg-bio-glow animate-ping" />
    <span>Loading Quantum Module...</span>
  </div>
);

export const App: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const { handleClick } = useAudioFeedback();

  const handleLaunchPlatform = useCallback(() => {
    handleClick();
    setIsDemoModalOpen(true);
  }, [handleClick]);

  const handleCloseModal = useCallback(() => {
    setIsDemoModalOpen(false);
  }, []);

  return (
    <MainLayout>
      <NavbarContainer onLaunchDemoClick={handleLaunchPlatform} />
      <HeroContainer onLaunchDemoClick={handleLaunchPlatform} />

      <Suspense fallback={<SectionFallback />}>
        <AboutContainer />
        <TechPipelineContainer />
        <CapabilitiesContainer onLaunchDemoClick={handleLaunchPlatform} />
        <ImpactContainer />
        <CtaContainer />
        <FooterPresenter />
      </Suspense>

      <Modal isOpen={isDemoModalOpen} onClose={handleCloseModal} title="Aetheria Bio • Quantum Sandbox Environment">
        <div className="space-y-6 text-slate-200">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-bio-glow/10 border border-bio-glow/30 text-bio-glow">
            <Dna className="w-5 h-5 animate-spin-slow" />
            <span className="text-xs font-mono font-semibold">CONNECTED TO CLUSTER: US-EAST-QUANTUM-01</span>
          </div>
          <p className="text-sm text-slate-300 font-light leading-relaxed">
            Welcome to the Aetheria Bio API Console. Execute synthetic gene sequence queries or initialize automated ligand docking simulations in real time.
          </p>
          <div className="p-4 rounded-xl bg-bio-dark border border-white/10 font-mono text-xs text-slate-300 space-y-2 overflow-x-auto">
            <div className="flex items-center gap-2 text-bio-glow">
              <Terminal className="w-4 h-4 text-bio-glow" />
              <span>$ curl -X POST https://api.aetheria.bio/v4/fold \</span>
            </div>
            <div className="pl-6 text-emerald-400">-H "Authorization: Bearer sb_key_94827103" \</div>
            <div className="pl-6 text-purple-400">-d '&#123;"sequence": "AGCTGCATCGAT", "precision": "sub_angstrom"&#125;'</div>
            <div className="pt-2 text-slate-500">// Response: 200 OK (Structure resolved in 42ms)</div>
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Interactive WebGL 3D Molecule Viewer active</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>CRISPR Cas13 off-target cleavage safety checked</span>
            </div>
          </div>
          <div className="pt-4 flex justify-end gap-3 border-t border-white/10">
            <Button variant="ghost" onClick={handleCloseModal}>Close Sandbox</Button>
            <Button
              variant="primary"
              icon={<Sparkles className="w-4 h-4" />}
              onClick={() => {
                handleCloseModal();
                const ctaSection = document.getElementById('cta');
                if (ctaSection) ctaSection.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Enterprise API Keys
            </Button>
          </div>
        </div>
      </Modal>
    </MainLayout>
  );
};
