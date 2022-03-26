import { useState } from 'react';

export default function WordLine({ ...rest }) {
  const [word, setWord] = useState<string[]>(['', '', '', '', '']);

  const handleChangeWord = ({ target }: { target: HTMLInputElement }) => {
    const newWord = [...word];
    const letterIndex = +target.classList[0].split('')[1];
    newWord[letterIndex] = target.value[target.value.length - 1] || '';
    setWord(newWord);
  };

  return (
    <tr>
      <td>
        <input
          type="text"
          onChange={handleChangeWord}
          className={`${rest.line}0`}
          value={word[0]}
          disabled={rest.status === 'next' || rest.status === 'answered'}
        />
      </td>
      <td>
        <input
          type="text"
          onChange={handleChangeWord}
          className={`${rest.line}1`}
          value={word[1]}
          disabled={rest.status === 'next' || rest.status === 'answered'}
        />
      </td>
      <td>
        <input
          type="text"
          onChange={handleChangeWord}
          className={`${rest.line}2`}
          value={word[2]}
          disabled={rest.status === 'next' || rest.status === 'answered'}
        />
      </td>
      <td>
        <input
          type="text"
          onChange={handleChangeWord}
          className={`${rest.line}3`}
          value={word[3]}
          disabled={rest.status === 'next' || rest.status === 'answered'}
        />
      </td>
      <td>
        <input
          type="text"
          onChange={handleChangeWord}
          className={`${rest.line}4`}
          value={word[4]}
          disabled={rest.status === 'next' || rest.status === 'answered'}
        />
      </td>
    </tr>
  );
}
