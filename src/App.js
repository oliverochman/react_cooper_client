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
      age: '',
      email: '',
      password: '',
      loginMessage: ''
    }
  }

  onLogin(event) {
    if (this.state.email !== 'johndoe@mail.com') {
      this.setState({ loginMessage: "Wrong password" })
    } else {
      this.setState({ authenticated: true, loginMessage: `Welcome ${this.state.email}` });
    }
  }

  onChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  renderLoginElements() {
    if (this.state.authenticated && this.state.loginMessage) {
      return (
        <div>
          <p>{this.state.loginMessage}</p>

        </div>
      )
    } else {
      return (
        <div>
          <p>{this.state.loginMessage}</p>
          <LoginForm loginHandler={this.onLogin.bind(this)} inputChangeHandler={this.onChange.bind(this)} />

        </div>

      )
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <label>Distance</label>
          <input id="distance" onChange={(e) => this.setState({ distance: e.target.value })}></input>
        </div>

        <select id="gender" onChange={(e) => this.setState({ gender: e.target.value })}>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>

        <div>
          <label>Age</label>
          <input id="age" onChange={(e) => this.setState({ age: e.target.value })}></input>
        </div>

        <div>
          {this.renderLoginElements()}
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
