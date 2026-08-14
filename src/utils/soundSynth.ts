import { SoundSettings } from '../types';

let audioCtx: AudioContext | null = null;

const getAudioContext = (): AudioContext | null => {
  if (!audioCtx) {
    const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioCtxClass) {
      audioCtx = new AudioCtxClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
};

export const playSynthesizedSound = (
  type: 'hover' | 'click' | 'splice' | 'success' | 'tab',
  settings: SoundSettings
) => {
  if (settings.isMuted) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    const now = ctx.currentTime;
    const vol = settings.volume;

    if (type === 'hover') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.05);
      gain.gain.setValueAtTime(vol * 0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === 'click') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.08);
      gain.gain.setValueAtTime(vol * 0.5, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === 'tab') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.06);
      gain.gain.setValueAtTime(vol * 0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
      osc.start(now);
      osc.stop(now + 0.07);
    } else if (type === 'splice') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.linearRampToValueAtTime(1200, now + 0.1);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.2);
      gain.gain.setValueAtTime(vol * 0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
      osc.start(now);
      osc.stop(now + 0.2);
    } else if (type === 'success') {
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc.type = 'sine';
      osc2.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now);
      osc2.frequency.setValueAtTime(659.25, now);
      gain.gain.setValueAtTime(vol * 0.3, now);
      gain2.gain.setValueAtTime(vol * 0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.start(now);
      osc2.start(now);
      osc.stop(now + 0.3);
      osc2.stop(now + 0.3);
    }
  } catch (e) {
    // Ignore audio restrictions
  }
};
