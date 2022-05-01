import React, { useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import { IGameObject, IStorageStatistics } from '../utils/types';
import tryWordContext from './tryWordContext';
import { game, INITIAL_STATISTICS } from '../utils/constants';
import { WORDS_LIST, POSSIBLE_SOLUTIONS } from '../utils/wordList';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { checkCurrentTry } from '../helpers/checkTry';

export function TryWordProvider({ children }: { children: React.ReactNode }) {
  const [gameInfo, setGameInfo] = useState<IGameObject>(game);
  const [currentTry, setCurrentTry] = useState<string[]>([]);
  const [currentRound, setCurrentRound] = useState<number>(0);
  const [storageSolution, setStorageSolution] = useLocalStorage<string>('solution', '');
  const [storageStatistics, setStorageStatistics] = useLocalStorage<IStorageStatistics>('statistics', INITIAL_STATISTICS);

  const setLocalStorageStatistics = (gameResult: string) => {
    const {
      games, wins, winStreak, bestWinStreak,
    } = storageStatistics;

    let newStatistics = { ...storageStatistics };

    if (gameResult === 'win') {
      newStatistics = {
        games: games + 1 || 1,
        wins: wins + 1 || 1,
        winStreak: winStreak + 1 || 1,
        bestWinStreak: (winStreak + 1 > bestWinStreak ? winStreak + 1 : bestWinStreak) || 1,
      };
    } else {
      newStatistics = {
        games: games + 1 || 0,
        wins,
        winStreak: 0,
        bestWinStreak,
      };
    }
    setStorageStatistics(newStatistics);
  };

  const gameWin = () => {
    setLocalStorageStatistics('win');
    setGameInfo({ ...gameInfo, gameResult: 'win' });
  };

  const gameLose = () => {
    setLocalStorageStatistics('lose');
    setGameInfo({ ...gameInfo, gameResult: 'lose' });
  };

  const nextRound = () => {
    setCurrentRound((prevRound) => prevRound + 1);
    setCurrentTry([]);
  };

  const setRandomSolution = () => {
    const randomSolutionIndex = Math.floor(Math.random() * POSSIBLE_SOLUTIONS.length);
    setStorageSolution(POSSIBLE_SOLUTIONS[randomSolutionIndex]);
  };

  const checkTry = (solution: string, curTry: string[]) => {
    const { newTry, wrongLetters } = checkCurrentTry(solution, curTry, gameInfo);

    setGameInfo({ ...gameInfo, tries: [...gameInfo.tries, newTry], wrongLetters });
    if (newTry.some(({ state }) => state !== 'right') && gameInfo.tries.length < 6) {
      nextRound();
    }
  };

  const validateTry = () => {
    if (currentTry.length !== 5 || currentTry.includes('')) {
      toast.error('Apenas palavras com 5 caracteres');
      return;
    }
    if (!WORDS_LIST.includes(currentTry.join('').toUpperCase())) {
      toast.error('Tente alguma palavra válida');
      return;
    }

    checkTry(storageSolution, currentTry);
  };

  useEffect(() => {
    const lastTry = gameInfo.tries.at(-1);
    const isCorrect = lastTry?.every(({ state }) => state === 'right');

    if (isCorrect) gameWin();
    if (gameInfo.tries.length === 6) gameLose();
  }, [gameInfo.tries]);

  useEffect(() => {
    const newRoundLineList = gameInfo.lineList.map(({ id, status, isActive }) => {
      const newLine = {
        id, status, isActive, word: ['', '', '', '', ''],
      };
      if (+id < currentRound) {
        newLine.status = 'answered';
        newLine.isActive = false;
      }
      if (+id === currentRound) {
        newLine.status = 'active';
        newLine.isActive = true;
      }
      return newLine;
    });
    setGameInfo({ ...gameInfo, lineList: newRoundLineList });
  }, [currentRound]);

  function handlePressKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault();
      validateTry();
    }
  }

  const value = React.useMemo(() => ({
    validateTry,
    gameInfo,
    setGameInfo,
    currentTry,
    setCurrentTry,
    setRandomSolution,
    currentRound,
    handlePressKeyDown,
    storageStatistics,
    storageSolution,
  }), [
    storageSolution,
    validateTry,
    gameInfo,
    setGameInfo,
    currentTry,
    setCurrentTry,
    setRandomSolution,
    currentRound,
    handlePressKeyDown,
    storageStatistics,
  ]);

  return (
    <tryWordContext.Provider
      value={value}
    >
      {children}
    </tryWordContext.Provider>
  );
}
