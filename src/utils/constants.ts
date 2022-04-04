import { IGameObject } from './types';

export const game: IGameObject = {
  lineList: [
    {
      id: '0', status: 'active', isActive: true, word: ['', '', '', '', ''],
    },
    {
      id: '1', status: 'next', isActive: false, word: ['', '', '', '', ''],
    },
    {
      id: '2', status: 'next', isActive: false, word: ['', '', '', '', ''],
    },
    {
      id: '3', status: 'next', isActive: false, word: ['', '', '', '', ''],
    },
    {
      id: '4', status: 'next', isActive: false, word: ['', '', '', '', ''],
    },
    {
      id: '5', status: 'next', isActive: false, word: ['', '', '', '', ''],
    },
  ],
  tries: [],
  wrongLetters: [],
  gameResult: 'inProgress',
};

export const keyboardLetters = [['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'], ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '<-'], ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Enter']];
