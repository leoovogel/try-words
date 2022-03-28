import React, { useState } from 'react';

import { IGameObject, ITryObject } from '../utils/types';
import tryWordContext from './tryWordContext';
import { game } from '../utils/constants';

export function TryWordProvider({ children }: { children: React.ReactNode }) {
  const [gameInfo, setGameInfo] = useState<IGameObject>(game);
  const [tries, setTries] = useState<ITryObject[]>([]);

  const setNewTry = () => {

  };

  const value = React.useMemo(() => ({
    tries, setTries, setNewTry, gameInfo, setGameInfo,
  }), [tries]);

  return (
    <tryWordContext.Provider
      value={value}
    >
      {children}
    </tryWordContext.Provider>
  );
}
