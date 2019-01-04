import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayCooperResult from './DisplayCooperResult'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <label>Distance</label>
          <input id="distance"></input>
        </div>
        
        <select id="gender">
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>

        <div>
          <label>Age</label>
          <input id="age"></input>
        </div>

      <DisplayCooperResult
        distance={this.state.distance}
        gender={this.state.gender}
        age={this.state.age}  
      />
      </div>
    );
  }
}

export default App;
