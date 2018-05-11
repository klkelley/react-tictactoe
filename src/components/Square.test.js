import React from 'react';
import Square from './Square';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

it('Will render a marker if its available', () => {
  const wrapper = shallow(<Square />);
  wrapper.setProps({value: 'X'});
  expect(wrapper.find('button').text()).toEqual('X');
});

it('If no marker is on square it will remain blank', () => {
  const wrapper = shallow(<Square />);
  wrapper.setProps({value: 0});
  expect(wrapper.find('button').text()).toHaveLength(0);
});