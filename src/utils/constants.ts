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
  gameResult: 'inProgress',
};
