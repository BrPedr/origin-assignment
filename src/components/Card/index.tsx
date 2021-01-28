import * as React from 'react';

import Button from '../Button';
import MoneyInput from '../MoneyInput';
import CalendarInput from '../CalendarInput';

import House from '../../icons/House';

import { Container, Header, MonthlyAmount, Details } from './styles';

const Card: React.FC = () => {
  const [monthName, setMonthName] = React.useState('');
  const [year, setYear] = React.useState<number>(0);
  const [months, setMonths] = React.useState(0);
  const [amount, setAmount] = React.useState(0);
  const [totalAmount, setTotalAmount] = React.useState(0);

  return (
    <Container>
      <Header>
        <House />
        <div>
          <h2>Buy a house</h2>
          <span>Saving goal</span>
        </div>
      </Header>

      <div
        style={{
          width: '100%',
          marginTop: '28px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between'
        }}
      >
        <MoneyInput
          setTotalAmount={setTotalAmount}
          title={'Total amount'}
          placeholder="Type the amount to save"
        />

        <CalendarInput
          title="Reach goal by"
          setMonths={setMonths}
          setAmount={setAmount}
          totalAmount={totalAmount}
          setYear={setYear}
          setMonthName={setMonthName}
        />
      </div>
      <MonthlyAmount>
        <div>
          <h2>Monthly amount</h2>
          <h2 className="money">$ {amount}</h2>
        </div>
        <Details>
          <span>
            You&apos;re planning
            <strong>&nbsp;{months} monthly deposits</strong> to reach your
            <strong>&nbsp;${totalAmount}</strong>&nbsp;goal by
            <strong>
              &nbsp;{monthName} {year}
            </strong>
            .
          </span>
        </Details>
      </MonthlyAmount>
      <Button>Confirm</Button>
    </Container>
  );
};

export default Card;
