import React, { Component } from 'react';
import './App.css';
import DisplayCooperResult from './DisplayCooperResult'
import LoginForm from './LoginForm'

class App extends Component {
  // Set state authenticated: false
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      distance: '',
      gender: 'female',
      age: ''
    }
  }

  login(e) {
    this.setState({ authenticated: true});
  }

  render() {

  let loginStatus;

    if (this.state.authenticated === false) {
      loginStatus = <LoginForm onChangeValue={this.login.bind(this)}/>
    } else {
      loginStatus = <p>Welcome johndoe@mail.com</p>
    }

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

        <div>
          {loginStatus}
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
