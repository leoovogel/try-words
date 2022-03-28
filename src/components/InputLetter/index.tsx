import { useContext } from 'react';

import tryWordContext from '../../context/tryWordContext';
// import { Input } from './style';

interface IInputLetterProps {
  handleChangeWord: any;
  line: string;
  status: string;
  isActive: boolean;
  word: string[];
  letter: number;
}

export function InputLetter({
  handleChangeWord, line, status, isActive, word, letter,
}: IInputLetterProps) {
  const { gameInfo } = useContext<any>(tryWordContext);

  return (
    <input
      type="text"
      onChange={handleChangeWord}
      className={`${line}-${letter}`}
      value={status === 'answered' ? gameInfo.tries[+line][letter]?.letter : word[letter]}
      disabled={!isActive || status === 'answered'}
    />
  );
}
