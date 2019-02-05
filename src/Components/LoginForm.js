import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      renderForm: false
    }
  }

  render() {
    let form;

    if (this.state.renderForm === true) {
      form = (
        <form>
          <div>
            <label >Email</label>
            <input id="email" onChange={this.props.inputChangeHandler}></input>
          </div>

          <div>
            <label>Password</label>
            <input id="password" onChange={this.props.inputChangeHandler}></input>
          </div>
          <button  onClick={(e) => this.props.loginHandler(e)} id="submit">Submit</button>
        </form>
      )
    }

    return (
      <div>
        <div>
          <button onClick={(e) => this.setState({ renderForm: true})} id="login">Login</button>
        </div>
        <div>{form}</div>
      </div>
      
    )
  }
}

export default LoginForm;
