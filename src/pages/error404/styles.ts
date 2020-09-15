import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  place-content: center;

  width: 100%;
`;

export const Title = styled.h1`
  font-size: 50px;
`;
