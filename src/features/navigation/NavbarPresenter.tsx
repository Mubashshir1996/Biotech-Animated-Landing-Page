import React from 'react';
import { Menu, X, Volume2, VolumeX } from 'lucide-react';
import { NavbarLogo } from './NavbarLogo';
import { NavbarLinks } from './NavbarLinks';
import { NavbarActions } from './NavbarActions';
import { MobileDrawer } from './MobileDrawer';

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

export const NavbarPresenter: React.FC<NavbarPresenterProps> = React.memo(({
  isScrolled,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  isMuted,
  toggleMute,
  openAccDrawer,
  navLinks,
  onLaunchDemoClick,
}) => {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-bio-dark/80 backdrop-blur-glass border-b border-bio-glow/15 shadow-xl' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <NavbarLogo />
        <NavbarLinks links={navLinks} />
        <NavbarActions
          isMuted={isMuted}
          toggleMute={toggleMute}
          openAccDrawer={openAccDrawer}
          onLaunchDemoClick={onLaunchDemoClick}
        />
        <div className="flex md:hidden items-center gap-2">
          <button onClick={toggleMute} aria-label="Toggle mute" className="p-2 rounded-lg glass-panel text-slate-300">
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

      {isMobileMenuOpen && (
        <MobileDrawer
          navLinks={navLinks}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          openAccDrawer={openAccDrawer}
          onLaunchDemoClick={onLaunchDemoClick}
        />
      )}
    </header>
  );
});

NavbarPresenter.displayName = 'NavbarPresenter';
