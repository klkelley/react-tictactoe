import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('displays Welcome to Tic Tac Toe', () => {
  const wrapper = shallow(<App/>);
  expect(wrapper.find('.App-title').text()).toEqual('Welcome to Tic Tac Toe');
});

