import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/hooks/use-translation';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icons';
import audioService from '@/services/audio-service';
// AdMob imports DISABLED to prevent crash
// import { showRewardedAd } from '@/services/ad-service';

interface Card {
  id: string;
  content: string;
  isFlipped: boolean;
  isMatched: boolean;
  type: 'arabic' | 'translation';
}

interface MemoryGameProps {
  difficulty?: 'easy' | 'medium' | 'hard';
  onGameComplete?: (score: number) => void;
}

// Islamic vocabulary for memory game - using translation keys
const GAME_VOCABULARY = {
  easy: [
    { arabic: 'السلام عليكم', translationKey: 'salam' },
    { arabic: 'الله', translationKey: 'allah' },
    { arabic: 'محمد', translationKey: 'muhammad' },
    { arabic: 'القرآن', translationKey: 'quran' },
  ],
  medium: [
    { arabic: 'السلام عليكم', translationKey: 'salam' },
    { arabic: 'الله', translationKey: 'allah' },
    { arabic: 'محمد', translationKey: 'muhammad' },
    { arabic: 'القرآن', translationKey: 'quran' },
    { arabic: 'الصلاة', translationKey: 'salah' },
    { arabic: 'الزكاة', translationKey: 'zakah' },
  ],
  hard: [
    { arabic: 'السلام عليكم', translationKey: 'salam' },
    { arabic: 'الله', translationKey: 'allah' },
    { arabic: 'محمد', translationKey: 'muhammad' },
    { arabic: 'القرآن', translationKey: 'quran' },
    { arabic: 'الصلاة', translationKey: 'salah' },
    { arabic: 'الزكاة', translationKey: 'zakah' },
    { arabic: 'الحج', translationKey: 'hajj' },
    { arabic: 'الصوم', translationKey: 'sawm' },
  ],
};

