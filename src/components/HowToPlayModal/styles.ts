import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 2.5rem;
    margin: 0 auto;
    color: #fff;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.2;
    width: 90%;
    color: #fff;
  }

  div {
    margin: 2rem 1rem;
  }

  .header {
    display: flex;
    margin: 0;
  }

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

  span {
    display: inline-block;
    width: 3rem;
    height: 3rem;
    background-color: #e1e5eb;
    border-radius: 10%;
    text-transform: uppercase;
    border: 0.25rem solid #444;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
    caret-color: transparent;
    color: #000;
    vertical-align: middle;

    &.correct {
      background-color: #2fc18c;
    }

    &.displaced {
      background-color: #facc15;
    }

    &.wrong {
      background-color: #dc2525;
    }
  }

  p {
    span {
      margin: 0 0.5rem;
    }
  }
`;
