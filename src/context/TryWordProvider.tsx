import React, { useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import { IGameObject } from '../utils/types';
import tryWordContext from './tryWordContext';
import { game } from '../utils/constants';
import { WORDS_LIST, POSSIBLE_SOLUTIONS } from '../utils/wordList';

export function TryWordProvider({ children }: { children: React.ReactNode }) {
  const [gameInfo, setGameInfo] = useState<IGameObject>(game);
  const [currentTry, setCurrentTry] = useState<string[]>([]);
  const [solution, setSolution] = useState<string>('');
  const [currentRound, setCurrentRound] = useState<number>(0);

  const gameWin = () => {
    setGameInfo({ ...gameInfo, gameResult: 'win' });
  };

  const gameLose = () => {
    setGameInfo({ ...gameInfo, gameResult: 'lose' });
  };

  const nextRound = () => {
    setCurrentRound((prevRound) => prevRound + 1);
    setCurrentTry([]);
  };

  const setRandomSolution = () => {
    const randomSolutionIndex = Math.floor(Math.random() * POSSIBLE_SOLUTIONS.length);
    console.log(POSSIBLE_SOLUTIONS[randomSolutionIndex]);
    setSolution(POSSIBLE_SOLUTIONS[randomSolutionIndex]);
  };

  const checkTry = () => {
    const solutionArray = solution.split('');

    const wrongLetters = [...gameInfo.wrongLetters];

    const newTry = currentTry.map((letter, index) => {
      const feedbackReturn = { letter, state: '' };
      const letterUp = letter.toUpperCase();

      if (letterUp === solutionArray[index]) {
        feedbackReturn.state = 'right';
      } else if (solutionArray.includes(letterUp)) {
        feedbackReturn.state = 'displaced';
      } else {
        feedbackReturn.state = 'wrong';
        wrongLetters.push(letter);
      }
      return feedbackReturn;
    });

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

    checkTry();
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
  }), [
    solution,
    validateTry,
    gameInfo,
    setGameInfo,
    currentTry,
    setCurrentTry,
    setRandomSolution,
    currentRound,
    handlePressKeyDown,
  ]);

  return (
    <tryWordContext.Provider
      value={value}
    >
      {children}
    </tryWordContext.Provider>
  );
}
