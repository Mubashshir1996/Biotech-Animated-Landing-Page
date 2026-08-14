import React, { useState, useEffect } from 'react';
import { NavbarPresenter } from './NavbarPresenter';
import { useSound } from '../../hooks/useSound';
import { AccessibilityDrawer } from './AccessibilityDrawer';

interface NavbarContainerProps {
  onLaunchDemoClick: () => void;
}

const navLinks = [
  { label: 'Innovation', href: '#about' },
  { label: 'Technology', href: '#technology' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Impact & Data', href: '#impact' },
];

export const NavbarContainer: React.FC<NavbarContainerProps> = ({ onLaunchDemoClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccDrawerOpen, setIsAccDrawerOpen] = useState(false);
  const { settings: soundSettings, toggleMute } = useSound();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <NavbarPresenter
        isScrolled={isScrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        isMuted={soundSettings.isMuted}
        toggleMute={toggleMute}
        openAccDrawer={() => setIsAccDrawerOpen(true)}
        navLinks={navLinks}
        onLaunchDemoClick={onLaunchDemoClick}
      />

      <AccessibilityDrawer
        isOpen={isAccDrawerOpen}
        onClose={() => setIsAccDrawerOpen(false)}
      />
    </>
  );
};
