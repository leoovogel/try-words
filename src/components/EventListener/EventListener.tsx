import React, { useContext, useEffect } from 'react';
import tryWordContext from '../../context/tryWordContext';

function EventListener({ children }: { children: React.ReactNode }) {
  const { handlePressKeyDown } = useContext<any>(tryWordContext);

  useEffect(() => {
    document.addEventListener('keydown', handlePressKeyDown);

    return () => document.removeEventListener('keydown', handlePressKeyDown);
  }, []);

  return (
    <div>
      { children }
    </div>
  );
}

export default EventListener;
