import {
  useContext, useEffect, useRef, useState,
} from 'react';
import tryWordContext from '../../context/tryWordContext';

import { IWordLineProps } from '../../utils/types';
import { InputLetter } from '../InputLetter';
import { Line } from './styles';

export function WordLine({ isActive, ...rest }: IWordLineProps) {
  const [currentFocus, setCurrentFocus] = useState(-1);
  const lineElement = useRef<HTMLDivElement>(null);
  const { gameInfo, setCurrentTry } = useContext<any>(tryWordContext);
  const [word, setWord] = useState(['', '', '', '', '']);

  function handleKeyPress({ key }: any) {
    if (key === 'Backspace' && isActive) {
      const newWord = [...word];

      if (word[currentFocus] !== '') {
        newWord[currentFocus] = '';
        setCurrentFocus(currentFocus - 1);
      } else if (currentFocus > 0) {
        newWord.splice(currentFocus - 1, 1, '');
        setCurrentFocus(currentFocus);
      }

      setWord(newWord);
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', handleKeyPress);

    return () => document.body.removeEventListener('keydown', handleKeyPress);
  }, [word, currentFocus]);

  useEffect(() => {
    if (!isActive) return;
    if (currentFocus > -1) {
      const prevFocusLetter = lineElement?.current
        ?.children[currentFocus - 1] as HTMLInputElement;
      const focusLetter = lineElement?.current?.children[currentFocus] as HTMLInputElement;

      if (focusLetter) {
        focusLetter.focus();
      } else {
        prevFocusLetter.blur();
      }
    }
  }, [currentFocus, isActive]);

  useEffect(() => {
    setCurrentFocus(0);
  }, [isActive]);

  useEffect(() => {
    setCurrentFocus(word.findIndex((letter) => !letter));
  }, [word]);

  const handleChangeLetter = ({ target }: { target: HTMLInputElement }) => {
    const newWord = [...word];
    const letterIndex = +target.className.slice(-1);
    newWord[letterIndex] = target.value.at(-1) || '';

    setWord(newWord);
    setCurrentTry(newWord);
  };

  return (
    <Line ref={lineElement}>
      {rest.word.map((letter, index) => (
        <InputLetter
          key={Math.random()}
          onChangeLetter={handleChangeLetter}
          word={word}
          line={rest.line}
          letter={index}
          status={gameInfo.lineList[+rest.line].status}
          isActive={gameInfo.lineList[+rest.line].isActive}
          onFocus={() => setCurrentFocus(index)}
        />
      ))}
    </Line>
  );
}
