import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/use-translation';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icons';
// AdMob imports DISABLED to prevent crash
// import { showRewardedAd } from '@/services/ad-service';

interface WordPuzzleProps {
  difficulty?: 'easy' | 'medium' | 'hard';
  onGameComplete?: (score: number) => void;
}

interface WordCell {
  letter: string;
  isFound: boolean;
  isSelected: boolean;
  row: number;
  col: number;
}

interface Word {
  word: string;
  direction: 'horizontal' | 'vertical' | 'diagonal';
  startRow: number;
  startCol: number;
  found: boolean;
}

// Islamic words for puzzle (Arabic transliterations)
const PUZZLE_WORDS = {
  easy: ['ALLAH', 'ISLAM', 'QURAN', 'SALAH'],
  medium: ['ALLAH', 'ISLAM', 'QURAN', 'SALAH', 'ZAKAH', 'HAJJ'],
  hard: ['ALLAH', 'ISLAM', 'QURAN', 'SALAH', 'ZAKAH', 'HAJJ', 'SAWM', 'IMAN']
};

const GRID_SIZE = {
  easy: 8,
  medium: 10,
  hard: 12
};

export function WordPuzzle({ difficulty = 'easy', onGameComplete }: WordPuzzleProps) {
  const { t } = useTranslation();
  const [grid, setGrid] = useState<WordCell[][]>([]);
  const [words, setWords] = useState<Word[]>([]);
  const [foundWords, setFoundWords] = useState<string[]>([]);
  const [selectedCells, setSelectedCells] = useState<{row: number, col: number}[]>([]);
  const [isSelecting, setIsSelecting] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // Generate random letter
  const getRandomLetter = () => {
    return String.fromCharCode(65 + Math.floor(Math.random() * 26));
  };

  // Initialize grid
  const initializeGrid = useCallback(() => {
    const size = GRID_SIZE[difficulty];
    const wordsToPlace = PUZZLE_WORDS[difficulty];
    const newGrid: WordCell[][] = Array(size).fill(null).map((_, row) =>
      Array(size).fill(null).map((_, col) => ({
        letter: '',
        isFound: false,
        isSelected: false,
        row,
        col
      }))
    );

    const placedWords: Word[] = [];

    // Place words in grid
    wordsToPlace.forEach(word => {
      let placed = false;
      let attempts = 0;
      
      while (!placed && attempts < 50) {
        const direction = ['horizontal', 'vertical', 'diagonal'][Math.floor(Math.random() * 3)] as Word['direction'];
        const startRow = Math.floor(Math.random() * size);
        const startCol = Math.floor(Math.random() * size);
        
        if (canPlaceWord(newGrid, word, startRow, startCol, direction, size)) {
          placeWord(newGrid, word, startRow, startCol, direction);
          placedWords.push({
            word,
            direction,
            startRow,
            startCol,
            found: false
          });
          placed = true;
        }
        attempts++;
      }
    });

    // Fill empty cells with random letters
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        if (!newGrid[row][col].letter) {
          newGrid[row][col].letter = getRandomLetter();
        }
      }
    }

    setGrid(newGrid);
    setWords(placedWords);
    setFoundWords([]);
    setTimeElapsed(0);
    setIsComplete(false);
  }, [difficulty]);

  // Check if word can be placed
  const canPlaceWord = (grid: WordCell[][], word: string, startRow: number, startCol: number, direction: Word['direction'], size: number): boolean => {
    const deltaRow = direction === 'vertical' ? 1 : direction === 'diagonal' ? 1 : 0;
    const deltaCol = direction === 'horizontal' ? 1 : direction === 'diagonal' ? 1 : 0;

    for (let i = 0; i < word.length; i++) {
      const row = startRow + i * deltaRow;
      const col = startCol + i * deltaCol;
      
      if (row >= size || col >= size || row < 0 || col < 0) {
        return false;
      }
      
      if (grid[row][col].letter && grid[row][col].letter !== word[i]) {
        return false;
      }
    }
    
    return true;
  };

  // Place word in grid
  const placeWord = (grid: WordCell[][], word: string, startRow: number, startCol: number, direction: Word['direction']) => {
    const deltaRow = direction === 'vertical' ? 1 : direction === 'diagonal' ? 1 : 0;
    const deltaCol = direction === 'horizontal' ? 1 : direction === 'diagonal' ? 1 : 0;

    for (let i = 0; i < word.length; i++) {
      const row = startRow + i * deltaRow;
      const col = startCol + i * deltaCol;
      grid[row][col].letter = word[i];
    }
  };

  // Start game
  const startGame = () => {
    setGameStarted(true);
    initializeGrid();
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

  // Handle cell selection - improved drag selection
  const handleCellMouseDown = (row: number, col: number) => {
    if (!gameStarted || isComplete) return;
    setIsSelecting(true);
    setSelectedCells([{row, col}]);
    updateGridSelection([{row, col}]);
  };

  const handleCellMouseEnter = (row: number, col: number) => {
    if (!isSelecting) return;
    
    const newSelection = getLinearSelection(selectedCells[0], {row, col});
    setSelectedCells(newSelection);
    updateGridSelection(newSelection);
  };

  const handleMouseUp = () => {
    if (!isSelecting) return;
    
    // Check if selection forms a valid word
    const selectedWord = getSelectedWord(selectedCells);
    const reversedWord = selectedWord.split('').reverse().join('');
    
    if ((PUZZLE_WORDS[difficulty].includes(selectedWord) || PUZZLE_WORDS[difficulty].includes(reversedWord)) 
        && !foundWords.includes(selectedWord) && !foundWords.includes(reversedWord)) {
      const wordToAdd = PUZZLE_WORDS[difficulty].includes(selectedWord) ? selectedWord : reversedWord;
      setFoundWords(prev => [...prev, wordToAdd]);
      markWordAsFound(selectedCells);
      
      // Check if game is complete
      if (foundWords.length + 1 === PUZZLE_WORDS[difficulty].length) {
        setIsComplete(true);
        const score = Math.max(1000 - timeElapsed * 10, 100);
        onGameComplete?.(score);
        
        // Show rewarded ad after game completion
        setTimeout(async () => {
          try {
            // AdMob rewarded ad DISABLED to prevent crash
            // const adResult = await showRewardedAd(true); // true = use test IDs
            const adResult = { success: true }; // Mock result
            if (adResult.watched) {
              console.log('🎉 User watched rewarded ad after Word Puzzle completion!');
            }
          } catch (error) {
            console.error('Error showing rewarded ad:', error);
          }
        }, 2000); // Show ad 2 seconds after completion
      }
    }
    
    setIsSelecting(false);
    setSelectedCells([]);
    clearGridSelection();
  };

  // Get linear selection between two points
  const getLinearSelection = (start: {row: number, col: number}, end: {row: number, col: number}) => {
    const selection: {row: number, col: number}[] = [];
    const deltaRow = end.row - start.row;
    const deltaCol = end.col - start.col;
    
    // Determine direction (horizontal, vertical, or diagonal)
    const steps = Math.max(Math.abs(deltaRow), Math.abs(deltaCol));
    const stepRow = steps === 0 ? 0 : deltaRow / steps;
    const stepCol = steps === 0 ? 0 : deltaCol / steps;
    
    // Only allow straight lines (horizontal, vertical, diagonal)
    if (Math.abs(stepRow) <= 1 && Math.abs(stepCol) <= 1 && 
        (stepRow === 0 || stepCol === 0 || Math.abs(stepRow) === Math.abs(stepCol))) {
      for (let i = 0; i <= steps; i++) {
        const row = Math.round(start.row + i * stepRow);
        const col = Math.round(start.col + i * stepCol);
        if (row >= 0 && row < GRID_SIZE[difficulty] && col >= 0 && col < GRID_SIZE[difficulty]) {
          selection.push({row, col});
        }
      }
    } else {
      // If not a valid line, just return the start cell
      selection.push(start);
    }
    
    return selection;
  };

  // Update grid visual selection
  const updateGridSelection = (cells: {row: number, col: number}[]) => {
    setGrid(prev => 
      prev.map(row => 
        row.map(cell => ({
          ...cell,
          isSelected: cells.some(c => c.row === cell.row && c.col === cell.col)
        }))
      )
    );
  };

  // Clear grid selection
  const clearGridSelection = () => {
    setGrid(prev => 
      prev.map(row => 
        row.map(cell => ({
          ...cell,
          isSelected: false
        }))
      )
    );
  };

  // Get word from selected cells
  const getSelectedWord = (cells: {row: number, col: number}[]): string => {
    if (cells.length < 2) return '';
    
    // Cells are already in order from getLinearSelection
    return cells.map(cell => grid[cell.row]?.[cell.col]?.letter || '').join('');
  };

  // Mark word as found in grid
  const markWordAsFound = (cells: {row: number, col: number}[]) => {
    setGrid(prev => 
      prev.map(row => 
        row.map(cell => ({
          ...cell,
          isFound: cells.some(c => c.row === cell.row && c.col === cell.col) || cell.isFound
        }))
      )
    );
  };

  // Reset game
  const resetGame = () => {
    setGameStarted(false);
    setSelectedCells([]);
    setIsSelecting(false);
  };

  // Format time
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!gameStarted) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center"
      >
        <Icon name="extension" className="text-6xl text-primary mb-4" />
        <h2 className="text-2xl font-bold mb-4">{t('games', 'wordPuzzle')}</h2>
        <p className="text-gray-600 mb-6 max-w-md">
          {t('games', 'puzzleDescription')}
        </p>
        <div className="flex gap-4 mb-6">
          <div className="text-center">
            <div className="text-sm text-gray-500">{t('games', 'selectDifficulty')}</div>
            <div className="font-semibold capitalize">{t('games', difficulty)}</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-500">{t('games', 'words')}</div>
            <div className="font-semibold">{PUZZLE_WORDS[difficulty].length}</div>
          </div>
        </div>
        <Button onClick={startGame} className="btn-primary-modern">
          <Icon name="play_arrow" className="mr-2" />
          {t('games', 'startGame')}
        </Button>
      </motion.div>
    );
  }

  if (isComplete) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center"
      >
        <Icon name="celebration" className="text-6xl text-green-500 mb-4" />
        <h2 className="text-2xl font-bold mb-4">{t('games', 'congratulations')}</h2>
        <p className="text-gray-600 mb-6">
          {t('games', 'completedIn')} {formatTime(timeElapsed)}!
        </p>
        <div className="flex gap-4 justify-center">
          <Button onClick={resetGame} variant="outline">
            <Icon name="refresh" className="mr-2" />
            {t('games', 'playAgain')}
          </Button>
          <Button onClick={() => window.history.back()} className="btn-primary-modern">
            {t('games', 'backToGames')}
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Game Stats */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-center">
          <div className="text-sm text-gray-500">{t('games', 'time')}</div>
          <div className="font-bold text-lg">{formatTime(timeElapsed)}</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-500">{t('games', 'found')}</div>
          <div className="font-bold text-lg">{foundWords.length}/{PUZZLE_WORDS[difficulty].length}</div>
        </div>
      </div>

      {/* Word Grid */}
      <div className="bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50 border border-emerald-200/50 rounded-lg p-4 shadow-lg mb-4">
        <div 
          className="grid gap-1 mx-auto select-none"
          style={{ 
            gridTemplateColumns: `repeat(${GRID_SIZE[difficulty]}, 1fr)`,
            maxWidth: '400px'
          }}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchEnd={handleMouseUp}
        >
          {grid.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
              <button
                key={`${rowIndex}-${colIndex}`}
                onMouseDown={() => handleCellMouseDown(rowIndex, colIndex)}
                onMouseEnter={() => handleCellMouseEnter(rowIndex, colIndex)}
                onTouchStart={() => handleCellMouseDown(rowIndex, colIndex)}
                onTouchMove={(e) => {
                  e.preventDefault();
                  const touch = e.touches[0];
                  const element = document.elementFromPoint(touch.clientX, touch.clientY);
                  if (element && element.dataset.row && element.dataset.col) {
                    handleCellMouseEnter(parseInt(element.dataset.row), parseInt(element.dataset.col));
                  }
                }}
                data-row={rowIndex}
                data-col={colIndex}
                className={`
                  w-8 h-8 border border-gray-300 flex items-center justify-center text-sm font-bold
                  transition-colors duration-200 cursor-pointer
                  ${cell.isFound ? 'bg-green-200 text-green-800 border-green-400' : 
                    cell.isSelected ? 'bg-blue-200 text-blue-800 border-blue-400' : 
                    'bg-gray-50 hover:bg-gray-100 border-gray-300'}
                `}
                style={{ 
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none'
                }}
              >
                {cell.letter}
              </button>
            ))
          )}
        </div>
      </div>

      {/* Words to Find */}
      <div className="bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50 border border-emerald-200/50 rounded-lg p-4 shadow-lg">
        <h3 className="font-bold mb-2">{t('games', 'wordsToFind')}:</h3>
        <div className="grid grid-cols-2 gap-2">
          {PUZZLE_WORDS[difficulty].map(word => (
            <div 
              key={word}
              className={`
                p-2 rounded text-center text-sm font-medium
                ${foundWords.includes(word) 
                  ? 'bg-green-100 text-green-800 line-through' 
                  : 'bg-gray-100 text-gray-700'
                }
              `}
            >
              {word}
            </div>
          ))}
        </div>
      </div>

      <Button variant="outline" onClick={resetGame} className="w-full mt-4">
        <Icon name="refresh" className="mr-2" />
        {t('games', 'reset')}
      </Button>
    </div>
  );
}
