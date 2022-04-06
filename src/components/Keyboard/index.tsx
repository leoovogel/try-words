import React from 'react';
import { keyboardLetters } from '../../utils/constants';
import KeyboardKey from '../KeyboardKey';
import { Container } from './styles';

interface KeyboardProps {
  onKeyboardClick: ({ target }: React.MouseEvent) => void;
}

export default function Keyboard({ onKeyboardClick }: KeyboardProps) {
  return (
    <Container>
      {
        keyboardLetters.map((line) => (
          <KeyboardKey
            key={Math.random()}
            lineLetter={line}
            onKeyboardClick={onKeyboardClick}
          />
        ))
      }
    </Container>
  );
}
