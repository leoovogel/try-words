import {
  useContext, useEffect, useRef, useState,
} from 'react';
import tryWordContext from '../../context/tryWordContext';

import { IWordLineProps } from '../../utils/types';
import { InputLetter } from '../InputLetter';
import { Line } from './styles';

export function WordLine({ ...rest }: IWordLineProps) {
  const [currentFocus, setCurrentFocus] = useState(0);
  const lineElement = useRef<HTMLDivElement>(null);
  const { gameInfo, setCurrentTry } = useContext<any>(tryWordContext);
  const [word, setWord] = useState(['', '', '', '', '']);

  useEffect(() => {
    const prevFocusLetter = lineElement?.current?.children[currentFocus - 1] as HTMLInputElement;
    const focusLetter = lineElement?.current?.children[currentFocus] as HTMLInputElement;

    if (focusLetter) {
      focusLetter.focus();
    } else {
      prevFocusLetter.blur();
    }
  }, [currentFocus]);

  const handleChangeLetter = ({ target }: { target: HTMLInputElement }) => {
    const newWord = [...word];
    const letterIndex = +target.className.slice(-1);
    newWord[letterIndex] = target.value.at(-1) || '';

    if (currentFocus <= 4) {
      setCurrentFocus(+target.className.slice(-1) + 1);
    }

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
        />
      ))}
    </Line>
  );
}
