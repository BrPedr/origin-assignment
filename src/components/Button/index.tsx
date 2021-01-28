import * as React from 'react';

interface Props {
  children: string;
}

import { Container } from './styles';

const Button: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Button;
