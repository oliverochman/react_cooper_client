import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
      </div>
    );
  }
}

export default App;
