import styled from 'styled-components';

export const Input = styled.input`
  width: 80px;
  height: 80px;
  background-color: #4ff;
  border-radius: 10%;
  line-height: 1rem;
  text-transform: uppercase;
  border: 0.125rem solid #444;
  margin: 0.05rem;
  text-align: center;
  font-size: 3rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  &:disabled{
    background-color: #ddd;
  }

  &:focus{
    transform: scale(1.1);
    box-shadow: 0.1rem 0.1rem 0.5rem #111;
  }
`;
