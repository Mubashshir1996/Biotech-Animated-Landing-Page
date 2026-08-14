import React from 'react';
import { useLenis } from '../hooks/useLenis';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  useLenis();

  return (
    <div className="relative min-h-screen bg-bio-dark text-slate-100 flex flex-col font-sans selection:bg-bio-glow/30 selection:text-bio-glow">
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        {children}
      </main>
    </div>
  );
};
