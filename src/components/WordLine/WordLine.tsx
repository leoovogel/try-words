import { useEffect, useRef, useState } from 'react';

import { IWordLineProps } from '../../common/types';

export function WordLine({ ...rest }: IWordLineProps) {
  const [word, setWord] = useState<string[]>(['', '', '', '', '']);
  const [currentFocus, setCurrentFocus] = useState(0);
  const lineElement = useRef<HTMLDivElement>(null);

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
    const newWord = [...word];
    const letterIndex = +target.classList[0].split('-')[1];
    newWord[letterIndex] = target.value[target.value.length - 1] || '';
    setWord(newWord);

    if (currentFocus <= 4) {
      setCurrentFocus(+target.classList[0].split('-')[1] + 1);
    }
  };

  return (
    <div ref={lineElement}>
      <input
        type="text"
        onChange={handleChangeWord}
        className={`${rest.line}-0`}
        value={word[0]}
        disabled={!rest.isActive}
      />
      <input
        type="text"
        onChange={handleChangeWord}
        className={`${rest.line}-1`}
        value={word[1]}
        disabled={!rest.isActive}
      />
      <input
        type="text"
        onChange={handleChangeWord}
        className={`${rest.line}-2`}
        value={word[2]}
        disabled={!rest.isActive}
      />
      <input
        type="text"
        onChange={handleChangeWord}
        className={`${rest.line}-3`}
        value={word[3]}
        disabled={!rest.isActive}
      />
      <input
        type="text"
        onChange={handleChangeWord}
        className={`${rest.line}-4`}
        value={word[4]}
        disabled={!rest.isActive}
      />
    </div>
  );
}
