import styled from 'styled-components';

export const Container = styled.header`
  background: #303030;
  max-height: 80px;
`;

export const Content = styled.div`
  max-width: 1080px;
  margin: 0 auto;

  padding: 0 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

    span {
      font-size: 2rem;
      color: #309E76;
    }
  }

  button {
    background: #309E76;
    border: 0;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    color: #fff;
    font-size: 1.2rem;

    transition: filter 0.1s;
    
    &:hover {
      filter: brightness(1.2);
    }
  }
`;
