import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/language-context';
import { useTranslation } from '@/hooks/use-translation';
import { Navbar } from '@/components/navbar';
import { Icon } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';
import audioService from '../services/audio-service';
import { CapacitorAdMobService } from '@/services/capacitor-admob';

// Arabic alphabet with 28 letters - each with unique colors and proper pronunciation
const arabicAlphabet = [
  { letter: 'ا', name: 'Alif', pronunciation: 'alif', color: 'from-red-400 to-red-600', audio: '/audio/arabic-letters/alif.mp3' },
  { letter: 'ب', name: 'Ba', pronunciation: 'ba', color: 'from-blue-400 to-blue-600', audio: '/audio/arabic-letters/ba.mp3' },
  { letter: 'ت', name: 'Ta', pronunciation: 'ta', color: 'from-green-400 to-green-600', audio: '/audio/arabic-letters/ta.mp3' },
  { letter: 'ث', name: 'Tha', pronunciation: 'tha', color: 'from-yellow-400 to-yellow-600', audio: '/audio/arabic-letters/tha.mp3' },
  { letter: 'ج', name: 'Jeem', pronunciation: 'jeem', color: 'from-purple-400 to-purple-600', audio: '/audio/arabic-letters/jeem.mp3' },
  { letter: 'ح', name: 'Haa', pronunciation: 'haa', color: 'from-pink-400 to-pink-600', audio: '/audio/arabic-letters/haa.mp3' },
  { letter: 'خ', name: 'Khaa', pronunciation: 'khaa', color: 'from-indigo-400 to-indigo-600', audio: '/audio/arabic-letters/khaa.mp3' },
  { letter: 'د', name: 'Dal', pronunciation: 'dal', color: 'from-teal-400 to-teal-600', audio: '/audio/arabic-letters/dal.mp3' },
  { letter: 'ذ', name: 'Dhal', pronunciation: 'dhal', color: 'from-orange-400 to-orange-600', audio: '/audio/arabic-letters/dhal.mp3' },
  { letter: 'ر', name: 'Ra', pronunciation: 'ra', color: 'from-cyan-400 to-cyan-600', audio: '/audio/arabic-letters/ra.mp3' },
  { letter: 'ز', name: 'Zay', pronunciation: 'zay', color: 'from-lime-400 to-lime-600', audio: '/audio/arabic-letters/zay.mp3' },
  { letter: 'س', name: 'Seen', pronunciation: 'seen', color: 'from-rose-400 to-rose-600', audio: '/audio/arabic-letters/seen.mp3' },
  { letter: 'ش', name: 'Sheen', pronunciation: 'sheen', color: 'from-violet-400 to-violet-600', audio: '/audio/arabic-letters/sheen.mp3' },
  { letter: 'ص', name: 'Sad', pronunciation: 'sad', color: 'from-emerald-400 to-emerald-600', audio: '/audio/arabic-letters/sad.mp3' },
  { letter: 'ض', name: 'Dad', pronunciation: 'dad', color: 'from-amber-400 to-amber-600', audio: '/audio/arabic-letters/dad.mp3' },
  { letter: 'ط', name: 'Ta', pronunciation: 'ta', color: 'from-sky-400 to-sky-600', audio: '/audio/arabic-letters/ta.mp3' },
  { letter: 'ظ', name: 'Za', pronunciation: 'za', color: 'from-fuchsia-400 to-fuchsia-600', audio: '/audio/arabic-letters/za.mp3' },
  { letter: 'ع', name: 'Ayn', pronunciation: 'ayn', color: 'from-slate-400 to-slate-600', audio: '/audio/arabic-letters/ayn.mp3' },
  { letter: 'غ', name: 'Ghayn', pronunciation: 'ghayn', color: 'from-stone-400 to-stone-600', audio: '/audio/arabic-letters/ghayn.mp3' },
  { letter: 'ف', name: 'Fa', pronunciation: 'fa', color: 'from-zinc-400 to-zinc-600', audio: '/audio/arabic-letters/fa.mp3' },
  { letter: 'ق', name: 'Qaf', pronunciation: 'qaf', color: 'from-neutral-400 to-neutral-600', audio: '/audio/arabic-letters/qaf.mp3' },
  { letter: 'ك', name: 'Kaf', pronunciation: 'kaf', color: 'from-red-500 to-red-700', audio: '/audio/arabic-letters/kaf.mp3' },
  { letter: 'ل', name: 'Lam', pronunciation: 'lam', color: 'from-blue-500 to-blue-700', audio: '/audio/arabic-letters/lam.mp3' },
  { letter: 'م', name: 'Meem', pronunciation: 'meem', color: 'from-green-500 to-green-700', audio: '/audio/arabic-letters/meem.mp3' },
  { letter: 'ن', name: 'Noon', pronunciation: 'noon', color: 'from-yellow-500 to-yellow-700', audio: '/audio/arabic-letters/noon.mp3' },
  { letter: 'ه', name: 'Haa', pronunciation: 'haa', color: 'from-purple-500 to-purple-700', audio: '/audio/arabic-letters/haa.mp3' },
  { letter: 'و', name: 'Waw', pronunciation: 'waw', color: 'from-pink-500 to-pink-700', audio: '/audio/arabic-letters/waw.mp3' },
  { letter: 'ي', name: 'Yaa', pronunciation: 'yaa', color: 'from-indigo-500 to-indigo-700', audio: '/audio/arabic-letters/yaa.mp3' }
];

