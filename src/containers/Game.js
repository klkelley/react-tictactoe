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
      tie: newGameState.tie
    })
  };

  componentDidUpdate() {
  }

  render() {
    return (
      <div className={'game-board'}>
        <Board board={this.state.board} handleClick={this.handleClick}/>
      </div>
    )
  }
}

export default Game;