import { useSound } from './useSound';

export const useAudioFeedback = () => {
  const { playSound } = useSound();

  const handleHover = () => playSound('hover');
  const handleClick = () => playSound('click');
  const handleTabChange = () => playSound('tab');
  const handleSplice = () => playSound('splice');
  const handleSuccess = () => playSound('success');

  return {
    playSound,
    handleHover,
    handleClick,
    handleTabChange,
    handleSplice,
    handleSuccess,
  };
};
