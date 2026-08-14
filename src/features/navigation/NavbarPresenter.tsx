import React from 'react';
import { Volume2, VolumeX, Menu, X, Dna, Settings, Sparkles } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { useAudioFeedback } from '../../hooks/useAudioFeedback';

interface NavbarPresenterProps {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  isMuted: boolean;
  toggleMute: () => void;
  openAccDrawer: () => void;
  navLinks: Array<{ label: string; href: string }>;
  onLaunchDemoClick: () => void;
}

export const NavbarPresenter: React.FC<NavbarPresenterProps> = ({
  isScrolled,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  isMuted,
  toggleMute,
  openAccDrawer,
  navLinks,
  onLaunchDemoClick,
}) => {
  const { handleHover, handleClick } = useAudioFeedback();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-bio-dark/80 backdrop-blur-glass border-b border-bio-glow/15 shadow-xl'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          onMouseEnter={handleHover}
          onClick={handleClick}
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-bio-glow rounded-xl p-1"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-bio-glow to-bio-violet p-0.5 shadow-[0_0_15px_rgba(0,242,254,0.4)] group-hover:shadow-[0_0_25px_rgba(0,242,254,0.7)] transition-shadow">
            <div className="w-full h-full bg-bio-dark rounded-[10px] flex items-center justify-center">
              <Dna className="w-6 h-6 text-bio-glow group-hover:rotate-180 transition-transform duration-700" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-heading font-black tracking-wider text-white flex items-center gap-1">
              AETHERIA<span className="text-bio-glow font-mono font-light text-sm">.BIO</span>
            </span>
            <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase -mt-1">
              Quantum Genomics
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8 glass-panel px-6 py-2 rounded-full border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onMouseEnter={handleHover}
              onClick={handleClick}
              className="text-sm font-medium text-slate-300 hover:text-bio-glow transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-bio-glow hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Sound Toggle */}
          <button
            onClick={() => {
              handleClick();
              toggleMute();
            }}
            onMouseEnter={handleHover}
            aria-label={isMuted ? 'Unmute UI sounds' : 'Mute UI sounds'}
            className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-bio-glow hover:border-bio-glow/40 transition-colors cursor-pointer"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-bio-glow" />}
          </button>

          {/* Accessibility Settings Drawer Trigger */}
          <button
            onClick={() => {
              handleClick();
              openAccDrawer();
            }}
            onMouseEnter={handleHover}
            aria-label="Accessibility & UX Preferences"
            className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-bio-glow hover:border-bio-glow/40 transition-colors cursor-pointer"
          >
            <Settings className="w-4 h-4" />
          </button>

          {/* Launch Demo CTA */}
          <Button
            variant="primary"
            size="sm"
            icon={<Sparkles className="w-4 h-4" />}
            onClick={onLaunchDemoClick}
          >
            Launch Platform
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => {
              handleClick();
              toggleMute();
            }}
            aria-label="Toggle mute"
            className="p-2 rounded-lg glass-panel text-slate-300"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-bio-glow" />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2.5 rounded-xl glass-panel text-white hover:text-bio-glow focus:outline-none cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-bio-glow/20 px-6 py-6 space-y-4 mt-3 animate-in fade-in slide-in-from-top-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  handleClick();
                  setIsMobileMenuOpen(false);
                }}
                className="text-lg font-medium text-slate-200 hover:text-bio-glow py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 flex flex-col gap-3">
            <button
              onClick={() => {
                openAccDrawer();
                setIsMobileMenuOpen(false);
              }}
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
              onClick={() => {
                onLaunchDemoClick();
                setIsMobileMenuOpen(false);
              }}
            >
              Launch Platform
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
