import React from 'react';
import { ContainerLayout } from '../../layouts/ContainerLayout';
import { FooterStatusTicker } from './FooterStatusTicker';
import { FooterBrandSection } from './FooterBrandSection';
import { FooterNavLinks } from './FooterNavLinks';

export const FooterPresenter: React.FC = React.memo(() => {
  return (
    <footer aria-label="Site Footer" className="relative pt-16 pb-12 bg-bio-dark border-t border-white/10 overflow-hidden">
      <FooterStatusTicker />
      <ContainerLayout>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          <FooterBrandSection />
          <FooterNavLinks />
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} Aetheria Bio Inc. All rights reserved. Designed for Next-Gen Biotech.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <a href="#" className="hover:text-slate-300">WCAG Accessibility Audit</a>
          </div>
        </div>
      </ContainerLayout>
    </footer>
  );
});

FooterPresenter.displayName = 'FooterPresenter';
