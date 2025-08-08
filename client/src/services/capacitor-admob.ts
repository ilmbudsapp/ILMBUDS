import { AdMob, BannerAdOptions, BannerAdSize, BannerAdPosition } from '@capacitor-community/admob';
import { Capacitor } from '@capacitor/core';

export class CapacitorAdMobService {
  private static isInitialized = false;
  
  // Google Test Ad Unit IDs - SAFE za development
  static readonly TEST_IDS = {
    BANNER: 'ca-app-pub-3940256099942544/6300978111',
    INTERSTITIAL: 'ca-app-pub-3940256099942544/1033173712',
    REWARDED: 'ca-app-pub-3940256099942544/5224354917'
  };

  // Production Ad Unit IDs
  static readonly PROD_IDS = {
    BANNER: 'ca-app-pub-9746293142643974/3548505956',
    INTERSTITIAL: 'ca-app-pub-9746293142643974/7649626393',
    REWARDED: 'ca-app-pub-9746293142643974/2411518252'
  };
  
  static async initialize() {
    if (this.isInitialized || !Capacitor.isNativePlatform()) {
      return;
    }
    
    try {
      await AdMob.initialize({
        testingDevices: ['EMULATOR'],
        initializeForTesting: true, // IMPORTANT: true for development
      });
      this.isInitialized = true;
      console.log('AdMob initialized successfully');
    } catch (error) {
      console.error('AdMob initialization failed:', error);
    }
  }
  
  static async showBanner(useTestAds = true) {
    if (!Capacitor.isNativePlatform()) {
      console.log('Banner ad - Web environment detected');
      return;
    }
    
    try {
      await this.initialize();
      
      const options: BannerAdOptions = {
        adId: useTestAds ? this.TEST_IDS.BANNER : this.PROD_IDS.BANNER,
        adSize: BannerAdSize.BANNER,
        position: BannerAdPosition.BOTTOM_CENTER,
        margin: 80, // 80px for proper navigation clearance
        isTesting: useTestAds
      };
      
      await AdMob.showBanner(options);
      console.log('Banner ad shown:', useTestAds ? 'TEST MODE' : 'PRODUCTION');
    } catch (error) {
      console.error('Error showing banner ad:', error);
    }
  }
  
  static async showInterstitial(useTestAds = true) {
    if (!Capacitor.isNativePlatform()) {
      console.log('Interstitial ad - Web environment detected');
      return false;
    }
    
    try {
      await this.initialize();
      
      const options = {
        adId: useTestAds ? this.TEST_IDS.INTERSTITIAL : this.PROD_IDS.INTERSTITIAL,
        isTesting: useTestAds
      };
      
      await AdMob.prepareInterstitial(options);
      await AdMob.showInterstitial();
      console.log('Interstitial ad shown:', useTestAds ? 'TEST MODE' : 'PRODUCTION');
      return true;
    } catch (error) {
      console.error('Error showing interstitial ad:', error);
      return false;
    }
  }
  
  static async showRewarded(useTestAds = true) {
    if (!Capacitor.isNativePlatform()) {
      console.log('Rewarded ad - Web environment detected');
      return { watched: false, reward: null };
    }
    
    try {
      await this.initialize();
      
      const options = {
        adId: useTestAds ? this.TEST_IDS.REWARDED : this.PROD_IDS.REWARDED,
        isTesting: useTestAds
      };
      
      await AdMob.prepareRewardVideoAd(options);
      const result = await AdMob.showRewardVideoAd();
      console.log('Rewarded ad shown:', useTestAds ? 'TEST MODE' : 'PRODUCTION');
      return { watched: true, reward: result };
    } catch (error) {
      console.error('Error showing rewarded ad:', error);
      return { watched: false, reward: null };
    }
  }
  
  static async hideBanner() {
    if (!Capacitor.isNativePlatform()) {
      return;
    }
    
    try {
      await AdMob.hideBanner();
      console.log('Banner ad hidden');
    } catch (error) {
      console.error('Error hiding banner ad:', error);
    }
  }
}

export default CapacitorAdMobService;