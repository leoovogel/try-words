import { useState } from 'react';

import { game } from '../../common/constants';
import { ILineList } from '../../common/types';
import { WordLine } from '../WordLine/WordLine';

export default function wordTable() {
  const [lines, setLines] = useState<ILineList[]>(game.lineList);

  return (
    <div>
      {lines.map((line: ILineList) => (
        <WordLine
          key={line.id}
          line={line.id}
          status={line.status}
          isActive={line.isActive}
          setLines={setLines}
        />
      ))}
    </div>
  );
}

/*
const game = {
  lineList: [
              { line: '0', status: 'active', isActive: true },
              { line: '1', status: 'next', isActive: false },
              { line: '2', status: 'next', isActive: false },
              { line: '3', status: 'next', isActive: false },
              { line: '4', status: 'next', isActive: false },
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
