import React from 'react';
import { Settings, Sparkles } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { useAudioFeedback } from '../../hooks/useAudioFeedback';

interface MobileDrawerProps {
  navLinks: Array<{ label: string; href: string }>;
  setIsMobileMenuOpen: (open: boolean) => void;
  openAccDrawer: () => void;
  onLaunchDemoClick: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = React.memo(({
  navLinks,
  setIsMobileMenuOpen,
  openAccDrawer,
  onLaunchDemoClick,
}) => {
  const { handleClick } = useAudioFeedback();

  return (
    <div className="md:hidden glass-panel border-t border-bio-glow/20 px-6 py-6 space-y-4 mt-3 animate-in fade-in slide-in-from-top-4">
      <nav className="flex flex-col space-y-3">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => { handleClick(); setIsMobileMenuOpen(false); }}
            className="text-lg font-medium text-slate-200 hover:text-bio-glow py-2 border-b border-white/5"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="pt-4 flex flex-col gap-3">
        <button
          onClick={() => { openAccDrawer(); setIsMobileMenuOpen(false); }}
          className="flex items-center justify-center gap-2 py-3 rounded-xl glass-panel text-slate-300"
        >
          <Settings className="w-5 h-5 text-bio-glow" />
          <span>Accessibility Preferences</span>
        </button>
        <Button
          variant="primary"
          size="lg"
          className="w-full"
          icon={<Sparkles className="w-5 h-5" />}
          onClick={() => { onLaunchDemoClick(); setIsMobileMenuOpen(false); }}
        >
          Launch Platform
        </Button>
      </div>
    </div>
  );
});

MobileDrawer.displayName = 'MobileDrawer';
