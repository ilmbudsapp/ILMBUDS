import React, { useState } from 'react';
import CapacitorAdMobService from '@/services/capacitor-admob';
import { motion, AnimatePresence } from 'framer-motion';

interface RewardedAdProps {
  isOpen: boolean;
  onClose: () => void;
  onRewardEarned: (reward: { amount: number, type: string }) => void;
  useTestAds?: boolean;
}

const RewardedAd: React.FC<RewardedAdProps> = ({
  isOpen,
  onClose,
  onRewardEarned,
  useTestAds = true
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showWebPreview, setShowWebPreview] = useState(false);
  const [watchProgress, setWatchProgress] = useState(0);

  const handleWatchAd = async () => {
    setIsLoading(true);
    
    try {
      console.log('Attempting to show rewarded ad...');
      const result = await CapacitorAdMobService.showRewarded(useTestAds);
      
      if (result.watched) {
        console.log('Rewarded ad completed successfully');
        // Standard reward for watching complete ad
        onRewardEarned({ amount: 10, type: 'points' });
        onClose();
      } else {
        // Fallback to web preview if native ad fails
        console.log('Native rewarded ad failed, showing web preview');
        setShowWebPreview(true);
        startWebAdWatch();
      }
    } catch (error) {
      console.error('Rewarded ad error:', error);
      // Show web preview as fallback
      setShowWebPreview(true);
      startWebAdWatch();
    } finally {
      setIsLoading(false);
    }
  };

  const startWebAdWatch = () => {
    setWatchProgress(0);
    const interval = setInterval(() => {
      setWatchProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Give reward after watching complete ad
          setTimeout(() => {
            onRewardEarned({ amount: 10, type: 'points' });
            onClose();
          }, 1000);
          return 100;
        }
        return prev + 5; // 5% every 150ms = 3 seconds total
      });
    }, 150);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-white rounded-lg max-w-md mx-4 shadow-2xl relative"
        >
          {/* Close button - only show if not watching ad */}
          {!showWebPreview && !isLoading && (
            <button
              onClick={onClose}
              className="absolute top-2 right-2 w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors z-10"
            >
              ✕
            </button>
          )}

          {!showWebPreview ? (
            // Initial screen - watch ad button
            <div className="p-6 text-center">
              <div className="text-4xl mb-4">🎁</div>
              <h2 className="text-xl font-bold mb-4 text-gray-800">
                Watch Ad for Reward!
              </h2>
              <p className="text-gray-600 mb-6">
                Watch a short video ad to earn 10 bonus points for your learning progress.
              </p>
              
              <button
                onClick={handleWatchAd}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Loading Ad...
                  </div>
                ) : (
                  '▶️ Watch Ad & Earn Points'
                )}
              </button>
              
              <div className="text-xs text-gray-500 mt-4">
                {useTestAds ? 'Test Mode - Safe for Development' : 'Production Mode'}
              </div>
            </div>
          ) : (
            // Web preview - simulated ad watching
            <div className="p-6">
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-gray-800">
                  📺 Watching Advertisement...
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Educational content preview
                </p>
              </div>

              {/* Simulated ad content */}
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg mb-4">
                <div className="text-center">
                  <div className="text-2xl mb-2">🕌</div>
                  <div className="text-sm mb-2">Islamic Learning App</div>
                  <div className="text-xs opacity-75">
                    Making Islamic education fun for children
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-150 ease-out"
                  style={{ width: `${watchProgress}%` }}
                ></div>
              </div>

              <div className="text-center">
                <div className="text-sm text-gray-600">
                  {watchProgress < 100 ? (
                    `Watching... ${Math.round(watchProgress)}%`
                  ) : (
                    <span className="text-green-600 font-semibold">
                      ✅ Ad Complete! Earning reward...
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RewardedAd;