import * as React from 'react';

import Logo from '../../icons/Logo.jsx';

import { Container } from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <Logo />
    </Container>
  );
};

export default Navbar;
