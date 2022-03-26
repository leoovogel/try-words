import WordLine from '../WordLine/WordLine';

export default function wordTable() {
  return (
    <table>
      <tbody>
        <WordLine line="0" status="answered" />
        <WordLine line="1" status="active" />
        <WordLine line="2" status="next" />
        <WordLine line="3" status="next" />
        <WordLine line="4" status="next" />
      </tbody>
    </table>
  );
}
