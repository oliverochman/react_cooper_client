import React, { Component } from 'react';

class LoginForm extends Component {
  render() {
    return (
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
}

export default LoginForm;
