import React, { Component } from 'react';
import './App.css';
import DisplayCooperResult from './DisplayCooperResult'
import LoginForm from './LoginForm'
import {authenticate, deAuthenticate} from './Auth'

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

  onLogin(e) {
    e.preventDefault();
    authenticate(this.state.email, this.state.password)
      .then(resp => {
        if (resp.authenticated === true) {
          this.setState({authenticated: true});
        } else {
          console.log(resp);
        }
  })}

  logout() {
    deAuthenticate().then(() => {
      this.setState({authenticated: false});
    })
  }

  onChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  
  render() {
    let user;
    let renderLoginOrLogout;
    if (this.state.authenticated === false) {
      renderLoginOrLogout = (
        <div>
          <LoginForm
            loginHandler={this.onLogin.bind(this)}
            inputChangeHandler={this.onChange.bind(this)}
          />
        </div>
      )
      
    } else {
      user = JSON.parse(sessionStorage.getItem('credentials')).uid;
      renderLoginOrLogout = (
        <div>
          <p>Hi {user}</p>
          <button onClick={(e) => this.logout()}>Logout</button>
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
          {renderLoginOrLogout}     
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
