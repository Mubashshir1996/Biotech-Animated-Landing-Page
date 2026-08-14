import React, { useState } from 'react';
import { MainLayout } from './layouts/MainLayout';
import { NavbarContainer } from './features/navigation/NavbarContainer';
import { HeroContainer } from './features/hero/HeroContainer';
import { AboutContainer } from './features/about/AboutContainer';
import { TechPipelineContainer } from './features/technology/TechPipelineContainer';
import { CapabilitiesContainer } from './features/capabilities/CapabilitiesContainer';
import { ImpactContainer } from './features/impact/ImpactContainer';
import { CtaContainer } from './features/cta/CtaContainer';
import { FooterPresenter } from './features/footer/FooterPresenter';
import { Modal } from './components/ui/Modal';
import { Button } from './components/ui/Button';
import { Sparkles, Dna, Terminal, CheckCircle2 } from 'lucide-react';
import { useAudioFeedback } from './hooks/useAudioFeedback';

export const App: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const { handleClick } = useAudioFeedback();

  const handleLaunchPlatform = () => {
    handleClick();
    setIsDemoModalOpen(true);
  };

  return (
    <MainLayout>
      {/* Glass Navigation Bar */}
      <NavbarContainer onLaunchDemoClick={handleLaunchPlatform} />

      {/* Hero Section with 3D DNA Helix */}
      <HeroContainer onLaunchDemoClick={handleLaunchPlatform} />

      {/* About / Innovation Framework */}
      <AboutContainer />

      {/* Technology / Research Pipeline & Interactive Gene Splicer */}
      <TechPipelineContainer />

      {/* Capabilities / Services Platform */}
      <CapabilitiesContainer onLaunchDemoClick={handleLaunchPlatform} />

      {/* Empirical Impact & Statistics */}
      <ImpactContainer />

      {/* Final Call to Action */}
      <CtaContainer />

      {/* Footer */}
      <FooterPresenter />

      {/* Interactive Platform Demo Sandbox Modal */}
      <Modal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        title="Aetheria Bio • Quantum Sandbox Environment"
      >
        <div className="space-y-6 text-slate-200">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-bio-glow/10 border border-bio-glow/30 text-bio-glow">
            <Dna className="w-5 h-5 animate-spin-slow" />
            <span className="text-xs font-mono font-semibold">
              CONNECTED TO CLUSTER: US-EAST-QUANTUM-01
            </span>
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
            <Button variant="ghost" onClick={() => setIsDemoModalOpen(false)}>
              Close Sandbox
            </Button>
            <Button
              variant="primary"
              icon={<Sparkles className="w-4 h-4" />}
              onClick={() => {
                const ctaSection = document.getElementById('cta');
                setIsDemoModalOpen(false);
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
