import React, { useState, useEffect } from 'react';
import { SectionLayout } from '../../layouts/SectionLayout';
import { MetricItem } from '../../types';
import { Award, Zap, TrendingUp, ShieldCheck, Flame, BarChart2 } from 'lucide-react';
import { withScrollReveal } from '../../HOC/withScrollReveal';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface ImpactPresenterProps {
  metrics: MetricItem[];
}

const AnimatedCounter: React.FC<{ target: number; suffix: string; decimals?: number }> = ({
  target,
  suffix,
  decimals = 0,
}) => {
  const [count, setCount] = useState(0);
  const isReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isReducedMotion) {
      setCount(target);
      return;
    }

    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Ease-out expo curve
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = start + (target - start) * easeProgress;

      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [target, isReducedMotion]);

  return (
    <span>
      {count.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
};

const ImpactPresenterBase: React.FC<ImpactPresenterProps> = ({ metrics }) => {
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
    <SectionLayout
      id="impact"
      badge="EMPIRICAL CLINICAL IMPACT"
      title="Quantifiable Milestones in Computational Therapeutics"
      subtitle="Transforming target identification, safety validation, and clinical translation with verified benchmark metrics."
      glowColor="cyan"
    >
      <div className="space-y-16">
        
        {/* Animated Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item) => (
            <div
              key={item.id}
              className="glass-panel p-8 rounded-3xl border border-bio-glow/20 hover:border-bio-glow/50 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Background ambient glow */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-bio-glow/10 rounded-full blur-2xl group-hover:bg-bio-glow/20 transition-colors" />

              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                  {getIcon(item.icon)}
                </div>
                <Zap className="w-4 h-4 text-bio-glow/40 group-hover:text-bio-glow transition-colors" />
              </div>

              <div className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white mb-2 tracking-tight">
                <AnimatedCounter
                  target={item.numericValue}
                  suffix={item.suffix}
                  decimals={item.decimals}
                />
              </div>

              <h4 className="text-base font-heading font-semibold text-bio-glow mb-1">
                {item.label}
              </h4>

              <p className="text-xs text-slate-400 font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bio-Metric Impact Timeline Showcase */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono text-bio-glow uppercase tracking-wider">
                TRANSLATIONAL BENCHMARK • TRADITIONAL VS AETHERIA
              </span>
              
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                Compressing 5-Year Lead Discovery into 72 Hours
              </h3>

              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                By replacing iterative wet-lab trial and error with quantum molecular modeling, our enterprise partners achieve unprecedented acceleration across phase pipelines.
              </p>

              {/* Progress Comparison Bars */}
              <div className="space-y-4 pt-2">
                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-300 mb-1">
                    <span>Traditional Wet-Lab Pipeline</span>
                    <span>54 Months</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-slate-600 rounded-full w-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-bio-glow mb-1">
                    <span>Aetheria Bio AI Platform</span>
                    <span>3 Months (18x Faster)</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-bio-glow via-cyan-400 to-emerald-400 rounded-full w-[16%] animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex items-center justify-center">
              <div className="w-full p-6 glass-card rounded-2xl border border-bio-glow/30 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-mono text-slate-400">BENCHMARK DATA MATRIX</span>
                  <span className="text-xs font-mono text-emerald-400">VERIFIED BY PHARMA AUDIT</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-xl bg-white/5">
                    <div className="text-xs text-slate-400 font-mono">Off-Target Risk</div>
                    <div className="text-xl font-heading font-bold text-emerald-400">-99.4%</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5">
                    <div className="text-xs text-slate-400 font-mono">Cost per Candidate</div>
                    <div className="text-xl font-heading font-bold text-bio-glow">-84.2%</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5">
                    <div className="text-xs text-slate-400 font-mono">Ligand Selectivity</div>
                    <div className="text-xl font-heading font-bold text-purple-400">100x</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5">
                    <div className="text-xs text-slate-400 font-mono">Phase I Success</div>
                    <div className="text-xl font-heading font-bold text-amber-300">94.8%</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </SectionLayout>
  );
};

export const ImpactPresenter = withScrollReveal(ImpactPresenterBase, { direction: 'up' });
