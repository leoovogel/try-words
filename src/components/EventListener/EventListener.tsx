import React, { useContext, useEffect } from 'react';
import tryWordContext from '../../context/tryWordContext';
import { TryWordContext } from '../../utils/types';

function EventListener({ children }: { children: React.ReactNode }) {
  const { handlePressKeyDown, currentTry } = useContext<TryWordContext>(tryWordContext);

  useEffect(() => {
    document.body.addEventListener('keydown', handlePressKeyDown);

    return () => document.body.removeEventListener('keydown', handlePressKeyDown);
  }, [currentTry]);

  return (
    <div>
      { children }
    </div>
  );
}

export default EventListener;
