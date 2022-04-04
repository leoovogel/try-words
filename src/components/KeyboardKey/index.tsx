import { useContext } from 'react';
import tryWordContext from '../../context/tryWordContext';
import { ContainerLetter, ContainerLine } from './styles';

interface KeyboardKeyProps {
  lineLetter: string[],
}

export default function KeyboardKey({ lineLetter }: KeyboardKeyProps) {
  const { gameInfo, setNewTry, handleKeyboardClick } = useContext<any>(tryWordContext);

  return (
    <ContainerLine>
      { lineLetter.map((key) => (
        <ContainerLetter
          key={Math.random()}
          value={key}
          onClick={key === 'Enter' ? setNewTry : handleKeyboardClick}
          disabled={gameInfo.wrongLetters.includes(key.toLowerCase())}
        >
          {key}
        </ContainerLetter>
      )) }
    </ContainerLine>
  );
}