export function MemoryGame({ difficulty = 'easy', onGameComplete }: MemoryGameProps) {
  const { t } = useTranslation();
  const [cards, setCards] = useState<Card[]>([]);
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const [attempts, setAttempts] = useState(0);
  const [matches, setMatches] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // Initialize game
  const initializeGame = useCallback(() => {
    const gameWords = GAME_VOCABULARY[difficulty];
    const gameCards: Card[] = [];

    // Create pairs of cards
    gameWords.forEach((word, index) => {
      gameCards.push({
        id: `arabic-${index}`,
        content: word.arabic,
        isFlipped: false,
        isMatched: false,
        type: 'arabic',
      });
      gameCards.push({
        id: `translation-${index}`,
        content: t('games', word.translationKey) || word.translationKey,
        isFlipped: false,
        isMatched: false,
        type: 'translation',
      });
    });

    // Shuffle cards
    const shuffledCards = gameCards.sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
    setSelectedCards([]);
    setAttempts(0);
    setMatches(0);
    setTimeElapsed(0);
    setIsComplete(false);
  }, [difficulty, t]);

  // Start game
  const startGame = () => {
    setGameStarted(true);
    initializeGame();
    // audioService.playBismillah(); // Temporarily disabled for debugging
  };

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (gameStarted && !isComplete) {
      interval = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameStarted, isComplete]);

  // Handle card selection
  const handleCardSelect = (cardId: string) => {
    if (selectedCards.length === 2 || selectedCards.includes(cardId)) return;

    const newSelectedCards = [...selectedCards, cardId];
    setSelectedCards(newSelectedCards);

    // Flip card
    setCards(prev => prev.map(card => 
      card.id === cardId ? { ...card, isFlipped: true } : card
    ));

    if (newSelectedCards.length === 2) {
      setAttempts(prev => prev + 1);
      
      // Check for match after delay
      setTimeout(() => {
        checkForMatch(newSelectedCards);
      }, 1000);
    }
  };

  // Check if selected cards match
  const checkForMatch = (selectedCardIds: string[]) => {
    const [card1Id, card2Id] = selectedCardIds;
    const card1 = cards.find(c => c.id === card1Id);
    const card2 = cards.find(c => c.id === card2Id);

    if (!card1 || !card2) return;

    // Extract indices from IDs
    const getWordIndex = (id: string) => parseInt(id.split('-')[1]);
    const card1Index = getWordIndex(card1.id);
    const card2Index = getWordIndex(card2.id);

    const isMatch = card1Index === card2Index && card1.type !== card2.type;

    if (isMatch) {
      // Match found
      setCards(prev => prev.map(card => 
        selectedCardIds.includes(card.id) 
          ? { ...card, isMatched: true }
          : card
      ));
      setMatches(prev => prev + 1);
      // audioService.playSubhanallah(); // Temporarily disabled for debugging

      // Check if game is complete
      const newMatches = matches + 1;
      const totalPairs = GAME_VOCABULARY[difficulty].length;
      if (newMatches === totalPairs) {
        setIsComplete(true);
        const score = Math.max(1000 - (attempts * 50) - timeElapsed, 100);
        onGameComplete?.(score);
        // audioService.playAllahuEkber(); // Temporarily disabled for debugging
        
        // Show rewarded ad after game completion
        setTimeout(async () => {
          try {
            // AdMob rewarded ad DISABLED to prevent crash
            // const adResult = await showRewardedAd(true); // true = use test IDs
            const adResult = { success: true }; // Mock result
            if (adResult.watched) {
              console.log('🎉 User watched rewarded ad after Memory Game completion!');
            }
          } catch (error) {
            console.error('Error showing rewarded ad:', error);
          }
        }, 2000); // Show ad 2 seconds after completion dialog
      }
    } else {
      // No match - flip cards back
      setCards(prev => prev.map(card => 
        selectedCardIds.includes(card.id) 
          ? { ...card, isFlipped: false }
          : card
      ));
    }

    setSelectedCards([]);
  };

  // Reset game
  const resetGame = () => {
    setGameStarted(false);
    initializeGame();
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!gameStarted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] glass-container p-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <Icon name="psychology" className="text-6xl text-primary mb-4" />
          <h2 className="text-2xl font-bold mb-4">{t('games', 'memoryGame')}</h2>
          <p className="text-gray-600 mb-6 max-w-md">
            {t('games', 'memoryDescription')}. {t('games', 'testKnowledge')}
          </p>
          <div className="flex gap-4 mb-6">
            <div className="text-center">
              <div className="text-sm text-gray-500">{t('games', 'selectDifficulty')}</div>
              <div className="font-semibold capitalize">{t('games', difficulty)}</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-500">{t('games', 'pairs')}</div>
              <div className="font-semibold">{GAME_VOCABULARY[difficulty].length}</div>
            </div>
          </div>
          <Button onClick={startGame} className="btn-primary-modern">
            <Icon name="play_arrow" className="mr-2" />
            {t('games', 'startGame')}
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      {/* Game Stats */}
      <div className="flex justify-between items-center mb-6 glass-container p-4 rounded-xl">
        <div className="flex gap-6">
          <div className="text-center">
            <div className="text-sm text-gray-500">{t('games', 'time')}</div>
            <div className="font-bold text-lg">{formatTime(timeElapsed)}</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-500">{t('games', 'attempts')}</div>
            <div className="font-bold text-lg">{attempts}</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-500">{t('games', 'matches')}</div>
            <div className="font-bold text-lg">{matches}/{GAME_VOCABULARY[difficulty].length}</div>
          </div>
        </div>
        <Button variant="outline" onClick={resetGame} size="sm">
          <Icon name="refresh" className="mr-2" />
          {t('games', 'reset')}
        </Button>
      </div>

      {/* Game Grid */}
      <div className={`grid gap-3 ${
        difficulty === 'easy' ? 'grid-cols-4' : 
        difficulty === 'medium' ? 'grid-cols-4' : 
        'grid-cols-4'
      }`}>
        <AnimatePresence>
          {cards.map((card) => (
            <motion.div
              key={card.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                relative h-24 cursor-pointer rounded-xl border-2 transition-all duration-300
                ${card.isMatched 
                  ? 'bg-green-100 border-green-300 success-glow' 
                  : card.isFlipped 
                    ? 'bg-blue-100 border-blue-300' 
                    : 'bg-gray-100 border-gray-300 hover:border-primary'
                }
              `}
              onClick={() => !card.isMatched && handleCardSelect(card.id)}
            >
              <div className={`
                absolute inset-0 flex items-center justify-center p-2 rounded-xl
                transition-all duration-500 transform-style-preserve-3d
                ${card.isFlipped || card.isMatched ? '' : 'rotateY-180'}
              `}>
                {card.isFlipped || card.isMatched ? (
                  <div className={`text-center ${card.type === 'arabic' ? 'arabic-text' : ''}`}>
                    <div className={`font-semibold ${
                      card.type === 'arabic' ? 'text-lg' : 'text-sm'
                    }`}>
                      {card.content}
                    </div>
                  </div>
                ) : (
                  <div className="text-primary">
                    <Icon name="quiz" className="text-2xl" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Game Complete Modal */}
      <AnimatePresence>
        {isComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50 border border-emerald-200/50 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-4 text-center shadow-xl"
            >
              <Icon name="celebration" className="text-6xl text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold text-green-600 mb-2">
                {t('games', 'congratulations')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('games', 'gameCompleted')}
              </p>
              <div className="flex justify-center gap-4 mb-6">
                <div className="text-center">
                  <div className="text-sm text-gray-500">{t('games', 'time')}</div>
                  <div className="font-bold">{formatTime(timeElapsed)}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500">{t('games', 'attempts')}</div>
                  <div className="font-bold">{attempts}</div>
                </div>
              </div>
              <div className="flex gap-3">
                <Button onClick={resetGame} variant="outline" className="flex-1">
                  {t('games', 'playAgain')}
                </Button>
                <Button onClick={() => setIsComplete(false)} className="flex-1">
                  {t('games', 'close')}
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
