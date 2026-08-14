import React from 'react';
import { CapabilityItem } from '../../types';
import { Modal } from '../../components/ui/Modal';
import { Button } from '../../components/ui/Button';
import { Sparkles, CheckCircle2 } from 'lucide-react';

interface CapabilityDetailModalProps {
  selectedCap: CapabilityItem | null;
  onClose: () => void;
  onLaunchDemoClick: () => void;
}

export const CapabilityDetailModal: React.FC<CapabilityDetailModalProps> = React.memo(({
  selectedCap,
  onClose,
  onLaunchDemoClick,
}) => {
  if (!selectedCap) return null;

  return (
    <Modal isOpen={!!selectedCap} onClose={onClose} title={selectedCap.title}>
      <div className="space-y-6 text-slate-200">
        <div className="text-sm font-mono text-bio-glow">{selectedCap.subtitle} • {selectedCap.tag}</div>
        <p className="text-base text-slate-300 font-light leading-relaxed">{selectedCap.description}</p>
        <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
          <div className="text-xs font-mono text-slate-400">BENCHMARK SPECIFICATION</div>
          <div className="text-xl font-heading font-bold text-emerald-400">{selectedCap.metrics}</div>
        </div>
        <div className="space-y-2">
          <div className="text-xs font-mono text-slate-400 uppercase">Enterprise Integration Features</div>
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-bio-glow" /> RESTful API & GraphQL endpoints
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-bio-glow" /> High-throughput WebGL batch visualization
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-bio-glow" /> Automated PDB file export & validation
          </div>
        </div>
        <div className="pt-4 flex justify-end gap-3 border-t border-white/10">
          <Button variant="ghost" onClick={onClose}>Close</Button>
          <Button variant="primary" icon={<Sparkles className="w-4 h-4" />} onClick={() => { onClose(); onLaunchDemoClick(); }}>
            Access Capability API
          </Button>
        </div>
      </div>
    </Modal>
  );
});

CapabilityDetailModal.displayName = 'CapabilityDetailModal';
