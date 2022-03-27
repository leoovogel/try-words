import { Dispatch } from 'react';

export interface IWordLineProps {
  line: string,
  status: string,
  isActive: boolean,
  setLines: Dispatch<any>
}

export interface ILineList {
  id: string,
  status: string,
  isActive: boolean,
}

export interface ITryObject {
  letter: string,
  state: string,
}

export interface IGameObject {
  lineList: ILineList[],
  tries: ITryObject[][],
}
