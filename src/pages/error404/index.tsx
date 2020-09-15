/* eslint-disable no-use-before-define */
import React from 'react';

import { Container, Content, Title } from './styles';

import image from '../../assets/ce_para_de_confusao.jpeg';

const Error404: React.FunctionComponent = () => {
  return (
    <Container>
      <Content>
        <Title>404</Title>
        <img src={image} alt="para de arrumar essas confusão ai..." />
        <p>Oops</p>
      </Content>
    </Container>
  );
};

export default Error404;
