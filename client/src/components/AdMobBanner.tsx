import React, { useEffect, useRef } from 'react';
import { AdMob, BannerAdOptions, BannerAdSize, BannerAdPosition } from '@capacitor-community/admob';
import { Capacitor } from '@capacitor/core';

interface AdMobBannerProps {
  adUnitId: string;
  style?: React.CSSProperties;
}

export const AdMobBanner: React.FC<AdMobBannerProps> = ({
  adUnitId,
  style = {
    width: '100%',
    height: '64px',
  },
}) => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const isNative = Capacitor.isNativePlatform();

  useEffect(() => {
    if (!isNative) return;

    const loadBanner = async () => {
      try {
        await AdMob.initialize({
          testingDevices: [],
          initializeForTesting: false,
        });

        const options: BannerAdOptions = {
          adId: adUnitId,
          adSize: BannerAdSize.BANNER,
          position: BannerAdPosition.BOTTOM_CENTER,
          margin: 0,
          isTesting: false,
        };

        await AdMob.showBanner(options);

        if (bannerRef.current) {
          bannerRef.current.style.display = 'none';
        }
      } catch (error) {
        console.error('AdMob banner error:', error);
      }
    };

    loadBanner();
  }, [adUnitId, isNative]);

  if (!isNative) {
    return null;
  }

  return <div ref={bannerRef} style={style} className="admob-banner" aria-hidden="true" />;
};

export default AdMobBanner;
