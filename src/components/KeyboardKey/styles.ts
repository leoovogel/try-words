import styled from 'styled-components';

export const ContainerLine = styled.div`
  display: flex;

  & + div {
    margin-top: 0.5rem;
  }
`;

export const ContainerLetter = styled.button`
  width: ${({ children }) => (children === 'Enter' ? 8 : 4)}rem;
  height: 5rem;

  background: var(--cinza1);
  border-radius: 0.5rem;
  border: none;

  font-size: 1.5rem;

  & + button {
    margin-left: 0.5rem;
  }

  &:disabled {
  }

  &:hover {
    filter: brightness(0.9);
  }
`;
