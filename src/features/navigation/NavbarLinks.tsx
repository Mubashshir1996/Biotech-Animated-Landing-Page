import React from 'react';
import { useAudioFeedback } from '../../hooks/useAudioFeedback';

interface NavbarLinksProps {
  links: Array<{ label: string; href: string }>;
}

export const NavbarLinks: React.FC<NavbarLinksProps> = React.memo(({ links }) => {
  const { handleHover, handleClick } = useAudioFeedback();

  return (
    <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8 glass-panel px-6 py-2 rounded-full border-white/10">
      {links.map((link) => (
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
  );
});

NavbarLinks.displayName = 'NavbarLinks';
