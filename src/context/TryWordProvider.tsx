import React, { useState } from 'react';

import { ITryObject } from '../common/types';
import tryWordContext from './tryWordContext';

export function TryWordProvider({ children }: { children: React.ReactNode }) {
  const [tries, setTries] = useState<ITryObject[]>([]);

  const value = React.useMemo(() => ({ tries, setTries }), [tries]);
  return (
    <tryWordContext.Provider
      value={value}
    >
      {children}
    </tryWordContext.Provider>
  );
}
