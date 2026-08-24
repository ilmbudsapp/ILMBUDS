import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface InterstitialAdProps {
  isOpen: boolean;
  onClose: () => void;
  adUnitId?: string;
  minDisplayTime?: number;
}

export const InterstitialAd: React.FC<InterstitialAdProps> = ({
  isOpen,
  onClose,
  adUnitId = 'ca-app-pub-9746293142643974/1234567890',
  minDisplayTime = 5,
}) => {
  const [countdown, setCountdown] = useState(minDisplayTime);
  const [isLoading, setIsLoading] = useState(true);
  const [adError, setAdError] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setCountdown(minDisplayTime);
      setIsLoading(true);
      setAdError(false);

      // Simulate ad loading
      const loadTimer = setTimeout(() => {
        setIsLoading(false);
      }, 1500);

      // Countdown timer
      const countdownInterval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(countdownInterval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => {
        clearTimeout(loadTimer);
        clearInterval(countdownInterval);
      };
    }
  }, [isOpen, minDisplayTime]);

  const handleClose = () => {
    if (countdown === 0) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Close Button (only enabled after countdown) */}
          <button
            onClick={handleClose}
            disabled={countdown > 0}
            className={`
              absolute top-4 right-4 z-10 
              bg-black/50 hover:bg-black/70 
              text-white rounded-full p-2 
              transition-all duration-200
              ${countdown > 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}
            `}
            aria-label={countdown > 0 ? `Close in ${countdown}s` : 'Close ad'}
          >
            {countdown > 0 ? (
              <span className="flex items-center justify-center w-6 h-6 text-sm font-bold">
                {countdown}
              </span>
            ) : (
              <X className="w-6 h-6" />
            )}
          </button>

          {/* Ad Content */}
          <div className="relative w-full h-[70vh] flex items-center justify-center">
            {isLoading ? (
              // Loading State
              <div className="flex flex-col items-center gap-4">
                <Loader2 className="w-12 h-12 text-emerald-500 animate-spin" />
                <p className="text-gray-600 dark:text-gray-400">
                  Loading ad...
                </p>
              </div>
            ) : adError ? (
              // Error State
              <div className="flex flex-col items-center gap-4 text-center px-4">
                <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                  <X className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Could not load ad
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    You can continue without watching the ad
                  </p>
                </div>
                <Button
                  onClick={onClose}
                  className="bg-emerald-500 hover:bg-emerald-600"
                >
                  Continue
                </Button>
              </div>
            ) : (
              // Ad Display Area
              <div className="w-full h-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                {/* AdSense or Adsterra placeholder */}
                <div className="w-full h-full flex flex-col items-center justify-center p-8">
                  {/* TODO: Replace with actual ad network integration */}
                  <div className="max-w-2xl w-full aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-400 dark:border-gray-600">
                    <div className="text-center">
                      <p className="text-gray-600 dark:text-gray-400 font-semibold mb-2">
                        Ad Placeholder
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        {adUnitId}
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-600 mt-4">
                        Integrate with AdSense or Adsterra
                      </p>
                    </div>
                  </div>

                  {/* Support Message */}
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Ads help us keep ILMBUDS free for everyone
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Info Bar */}
          <div className="bg-emerald-50 dark:bg-emerald-900/20 border-t border-emerald-200 dark:border-emerald-800 p-4">
            <div className="flex items-center justify-between max-w-4xl mx-auto">
              <p className="text-sm text-emerald-900 dark:text-emerald-100 font-medium">
                Thank you for supporting ILMBUDS!
              </p>
              {countdown > 0 && (
                <p className="text-xs text-emerald-700 dark:text-emerald-300">
                  You can close in {countdown}s
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Hook to control ad frequency
export const useInterstitialAd = () => {
  const [showAd, setShowAd] = useState(false);
  const [adCount, setAdCount] = useState(0);

  const triggerAd = (threshold = 3) => {
    const newCount = adCount + 1;
    setAdCount(newCount);

    // Show ad every N actions
    if (newCount % threshold === 0) {
      setShowAd(true);
    }

    localStorage.setItem('ilmbuds-ad-count', newCount.toString());
  };

  const closeAd = () => {
    setShowAd(false);
  };

  useEffect(() => {
    const savedCount = localStorage.getItem('ilmbuds-ad-count');
    if (savedCount) {
      setAdCount(parseInt(savedCount, 10));
    }
  }, []);

  return { showAd, triggerAd, closeAd };
};
