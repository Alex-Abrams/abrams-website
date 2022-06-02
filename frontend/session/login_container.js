import { connect } from 'react-redux';
import React from 'react';
import { receiveCurrentUser } from '../actions/session_actions';
import Login from './login';

const mapDispatchToProps = dipatch => ({
  receiveCurrentUser: () => dispatch(receiveCurrentUser(user)),
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
