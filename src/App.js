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
      </div>
    );
  }
}

export default App;
