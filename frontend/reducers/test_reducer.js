import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../actions/session_actions';

const _nullUser = Object.freeze({
  id: null,
});

const testReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      // return Object.assign({}, { id: action.currentUser.id });
      return Object.assign({}, action.current_user); /// commit 2 for new_reducer_branch
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
};

export default testReducer;
