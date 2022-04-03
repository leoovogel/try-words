import { useContext } from 'react';

import tryWordContext from '../../context/tryWordContext';
import { Input } from './styles';

interface IInputLetterProps {
  onChangeLetter: any;
  line: string;
  status: string;
  isActive: boolean;
  word: string[];
  letter: number;
}

export function InputLetter({
  onChangeLetter, line, status, isActive, word, letter,
}: IInputLetterProps) {
  const { gameInfo } = useContext<any>(tryWordContext);

  return (
    <Input
      type="text"
      onChange={onChangeLetter}
      className={`${gameInfo.tries?.[+line]?.[letter]?.state} ${line}-${letter}`}
      value={status === 'answered' ? gameInfo.tries[+line][letter]?.letter : word[letter]}
      disabled={!isActive || status === 'answered'}
      onClick={({ target }: any) => target.setSelectionRange(1, 1)}
      // status={gameInfo.tries?.[+line]?.[letter]?.status}
    />
  );
}
