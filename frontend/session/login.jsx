import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }


  render() {
    return(
      <div>
      <h1>Login Page</h1>
        <form className="sessionForm">
          <input
            type="text"
            placeholder="username"
            value={this.state.username}
            ></input>
        </form>
      </div>
    );
  }
}

export default Login;
