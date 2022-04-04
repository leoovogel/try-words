import React, { Dispatch } from 'react';

export interface IWordLineProps {
  line: string,
  word: string[],
  setWord: Dispatch<React.SetStateAction<string[]>>
  isActive: boolean;
}

export interface ILineList {
  id: string,
  status: string,
  isActive: boolean,
  word: string[],
}

export interface ITryObject {
  letter: string,
  state: string,
}

export interface IGameObject {
  lineList: ILineList[],
  tries: ITryObject[][],
  gameResult: string,
}
