import React, { Component } from 'react';
import './App.css';
import DisplayCooperResult from './DisplayCooperResult'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: '',
      gender: 'female',
      age: ''
    }
  }
  render() {
    return (
      <div className="App">
        <div>
          <label>Distance</label>
          <input id="distance" onChange={(e) => this.setState({ distance: e.target.value})}></input>
        </div>
        
        <select id="gender" onChange={(e) => this.setState({gender: e.target.value})}>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>

        <div>
          <label>Age</label>
          <input id="age" onChange={(e) => this.setState({ age: e.target.value})}></input>
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
