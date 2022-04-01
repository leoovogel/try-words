import { keyboardLetters } from '../../utils/constants';
import KeyboardKey from '../KeyboardKey';
import { Container } from './styles';

export default function Keyboard() {
  return (
    <Container>
      {
        keyboardLetters.map((line) => (
          <KeyboardKey key={Math.random()} lineLetter={line} />
        ))
      }
    </Container>
  );
}
