import React from 'react';
import { MetricItem } from '../../types';
import { Award, Zap, TrendingUp, ShieldCheck, Flame, BarChart2 } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

interface ImpactMetricCardProps {
  item: MetricItem;
}

export const ImpactMetricCard: React.FC<ImpactMetricCardProps> = React.memo(({ item }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'accuracy': return <Award className="w-6 h-6 text-bio-glow" />;
      case 'molecules': return <Flame className="w-6 h-6 text-emerald-400" />;
      case 'speed': return <TrendingUp className="w-6 h-6 text-purple-400" />;
      case 'fda': return <ShieldCheck className="w-6 h-6 text-amber-400" />;
      default: return <BarChart2 className="w-6 h-6 text-bio-glow" />;
    }
  };

  return (
    <div className="glass-panel p-8 rounded-3xl border border-bio-glow/20 hover:border-bio-glow/50 transition-all duration-300 relative group overflow-hidden">
      <div className="absolute -top-16 -right-16 w-32 h-32 bg-bio-glow/10 rounded-full blur-2xl group-hover:bg-bio-glow/20 transition-colors" />

      <div className="flex items-center justify-between mb-6">
        <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
          {getIcon(item.icon)}
        </div>
        <Zap className="w-4 h-4 text-bio-glow/40 group-hover:text-bio-glow transition-colors" />
      </div>

      <div className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white mb-2 tracking-tight">
        <AnimatedCounter target={item.numericValue} suffix={item.suffix} decimals={item.decimals} />
      </div>

      <h4 className="text-base font-heading font-semibold text-bio-glow mb-1">{item.label}</h4>
      <p className="text-xs text-slate-400 font-light leading-relaxed">{item.description}</p>
    </div>
  );
});

ImpactMetricCard.displayName = 'ImpactMetricCard';
