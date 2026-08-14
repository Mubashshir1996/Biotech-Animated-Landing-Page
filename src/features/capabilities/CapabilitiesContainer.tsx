import React, { useState, useCallback } from 'react';
import { CapabilitiesPresenter } from './CapabilitiesPresenter';
import { CapabilityItem } from '../../types';
import { capabilitiesList } from './capabilitiesData';
import { CapabilityDetailModal } from './CapabilityDetailModal';
import { useAudioFeedback } from '../../hooks/useAudioFeedback';

interface CapabilitiesContainerProps {
  onLaunchDemoClick: () => void;
}

export const CapabilitiesContainer: React.FC<CapabilitiesContainerProps> = ({ onLaunchDemoClick }) => {
  const [selectedCap, setSelectedCap] = useState<CapabilityItem | null>(null);
  const { handleClick } = useAudioFeedback();

  const handleSelectCapability = useCallback((cap: CapabilityItem) => {
    handleClick();
    setSelectedCap(cap);
  }, [handleClick]);

  const handleCloseModal = useCallback(() => {
    setSelectedCap(null);
  }, []);

  return (
    <>
      <CapabilitiesPresenter capabilities={capabilitiesList} onSelectCapability={handleSelectCapability} />
      <CapabilityDetailModal
        selectedCap={selectedCap}
        onClose={handleCloseModal}
        onLaunchDemoClick={onLaunchDemoClick}
      />
    </>
  );
};
