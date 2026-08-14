import React from 'react';
import { useAudioFeedback } from '../../hooks/useAudioFeedback';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glass' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  isLoading = false,
  className = '',
  onClick,
  onMouseEnter,
  ...props
}) => {
  const { handleHover, handleClick } = useAudioFeedback();

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-bio-glow via-cyan-400 to-emerald-400 text-bio-dark font-bold shadow-[0_0_25px_rgba(0,242,254,0.4)] hover:shadow-[0_0_35px_rgba(0,242,254,0.7)] hover:scale-[1.02] active:scale-[0.98] border border-cyan-200/50';
      case 'secondary':
        return 'bg-gradient-to-r from-bio-violet via-purple-500 to-bio-glow text-white font-semibold shadow-[0_0_25px_rgba(139,92,246,0.3)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] hover:scale-[1.02] active:scale-[0.98] border border-purple-300/30';
      case 'glass':
        return 'glass-panel text-white font-medium hover:border-bio-glow/60 hover:bg-bio-glow/10 hover:shadow-[0_0_20px_rgba(0,242,254,0.25)] hover:scale-[1.02] active:scale-[0.98]';
      case 'outline':
        return 'border border-bio-glow/40 text-bio-glow font-medium hover:bg-bio-glow/10 hover:border-bio-glow hover:shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:scale-[1.02] active:scale-[0.98]';
      case 'ghost':
        return 'text-slate-300 font-medium hover:text-bio-glow hover:bg-white/5';
      default:
        return '';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-3.5 py-1.5 text-xs rounded-lg gap-1.5';
      case 'lg':
        return 'px-7 py-3.5 text-base sm:text-lg rounded-xl gap-3';
      case 'md':
      default:
        return 'px-5 py-2.5 text-sm sm:text-base rounded-xl gap-2';
    }
  };

  const handleBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleClick();
    if (onClick) onClick(e);
  };

  const handleBtnHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleHover();
    if (onMouseEnter) onMouseEnter(e);
  };

  return (
    <button
      onClick={handleBtnClick}
      onMouseEnter={handleBtnHover}
      disabled={isLoading || props.disabled}
      className={`inline-flex items-center justify-center transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 ${getVariantStyles()} ${getSizeStyles()} ${className}`}
      {...props}
    >
      {isLoading ? (
        <svg className="animate-spin h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : (
        <>
          {icon && iconPosition === 'left' && <span className="inline-block">{icon}</span>}
          <span>{children}</span>
          {icon && iconPosition === 'right' && <span className="inline-block">{icon}</span>}
        </>
      )}
    </button>
  );
};
