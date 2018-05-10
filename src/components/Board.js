import React, {Component} from 'react';
import Square from './Square';

class Board extends Component {
  constructor(props) {
    super(props);
    this.handleClick = props.handleClick;
  }

  renderSquare(i) {
    return <Square value={i} handleClick={this.handleClick}/>
  }

  render() {
    return (
      <div className="board">
        <div className="board-row">
          {this.renderSquare(this.props.board[0])}
          {this.renderSquare(this.props.board[1])}
          {this.renderSquare(this.props.board[2])}
        </div>
        <div className="board-row">
          {this.renderSquare(this.props.board[3])}
          {this.renderSquare(this.props.board[4])}
          {this.renderSquare(this.props.board[5])}
        </div>
        <div className="board-row">
          {this.renderSquare(this.props.board[6])}
          {this.renderSquare(this.props.board[7])}
          {this.renderSquare(this.props.board[8])}
        </div>
      </div>
    )
  }
}

export default Board;