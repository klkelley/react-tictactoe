import React from 'react';
import Board from './Board';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
Enzyme.configure({adapter: new Adapter()});

it('renders the value of each square based on board given', () => {
  const wrapper = shallow(<Board board={[0, 1, 2, 3, 4, 5, 6, 7, 8]}/>);
  wrapper.setProps({board: [0, 1, 2, 3, 4, 5, 6, 7, 'X']})
  expect(wrapper.find('.board-row').children().first().props().value).toEqual(0);
  expect(wrapper.find('.board-row').children().last().props().value).toEqual('X');
});

