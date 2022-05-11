import { IGameObject } from './types';

export const game: IGameObject = {
  lineList: [
    { id: '0', status: 'active', isActive: true },
    { id: '1', status: 'next', isActive: false },
    { id: '2', status: 'next', isActive: false },
    { id: '3', status: 'next', isActive: false },
    { id: '4', status: 'next', isActive: false },
    { id: '5', status: 'next', isActive: false },
  ],
  tries: [],
  wrongLetters: [],
  gameResult: 'inProgress',
};

export const INITIAL_STATISTICS = {
  games: 0, wins: 0, winStreak: 0, bestWinStreak: 0,
};

export const keyboardLetters = [['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'], ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '<-'], ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Enter']];

export const GIF_WIN = 'https://c.tenor.com/rO6Fh2KNm3sAAAAd/baby-yes.gif';

export const GIF_LOSE = 'https://c.tenor.com/58rVrcSfwCcAAAAM/panda-oh-no.gif';
