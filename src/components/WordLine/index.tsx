import {
  useContext, useEffect, useRef,
} from 'react';
import tryWordContext from '../../context/tryWordContext';

import { IWordLineProps, TryWordContext } from '../../utils/types';
import { InputLetter } from '../InputLetter';
import { Line } from './styles';

export function WordLine({
  isActive, word, setWord, currentFocus, setCurrentFocus, ...rest
}: IWordLineProps) {
  const lineElement = useRef<HTMLDivElement>(null);
  const { gameInfo, setCurrentTry } = useContext<TryWordContext>(tryWordContext);

  function handleKeyPress({ key }: KeyboardEvent) {
    if (key === 'Backspace' && isActive) {
      const newWord = [...word];

      if (word[currentFocus]) {
        newWord[currentFocus] = '';
        setCurrentFocus(currentFocus - 1);
      } else if (currentFocus > 0) {
        newWord.splice(currentFocus - 1, 1, '');
        setCurrentFocus(currentFocus);
      } else if (word.every((letter) => letter)) {
        newWord[4] = '';
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
      const focusLetter = lineElement?.current?.children[currentFocus] as HTMLInputElement;

      if (focusLetter) {
        focusLetter.focus();
      }
    }
  }, [currentFocus, isActive]);

  useEffect(() => {
    setCurrentFocus(-1);
  }, [isActive]);

  useEffect(() => {
    if (isActive) {
      setCurrentFocus(word.findIndex((letter) => !letter));
    }
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
      {word.map((letter, index) => (
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
