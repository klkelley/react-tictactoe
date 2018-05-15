import React, {Component} from 'react';
import Square from './Square';

class Board extends Component {
  constructor(props) {
    super(props);
    this.handleClick = props.handleClick;
  }

  renderSquare(i) {
    return <Square value={i} disabled={this.props.disabled} handleClick={this.handleClick}/>
  }

  render() {
    return (
      <div className="board">
        <div className="board-row">
          {this.renderSquare(this.props.board[0] == null ? 0 : this.props.board[0])}
          {this.renderSquare(this.props.board[1] == null ? 1 : this.props.board[1])}
          {this.renderSquare(this.props.board[2] == null ? 2 : this.props.board[2])}
        </div>
        <div className="board-row">
          {this.renderSquare(this.props.board[3] == null ? 3 : this.props.board[3])}
          {this.renderSquare(this.props.board[4] == null ? 4 : this.props.board[4])}
          {this.renderSquare(this.props.board[5] == null ? 5 : this.props.board[5])}
        </div>
        <div className="board-row">
          {this.renderSquare(this.props.board[6] == null ? 6 : this.props.board[6])}
          {this.renderSquare(this.props.board[7] == null ? 7 : this.props.board[7])}
          {this.renderSquare(this.props.board[8] == null ? 8 : this.props.board[8])}
        </div>
      </div>
    )
  }
}

export default Board;