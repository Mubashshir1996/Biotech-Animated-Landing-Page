import React from 'react';
import { useAccessibility } from '../../hooks/useAccessibility';
import { Modal } from '../../components/ui/Modal';
import { Eye, Zap, Type, RefreshCw } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { AccToggleItem } from './AccToggleItem';

interface AccessibilityDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccessibilityDrawer: React.FC<AccessibilityDrawerProps> = React.memo(({ isOpen, onClose }) => {
  const {
    settings,
    toggleReducedMotion,
    toggleHighContrast,
    toggleLargeText,
    toggleDyslexicFont,
    resetSettings,
  } = useAccessibility();

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Accessibility Preferences">
      <div className="space-y-6 text-slate-200">
        <p className="text-sm text-slate-400">
          Customize display and animation settings according to your sensory and neurological preferences (WCAG 2.1 AA).
        </p>
        <div className="space-y-4">
          <AccToggleItem
            icon={<Zap className="w-5 h-5 text-bio-glow" />}
            title="Reduced Motion"
            description="Disables 3D camera sweeps and particle motion"
            isActive={settings.reducedMotion}
            onToggle={toggleReducedMotion}
          />
          <AccToggleItem
            icon={<Eye className="w-5 h-5 text-emerald-400" />}
            title="High Contrast Mode"
            description="Increases contrast ratios for maximum readability"
            isActive={settings.highContrast}
            onToggle={toggleHighContrast}
            activeColorClass="bg-emerald-400"
          />
          <AccToggleItem
            icon={<Type className="w-5 h-5 text-purple-400" />}
            title="Large Typography"
            description="Scales base font size for enhanced legibility"
            isActive={settings.largeText}
            onToggle={toggleLargeText}
            activeColorClass="bg-purple-400"
          />
          <AccToggleItem
            icon={<Type className="w-5 h-5 text-amber-400" />}
            title="Dyslexic-Friendly Font"
            description="Applies mono font spacing for cognitive processing"
            isActive={settings.dyslexicFont}
            onToggle={toggleDyslexicFont}
            activeColorClass="bg-amber-400"
          />
        </div>
        <div className="pt-4 flex justify-between items-center border-t border-white/10">
          <Button variant="ghost" size="sm" icon={<RefreshCw className="w-4 h-4" />} onClick={resetSettings}>
            Reset Defaults
          </Button>
          <Button variant="primary" size="sm" onClick={onClose}>
            Apply Settings
          </Button>
        </div>
      </div>
    </Modal>
  );
});

AccessibilityDrawer.displayName = 'AccessibilityDrawer';
