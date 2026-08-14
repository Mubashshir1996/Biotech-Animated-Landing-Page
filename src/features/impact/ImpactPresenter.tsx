import React from 'react';
import { SectionLayout } from '../../layouts/SectionLayout';
import { MetricItem } from '../../types';
import { ImpactMetricCard } from './ImpactMetricCard';
import { ImpactTimelineComparison } from './ImpactTimelineComparison';
import { withScrollReveal } from '../../HOC/withScrollReveal';

interface ImpactPresenterProps {
  metrics: MetricItem[];
}

const ImpactPresenterBase: React.FC<ImpactPresenterProps> = React.memo(({ metrics }) => {
  return (
    <SectionLayout
      id="impact"
      badge="EMPIRICAL CLINICAL IMPACT"
      title="Quantifiable Milestones in Computational Therapeutics"
      subtitle="Transforming target identification, safety validation, and clinical translation with verified benchmark metrics."
      glowColor="cyan"
    >
      <div className="space-y-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item) => (
            <ImpactMetricCard key={item.id} item={item} />
          ))}
        </div>
        <ImpactTimelineComparison />
      </div>
    </SectionLayout>
  );
});

ImpactPresenterBase.displayName = 'ImpactPresenterBase';

export const ImpactPresenter = withScrollReveal(ImpactPresenterBase, { direction: 'up' });
