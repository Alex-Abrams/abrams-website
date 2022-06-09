import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    if (window.performance) {
      if (performance.navigation.type == 1) {
        alert( "This page is reloaded" );
      } else {
        alert( "This page is not reloaded");
      }
    };
  }

  componentDidMount() {
    console.log('hello');
  }

  render() {
    return(
      <div>
        <h1>Signup Page</h1>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Signup;
