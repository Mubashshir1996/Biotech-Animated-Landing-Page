import React, { createContext, useState, useEffect, useCallback } from 'react';
import { SoundSettings } from '../types';
import { playSynthesizedSound } from '../utils/soundSynth';

export interface SoundContextType {
  settings: SoundSettings;
  toggleMute: () => void;
  setVolume: (val: number) => void;
  playSound: (type: 'hover' | 'click' | 'splice' | 'success' | 'tab') => void;
}

export const defaultSoundSettings: SoundSettings = { isMuted: false, volume: 0.15 };
export const SoundContext = createContext<SoundContextType | undefined>(undefined);

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<SoundSettings>(() => {
    const saved = localStorage.getItem('aetheria_sound_settings');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* fallback */ }
    }
    return defaultSoundSettings;
  });

  useEffect(() => {
    localStorage.setItem('aetheria_sound_settings', JSON.stringify(settings));
  }, [settings]);

  const playSound = useCallback((type: 'hover' | 'click' | 'splice' | 'success' | 'tab') => {
    playSynthesizedSound(type, settings);
  }, [settings]);

  const toggleMute = useCallback(() => {
    setSettings(prev => ({ ...prev, isMuted: !prev.isMuted }));
  }, []);

  const setVolume = useCallback((val: number) => {
    setSettings(prev => ({ ...prev, volume: val }));
  }, []);

  return (
    <SoundContext.Provider value={{ settings, toggleMute, setVolume, playSound }}>
      {children}
    </SoundContext.Provider>
  );
};
