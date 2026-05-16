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
    console.log('🎯 AdMob initialize called - isInitialized:', this.isInitialized);
    console.log('🎯 Platform check:', Capacitor.isNativePlatform());
    console.log('🎯 Capacitor platform:', Capacitor.getPlatform());
    
    if (this.isInitialized) {
      console.log('🎯 AdMob already initialized');
      return true;
    }
    
    try {
      console.log('🎯 Starting AdMob initialization...');
      console.log('🎯 AdMob object available:', typeof AdMob);
      console.log('🎯 AdMob.initialize available:', typeof AdMob.initialize);
      
      await AdMob.initialize({
        testingDevices: ['EMULATOR'],
        initializeForTesting: false, // PRODUCTION MODE
      });
      this.isInitialized = true;
      console.log('🎯 AdMob initialized successfully');
      return true;
    } catch (error) {
      console.error('🚨 AdMob initialization failed:', error);
      console.error('🚨 Error details:', JSON.stringify(error));
      return false;
    }
  }
  
  static async showBanner(useTestAds = false) {
    console.log('🎯 showBanner called - useTestAds:', useTestAds);
    console.log('🎯 Platform check:', Capacitor.isNativePlatform());
    
    if (!Capacitor.isNativePlatform()) {
      console.log('🚨 Web environment - no native banner ads available');
      return false;
    }
    
    try {
      console.log('🎯 Step 1: Initialize AdMob...');
      const initialized = await this.initialize();
      if (!initialized) {
        console.error('🚨 AdMob initialization failed for banner');
        return false;
      }
      
      console.log('🎯 Step 2: Prepare banner ad...');
      const options: BannerAdOptions = {
        adId: this.PROD_IDS.BANNER, // PRODUCTION BANNER ID
        adSize: BannerAdSize.BANNER,
        position: BannerAdPosition.BOTTOM_CENTER,
        margin: 0,
        isTesting: false // PRODUCTION MODE
      };
      
      console.log('🎯 Preparing banner ad with options:', options);
      await AdMob.prepareBanner(options);
      console.log('🎯 Banner ad prepared successfully!');
      
      console.log('🎯 Step 3: Show banner ad...');
      await AdMob.showBanner();
      console.log('🎯 Banner ad shown successfully!');
      
      return true;
    } catch (error) {
      console.error('🚨 Error showing banner ad:', error);
      console.error('🚨 Error details:', JSON.stringify(error));
      return false;
    }
  }
  
  static async showInterstitial(useTestAds = false) {
    console.log('🎯 showInterstitial called - useTestAds:', useTestAds);
    console.log('🎯 Using DIRECT Capacitor AdMob approach (ChatGPT suggestion)');
    console.log('🎯 Platform check:', Capacitor.isNativePlatform());
    console.log('🎯 Capacitor platform:', Capacitor.getPlatform());
    
    // DIRECT Capacitor AdMob approach - NO AndroidBridge needed!
    if (!Capacitor.isNativePlatform()) {
      console.log('🚨 Web environment - no native ads available');
      return false;
    }
    
    try {
      console.log('🎯 Step 1: Initialize AdMob...');
      const initialized = await this.initialize();
      if (!initialized) {
        console.error('🚨 AdMob initialization failed for interstitial');
        return false;
      }
      
      console.log('🎯 Step 2: Prepare interstitial ad...');
      const options = {
        adId: this.PROD_IDS.INTERSTITIAL, // PRODUCTION ID
        isTesting: false // PRODUCTION MODE
      };
      
      console.log('🎯 Preparing interstitial ad with options:', options);
      await AdMob.prepareInterstitial(options);
      console.log('🎯 Interstitial ad prepared successfully!');
      
      console.log('🎯 Step 3: Show interstitial ad...');
      await AdMob.showInterstitial();
      console.log('🎯 Interstitial ad shown successfully!');
      
      return true;
    } catch (error) {
      console.error('🚨 Error showing interstitial ad:', error);
      console.error('🚨 Error details:', JSON.stringify(error));
      return false;
    }
  }
  
  static async showRewarded(useTestAds = false) {
    // Check if AndroidBridge is available (native app) - PRIORITET!
    if (typeof (window as any).AndroidBridge !== 'undefined') {
      console.log('🎁 Native app detected - calling AndroidBridge rewarded');
      try {
        (window as any).AndroidBridge.showRewardedAd();
        return { watched: true, reward: { amount: 10, type: 'coins' } };
      } catch (error) {
        console.error('AndroidBridge rewarded error:', error);
        return { watched: false, reward: null };
      }
    }
    
    // SAMO ako nema AndroidBridge (čisti web)
    if (!Capacitor.isNativePlatform()) {
      console.log('Web environment - no native ads available');
      return { watched: false, reward: null };
    }
    
    try {
      const initialized = await this.initialize();
      if (!initialized) {
        console.error('AdMob initialization failed');
        return { watched: false, reward: null };
      }
      
      const options = {
        adId: this.PROD_IDS.REWARDED, // PRODUCTION ID
        isTesting: false // PRODUCTION MODE
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