import React, { useContext, useEffect } from 'react';
import tryWordContext from '../../context/tryWordContext';

function EventListener({ children }: { children: React.ReactNode }) {
  const { handlePressKeyDown, currentTry } = useContext<any>(tryWordContext);

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
