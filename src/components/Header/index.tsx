import { Container, Content } from './styles';

interface HowToPlayModalProps {
  openHowToPlayModal: () => void;
}

export function Header({ openHowToPlayModal }: HowToPlayModalProps) {
  return (
    <Container>
      <Content>
        <h1>
          <span>Try</span>
          Words
        </h1>
        <button type="button" onClick={openHowToPlayModal}>Como jogar?</button>
      </Content>
    </Container>
  );
}
