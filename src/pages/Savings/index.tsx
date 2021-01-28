import * as React from 'react';

import Card from '../../components/Card';

import { Container } from './styles';

const Savings: React.FC = () => {
  return (
    <Container>
      <h1>
        Let&apos;s plan your <span>saving goal.</span>
      </h1>
      <Card />
    </Container>
  );
};

export default Savings;
