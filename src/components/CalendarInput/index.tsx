import * as React from 'react';
import { useState } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

interface Props {
  title: string;
  setMonths: (value: number | ((value: number) => number)) => void;
  setAmount: (value: number | ((value: number) => number)) => void;
  setYear: (value: number | ((value: number) => number)) => void;
  setMonthName: (value: string | ((value: string) => string)) => void;
  totalAmount: number;
}

import { Container, MonthAndYear } from './styles';

const CalendarInput: React.FC<Props> = ({
  title,
  setMonths,
  setAmount,
  totalAmount,
  setYear,
  setMonthName
}) => {
  const date = new Date();
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const currentMonth = date.getMonth();
  const year = date.getFullYear();

  const [calendarMonth, setCalendarMonth] = useState<number>(currentMonth);
  const [calendarYear, setCalendarYear] = useState<number>(year);

  const handleDateChange = () => {
    if (calendarMonth === month.length - 1) {
      setCalendarMonth(0);
      return setCalendarYear(calendarYear + 1);
    }

    return setCalendarMonth(calendarMonth + 1);
  };

  const handleDateRegress = () => {
    if (calendarMonth === 0 && calendarYear <= year) {
      return alert(
        "You can't choose an year before the current one. Please, pick a valid date."
      );
    }

    if (calendarMonth === 0) {
      setCalendarMonth(month.length - 1);
      return setCalendarYear(calendarYear - 1);
    }

    return setCalendarMonth(calendarMonth - 1);
  };

  React.useEffect(() => {
    const totalOfMonths: number =
      (calendarYear - date.getFullYear()) * 12 + calendarMonth + 1;

    const monthlyAmount = Number((totalAmount / totalOfMonths).toFixed(2));

    setMonths(totalOfMonths);
    setAmount(monthlyAmount);
    setMonthName(month[calendarMonth]);
    setYear(calendarYear);
  }, [calendarMonth, totalAmount]);

  return (
    <Container>
      <label>{title}</label>
      <MonthAndYear>
        <MdKeyboardArrowLeft
          size={24}
          color={'grey'}
          style={{ cursor: 'pointer' }}
          onClick={() => handleDateRegress()}
        />
        <div>
          <span className="month-name">{month[calendarMonth]}</span>
          <span>{calendarYear}</span>
        </div>
        <MdKeyboardArrowRight
          size={24}
          color={'var(--blueGrayArrow)'}
          style={{ cursor: 'pointer' }}
          onClick={() => handleDateChange()}
        />
      </MonthAndYear>
    </Container>
  );
};

export default CalendarInput;
