import React, { Component } from 'react';
import './App.css';
import DisplayCooperResult from './DisplayCooperResult'
import LoginForm from './LoginForm'
import Auth from 'es-toker';

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
  }

  componentDidMount() {
    Auth.configure({
      apiUrl: 'http://localhost:3000/api/v1'
    }).catch(error => {
      debugger;
    });

  }


  onLogin() {
    debugger;
    const email = this.state.email;
    const password = this.state.password;
    Auth.emailSignIn({
      email: email,
      password: password,
      config: Auth.getConfig()
    })
    .then((response) => {
      debugger;
      console.log(response);
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
