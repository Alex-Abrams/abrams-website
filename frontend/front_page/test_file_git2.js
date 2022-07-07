import React, { Component, useState, useEffect } from 'react';

import { Route, Link, NavLink, Outlet } from 'react-router-dom';
import Login from '../session/login';
import Signup from '../session/signup';

import computer_background from '../images/computer_background.png';

class TestPageTwo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);

    if (window.performance) {
      if (performance.navigation.type == 1) {
        alert( "This page is reloaded" );
      } else {
        alert( "This page is not reloaded");
      }
    };
  }


  submitFile() {
    if (window.performance) {
      if (performance.navigation.type == 1) {
        alert( "This page is reloaded" );
      } else {
        alert( "This page is not reloaded");
      }
      if (window.performance) {
        if (performance.navigation.type == 1) {
          alert( "This page is reloaded" );
        } else {
          alert( "This page is not reloaded");
        }
        if (window.performance) {
          if (performance.navigation.type == 1) {
            alert( "This page is reloaded" );
          } else {
            alert( "This page is not reloaded");
          }
  };



  render() {

    return(
      <section className="frontPage" style={page_style}>
        <nav className="frontpage-nav">
          <h2 className="texty">Alexander Abrams</h2>
          <h3 className="d">Software Developer</h3>
        </nav>

        <img className="computer_pic"
            src={computer_background}
            style={{height: 55, width: 55}}>
          </img>


        <Link to="/login">login</Link>
        <Link to="/signup">signup</Link>

        <form className="login-form">
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


export default TestPageTwo;
