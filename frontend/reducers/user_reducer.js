import merge from 'lodash/merge';

const userReducer = (state = {}, action) => {
  Object.freeze(state);

  return state;
};

export default userReducer;
