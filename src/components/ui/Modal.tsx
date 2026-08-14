import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useAudioFeedback } from '../../hooks/useAudioFeedback';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const { handleClick } = useAudioFeedback();
  const isReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleCloseClick = () => {
    handleClick();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseClick}
            className="absolute inset-0 bg-bio-dark/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={isReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
            animate={isReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            exit={isReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-xl glass-panel rounded-2xl border border-bio-glow/30 p-6 sm:p-8 shadow-2xl shadow-bio-glow/10 overflow-hidden"
          >
            {/* Ambient Corner Glow */}
            <div className="pointer-events-none absolute -top-20 -right-20 w-40 h-40 bg-bio-glow/20 rounded-full blur-3xl" />

            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <h3 id="modal-title" className="text-xl sm:text-2xl font-heading font-bold text-white">
                {title}
              </h3>
              <button
                onClick={handleCloseClick}
                aria-label="Close modal"
                className="p-2 text-slate-400 hover:text-bio-glow hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div>{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
