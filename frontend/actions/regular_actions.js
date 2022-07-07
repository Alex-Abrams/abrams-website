export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

export const receiveCurrentUser = current_user => ({
  type: RECEIVE_CURRENT_USER,
  current_user
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});
// export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
// export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
//
// export const receiveCurrentUser = current_user => ({
//   type: RECEIVE_CURRENT_USER,
//   current_user
// });
//
// export const logoutCurrentUser = () => ({
//   type: LOGOUT_CURRENT_USER,
// });
