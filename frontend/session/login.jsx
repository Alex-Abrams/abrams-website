import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }

  handleInput(type) {
    return (event) => {
      this.setState({ [type]: event.target.value });
    };
  }

  handleSubmit() {
    this.props.receiveCurrentUser(this.state);
  }


  render() {
    return(
      <div>
      <h3>Login Page</h3>
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
          <button className="login-button" onClick={() => this.handleSubmit()}>Submit</button>
        </form>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Login;
