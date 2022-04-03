import { useContext, useEffect } from 'react';

import { ILineList } from '../../utils/types';
import tryWordContext from '../../context/tryWordContext';
import { WordLine } from '../WordLine';
import { Container } from './styles';

export default function wordTable() {
  const { gameInfo, setRandomSolution } = useContext<any>(tryWordContext);

  useEffect(() => setRandomSolution(), []);

  return (
    <Container>
      {gameInfo.lineList.map((line: ILineList) => (
        <WordLine
          key={line.id}
          line={line.id}
          word={line.word}
        />
      ))}
    </Container>
  );
}
