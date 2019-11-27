import React from 'react';

import GlobalStyle from './Global';
import Container from './Container';
import Header from './Header';
import Layout from './Layout';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Layout />
      </Container>
    </>
  );
}

export default App;
