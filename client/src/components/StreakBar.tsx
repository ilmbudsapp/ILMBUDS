import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Star, Trophy, Zap } from 'lucide-react';
import { useUserContext } from '@/context/user-context';
import { useTranslation } from '@/hooks/use-translation';

interface StreakData {
  currentStreak: number;
  longestStreak: number;
  lastActivityDate: string;
}

export const StreakBar: React.FC = () => {
  const { user } = useUserContext();
  const { t } = useTranslation();
  const [streak, setStreak] = useState<StreakData>({
    currentStreak: 0,
    longestStreak: 0,
    lastActivityDate: new Date().toISOString(),
  });
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    // Load streak from localStorage
    const savedStreak = localStorage.getItem('ilmbuds-streak');
    if (savedStreak) {
      const parsed = JSON.parse(savedStreak);
      setStreak(parsed);
      
      // Check if streak should continue
      const lastDate = new Date(parsed.lastActivityDate);
      const today = new Date();
      const diffDays = Math.floor((today.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));
      
      if (diffDays > 1) {
        // Streak broken
        setStreak(prev => ({ ...prev, currentStreak: 0 }));
      }
    }
  }, []);

  const updateStreak = () => {
    const today = new Date().toISOString().split('T')[0];
    const lastDate = streak.lastActivityDate.split('T')[0];
    
    if (today !== lastDate) {
      const newStreak = streak.currentStreak + 1;
      const newData = {
        currentStreak: newStreak,
        longestStreak: Math.max(newStreak, streak.longestStreak),
        lastActivityDate: new Date().toISOString(),
      };
      
      setStreak(newData);
      localStorage.setItem('ilmbuds-streak', JSON.stringify(newData));
      setShowAnimation(true);
      
      setTimeout(() => setShowAnimation(false), 2000);
    }
  };

  // Expose updateStreak globally so it can be called when user completes activities
  useEffect(() => {
    (window as any).updateIlmbudsStreak = updateStreak;
  }, [streak]);

  const getStreakColor = () => {
    if (streak.currentStreak >= 30) return 'from-purple-500 to-pink-500';
    if (streak.currentStreak >= 14) return 'from-orange-500 to-red-500';
    if (streak.currentStreak >= 7) return 'from-yellow-500 to-orange-500';
    return 'from-emerald-500 to-teal-500';
  };

  const getStreakIcon = () => {
    if (streak.currentStreak >= 30) return <Trophy className="w-5 h-5" />;
    if (streak.currentStreak >= 7) return <Star className="w-5 h-5" />;
    return <Flame className="w-5 h-5" />;
  };

  return (
    <div className="fixed top-16 left-0 right-0 z-30 px-4 py-2 bg-gradient-to-b from-slate-900/95 to-transparent backdrop-blur-sm md:hidden">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`
          relative overflow-hidden rounded-full 
          bg-gradient-to-r ${getStreakColor()} 
          p-[2px] shadow-lg
        `}
      >
        <div className="bg-slate-900 rounded-full px-4 py-2 flex items-center justify-between">
          {/* Streak Count */}
          <div className="flex items-center gap-2">
            <motion.div
              animate={showAnimation ? { rotate: [0, -10, 10, -10, 0], scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.5 }}
            >
              {getStreakIcon()}
            </motion.div>
            <div className="flex flex-col">
              <span className="text-white text-xs font-semibold">
                {t('streak') || 'Streak'}
              </span>
              <span className="text-white text-lg font-bold leading-none">
                {streak.currentStreak} {t('days') || 'days'}
              </span>
            </div>
          </div>

          {/* Points Display */}
          {user && (
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              <div className="flex flex-col items-end">
                <span className="text-white/70 text-xs">
                  {t('points') || 'Points'}
                </span>
                <span className="text-white text-lg font-bold leading-none">
                  {user.points || 0}
                </span>
              </div>
            </div>
          )}

          {/* Longest Streak Badge */}
          {streak.longestStreak > 0 && (
            <div className="hidden sm:flex items-center gap-1 bg-white/10 rounded-full px-3 py-1">
              <Trophy className="w-3 h-3 text-yellow-400" />
              <span className="text-white text-xs font-medium">
                {t('best') || 'Best'}: {streak.longestStreak}
              </span>
            </div>
          )}
        </div>

        {/* Animated particles on streak update */}
        <AnimatePresence>
          {showAnimation && (
            <>
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, x: '50%', y: '50%' }}
                  animate={{
                    scale: [0, 1, 0],
                    x: `${50 + (Math.random() - 0.5) * 100}%`,
                    y: `${50 + (Math.random() - 0.5) * 100}%`,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