export default function ArabicAlphabet() {
  const [, setLocation] = useLocation();
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation();
  const [playingLetter, setPlayingLetter] = useState<string | null>(null);

  // Show interstitial ad when component loads (when user enters ARABIC ALPHABET section)
  useEffect(() => {
    const showInterstitialAd = async () => {
      try {
        console.log('🎯 Showing interstitial ad for ARABIC ALPHABET section');
        
        // Check if we're in native app
        if (typeof (window as any).Capacitor !== 'undefined' && (window as any).Capacitor.isNativePlatform()) {
          console.log('🎯 Native platform detected - initializing AdMob...');
          
          try {
            // Initialize AdMob first
            await CapacitorAdMobService.initialize();
            console.log('🎯 AdMob initialized successfully');
            
            // Show interstitial
            await CapacitorAdMobService.showInterstitial(false); // Use production ads
            console.log('🎯 Interstitial ad shown successfully for ARABIC ALPHABET');
            
          } catch (error) {
            console.error('🚨 AdMob initialization/interstitial error:', error);
          }
        } else {
          console.log('🎯 Web platform - no native ads available');
        }
        
      } catch (error) {
        console.error('🚨 Failed to show interstitial ad for ARABIC ALPHABET:', error);
      }
    };

    // Show ad after a short delay to ensure component is fully loaded
    const timer = setTimeout(() => {
      showInterstitialAd();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleBack = () => {
    audioService.playBismillah();
    setLocation('/');
  };

  const handleLetterClick = async (letter: typeof arabicAlphabet[0]) => {
    try {
      setPlayingLetter(letter.letter);
      
      // Try to play the specific audio file for this letter
      try {
        const audio = new Audio(letter.audio);
        audio.onended = () => setPlayingLetter(null);
        audio.onerror = () => {
          console.warn(`Failed to load audio for ${letter.letter}, falling back to Web Speech API`);
          // Fallback to Web Speech API if audio file doesn't exist
          if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(letter.pronunciation);
            utterance.lang = 'ar-SA';
            utterance.rate = 0.8;
            utterance.pitch = 1.2;
            utterance.volume = 0.8;
            utterance.onend = () => setPlayingLetter(null);
            utterance.onerror = () => setPlayingLetter(null);
            speechSynthesis.speak(utterance);
          } else {
            setPlayingLetter(null);
          }
        };
        
        await audio.play();
        console.log(`Playing audio for ${letter.letter}: ${letter.pronunciation}`);
      } catch (audioError) {
        console.warn(`Audio file not found for ${letter.letter}, using Web Speech API`);
        // Fallback to Web Speech API
        if ('speechSynthesis' in window) {
          const utterance = new SpeechSynthesisUtterance(letter.pronunciation);
          utterance.lang = 'ar-SA';
          utterance.rate = 0.8;
          utterance.pitch = 1.2;
          utterance.volume = 0.8;
          utterance.onend = () => setPlayingLetter(null);
          utterance.onerror = () => setPlayingLetter(null);
          speechSynthesis.speak(utterance);
        } else {
          setPlayingLetter(null);
        }
      }
    } catch (error) {
      console.error('Error playing letter audio:', error);
      setPlayingLetter(null);
    }
  };

  const getLocalizedTitle = () => {
    switch (currentLanguage) {
      case 'en': return "Arabic Alphabet";
      case 'sq': return "Alfabeti Arab";
      case 'de': return "Arabisches Alphabet";
      case 'it': return "Alfabeto Arabo";
      default: return "Arapska slova";
    }
  };

  const getLocalizedSubtitle = () => {
    switch (currentLanguage) {
      case 'en': return "Learn Arabic Letters";
      case 'sq': return "Mësoni Shkronjat Arabe";
      case 'de': return "Lerne Arabische Buchstaben";
      case 'it': return "Impara le Lettere Arabe";
      default: return "Naučite Arapska Slova";
    }
  };

  const getLocalizedDescription = () => {
    switch (currentLanguage) {
      case 'en': return "Click on each letter to hear its pronunciation";
      case 'sq': return "Klikoni në çdo shkronjë për të dëgjuar shqiptimin e saj";
      case 'de': return "Klicken Sie auf jeden Buchstaben, um seine Aussprache zu hören";
      case 'it': return "Clicca su ogni lettera per sentire la sua pronuncia";
      default: return "Kliknite na svako slovo da čujete njegov izgovor";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 to-blue-500 text-foreground">
      {/* Header */}
      <header className="bg-white/20 backdrop-blur-sm text-white p-4 flex items-center shadow-md z-10">
        <motion.button
          onClick={handleBack}
          className="mr-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Icon name="arrow-left" className="w-6 h-6" />
        </motion.button>
        
        <div className="flex items-center">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
            <span className="text-white text-xl font-bold">أ</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold">{getLocalizedTitle()}</h1>
            <p className="text-sm opacity-90">{getLocalizedSubtitle()}</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-4 pb-24">
        {/* Introduction */}
        <motion.div 
          className="bg-white/20 backdrop-blur-sm rounded-3xl p-6 mb-6 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            {getLocalizedTitle()}
          </h2>
          <p className="text-white/90 text-lg">
            {getLocalizedDescription()}
          </p>
        </motion.div>

        {/* Arabic Letters Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {arabicAlphabet.map((letter, index) => (
            <motion.div
              key={letter.letter}
              className={`bg-gradient-to-br ${letter.color} rounded-2xl p-4 shadow-lg cursor-pointer group hover:shadow-xl transition-all duration-300`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              onClick={() => handleLetterClick(letter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Arabic Letter */}
              <div className="text-center mb-3">
                <div className="text-4xl font-bold text-white mb-2 arabic-text drop-shadow-lg">
                  {letter.letter}
                </div>
                <div className="text-sm text-white/90 font-medium">
                  {letter.name}
                </div>
                <div className="text-xs text-white/70">
                  {letter.pronunciation}
                </div>
              </div>

              {/* Listen Button */}
              <Button
                className="w-full bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-sm"
                disabled={playingLetter === letter.letter}
              >
                {playingLetter === letter.letter ? (
                  <div className="flex items-center justify-center">
                    <Icon name="volume_up" className="w-4 h-4 mr-2 animate-pulse" />
                    Playing...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Icon name="play_arrow" className="w-4 h-4 mr-2" />
                    Listen
                  </div>
                )}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Instructions */}
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <Icon name="info" className="text-2xl text-white mb-2" />
            <p className="text-white/90">
              {getLocalizedDescription()}
            </p>
          </div>
        </motion.div>
      </main>

      <Navbar />
    </div>
  );
}