import React, { Component } from 'react';
import './App.css';
import DisplayCooperResult from './DisplayCooperResult'
import LoginForm from './LoginForm'
import {authenticate} from './Auth'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      distance: '',
      gender: 'female',
      age: '',
      email: '',
      password: ''
    }
  }

  onLogin() {
    this.setState({authenticated: true});
    authenticate(this.state.email, this.state.password)
      .then(resp => {
        if (resp.authenticated === true) {
          console.log(this.state);
          console.log(resp);
        } else {
          this.setState({authenticated: false});
        }
  })}

  onChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  
  render() {
    let renderLogin;
    if (this.state.authenticated === false) {
      renderLogin = (
        <div>
          <LoginForm
            loginHandler={this.onLogin.bind(this)}
            inputChangeHandler={this.onChange.bind(this)}
          />
        </div>
      )
    }

    return (
      <div className="App">
        <div>
          <label>Distance</label>
          <input id="distance"
            onChange={this.onChange.bind(this)}>
          </input>
        </div>

        <select id="gender" onChange={(e) => this.setState({ gender: e.target.value })}>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>

        <div>
          <label>Age</label>
          <input id="age" onChange={this.onChange.bind(this)}></input>
        </div>

        <div>
          {renderLogin}     
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
