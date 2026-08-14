import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { SoundSettings } from '../types';

interface SoundContextType {
  settings: SoundSettings;
  toggleMute: () => void;
  setVolume: (val: number) => void;
  playSound: (type: 'hover' | 'click' | 'splice' | 'success' | 'tab') => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<SoundSettings>(() => {
    const saved = localStorage.getItem('aetheria_sound_settings');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* fallback */ }
    }
    return { isMuted: false, volume: 0.15 };
  });

  const audioCtxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    localStorage.setItem('aetheria_sound_settings', JSON.stringify(settings));
  }, [settings]);

  const initAudioCtx = () => {
    if (!audioCtxRef.current) {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtxClass) {
        audioCtxRef.current = new AudioCtxClass();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
  };

  const playSound = (type: 'hover' | 'click' | 'splice' | 'success' | 'tab') => {
    if (settings.isMuted) return;
    try {
      initAudioCtx();
      const ctx = audioCtxRef.current;
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;
      const vol = settings.volume;

      switch (type) {
        case 'hover':
          osc.type = 'sine';
          osc.frequency.setValueAtTime(440, now);
          osc.frequency.exponentialRampToValueAtTime(880, now + 0.05);
          gain.gain.setValueAtTime(vol * 0.2, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
          osc.start(now);
          osc.stop(now + 0.05);
          break;

        case 'click':
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(600, now);
          osc.frequency.exponentialRampToValueAtTime(300, now + 0.08);
          gain.gain.setValueAtTime(vol * 0.5, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
          osc.start(now);
          osc.stop(now + 0.08);
          break;

        case 'tab':
          osc.type = 'sine';
          osc.frequency.setValueAtTime(523.25, now); // C5
          osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.06); // E5
          gain.gain.setValueAtTime(vol * 0.3, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
          osc.start(now);
          osc.stop(now + 0.07);
          break;

        case 'splice':
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(800, now);
          osc.frequency.linearRampToValueAtTime(1200, now + 0.1);
          osc.frequency.exponentialRampToValueAtTime(400, now + 0.2);
          gain.gain.setValueAtTime(vol * 0.4, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
          osc.start(now);
          osc.stop(now + 0.2);
          break;

        case 'success':
          // Two-tone chord
          const osc2 = ctx.createOscillator();
          const gain2 = ctx.createGain();
          osc2.connect(gain2);
          gain2.connect(ctx.destination);

          osc.type = 'sine';
          osc2.type = 'sine';
          osc.frequency.setValueAtTime(523.25, now); // C5
          osc2.frequency.setValueAtTime(659.25, now); // E5

          gain.gain.setValueAtTime(vol * 0.3, now);
          gain2.gain.setValueAtTime(vol * 0.3, now);

          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
          gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

          osc.start(now);
          osc2.start(now);
          osc.stop(now + 0.3);
          osc2.stop(now + 0.3);
          break;
      }
    } catch (e) {
      // Ignore web audio autoplay restriction errors
    }
  };

  const toggleMute = () => setSettings(prev => ({ ...prev, isMuted: !prev.isMuted }));
  const setVolume = (val: number) => setSettings(prev => ({ ...prev, volume: val }));

  return (
    <SoundContext.Provider value={{ settings, toggleMute, setVolume, playSound }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error('useSound must be used within a SoundProvider');
  }
  return context;
};
