import React from 'react';
import { AccessibilityProvider } from '../context/AccessibilityContext';
import { SoundProvider } from '../context/SoundContext';
import { useLenis } from '../hooks/useLenis';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayoutContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useLenis();

  return (
    <div className="relative min-h-screen bg-bio-dark text-slate-100 flex flex-col font-sans selection:bg-bio-glow/30 selection:text-bio-glow">
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        {children}
      </main>
    </div>
  );
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <AccessibilityProvider>
      <SoundProvider>
        <MainLayoutContent>{children}</MainLayoutContent>
      </SoundProvider>
    </AccessibilityProvider>
  );
};
