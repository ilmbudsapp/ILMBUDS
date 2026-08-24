import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import { useWindowSize } from '@/hooks/use-window-size';

export type ParticleType = 'stars' | 'sparkles' | 'hearts' | 'bubbles';

interface ParticleEffectProps {
  type?: ParticleType;
  count?: number;
  duration?: number;
  onComplete?: () => void;
}

export const ParticleEffect: React.FC<ParticleEffectProps> = ({
  type = 'stars',
  count = 20,
  duration = 2000,
  onComplete,
}) => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setParticles(newParticles);

    const timer = setTimeout(() => {
      setParticles([]);
      onComplete?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [count, duration, onComplete]);

  const getParticleEmoji = () => {
    switch (type) {
      case 'stars':
        return '⭐';
      case 'sparkles':
        return '✨';
      case 'hearts':
        return '❤️';
      case 'bubbles':
        return '💫';
      default:
        return '⭐';
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ 
              scale: 0, 
              x: '50vw', 
              y: '50vh',
              opacity: 1,
            }}
            animate={{ 
              scale: [0, 1.5, 1],
              x: `${particle.x}vw`, 
              y: `${particle.y}vh`,
              opacity: [1, 1, 0],
              rotate: [0, 360],
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: duration / 1000,
              ease: 'easeOut',
            }}
            className="absolute text-2xl"
          >
            {getParticleEmoji()}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

interface ConfettiEffectProps {
  active: boolean;
  duration?: number;
  onComplete?: () => void;
}

export const ConfettiEffect: React.FC<ConfettiEffectProps> = ({
  active,
  duration = 5000,
  onComplete,
}) => {
  const { width, height } = useWindowSize();
  const [isActive, setIsActive] = useState(active);

  useEffect(() => {
    setIsActive(active);
    
    if (active) {
      const timer = setTimeout(() => {
        setIsActive(false);
        onComplete?.();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [active, duration, onComplete]);

  if (!isActive) return null;

  return (
    <Confetti
      width={width}
      height={height}
      recycle={false}
      numberOfPieces={200}
      gravity={0.3}
      colors={['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899']}
    />
  );
};

interface SuccessAnimationProps {
  show: boolean;
  onComplete?: () => void;
}

export const SuccessAnimation: React.FC<SuccessAnimationProps> = ({
  show,
  onComplete,
}) => {
  return (
    <AnimatePresence>
      {show && (
        <>
          <ConfettiEffect active={show} onComplete={onComplete} />
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', damping: 15 }}
            className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{ 
                repeat: 3,
                duration: 0.5,
              }}
              className="text-9xl"
            >
              🎉
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Hook for window size (if not already exists)
