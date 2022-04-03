import styled from 'styled-components';

export const Input = styled.input`
  width: 5rem;
  height: 5rem;
  background-color: transparent;
  border-radius: 10%;
  text-transform: uppercase;
  border: 0.25rem solid #444;
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  caret-color: transparent;
  color: #fff;
  cursor: pointer;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  &:disabled{
    background-color: var(--cinza1);
    color: #000;
    pointer-events: none;
  }

  &:focus{
    transform: scale(1.1);
    box-shadow: 0.1rem 0.1rem 0.5rem #111;
  }

  &.displaced {
    background-color: #facc15;
  }

  &.right {
    background-color: #2fc18c;
  }
`;
