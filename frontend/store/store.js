import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import userReducer from '../reducers/user_reducer';


const configureStore = (preloadedState = {}) => (
  createStore(
    // rootReducer,
    userReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  )
);

export default configureStore;
