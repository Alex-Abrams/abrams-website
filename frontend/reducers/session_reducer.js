import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../actions/session_actions';

const _nullUser = Object.freeze({
  id: null,
});

const sessionReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      // return Object.assign({}, { id: action.currentUser.id });
      return Object.assign({}, action.current_user);
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
};

export default sessionReducer;


/// TESTING GIT BRANCH COMMIT #2

/// TESTING GIT BRANCH MASTer
