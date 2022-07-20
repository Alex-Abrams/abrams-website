// this is the test actions for alex_branch
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_NEW_INFO = 'RECEIVE_NEW_INFO';
export const RECEIVE_SHOPPING_CART = 'RECEIVE_SHOPPING_CART';

export const RECEIVE_NEW_INFO = 'RECEIVE_NEW_INFO'; // change_branch changes
export const RECEIVE_SHOPPING_CART = 'RECEIVE_SHOPPING_CART';

export const receiveCurrentUser = current_user => ({
  type: RECEIVE_CURRENT_USER,
  current_user
});


export const newAction = () => ({
  type: RECEIVE_NEW_INFO,
});

export const receiveShoppingCart = cart => ({
  type: RECEIVE_SHOPPING_CART,
});
