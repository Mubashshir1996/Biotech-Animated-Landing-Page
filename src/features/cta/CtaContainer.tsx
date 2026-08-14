import React, { useState } from 'react';
import { CtaPresenter } from './CtaPresenter';
import { useAudioFeedback } from '../../hooks/useAudioFeedback';
import confetti from 'canvas-confetti';

export const CtaContainer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { handleSuccess } = useAudioFeedback();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      handleSuccess();

      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.7 },
        colors: ['#00f2fe', '#8b5cf6', '#10b981'],
      });
    }, 1000);
  };

  return (
    <CtaPresenter
      email={email}
      setEmail={setEmail}
      isSubmitted={isSubmitted}
      isLoading={isLoading}
      onSubmit={handleSubmit}
    />
  );
};
