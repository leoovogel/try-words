import { useContext, useState } from 'react';

import { game } from '../../utils/constants';
import { ILineList } from '../../utils/types';
import tryWordContext from '../../context/tryWordContext';
import { Button } from '../Button';
import { WordLine } from '../WordLine';
import { Container } from './styles';

export default function wordTable() {
  const [lines, setLines] = useState<ILineList[]>(game.lineList);

  const { setNewTry } = useContext<any>(tryWordContext);

  return (
    <>
      <Container>
        {lines.map((line: ILineList) => (
          <WordLine
            key={line.id}
            line={line.id}
            status={line.status}
            isActive={line.isActive}
            word={line.word}
            setLines={setLines}
          />
        ))}
      </Container>
      <div>
        <Button value="Enter" onClick={setNewTry} />
      </div>
    </>
  );
}

/*
const game = {
  lineList: [
              { line: '0', status: 'active', isActive: true, word: ['', '', '', '', ''] },
              { line: '1', status: 'next', isActive: false, word: ['', '', '', '', ''] },
              { line: '2', status: 'next', isActive: false, word: ['', '', '', '', ''] },
              { line: '3', status: 'next', isActive: false, word: ['', '', '', '', ''] },
              { line: '4', status: 'next', isActive: false, word: ['', '', '', '', ''] },
            ],
  tries: [
            [
              {letter: "T", state: "wrong"},
              {letter: "E", state: "wrong"},
              {letter: "X", state: "wrong"},
              {letter: "T", state: "wrong"},
              {letter: "O", state: "wrong"},
            ],
            [
              {letter: "V", state: "right"},
              {letter: "A", state: "right"},
              {letter: "Z", state: "displaced"},
              {letter: "I", state: "right"},
              {letter: "O", state: "wrong"},
            ],
         ],
}
*/
