export interface IWordLineProps {
  line: string,
  word: string[],
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
