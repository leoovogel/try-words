import styled from 'styled-components';

export const Input = styled.input`
  width: 5rem;
  height: 5rem;
  background-color: var(--roxo-claro);
  border-radius: 10%;
  text-transform: uppercase;
  border: 0.125rem solid #444;
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  caret-color: transparent;
  cursor: pointer;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  &:disabled{
    background-color: var(--cinza1);
    pointer-events: none;
  }

  &:focus{
    transform: scale(1.1);
    box-shadow: 0.1rem 0.1rem 0.5rem #111;
  }
`;
