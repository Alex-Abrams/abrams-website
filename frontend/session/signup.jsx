import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
  constructor(props) {
    super(props);
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
