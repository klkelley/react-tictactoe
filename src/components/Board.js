import React, {Component} from 'react';
import Square from './Square';

class Board extends Component {
  constructor(props) {
    super(props);
    this.handleClick = props.handleClick;
  }

  renderSquare(i, disabled) {
    return <Square value={i} disabled={disabled} handleClick={this.handleClick}/>
  }

  render() {
    return (
      <div className="board">
        <div className="board-row">
          {this.renderSquare(this.props.board[0], this.props.disabled)}
          {this.renderSquare(this.props.board[1], this.props.disabled)}
          {this.renderSquare(this.props.board[2], this.props.disabled)}
        </div>
        <div className="board-row">
          {this.renderSquare(this.props.board[3], this.props.disabled)}
          {this.renderSquare(this.props.board[4], this.props.disabled)}
          {this.renderSquare(this.props.board[5], this.props.disabled)}
        </div>
        <div className="board-row">
          {this.renderSquare(this.props.board[6], this.props.disabled)}
          {this.renderSquare(this.props.board[7], this.props.disabled)}
          {this.renderSquare(this.props.board[8], this.props.disabled)}
        </div>
      </div>
    )
  }
}

export default Board;