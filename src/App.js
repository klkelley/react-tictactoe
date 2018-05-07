import React, { Component } from 'react';
import logo from './logo.svg';
import Board from './Board';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Tic Tac Toe</h1>
        </header>
        <p className="App-intro">
          Tic Tac Toe!
        </p>
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}

export default App;
