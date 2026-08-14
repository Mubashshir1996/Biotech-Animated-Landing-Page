import React from 'react';
import { SectionLayout } from '../../layouts/SectionLayout';
import { InnovationTab } from '../../types';
import { InnovationTabNav } from './InnovationTabNav';
import { InnovationTabPanel } from './InnovationTabPanel';
import { withScrollReveal } from '../../HOC/withScrollReveal';

interface AboutPresenterProps {
  tabs: InnovationTab[];
  activeTabId: string;
  onTabChange: (id: string) => void;
}

const AboutPresenterBase: React.FC<AboutPresenterProps> = React.memo(({
  tabs,
  activeTabId,
  onTabChange,
}) => {
  const currentTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  return (
    <SectionLayout
      id="about"
      badge="QUANTUM INNOVATION FRAMEWORK"
      title="Redefining Synthetic Biology through Autonomous Intelligence"
      subtitle="Our multi-layered computational ecosystem integrates quantum molecular dynamics with high-throughput bio-synthetic engineering."
      glowColor="cyan"
    >
      <InnovationTabNav tabs={tabs} activeTabId={activeTabId} onTabChange={onTabChange} />
      <InnovationTabPanel currentTab={currentTab} />
    </SectionLayout>
  );
});

AboutPresenterBase.displayName = 'AboutPresenterBase';

export const AboutPresenter = withScrollReveal(AboutPresenterBase, { direction: 'up' });
