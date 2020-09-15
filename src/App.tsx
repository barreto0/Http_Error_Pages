/* eslint-disable no-use-before-define */
import React from 'react';
import GlobalStyle from './styles/global';
import Error404 from './pages/error404';

const App: React.FunctionComponent = () => {
  return (
    <>
      <GlobalStyle />
      <Error404 />
    </>
  );
};

export default App;
