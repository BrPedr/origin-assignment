import * as React from 'react';

import { configure, shallow, ShallowWrapper } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import 'jest-extended';

import Button from './index';

configure({ adapter: new Adapter() });

describe('<Button />', () => {
  let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeEach(() => {
    wrapper = shallow(<Button>Confirm</Button>);
  });

  it('check if children prop type', () => {
    expect(wrapper.props().children).toBeString();
  });

  it('has confirm text', () => {
    const wrapper = shallow(<Button>Confirm</Button>);
    expect(wrapper.text()).toEqual('Confirm');
  });
});
