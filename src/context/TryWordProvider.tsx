import React, { useState } from 'react';

import tryWordContext from './tryWordContext';

export function TryWordProvider({ children }: { children: React.ReactNode }) {
  const [tries, setTries] = useState<string[]>([]);

  const value = React.useMemo(() => ({ tries, setTries }), [tries]);
  return (
    <tryWordContext.Provider
      value={value}
    >
      {children}
    </tryWordContext.Provider>
  );
}
