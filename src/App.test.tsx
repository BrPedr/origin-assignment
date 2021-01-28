import * as React from 'react';

import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import App from './App';
import Navbar from './components/Navbar';
import Savings from './pages/Savings';

configure({ adapter: new Adapter() });

describe('<CalendarInput />', () => {
  it('renders children when passed in', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Navbar)).toHaveLength(1);
    expect(wrapper.find(Savings)).toHaveLength(1);
  });
});
