import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'emerald' | 'violet' | 'rose' | 'amber';
  pulse?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  pulse = true,
  className = '',
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'emerald':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'violet':
        return 'bg-purple-500/10 text-purple-300 border-purple-500/30';
      case 'rose':
        return 'bg-rose-500/10 text-rose-400 border-rose-500/30';
      case 'amber':
        return 'bg-amber-500/10 text-amber-300 border-amber-500/30';
      case 'cyan':
      default:
        return 'bg-bio-glow/10 text-bio-glow border-bio-glow/30';
    }
  };

  const getDotColor = () => {
    switch (variant) {
      case 'emerald': return 'bg-emerald-400';
      case 'violet': return 'bg-purple-400';
      case 'rose': return 'bg-rose-400';
      case 'amber': return 'bg-amber-400';
      default: return 'bg-bio-glow';
    }
  };

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border backdrop-blur-md ${getVariantStyles()} ${className}`}
    >
      {pulse && <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${getDotColor()}`} />}
      {children}
    </span>
  );
};
