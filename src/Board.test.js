import React from 'react';
import Board from './Board';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('has three .board-rows', () => {
  const wrapper = shallow(<Board />);
  expect(wrapper.find('.board-row')).toHaveLength(3);
});

it('has 9 squares', () => {
  const wrapper = shallow(<Board />);
  expect(wrapper.find('.board-row').at(0).children()).toHaveLength(3);
  expect(wrapper.find('.board-row').at(1).children()).toHaveLength(3);
  expect(wrapper.find('.board-row').at(2).children()).toHaveLength(3);
});

