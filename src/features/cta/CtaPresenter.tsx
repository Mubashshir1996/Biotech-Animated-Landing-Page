import React from 'react';
import { SectionLayout } from '../../layouts/SectionLayout';
import { Button } from '../../components/ui/Button';
import { Sparkles, ArrowRight, ShieldCheck, Mail, CheckCircle2 } from 'lucide-react';
import { BioluminescentCanvas } from './BioluminescentCanvas';
import { withScrollReveal } from '../../HOC/withScrollReveal';

interface CtaPresenterProps {
  email: string;
  setEmail: (val: string) => void;
  isSubmitted: boolean;
  isLoading: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

const CtaPresenterBase: React.FC<CtaPresenterProps> = ({
  email,
  setEmail,
  isSubmitted,
  isLoading,
  onSubmit,
}) => {
  return (
    <SectionLayout id="cta" glowColor="violet" fullWidth={true}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative glass-panel p-8 sm:p-14 md:p-20 rounded-3xl border border-bio-glow/40 shadow-[0_0_80px_rgba(0,242,254,0.2)] overflow-hidden text-center">
          
          {/* Background Bioluminescent Particle Animation */}
          <BioluminescentCanvas />

          {/* Ambient Glow Orbs */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-bio-glow/20 rounded-full blur-[140px] z-0" />
          <div className="pointer-events-none absolute -bottom-40 right-10 w-96 h-96 bg-bio-violet/20 rounded-full blur-[140px] z-0" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-medium bg-bio-glow/10 border border-bio-glow/30 text-bio-glow">
              <Sparkles className="w-4 h-4 text-bio-glow animate-spin-slow" />
              DEPLOY QUANTUM BIOLOGY TO YOUR PIPELINE
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-[1.1]">
              Ready to Accelerate Your <br />
              <span className="text-gradient-cyan">Therapeutic Discovery?</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg md:text-xl font-light leading-relaxed">
              Join leading global pharmaceutical enterprises and research institutions leveraging Aetheria Bio to engineer next-generation precision medicine.
            </p>

            {/* Email Demo Request Form */}
            {isSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 max-w-md mx-auto flex items-center justify-center gap-3 animate-in fade-in zoom-in-95">
                <CheckCircle2 className="w-6 h-6 shrink-0 text-emerald-400" />
                <div className="text-left">
                  <div className="font-heading font-bold text-lg text-white">Access Granted!</div>
                  <div className="text-xs text-slate-300">Check your inbox for sandbox API credentials & sandbox keys.</div>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter enterprise email..."
                    aria-label="Enter your enterprise email for platform access"
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-bio-dark/80 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-bio-glow focus:ring-2 focus:ring-bio-glow/50 text-sm font-medium transition-all"
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  isLoading={isLoading}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Request Access
                </Button>
              </form>
            )}

            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> SOC2 Type II Certified
              </span>
              <span>•</span>
              <span>24/7 Dedicated Support</span>
              <span>•</span>
              <span>Instant Sandbox API Access</span>
            </div>
          </div>

        </div>
      </div>
    </SectionLayout>
  );
};

export const CtaPresenter = withScrollReveal(CtaPresenterBase, { direction: 'up' });
