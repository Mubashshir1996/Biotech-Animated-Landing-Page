import React from 'react';
import { SectionLayout } from '../../layouts/SectionLayout';
import { CapabilityItem } from '../../types';
import { Target, Cpu, Activity, Share2, ArrowUpRight } from 'lucide-react';
import { withGlassmorphicCard } from '../../HOC/withGlassmorphicCard';
import { withScrollReveal } from '../../HOC/withScrollReveal';
import { Badge } from '../../components/ui/Badge';

interface CapabilitiesPresenterProps {
  capabilities: CapabilityItem[];
  onSelectCapability: (cap: CapabilityItem) => void;
}

const CapabilityCardBase: React.FC<{ item: CapabilityItem; onClick: () => void }> = ({ item, onClick }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'target': return <Target className="w-6 h-6 text-bio-glow" />;
      case 'docking': return <Cpu className="w-6 h-6 text-emerald-400" />;
      case 'cell': return <Activity className="w-6 h-6 text-purple-400" />;
      case 'data': return <Share2 className="w-6 h-6 text-amber-400" />;
      default: return <Target className="w-6 h-6 text-bio-glow" />;
    }
  };

  return (
    <div
      onClick={onClick}
      className="p-8 flex flex-col justify-between h-full cursor-pointer min-h-[340px]"
    >
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
            {getIcon(item.icon)}
          </div>
          <Badge variant="cyan" pulse={false}>{item.tag}</Badge>
        </div>

        <h3 className="text-2xl font-heading font-bold text-white mb-2 group-hover:text-bio-glow transition-colors flex items-center justify-between">
          <span>{item.title}</span>
          <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-bio-glow group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </h3>

        <div className="text-xs font-mono text-bio-glow/80 mb-4">{item.subtitle}</div>

        <p className="text-slate-300 text-sm font-light leading-relaxed">
          {item.description}
        </p>
      </div>

      <div className="pt-6 border-t border-white/10 flex items-center justify-between">
        <span className="text-xs font-mono text-slate-400 uppercase">Performance Metric</span>
        <span className="text-sm font-mono font-bold text-emerald-400">{item.metrics}</span>
      </div>
    </div>
  );
};

const EnhancedCapabilityCard = withGlassmorphicCard(CapabilityCardBase);

const CapabilitiesPresenterBase: React.FC<CapabilitiesPresenterProps> = ({
  capabilities,
  onSelectCapability,
}) => {
  return (
    <SectionLayout
      id="capabilities"
      badge="ENTERPRISE PLATFORM CAPABILITIES"
      title="Modular Biotechnology Infrastructure"
      subtitle="Scalable cloud-native bio-computation suite built for pharmaceutical research teams, clinical institutes, and biotech innovators."
      glowColor="emerald"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {capabilities.map((cap) => (
          <EnhancedCapabilityCard
            key={cap.id}
            item={cap}
            onClick={() => onSelectCapability(cap)}
          />
        ))}
      </div>
    </SectionLayout>
  );
};

export const CapabilitiesPresenter = withScrollReveal(CapabilitiesPresenterBase, { direction: 'up' });
