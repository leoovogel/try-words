import styled from 'styled-components';

export const Line = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5rem;

  & + div {
    margin-top: 0.5rem;
  }
`;
