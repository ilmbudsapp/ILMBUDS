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
      return true;
    }
    
    try {
      await AdMob.initialize({
        testingDevices: ['EMULATOR'],
        initializeForTesting: false, // IMPORTANT: false for production
      });
      this.isInitialized = true;
      console.log('AdMob initialized successfully');
      return true;
    } catch (error) {
      console.error('AdMob initialization failed:', error);
      return false;
    }
  }
  
  static async showBanner(useTestAds = false) {
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
        margin: 168, // 168px to position banner directly under navigation (bottom-28 = 112px + banner height 56px)
        isTesting: useTestAds
      };
      
      await AdMob.showBanner(options);
      console.log('Banner ad shown:', useTestAds ? 'TEST MODE' : 'PRODUCTION');
    } catch (error) {
      console.error('Error showing banner ad:', error);
    }
  }
  
  static async showInterstitial(useTestAds = false) {
    if (!Capacitor.isNativePlatform()) {
      console.log('Interstitial ad - Web environment detected');
      return false;
    }
    
    try {
      const initialized = await this.initialize();
      if (!initialized) {
        console.error('AdMob initialization failed for interstitial');
        return false;
      }
      
      const options = {
        adId: useTestAds ? this.TEST_IDS.INTERSTITIAL : this.PROD_IDS.INTERSTITIAL,
        isTesting: useTestAds
      };
      
      console.log('Preparing interstitial ad with options:', options);
      await AdMob.prepareInterstitial(options);
      
      console.log('Showing interstitial ad...');
      await AdMob.showInterstitial();
      
      console.log('Interstitial ad shown successfully:', useTestAds ? 'TEST MODE' : 'PRODUCTION');
      return true;
    } catch (error) {
      console.error('Error showing interstitial ad:', error);
      console.error('Interstitial error details:', JSON.stringify(error));
      return false;
    }
  }
  
  static async showRewarded(useTestAds = false) {
    if (!Capacitor.isNativePlatform()) {
      console.log('Rewarded ad - Web environment detected');
      return { watched: false, reward: null };
    }
    
    try {
      const initialized = await this.initialize();
      if (!initialized) {
        console.error('AdMob initialization failed');
        return { watched: false, reward: null };
      }
      
      const options = {
        adId: useTestAds ? this.TEST_IDS.REWARDED : this.PROD_IDS.REWARDED,
        isTesting: useTestAds
      };
      
      console.log('Preparing rewarded ad with options:', options);
      await AdMob.prepareRewardVideoAd(options);
      
      console.log('Showing rewarded ad...');
      const result = await AdMob.showRewardVideoAd();
      
      console.log('Rewarded ad completed:', result);
      console.log('Rewarded ad shown:', useTestAds ? 'TEST MODE' : 'PRODUCTION');
      return { watched: true, reward: result };
    } catch (error) {
      console.error('Error showing rewarded ad:', error);
      console.error('Error details:', JSON.stringify(error));
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