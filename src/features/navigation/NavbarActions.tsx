import React from 'react';
import { Volume2, VolumeX, Settings, Sparkles } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { useAudioFeedback } from '../../hooks/useAudioFeedback';

interface NavbarActionsProps {
  isMuted: boolean;
  toggleMute: () => void;
  openAccDrawer: () => void;
  onLaunchDemoClick: () => void;
}

export const NavbarActions: React.FC<NavbarActionsProps> = React.memo(({
  isMuted,
  toggleMute,
  openAccDrawer,
  onLaunchDemoClick,
}) => {
  const { handleHover, handleClick } = useAudioFeedback();

  return (
    <div className="hidden md:flex items-center gap-3">
      <button
        onClick={() => { handleClick(); toggleMute(); }}
        onMouseEnter={handleHover}
        aria-label={isMuted ? 'Unmute UI sounds' : 'Mute UI sounds'}
        className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-bio-glow hover:border-bio-glow/40 transition-colors cursor-pointer"
      >
        {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-bio-glow" />}
      </button>

      <button
        onClick={() => { handleClick(); openAccDrawer(); }}
        onMouseEnter={handleHover}
        aria-label="Accessibility Preferences"
        className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-bio-glow hover:border-bio-glow/40 transition-colors cursor-pointer"
      >
        <Settings className="w-4 h-4" />
      </button>

      <Button variant="primary" size="sm" icon={<Sparkles className="w-4 h-4" />} onClick={onLaunchDemoClick}>
        Launch Platform
      </Button>
    </div>
  );
});

NavbarActions.displayName = 'NavbarActions';
