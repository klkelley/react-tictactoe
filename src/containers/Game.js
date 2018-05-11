import React, {Component} from 'react';
import Board from '../components/Board';
import {postMove} from '../api/ApiPost';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      winner: false,
      tie: false,
      winningPlayer: null
    }
  }

  handleClick = (move) => {
    if (!this.state.winner && !this.state.tie) {
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
      winner: newGameState.winner,
      tie: newGameState.tie,
      winningPlayer: newGameState.winningPlayer
    })
  };

  componentDidUpdate() {
  }

  gameResults() {
    return this.state.winner || this.state.tie ?
      <div className={'game-results'}><p>{this.state.winningPlayer}</p></div> : <div className={'game-results'}/>
  }

  render() {
    return (
      <div className={'game-board'}>
        {this.gameResults()}
        <Board board={this.state.board} handleClick={this.handleClick}/>
      </div>
    )
  }
}

export default Game;