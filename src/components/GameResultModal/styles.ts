import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 2.5rem;
    margin: 0 auto;
  }

  div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 30px auto;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  img {
    width: 80%;
    display: block;
    margin: 0 auto;
  }
`;
