import React, {Component} from 'react';

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marker: null,
    };
  }

  placeMarkerOnSquare() {
    return this.setState({marker: 'X'});
  }

  render() {
    return (
      <button className="square" onClick={() => this.placeMarkerOnSquare()}>
        {this.state.marker}
      </button>
    );
  }
}

export default Square;