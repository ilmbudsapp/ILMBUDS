import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useUserContext } from '@/context/user-context';
import { useLocation } from 'wouter';
import { useTranslation } from '@/hooks/use-translation';
import { Icon } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';
import { ProfileBadge } from '@/components/profile-badge';
import { MemoryGame } from '@/components/mini-games/MemoryGame';
import { WordPuzzle } from '@/components/mini-games/WordPuzzle';
// import { QuickQuiz } from '@/components/mini-games/QuickQuiz'; // Komponenta ne postoji
import { ThemeToggleSimple } from '@/components/theme-toggle';
import { CapacitorAdMobService } from '@/services/capacitor-admob';

type GameType = 'memory' | 'puzzle' | 'quiz' | null;
type Difficulty = 'easy' | 'medium' | 'hard';

export default function MiniGames() {
  const { user } = useUserContext();
  const [, setLocation] = useLocation();
  const { t } = useTranslation();
  const [selectedGame, setSelectedGame] = useState<GameType>(null);
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [lives, setLives] = useState(3); // Start with 3 lives
  const [showRewardedAd, setShowRewardedAd] = useState(false);

  // Function to watch rewarded ad for extra lives
  const watchRewardedAd = async () => {
    try {
      console.log('🎯 Showing rewarded ad for extra lives');
      const result = await CapacitorAdMobService.showRewarded(false); // Use production ads
      if (result) {
        setLives(prev => prev + 1); // Add 1 life
        console.log('🎯 Rewarded ad completed - +1 life added!');
        setShowRewardedAd(false);
      }
    } catch (error) {
      console.error('🚨 Failed to show rewarded ad:', error);
    }
  };

  // Function to lose a life
  const loseLife = () => {
    if (lives > 0) {
      setLives(prev => prev - 1);
    }
  };

  // Check if user can play (has lives)
  const canPlay = lives > 0;

  const games = [
    {
      id: 'memory' as const,
      title: t('games', 'memoryGame'),
      description: t('games', 'memoryDescription'),
      icon: 'psychology',
      color: 'from-purple-400 to-purple-600',
      available: true,
    },
    {
      id: 'puzzle' as const,
      title: t('games', 'wordPuzzle'),
      description: t('games', 'puzzleDescription'),
      icon: 'extension',
      color: 'from-green-400 to-green-600',
      available: true,
    },
    {
      id: 'quiz' as const,
      title: t('games', 'quickQuiz'),
      description: t('games', 'quickQuizDescription'),
      icon: 'quiz',
      color: 'from-blue-400 to-blue-600',
      available: true
    },
  ];

  const handleGameComplete = async (score: number) => {
    console.log('Game completed with score:', score);
    // TODO: Save score to user profile
    
    // Show rewarded ad at the end of the game
    try {
      console.log('🎯 Showing rewarded ad for game completion');
      const result = await CapacitorAdMobService.showRewarded(false); // Use production ads
      if (result) {
        console.log('🎯 Rewarded ad completed - game finished!');
        // You can add bonus points or rewards here
      }
    } catch (error) {
      console.error('🚨 Failed to show rewarded ad:', error);
    }
  };

  // Main render function
  const renderContent = () => {
    if (selectedGame && ['memory', 'puzzle', 'quiz'].includes(selectedGame)) {
      return renderGame();
    }
    return renderGameSelection();
  };

  const renderGameSelection = () => (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 to-blue-500 relative overflow-hidden">
      {/* Header */}
      <header className="bg-white/20 backdrop-blur-sm text-white p-4 flex justify-between items-center shadow-md z-10 rounded-b-3xl">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLocation('/')}
            className="text-white hover:bg-white/20 mr-3 flex items-center"
          >
            <Icon name="arrow_back" className="text-xl mr-2" />
            {t('games', 'backToHome')}
          </Button>
          <div>
            <h1 className="text-2xl font-extrabold">{t('games', 'title')}</h1>
            <p className="text-sm opacity-90">{t('games', 'subtitle')}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {/* Lives System */}
          <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
            <Icon name="favorite" className="text-red-500" />
            <span className="text-white font-bold">{lives}</span>
            {lives === 0 && (
              <Button 
                size="sm" 
                onClick={() => setShowRewardedAd(true)}
                className="ml-2 bg-green-500 hover:bg-green-600 text-white"
              >
                +1 Life
              </Button>
            )}
          </div>
          
          <ThemeToggleSimple />
          {user && <ProfileBadge points={user.points} />}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
            {t('games', 'chooseGame')}
          </h2>
          <p className="text-white/90 text-lg">
            {t('games', 'learnWhileFun')}
          </p>
        </motion.div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`
                glass-container p-6 cursor-pointer hover-lift
                ${!game.available ? 'opacity-60 cursor-not-allowed' : ''}
              `}
              onClick={() => game.available && setSelectedGame(game.id)}
            >
              <div className={`
                w-16 h-16 rounded-full bg-gradient-to-r ${game.color} 
                flex items-center justify-center mb-4 mx-auto
              `}>
                <Icon name={game.icon} className="text-2xl text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-center mb-2">
                {game.title}
              </h3>
              
              <p className="text-gray-600 text-center text-sm mb-4">
                {game.description}
              </p>
              
              {game.available ? (
                <Button className="w-full btn-primary-modern">
                  {t('games', 'playNow')}
                </Button>
              ) : (
                <Button disabled className="w-full">
                  {t('games', 'comingSoon')}
                </Button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Difficulty Selection for Games */}
        {(selectedGame === 'memory' || selectedGame === 'puzzle' || selectedGame === 'quiz') && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 glass-container p-6 max-w-md mx-auto"
          >
            <h3 className="text-xl font-bold text-center mb-4">
              {t('games', 'selectDifficulty')}
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {(['easy', 'medium', 'hard'] as const).map((level) => (
                <Button
                  key={level}
                  variant={difficulty === level ? 'default' : 'outline'}
                  onClick={() => setDifficulty(level)}
                  className="capitalize"
                >
                  {t('games', level)}
                </Button>
              ))}
            </div>
            <Button
              onClick={() => {/* This will be handled by individual game selection */}}
              className="w-full mt-4 btn-primary-modern"
            >
              {t('games', 'startGame')}
            </Button>
          </motion.div>
        )}
      </main>
    </div>
  );

  const renderGame = () => {
    const getGameTitle = () => {
      switch (selectedGame) {
        case 'memory': return t('games', 'memoryGame');
        case 'puzzle': return t('games', 'wordPuzzle');
        case 'quiz': return t('games', 'quickQuiz');
        default: return '';
      }
    };

    const renderGameComponent = () => {
      switch (selectedGame) {
        case 'memory':
          return <MemoryGame difficulty={difficulty} onGameComplete={handleGameComplete} />;
        case 'puzzle':
          return <WordPuzzle difficulty={difficulty} onGameComplete={handleGameComplete} />;
        case 'quiz':
          return <div className="text-center p-8">
            <h3 className="text-xl font-bold mb-4">Quick Quiz</h3>
            <p className="text-gray-600">Quiz komponenta u razvoju...</p>
          </div>;
        default:
          return null;
      }
    };

    if (selectedGame && ['memory', 'puzzle', 'quiz'].includes(selectedGame)) {
      return (
        <div className="min-h-screen bg-gradient-to-b from-sky-400 to-blue-500">
          {/* Header */}
          <header className="bg-white/20 backdrop-blur-sm text-white p-4 flex justify-between items-center shadow-md z-10 rounded-b-3xl">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedGame(null)}
                className="text-white hover:bg-white/20 mr-3 flex items-center"
              >
                <Icon name="arrow_back" className="text-xl mr-2" />
                {t('games', 'backToGames')}
              </Button>
              <div>
                <h1 className="text-xl font-bold">{getGameTitle()}</h1>
                <p className="text-sm opacity-90 capitalize">{t('games', difficulty)} {t('games', 'level')}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggleSimple />
              {user && <ProfileBadge points={user.points} />}
            </div>
          </header>

          {/* Game Content */}
          <main className="p-4">
            {renderGameComponent()}
          </main>
        </div>
      );
    }

    // Return null if no game is selected
    return null;
  };

  // Main component render
  return (
    <>
      {renderContent()}
      
      {/* Rewarded Ad Modal */}
      {showRewardedAd && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-8 max-w-sm mx-4 text-center"
          >
            <Icon name="favorite" className="text-6xl text-red-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2">
              {t('games', 'getExtraLife') || 'Get Extra Life!'}
            </h3>
            <p className="text-gray-600 mb-6">
              {t('games', 'watchAdForLife') || 'Watch a short ad to get +1 life and continue playing!'}
            </p>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setShowRewardedAd(false)}
                className="flex-1"
              >
                {t('games', 'cancel') || 'Cancel'}
              </Button>
              <Button
                onClick={watchRewardedAd}
                className="flex-1 bg-green-500 hover:bg-green-600"
              >
                {t('games', 'watchAd') || 'Watch Ad'}
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
