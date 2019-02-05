import React, { Component } from 'react';
import cooperCalculator from '../Modules/CooperCalculator';
import {saveData} from '../Modules/Performance-Data';

class DisplayCooperResult extends Component {
  
  calculate() {
    return cooperCalculator(this.props.distance, this.props.gender, this.props.age);
  }

  saveCooperData() {
    const result = this.calculate();
    saveData(result).then(response => {
      if (response === "all good") {
        this.props.entryHandler();
      } else {
        console.log('error')
      }
    });
  }


  render() {
    let results;
    let saveButton;

    if (this.props.authenticated === true && this.props.entrySaved === false) {
      saveButton = (
        <React.Fragment>
          <button onClick={e => this.saveCooperData(e)}>Save entry</button>
        </React.Fragment>
      )
    } else if (this.props.authenticated === true && this.props.entrySaved === true) {
      saveButton = (
        <React.Fragment>
          <p>Your entry was saved</p>
        </React.Fragment>
      )
    }

    if (this.props.age !== '' && this.props.distance !== '') {
      results = (
        <React.Fragment>
          <p>{this.props.age} y/o {this.props.gender} running {this.props.distance} meters.</p> 
          <p>Result: {this.calculate()}</p>
          {saveButton}
        </React.Fragment>
      )
    }
    return (
      <div>
        {results}
      </div>
    )
  }
}

export default DisplayCooperResult