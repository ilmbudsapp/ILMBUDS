import CapacitorAdMobService from './capacitor-admob';
import { Capacitor } from '@capacitor/core';

// Simple counters for frequency control
let interstitialCount = 0;
let rewardedCount = 0;
let bannerCount = 0;

// Ad frequency control
const INTERSTITIAL_FREQUENCY = 3; // Show every 3rd time
const REWARDED_FREQUENCY = 1; // Show every time (user initiated)
const BANNER_FREQUENCY = 1; // Show every time

export const canShowInterstitial = () => {
  const isNative = Capacitor.isNativePlatform();
  const hasAndroidBridge = typeof (window as any).AndroidBridge !== 'undefined';
  const result = isNative || hasAndroidBridge;
  
  console.log('🎯 canShowInterstitial check:');
  console.log('🎯 - isNativePlatform:', isNative);
  console.log('🎯 - hasAndroidBridge:', hasAndroidBridge);
  console.log('🎯 - result:', result);
  
  return result;
};

export const markInterstitialShown = () => {
  interstitialCount++;
};

export const canShowRewarded = () => {
  return Capacitor.isNativePlatform() || typeof (window as any).AndroidBridge !== 'undefined';
};

export const markRewardedShown = () => {
  rewardedCount++;
};

export const canShowBanner = () => {
  return Capacitor.isNativePlatform() || typeof (window as any).AndroidBridge !== 'undefined';
};

export const markBannerShown = () => {
  bannerCount++;
};

export const shouldShowAd = () => {
  return canShowInterstitial() || canShowBanner();
};

export const shouldShowInterstitialOnNavigation = () => {
  return canShowInterstitial() && (interstitialCount % INTERSTITIAL_FREQUENCY === 0);
};

export const shouldOfferReward = () => {
  return canShowRewarded();
};

export const shouldShowBanner = () => {
  return canShowBanner();
};

// Main functions to show ads
export const showInterstitialAd = async (useTestAds = false) => {
  console.log('🎯 showInterstitialAd called - useTestAds:', useTestAds);
  console.log('🎯 canShowInterstitial:', canShowInterstitial());
  console.log('🎯 AndroidBridge available:', typeof (window as any).AndroidBridge !== 'undefined');
  
  if (!canShowInterstitial()) {
    console.log('Interstitial ads not available in web environment');
    return false;
  }
  
  try {
    console.log('🎯 Calling CapacitorAdMobService.showInterstitial...');
    const result = await CapacitorAdMobService.showInterstitial(useTestAds);
    console.log('🎯 CapacitorAdMobService.showInterstitial result:', result);
    if (result) {
      markInterstitialShown();
    }
    return result;
  } catch (error) {
    console.error('Error showing interstitial ad:', error);
    return false;
  }
};

export const showRewardedAd = async (useTestAds = false) => {
  if (!canShowRewarded()) {
    console.log('Rewarded ads not available in web environment');
    return { watched: false, reward: null };
  }
  
  try {
    const result = await CapacitorAdMobService.showRewarded(useTestAds);
    if (result.watched) {
      markRewardedShown();
    }
    return result;
  } catch (error) {
    console.error('Error showing rewarded ad:', error);
    return { watched: false, reward: null };
  }
};

export const showBannerAd = async (useTestAds = false) => {
  if (!canShowBanner()) {
    console.log('Banner ads not available in web environment');
    return false;
  }
  
  try {
    await CapacitorAdMobService.showBanner(useTestAds);
    markBannerShown();
    return true;
  } catch (error) {
    console.error('Error showing banner ad:', error);
    return false;
  }
};

export const hideBannerAd = async () => {
  try {
    await CapacitorAdMobService.hideBanner();
    return true;
  } catch (error) {
    console.error('Error hiding banner ad:', error);
    return false;
  }
};