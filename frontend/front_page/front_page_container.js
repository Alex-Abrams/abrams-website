import { connect } from 'react-redux';
import React from 'react';
import { receiveCurrentUser } from '../actions/session_actions';
import FrontPage from './front_page';

const mapDispatchToProps = dispatch => ({
  receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user)),
});

export default connect(
  null,
  mapDispatchToProps
)(FrontPage);
