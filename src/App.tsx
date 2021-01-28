import * as React from 'react';

import Navbar from './components/Navbar';
import Savings from './pages/Savings';

import GlobalStyles from './styles/GlobalStyles';

const App: React.FunctionComponent = () => {
  return (
    <>
      <Navbar />
      <Savings />

      <GlobalStyles />
    </>
  );
};

export default App;
