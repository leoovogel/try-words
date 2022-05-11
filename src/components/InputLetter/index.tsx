import { useContext } from 'react';

import tryWordContext from '../../context/tryWordContext';
import { TryWordContext } from '../../utils/types';
import { Input } from './styles';

interface IInputLetterProps {
  onChangeLetter: ({ target }: { target: HTMLInputElement }) => void;
  line: string;
  status: string;
  isActive: boolean;
  word: string[];
  letter: number;
  onFocus: () => void;
}

export function InputLetter({
  onChangeLetter, line, status, isActive, word, letter, onFocus,
}: IInputLetterProps) {
  const { gameInfo } = useContext<TryWordContext>(tryWordContext);

  return (
    <Input
      type="text"
      onChange={onChangeLetter}
      className={`${gameInfo.tries?.[+line]?.[letter]?.state} ${line}-${letter}`}
      value={status === 'answered' ? gameInfo.tries[+line][letter]?.letter : word[letter]}
      disabled={!isActive || status === 'answered'}
      onClick={(event) => (event.target as HTMLInputElement).setSelectionRange(1, 1)}
      onFocus={onFocus}
      inputMode="none"
    />
  );
}
