import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  width: 85%;
  height: calc(100vh - 300px);
  max-width: 1100px;
  padding: 16px;
`;

export const Content = styled.div`
  background: #BFE9F0;
  align-items: center;
  justify-content: center;
  padding: 12px;

  height: 30%;
  width: 620px;
  max-width: 620px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  text-align: center;

  h1 {
    font-size: 1.8em;
    text-transform: uppercase;
  }

  p {
    font-weight: 400;
    font-size: 1.15em;
    line-height: 1.5em;
  }

  a {
    text-decoration: underline;
  }
`;
