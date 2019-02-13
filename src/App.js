import React, { Component } from 'react';
import './App.css';
import DisplayCooperResult from './Components/DisplayCooperResult';
import DisplayPerfromanceData from './Components/DisplayPerformanceData';

import LoginForm from './Components/LoginForm';
import {authenticate, deAuthenticate} from './Modules/Auth';
import 'babel-polyfill';


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
      entrySaved: false,
      renderLoginForm: false
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
      });
  }

  logout() {
    deAuthenticate().then(() => {
      this.setState({authenticated: false});
      this.setState({renderLoginForm: false});

    })
  }

  onChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
      entrySaved: false
    })
  }

  entryHandler() {
    this.setState({entrySaved: true, updateIndex: true});
  }
  
  indexUpdated() {
    this.setState({updateIndex: false});
  }

  render() {
    let user;
    let renderLoginOrLogout;
    let performanceDataIndex;
    if (this.state.authenticated === false && this.state.renderLoginForm === true) {
      renderLoginOrLogout = (
        <React.Fragment>
          <LoginForm
            loginHandler={this.onLogin.bind(this)}
            inputChangeHandler={this.onChange.bind(this)}
          />
        </React.Fragment>
      )
      
    } else if (this.state.authenticated === false && this.state.renderLoginForm === false) {
      renderLoginOrLogout = (
        <button onClick={() => this.setState({renderLoginForm: true})}>Login</button>
      )
    } else {
      user = JSON.parse(sessionStorage.getItem('credentials')).uid;
      renderLoginOrLogout = (
        <React.Fragment>
          <p>Hi {user}</p>
          <button onClick={() => this.logout()}>Logout</button>
        </React.Fragment>
      )
      if (this.state.renderIndex === true) {
        performanceDataIndex = (
          <React.Fragment>
            <DisplayPerfromanceData
              updateIndex={this.state.updateIndex}
              indexUpdated={this.indexUpdated.bind(this)}
            />
            <button onClick={() => this.setState({renderIndex: false})}>Hide past entries</button>
          </React.Fragment>
        )
      } else {
        performanceDataIndex = (
          <button onClick={() => this.setState({renderIndex: true})}>Show past entries</button>
        )
      }
      
    }


    return (
      <div className="App">
        <div>
          <label>Distance</label>
          <input id="distance"
            onChange={this.onChange.bind(this)}>
          </input>
        </div>

        <select id="gender" onChange={this.onChange.bind(this)}>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>

        <div>
          <label>Age</label>
          <input id="age" onChange={this.onChange.bind(this)}></input>
        </div>

        <div>
          {renderLoginOrLogout}
          {performanceDataIndex}   
        </div>

        <DisplayCooperResult
          distance={this.state.distance}
          gender={this.state.gender}
          age={this.state.age}
          authenticated={this.state.authenticated}
          entrySaved={this.state.entrySaved}
          entryHandler={this.entryHandler.bind(this)}
        />
      </div>
    );
  }
}

export default App;
