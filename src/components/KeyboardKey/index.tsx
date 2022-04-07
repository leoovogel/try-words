import React, { useContext } from 'react';
import tryWordContext from '../../context/tryWordContext';
import { TryWordContext } from '../../utils/types';
import { ContainerLetter, ContainerLine } from './styles';

interface KeyboardKeyProps {
  lineLetter: string[];
  onKeyboardClick: ({ target }: React.MouseEvent) => void;
}

export default function KeyboardKey({ lineLetter, onKeyboardClick }: KeyboardKeyProps) {
  const { gameInfo, validateTry } = useContext<TryWordContext>(tryWordContext);

  return (
    <ContainerLine>
      { lineLetter.map((key) => (
        <ContainerLetter
          key={Math.random()}
          onClick={key === 'Enter' ? validateTry : onKeyboardClick}
          disabled={gameInfo.wrongLetters
            .some((letter) => letter.toLowerCase() === key.toLowerCase())}
        >
          {key}
        </ContainerLetter>
      )) }
    </ContainerLine>
  );
}
