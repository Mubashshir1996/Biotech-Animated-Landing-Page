import { useContext } from 'react';
import { SoundContext, defaultSoundSettings } from '../context/SoundContext';

export const useSound = () => {
  const context = useContext(SoundContext);
  if (!context) {
    return {
      settings: defaultSoundSettings,
      toggleMute: () => {},
      setVolume: () => {},
      playSound: () => {},
    };
  }
  return context;
};
