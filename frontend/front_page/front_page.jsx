import React, { Component } from 'react';

import { Route, Link, NavLink, Outlet } from 'react-router-dom';
import Login from '../session/login';
import Signup from '../session/signup';

class FrontPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (event) => {
      this.setState({ [type]: event.target.value });
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.receiveCurrentUser(user);
  }


  render() {
    return(
      <section className="frontpage">
        <h1>HELLO WORLD!??!?!?!?</h1>


        <Link to="/login">login</Link>
        <Link to="/signup">signup</Link>

        <form className="sessionForm">
          <input
            type="text"
            placeholder="username"
            value={this.state.username}
            onChange={ this.handleInput('username')}
            ></input>

          <input
            type="text"
            placeholder="email"
            value={this.state.email}
            onChange={ this.handleInput('email')}
            ></input>

          <input
            type="text"
            placeholder="password"
            value={this.state.password}
            onChange={ this.handleInput('password')}
            ></input>
          <button className="login-button" onClick={(event) => this.handleSubmit(event)}>Submit</button>
        </form>
        <Outlet />
      </section>
    );
  }
}


export default FrontPage;
