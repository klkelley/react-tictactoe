import React, {Component} from 'react';
import Board from '../components/Board';
import {postMove} from '../api/ApiPost';

const States = {PLAYING: false, IDLE: true};

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentState: States.PLAYING,
      board: new Array(9).fill(null),
      gameState: false,
      gameResults: null
    }
  }

  handleClick = (move) => {
    this.transition(States.IDLE);
    if (!this.state.gameState) {
      const data = {
        "board": this.state.board,
        "spot": move
      };
      postMove(this.updateGameState, data);
    }
  };

  updateGameState = (newGameState) => {
    this.setState({
      board: newGameState.board,
      gameState: newGameState.gameState,
      gameResults: newGameState.gameResults
    });
    this.state.gameState ? this.transition(States.IDLE) : this.transition(States.PLAYING)
  };

  gameResults() {
    return this.state.gameState ?
      <div className={'game-results'}><p>{this.state.gameResults}</p></div> : <div className={'game-results'}/>
  }

  transition(to) {
    this.setState({currentState: to})
  }

  render() {
    return (
      <div className={'game-board'}>
        {this.gameResults()}
        <Board board={this.state.board} handleClick={this.handleClick}
               disabled={this.state.currentState.valueOf()}/>
      </div>
    )
  }
}

export default Game;