import React, { useState, useEffect } from 'react';
import { X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useTranslation } from '@/hooks/use-translation';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export const PwaInstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      
      // Don't show immediately - wait a bit for user to explore
      const hasShownBefore = localStorage.getItem('pwa-prompt-shown');
      if (!hasShownBefore) {
        setTimeout(() => {
          setShowPrompt(true);
          localStorage.setItem('pwa-prompt-shown', 'true');
        }, 15000); // Show after 15 seconds
      }
    };

    window.addEventListener('beforeinstallprompt', handler);

    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setShowPrompt(false);
    }

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        console.log('PWA installed');
      }
      
      setDeferredPrompt(null);
      setShowPrompt(false);
    } catch (error) {
      console.error('Install prompt error:', error);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('pwa-prompt-dismissed', 'true');
  };

  if (!showPrompt || !deferredPrompt) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="fixed bottom-20 left-4 right-4 z-50 md:left-auto md:right-4 md:w-96"
      >
        <Card className="bg-gradient-to-br from-emerald-500 to-teal-600 border-none shadow-2xl p-4">
          <button
            onClick={handleDismiss}
            className="absolute top-2 right-2 text-white/80 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-start gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 flex-shrink-0">
              <Download className="w-6 h-6 text-white" />
            </div>
            
            <div className="flex-1 pr-6">
              <h3 className="text-white font-bold text-lg mb-1">
                {t('installApp') || 'Install ILMBUDS App'}
              </h3>
              <p className="text-white/90 text-sm mb-3">
                {t('installAppDescription') || 'Get fast offline access and a better experience. No download needed!'}
              </p>
              
              <Button
                onClick={handleInstall}
                className="w-full bg-white text-emerald-600 hover:bg-white/90 font-bold shadow-lg"
                size="lg"
              >
                <Download className="w-4 h-4 mr-2" />
                {t('installNow') || 'Install Now'}
              </Button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-300/20 rounded-full blur-2xl -z-10" />
        </Card>
      </motion.div>
    </AnimatePresence>
  );
};
