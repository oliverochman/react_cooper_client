import React, { Component } from 'react';
import './App.css';
import DisplayCooperResult from './DisplayCooperResult'
import LoginForm from './LoginForm'
import Auth from 'j-toker';

class App extends Component {
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
    Auth.configure({
      apiUrl: 'http://localhost:3000/api/v1',
      emailSignIn: '/auth/sign_in',

      tokenFormat: {
        "access-token": "{{ access-token }}",
        "token-type":   "Bearer",
        client:         "{{ client }}",
        expiry:         "{{ expiry }}",
        uid:            "{{ uid }}"
      },
    });
  }


  onLogin() {
    debugger;
    const email = this.state.email;
    const password = this.state.password;
    Auth.emailSignIn({
      email: email,
      password: password
    })
    .then(function(response) {
      debugger;
      console.log(response);
    })
    .fail(function (error) {
      debugger;
      console.log(error);
    });
  }

    // if (this.state.password !== 'password') {
    //   this.setState({ loginMessage: "Wrong password", authenticated: false })
    // } else if (this.state.email !== 'johndoe@mail.com') {
    //   this.setState({ loginMessage: "Wrong email", authenticated: false })
    // } else {
    //   this.setState({ authenticated: true, loginMessage: `Welcome ${this.state.email}` });
    // }
  

  onChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  renderLoginElements() {

    if (!this.state.authenticated) {
      return (
        <div>
          <LoginForm
            loginHandler={this.onLogin.bind(this)}
            inputChangeHandler={this.onChange.bind(this)}
          />
        </div>
      )
    }
  }

  render() {
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
          {this.state.loginMessage}
          <LoginForm
            loginHandler={this.onLogin.bind(this)}
            inputChangeHandler={this.onChange.bind(this)}
          />
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
