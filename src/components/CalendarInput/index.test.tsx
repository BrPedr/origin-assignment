import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import { configure, render, shallow } from 'enzyme';
import 'jest-extended';

configure({ adapter: new Adapter() });

import CalendarInput from './index';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

import { Container } from './styles';

const date = new Date();
const month = date.getMonth();

const calendarProps = {
  title: 'Total amount',
  setMonths: month,
  setAmount: 30,
  setYear: 2021,
  totalAmount: 3000,
  setMonthName: 'January'
};

const allMonths = [
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
describe('<CalendarInput />', () => {
  const CalendarComponent: React.FC = (calendarProps: any) => {
    return <CalendarInput {...calendarProps} />;
  };

  it('renders', () => {
    const wrapper = render(<CalendarComponent />);
    expect(wrapper).toMatchSnapshot();
  });

  it('has month name', () => {
    const wrapper = shallow(
      <CalendarComponent>
        <Container>
          <div>
            <span className="month-name">{calendarProps.setMonthName}</span>
          </div>
        </Container>
      </CalendarComponent>
    );
    wrapper.setProps(calendarProps.setMonths);
    expect(wrapper.find('.month-name').text()).toEqual('January');
  });

  it('should render <MonthlyAmount /> props', () => {
    const wrapper = shallow(<CalendarComponent />).setProps({
      title: 'Reach goal by',
      setMonths: 0,
      setAmount: 450,
      setYear: 2021,
      setMonthName: 'January',
      totalAmount: 450
    });

    expect(wrapper.props().title).toContain('Reach goal by');
    expect(wrapper.props().setMonths).toEqual(0);
    expect(wrapper.props().setAmount).toEqual(450);
  });

  it('should render the next month name', () => {
    const wrapper = shallow(
      <CalendarInput
        setAmount={() => 5000}
        totalAmount={5000}
        setMonths={() => 0}
        setYear={() => 2021}
        setMonthName={() => `${allMonths[0]}`}
        title="Reach goal by"
      />
    );

    wrapper.find(MdKeyboardArrowRight).simulate('click');
    expect(wrapper.find('.month-name').text()).toContain('February');

    wrapper.find(MdKeyboardArrowRight).simulate('click');
    expect(wrapper.find('.month-name').text()).toContain('March');

    wrapper.find(MdKeyboardArrowLeft).simulate('click');
    expect(wrapper.find('.month-name').text()).toContain('February');
  });

  it('should render the year', () => {
    const wrapper = shallow(
      <CalendarInput
        setAmount={() => 5000}
        totalAmount={5000}
        setMonths={() => 0}
        setYear={() => 2021}
        setMonthName={() => `${allMonths[0]}`}
        title="Reach goal by"
      />
    );

    const year = wrapper.find('span').at(1);
    wrapper.find(MdKeyboardArrowRight).simulate('click');

    expect(year.text()).toContain(2021);
  });
});
