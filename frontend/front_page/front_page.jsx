import React, { Component } from 'react';

import { Route, Link, NavLink, Outlet } from 'react-router-dom';
import Login from '../session/login';
import Signup from '../session/signup';

class FrontPage extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return(
      <section className="frontpage">
        <h1>HELLO WORLD!??!?!?!?</h1>
        <Link to="/login">login</Link>
        <Link to="/signup">signup</Link>
        <Outlet />
      </section>
    );
  }
}


export default FrontPage;
