import styled from 'styled-components';

export const Container = styled.header`
  background: gray;
`;

export const Content = styled.div`
  max-width: 1080px;
  margin: 0 auto;

  padding: 0 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    border: none;
    background: transparent;
    color: #fff;
    font-size: 1.8rem;
    cursor: pointer;
    font-weight: 700;
    margin: 0;
    padding: 0;

  }
`;
