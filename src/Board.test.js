import React from 'react';
import Board from './Board';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Square from './Square';

Enzyme.configure({adapter: new Adapter()});

it('has three .board-rows', () => {
  const wrapper = shallow(<Board/>);
  expect(wrapper.find('.board-row')).toHaveLength(3);
});

it('has 9 squares', () => {
  const wrapper = shallow(<Board/>);
  expect(wrapper.find(Square)).toHaveLength(9);
});

it('allows for markers to be placed on the board', () => {
  const wrapper = mount(<Board/>);
  wrapper.find('.board-row').children().first().simulate('click');
  wrapper.find('.board-row').children().last().simulate('click');
  expect(wrapper.find('.board-row').children().first().text()).toEqual('X');
  expect(wrapper.find('.board-row').children().last().text()).toEqual('X');
});

