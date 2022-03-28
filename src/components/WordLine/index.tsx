import {
  useContext, useEffect, useRef, useState,
} from 'react';

import { IWordLineProps } from '../../utils/types';
import tryWordContext from '../../context/tryWordContext';
import { InputLetter } from '../InputLetter';

export function WordLine({ ...rest }: IWordLineProps) {
  const [currentFocus, setCurrentFocus] = useState(0);
  const lineElement = useRef<HTMLDivElement>(null);
  const { setGameInfo, gameInfo } = useContext<any>(tryWordContext);

  useEffect(() => {
    const prevFocusLetter = lineElement?.current?.children[currentFocus - 1] as HTMLInputElement;
    const focusLetter = lineElement?.current?.children[currentFocus] as HTMLInputElement;
    if (focusLetter) {
      focusLetter.focus();
    } else {
      prevFocusLetter.blur();
    }
  }, [currentFocus]);

  const handleChangeWord = ({ target }: { target: HTMLInputElement }) => {
    const newWord = [...gameInfo.lineList[+rest.line].word];
    const letterIndex = +target.className.slice(-1);
    newWord[letterIndex] = target.value[target.value.length - 1] || '';

    const newLineList = [...gameInfo.lineList];
    newLineList[+rest.line].word = newWord;

    setGameInfo({ ...gameInfo, lineList: newLineList });

    if (currentFocus <= 4) {
      setCurrentFocus(+target.className.slice(-1) + 1);
    }
  };

  return (
    <div ref={lineElement}>
      {rest.word.map((letter, index) => (
        <InputLetter
          handleChangeWord={handleChangeWord}
          word={gameInfo.lineList[+rest.line].word}
          line={rest.line}
          letter={index}
          status={rest.status}
          isActive={rest.isActive}
        />
      ))}
    </div>
  );
}
