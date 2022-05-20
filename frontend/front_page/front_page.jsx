import React, { Component } from 'react';

import { Route, Link, NavLink } from 'react-router-dom';
import Login from '../session/login';
import Signup from '../session/signup';

class FrontPage extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    console.log('hello');
    return(
      <section className="frontpage">
        <h1>HELLO WORLD!??!?!?!?</h1>
        <span>HELLO WORLD!</span>
        <span>HELLO WORLD!</span>
        <span>HELLO WORLD!</span>
        <span>HELLO WORLD!</span>
        <Link to="/login">login</Link>
        <Link to="/signup">signup</Link>
      </section>
    );
  }
}


export default FrontPage;
