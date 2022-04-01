import { useContext } from 'react';
import tryWordContext from '../../context/tryWordContext';
import { ContainerLetter, ContainerLine } from './styles';

interface KeyboardKeyProps {
  lineLetter: string[],
}

export default function KeyboardKey({ lineLetter }: KeyboardKeyProps) {
  const { setNewTry, handleKeyboardClick } = useContext<any>(tryWordContext);

  return (
    <ContainerLine>
      { lineLetter.map((key) => (
        <ContainerLetter
          key={Math.random()}
          value={key}
          onClick={key === 'Enter' ? setNewTry : handleKeyboardClick}
        >
          {key}
        </ContainerLetter>
      )) }
    </ContainerLine>
  );
}
