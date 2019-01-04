import React, { Component } from 'react';
import { cooperCalculator } from './CooperCalculator';

class DisplayCooperResult extends Component {

  calculate() {
    return cooperCalculator(this.props.distance, this.props.gender, this.props.age);
  }

  render() {
    return (
      <div>
        <p>Result: {this.calculate()}</p>
      </div>
    )
  }
}

export default DisplayCooperResult