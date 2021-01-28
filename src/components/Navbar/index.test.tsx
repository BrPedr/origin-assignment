import * as React from 'react';

import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import 'jest-extended';

import Navbar from './index';
import Logo from '../../icons/Logo.jsx';

configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('has confirm text', () => {
    const wrapper = shallow(<Navbar>Confirm</Navbar>);
    expect(wrapper.find(Logo)).toHaveLength(1);
  });
});
