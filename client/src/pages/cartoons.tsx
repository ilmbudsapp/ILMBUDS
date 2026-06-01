import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/language-context';
import { BackButton } from '@/components/back-button';
import { useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@/components/ui/icons';
import { useTranslation } from '@/hooks/use-translation';
import { CapacitorAdMobService } from '@/services/capacitor-admob';
import { ConsentGate } from '@/components/CookieConsent';
import { hasExternalMediaConsent } from '@/lib/consent';
import { isWebStaticMode } from '@/lib/webApi/install';

// Globalna deklaracija za YouTube Player API
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

interface CartoonItem {
  id: number;
  titleKey: string; // Key for getTranslation
  descriptionKey: string; // Key for getTranslation
  thumbnailUrl: string; // Path to thumbnail image
  videoUrls: { // Different video URLs for each language
    en: string;
    bs: string;
    sq: string;
    de: string;
    it: string;
  };
  ageGroup: string; // e.g., "3-6", "7-10"
  duration: string; // e.g., "5:30"
}

export default function Cartoons() {
  const { currentLanguage } = useLanguage();
  const [location, setLocation] = useLocation();
  const [fullscreenCartoon, setFullscreenCartoon] = useState<CartoonItem | null>(null);
  const [showContent, setShowContent] = useState(true);
  const [countdown, setCountdown] = useState(5);

  // Show content immediately - no AdMob blocking
  useEffect(() => {
    console.log('Setting showContent to true');
    setShowContent(true);
  }, []);

  // Cartoon data using centralized translations - 8 cartoons per language
  const cartoons: CartoonItem[] = [
    {
      id: 1,
      titleKey: "alhamdulillahTitle",
      descriptionKey: "alhamdulillahDescription",
      thumbnailUrl: "https://img.youtube.com/vi/AwW8s_r4g4w/maxresdefault.jpg",
      videoUrls: {
        en: "https://www.youtube.com/embed/AwW8s_r4g4w", // English
        bs: "https://www.youtube.com/embed/kFS9B3RP5X0", // Bosnian
        sq: "https://www.youtube.com/embed/iPQuPt24IBY", // Albanian
        de: "https://www.youtube.com/embed/YbP3lbctKf0", // German
        it: "https://www.youtube.com/embed/7jPiT80fAGo"  // Italian
      },
      ageGroup: "3-7",
      duration: "2:40"
    },
    {
      id: 2,
      titleKey: "bacaanSurahTitle",
      descriptionKey: "bacaanSurahDescription",
      thumbnailUrl: "https://img.youtube.com/vi/ChzxXMwL2RE/maxresdefault.jpg",
      videoUrls: {
        en: "https://www.youtube.com/embed/ChzxXMwL2RE", // English
        bs: "https://www.youtube.com/embed/8krpklCb6F4", // Bosnian
        sq: "https://www.youtube.com/embed/9R6bUM8fHug", // Albanian
        de: "https://www.youtube.com/embed/2DIOUCEqh9Q", // German
        it: "https://www.youtube.com/embed/LW6DJHmeKcg"  // Italian
      },
      ageGroup: "4-10",
      duration: "11:38"
    },
    {
      id: 3,
      titleKey: "azanTitle",
      descriptionKey: "azanDescription",
      thumbnailUrl: "https://img.youtube.com/vi/ChzxXMwL2RE/maxresdefault.jpg",
      videoUrls: {
        en: "https://www.youtube.com/embed/Bc_Bf6W8jHE", // English
        bs: "https://www.youtube.com/embed/JDdtKQ8_WXI", // Bosnian
        sq: "https://www.youtube.com/embed/oEyZhd3naXw", // Albanian
        de: "https://www.youtube.com/embed/p_nSw663VAA", // German
        it: "https://www.youtube.com/embed/UCwLRnkLSmc"  // Italian
      },
      ageGroup: "3-8",
      duration: "1:45"
    },
    {
      id: 4,
      titleKey: "namesOfAllahTitle",
      descriptionKey: "namesOfAllahDescription",
      thumbnailUrl: "https://img.youtube.com/vi/-b0yL8QwTSk/maxresdefault.jpg",
      videoUrls: {
        en: "https://www.youtube.com/embed/19V4VxqZ__8", // English
        bs: "https://www.youtube.com/embed/t3zE1WHtM5k", // Bosnian
        sq: "https://www.youtube.com/embed/8eYtxssVP7w", // Albanian
        de: "https://www.youtube.com/embed/BVuWny820uE", // German
        it: "https://www.youtube.com/embed/QIpyWF0jZh4"  // Italian
      },
      ageGroup: "5-12",
      duration: "7:58"
    },
    {
      id: 5,
      titleKey: "ayatulKursiTitle",
      descriptionKey: "ayatulKursiDescription",
      thumbnailUrl: "https://img.youtube.com/vi/n-MKwbOyNEY/maxresdefault.jpg",
      videoUrls: {
        en: "https://www.youtube.com/embed/6iCBi9ZB_1w", // English
        bs: "https://www.youtube.com/embed/-DxDXUoUnwU", // Bosnian
        sq: "https://www.youtube.com/embed/Vu7njdUr198", // Albanian
        de: "https://www.youtube.com/embed/9KKpfQFNr6o", // German
        it: "https://www.youtube.com/embed/OK9PdIoF9jk"  // Italian
      },
      ageGroup: "6-12",
      duration: "3:40"
    },
    {
      id: 6,
      titleKey: "howToPrayTitle",
      descriptionKey: "howToPrayDescription",
      thumbnailUrl: "https://img.youtube.com/vi/WKblVpFHCdY/maxresdefault.jpg",
      videoUrls: {
        en: "https://www.youtube.com/embed/VOI6TZxEuIw", // English
        bs: "https://www.youtube.com/embed/pj0E_vEw37U", // Bosnian
        sq: "https://www.youtube.com/embed/u3ztC15cHSg", // Albanian
        de: "https://www.youtube.com/embed/8Q71KCY4ka4", // German
        it: "https://www.youtube.com/embed/gr56mWJsZFw"  // Italian
      },
      ageGroup: "7-14",
      duration: "8:31"
    },
    {
      id: 7,
      titleKey: "islamicAnimalsTitle",
      descriptionKey: "islamicAnimalsDescription",
      thumbnailUrl: "https://img.youtube.com/vi/Cm8qBSHZhAY/maxresdefault.jpg",
      videoUrls: {
        en: "https://www.youtube.com/embed/IIYU2y3a6L8", // English
        bs: "https://www.youtube.com/embed/SJ6hy0xfXqI", // Bosnian
        sq: "https://www.youtube.com/embed/tn8EKJSMnFY", // Albanian
        de: "https://www.youtube.com/embed/PPw06erb2us", // German
        it: "https://www.youtube.com/embed/83ERg9NEseA"  // Italian
      },
      ageGroup: "4-9",
      duration: "5:20"
    },
    {
      id: 8,
      titleKey: "prophetStoriesTitle",
      descriptionKey: "prophetStoriesDescription",
      thumbnailUrl: "https://img.youtube.com/vi/yvLPOGANRBg/maxresdefault.jpg",
      videoUrls: {
        en: "https://www.youtube.com/embed/v2gx24YqI68", // English
        bs: "https://www.youtube.com/embed/NgwSHN4_Tq8", // Bosnian
        sq: "https://www.youtube.com/embed/3rpbA_gn2ec", // Albanian
        de: "https://www.youtube.com/embed/xXgS_HxD9O8", // German
        it: "https://www.youtube.com/embed/skdJQ3mQ1P8"  // Italian
      },
      ageGroup: "5-12",
      duration: "6:45"
    }
  ];

  // Translation hook
  const { t } = useTranslation();
  
  // Helper functions
  const getTitle = (cartoon: CartoonItem) => {
    return t('cartoons', cartoon.titleKey);
  };
  
  const getVideoUrl = (cartoon: CartoonItem) => {
    return cartoon.videoUrls[currentLanguage as keyof typeof cartoon.videoUrls] || cartoon.videoUrls.en;
  };
  
  // YouTube player state
  const [playerReady, setPlayerReady] = useState(false);
  const playerRef = useRef<any>(null);

  // Load YouTube API only after consent (web DSGVO)
  useEffect(() => {
    if (!hasExternalMediaConsent()) return;
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        setPlayerReady(true);
      };
    } else {
      setPlayerReady(true);
    }
  }, []);

  useEffect(() => {
    const sync = () => {
      if (hasExternalMediaConsent() && window.YT) setPlayerReady(true);
    };
    window.addEventListener('ilmbuds-consent-change', sync);
    return () => window.removeEventListener('ilmbuds-consent-change', sync);
  }, []);

  // Show interstitial ad when component loads (native app only)
  useEffect(() => {
    if (isWebStaticMode()) return;
    const showInterstitialAd = async () => {
      try {
        console.log('Showing interstitial ad for CARTOONS section');
        await CapacitorAdMobService.showInterstitial(true);
        console.log('Interstitial ad shown successfully');
      } catch (error) {
        console.error('Failed to show interstitial ad:', error);
      }
    };

    // Show ad after a short delay to ensure component is fully loaded
    const timer = setTimeout(() => {
      showInterstitialAd();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleBackClick = () => {
    if (fullscreenCartoon) {
      setFullscreenCartoon(null);
    } else {
      setLocation('/');
    }
  };

  const toggleFullscreen = (cartoon: CartoonItem) => {
    setFullscreenCartoon(cartoon);
  };

  const closeFullscreen = () => {
    setFullscreenCartoon(null);
  };

  // Handle escape key for fullscreen
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && fullscreenCartoon) {
        setFullscreenCartoon(null);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [fullscreenCartoon]);

  // Get current description using translations
  const getDescription = (cartoon: CartoonItem) => {
    return t('cartoons', cartoon.descriptionKey);
  };

  const thumbFor = (cartoon: CartoonItem) => {
    const url = getVideoUrl(cartoon);
    const match = url.match(/embed\/([^?&]+)/);
    if (cartoon.thumbnailUrl) return cartoon.thumbnailUrl;
    return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : '';
  };

  // Show loading screen with countdown if content is not ready
  if (!showContent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="text-4xl"
              >
                🎬
              </motion.div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              {t('cartoons', 'loading') || "Loading Cartoons..."}
            </h2>
            <p className="text-white/80 text-lg mb-6">
              {t('cartoons', 'preparing') || "Preparing your favorite cartoons..."}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="relative"
          >
            <div className="w-20 h-20 mx-auto bg-white/10 rounded-full flex items-center justify-center border-4 border-white/30">
              <span className="text-3xl font-bold text-white">{countdown}</span>
            </div>
            <motion.div
              className="absolute inset-0 border-4 border-transparent border-t-white/50 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <BackButton onClick={handleBackClick} />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            {t('cartoons', 'title')}
          </h1>
        </motion.div>

        {/* Fullscreen Overlay */}
        {fullscreenCartoon && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex flex-col"
          >
            <div className="flex justify-between items-center p-4 bg-black bg-opacity-50 z-10">
              <h2 className="text-2xl font-bold text-white">
                {getTitle(fullscreenCartoon)}
              </h2>
              <button
                onClick={closeFullscreen}
                className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors text-white"
              >
                <Icon name="x" size={24} />
              </button>
            </div>
            
            <div className="flex-1">
              <ConsentGate
                fallback={
                  <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center text-white">
                    <p className="text-sm text-white/80">
                      {t('cookieConsent', 'body')}
                    </p>
                    <p className="text-xs text-white/60">
                      {t('cookieConsent', 'acceptAll')}
                    </p>
                  </div>
                }
              >
                <iframe
                  src={getVideoUrl(fullscreenCartoon)}
                  title={getTitle(fullscreenCartoon)}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </ConsentGate>
            </div>
          </motion.div>
        )}

        {/* Main Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {cartoons.map((cartoon) => (
            <motion.div
              key={cartoon.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: cartoon.id * 0.1 }}
              className="web-cartoon-card overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <ConsentGate
                fallback={
                  <div className="web-cartoon-thumb relative flex aspect-video w-full flex-col items-center justify-center bg-slate-800 px-4 text-center">
                    <p className="text-xs text-slate-200">{t('cookieConsent', 'body')}</p>
                  </div>
                }
              >
                <button
                  type="button"
                  onClick={() => toggleFullscreen(cartoon)}
                  className="web-cartoon-thumb group relative block aspect-video w-full cursor-pointer"
                  aria-label={getTitle(cartoon)}
                >
                  <img
                    src={thumbFor(cartoon)}
                    alt={getTitle(cartoon)}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/45">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-lg ring-4 ring-white/40">
                      <Icon name="play_arrow" size={32} />
                    </span>
                  </div>
                  <div className="absolute right-2 top-2">
                    <span className="rounded-full bg-black/60 px-2 py-1 text-xs font-medium text-white">
                      ▶ {cartoon.duration}
                    </span>
                  </div>
                </button>
              </ConsentGate>
              
              <div className="p-4">
                <h3 className="mb-2 line-clamp-2 font-semibold text-gray-900">
                  {getTitle(cartoon)}
                </h3>
                <p className="mb-3 line-clamp-3 text-sm text-gray-800">
                  {getDescription(cartoon)}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-700">
                  <span>{cartoon.ageGroup} {t('cartoons', 'years')}</span>
                  <button
                    type="button"
                    onClick={() => toggleFullscreen(cartoon)}
                    className="font-medium text-blue-700 underline hover:text-blue-900"
                  >
                    {t('cartoons', 'fullscreen')}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-8"
        >
          <p className="text-white text-lg">
            {t('cartoons', 'comingSoon')}
          </p>
        </motion.div>
      </div>
    </div>
  );
}