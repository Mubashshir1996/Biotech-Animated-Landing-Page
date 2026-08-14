import React from 'react';
import { useAccessibility } from '../../context/AccessibilityContext';
import { Modal } from '../../components/ui/Modal';
import { Eye, Zap, Type, RefreshCw } from 'lucide-react';
import { Button } from '../../components/ui/Button';

interface AccessibilityDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccessibilityDrawer: React.FC<AccessibilityDrawerProps> = ({ isOpen, onClose }) => {
  const {
    settings,
    toggleReducedMotion,
    toggleHighContrast,
    toggleLargeText,
    toggleDyslexicFont,
    resetSettings,
  } = useAccessibility();

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Accessibility & UX Preferences">
      <div className="space-y-6 text-slate-200">
        <p className="text-sm text-slate-400">
          Customize display and animation settings according to your sensory and neurological preferences (WCAG 2.1 Compliant).
        </p>

        <div className="space-y-4">
          {/* Reduced Motion */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-bio-glow/30 transition-colors">
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-bio-glow" />
              <div>
                <div className="font-semibold text-white">Reduced Motion</div>
                <div className="text-xs text-slate-400">Disables 3D camera sweeps and heavy particle motion</div>
              </div>
            </div>
            <button
              onClick={toggleReducedMotion}
              aria-pressed={settings.reducedMotion}
              className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
                settings.reducedMotion ? 'bg-bio-glow' : 'bg-slate-700'
              }`}
            >
              <span
                className={`block w-5 h-5 rounded-full bg-bio-dark transition-transform ${
                  settings.reducedMotion ? 'translate-x-6' : 'translate-x-0.5'
                }`}
              />
            </button>
          </div>

          {/* High Contrast */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-bio-glow/30 transition-colors">
            <div className="flex items-center gap-3">
              <Eye className="w-5 h-5 text-emerald-400" />
              <div>
                <div className="font-semibold text-white">High Contrast Mode</div>
                <div className="text-xs text-slate-400">Increases contrast ratios for maximum readability</div>
              </div>
            </div>
            <button
              onClick={toggleHighContrast}
              aria-pressed={settings.highContrast}
              className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
                settings.highContrast ? 'bg-emerald-400' : 'bg-slate-700'
              }`}
            >
              <span
                className={`block w-5 h-5 rounded-full bg-bio-dark transition-transform ${
                  settings.highContrast ? 'translate-x-6' : 'translate-x-0.5'
                }`}
              />
            </button>
          </div>

          {/* Large Text */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-bio-glow/30 transition-colors">
            <div className="flex items-center gap-3">
              <Type className="w-5 h-5 text-purple-400" />
              <div>
                <div className="font-semibold text-white">Large Typography</div>
                <div className="text-xs text-slate-400">Scales base font size for enhanced legibility</div>
              </div>
            </div>
            <button
              onClick={toggleLargeText}
              aria-pressed={settings.largeText}
              className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
                settings.largeText ? 'bg-purple-400' : 'bg-slate-700'
              }`}
            >
              <span
                className={`block w-5 h-5 rounded-full bg-bio-dark transition-transform ${
                  settings.largeText ? 'translate-x-6' : 'translate-x-0.5'
                }`}
              />
            </button>
          </div>

          {/* Dyslexic Friendly Font */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-bio-glow/30 transition-colors">
            <div className="flex items-center gap-3">
              <Type className="w-5 h-5 text-amber-400" />
              <div>
                <div className="font-semibold text-white">Dyslexic-Friendly Font</div>
                <div className="text-xs text-slate-400">Applies mono font spacing for cognitive processing</div>
              </div>
            </div>
            <button
              onClick={toggleDyslexicFont}
              aria-pressed={settings.dyslexicFont}
              className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
                settings.dyslexicFont ? 'bg-amber-400' : 'bg-slate-700'
              }`}
            >
              <span
                className={`block w-5 h-5 rounded-full bg-bio-dark transition-transform ${
                  settings.dyslexicFont ? 'translate-x-6' : 'translate-x-0.5'
                }`}
              />
            </button>
          </div>
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
};
