import React, { useEffect, useRef } from 'react';
import CapacitorAdMobService from '@/services/capacitor-admob';

interface NativeAdMobBannerProps {
  useTestAds?: boolean;
}

const NativeAdMobBanner: React.FC<NativeAdMobBannerProps> = ({
  useTestAds = true // Default to test ads for safety
}) => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = React.useState(false);
  const [bannerLoaded, setBannerLoaded] = React.useState(false);

  useEffect(() => {
    const initializeAdMob = async () => {
      try {
        console.log('Initializing AdMob Banner - Test Mode:', useTestAds);
        
        // Initialize and show banner using service
        await CapacitorAdMobService.showBanner(useTestAds);
        
        setIsInitialized(true);
        setBannerLoaded(true);
        console.log('AdMob banner shown successfully');
        
      } catch (error: any) {
        console.error('AdMob banner error:', error);
        console.log('Banner will show web preview instead');
      }
    };

    // Initialize after component mount
    const timer = setTimeout(initializeAdMob, 1000);
    
    return () => {
      clearTimeout(timer);
      // Clean up banner when component unmounts
      CapacitorAdMobService.hideBanner().catch(console.error);
    };
  }, [useTestAds]);

  // Web fallback - show test banner preview
  const handleBannerClick = () => {
    console.log('TEST: Banner clicked - would open ad in real app');
  };

  // In web environment, show test banner preview
  if (typeof window !== 'undefined') {
    return (
      <div 
        ref={bannerRef}
        className="w-full h-14 bg-blue-50 border-t-2 border-blue-200 flex items-center justify-center cursor-pointer hover:bg-blue-100 transition-colors"
        onClick={handleBannerClick}
        style={{ minHeight: '56px' }}
      >
        <div className="text-center">
          <div className="text-xs text-blue-600 font-medium">
            📺 AdMob Test Banner
          </div>
          <div className="text-xs text-blue-400 mt-1">
            {useTestAds ? 'TEST MODE' : 'PRODUCTION'}
          </div>
        </div>
      </div>
    );
  }

  // Native environment - AdMob handles the banner
  return (
    <div 
      ref={bannerRef}
      className="w-full h-14 bg-transparent"
      style={{ minHeight: '56px' }}
    />
  );


};

export default NativeAdMobBanner;