import React from 'react';

interface AccToggleItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isActive: boolean;
  onToggle: () => void;
  activeColorClass?: string;
}

export const AccToggleItem: React.FC<AccToggleItemProps> = React.memo(({
  icon,
  title,
  description,
  isActive,
  onToggle,
  activeColorClass = 'bg-bio-glow',
}) => {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-bio-glow/30 transition-colors">
      <div className="flex items-center gap-3">
        {icon}
        <div>
          <div className="font-semibold text-white">{title}</div>
          <div className="text-xs text-slate-400">{description}</div>
        </div>
      </div>
      <button
        onClick={onToggle}
        aria-pressed={isActive}
        className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
          isActive ? activeColorClass : 'bg-slate-700'
        }`}
      >
        <span
          className={`block w-5 h-5 rounded-full bg-bio-dark transition-transform ${
            isActive ? 'translate-x-6' : 'translate-x-0.5'
          }`}
        />
      </button>
    </div>
  );
});

AccToggleItem.displayName = 'AccToggleItem';
