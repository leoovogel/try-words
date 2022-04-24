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

  button {
    margin: 30px auto;
    width: 100%;
    height: 50px;
    border-radius: 5px;
    border: none;
    background: #ff9000;
    font-size: 1.2rem;
    font-weight: bold;
    color: #fff;
    transition: background-color 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
