import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <img src="https://assets-global.website-files.com/61549abf6fb9ca5e91bc5709/61549abf6fb9ca4630bc5747_Logo.svg" alt="logo trybe" />
        <h1>Try Words</h1>
        <button type="button" disabled>Config</button>
      </Content>
    </Container>
  );
}
