import { IGameObject } from './types';

export const game: IGameObject = {
  lineList: [
    { id: '0', status: 'active', isActive: true },
    { id: '1', status: 'next', isActive: false },
    { id: '2', status: 'next', isActive: false },
    { id: '3', status: 'next', isActive: false },
    { id: '4', status: 'next', isActive: false },
  ],
  tries: [[]],
};
