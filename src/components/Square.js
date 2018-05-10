import React, {Component} from 'react';

class Square extends Component {

  placeMarker() {
    if (Number.isInteger(this.props.value)) {
      return () => this.props.handleClick(this.props.value);
    }
  }

  render() {
    return (
      <button className="square" onClick={this.placeMarker()}>
        {Number.isInteger(this.props.value) ? null : this.props.value}
      </button>
    )
  }
}

export default Square;