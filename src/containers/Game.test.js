import React from 'react';
import Game from './Game';
import Board from '../components/Board';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
const api = require('../api/ApiPost');
Enzyme.configure({adapter: new Adapter()});

const gameState = <Game board={[0, 1, 2, 3, 4, 5, 'X', 'X', 'X']} />

api.postMove = jest.fn(() => {
  "board:['X, 1, 2, 3, 4, 5, 6, 7, 8]"
});

it('contains a 3x3 board', () => {
  const wrapper = shallow(gameState);
  expect(wrapper.find(Board).props().board).toHaveLength(9);
});

it('Submits a post request to API when an open square is clicked', () => {
  const wrapper = mount(gameState);
  wrapper.find('.board-row').children().first().simulate('click');
  expect(api.postMove).toBeCalled();
});

it('Does not submit a post request to API when there is a winner', () => {
  const wrapper = mount(gameState);
  wrapper.setState({winner: true})
  wrapper.find('.board-row').children().first().simulate('click');
  !expect(api.postMove).toBeCalled();
});

it('Does not submit a post request to API when there is a tie', () => {
  const wrapper = mount(gameState);
  wrapper.setState({tie: true});
  wrapper.find('.board-row').children().first().simulate('click');
  !expect(api.postMove).toBeCalled();
});

it('Displays a winner when someone has won', () => {
  const wrapper = mount(gameState);
  wrapper.setState({winner: true});
  wrapper.setState({winningPlayer: 'Player X Wins!'});
  expect(wrapper.find('.game-results').text()).toEqual("Player X Wins!");
})

it('Displays a tie when game is tied', () => {
  const wrapper = mount(gameState);
  wrapper.setState({tie: true});
  wrapper.setState({winningPlayer: "Its a tie!"});
  expect(wrapper.find('.game-results').text()).toEqual("Its a tie!");
});

it('Does not display any text if game isnt won or tied', () => {
  const wrapper = mount(gameState);
  expect(wrapper.find('.game-results').text()).toEqual("");
});

