import React from 'react';
import ReactDOM from "react-dom/client";

import { createRoot } from 'react-dom/client';

import configureStore from './store/store';

import App from './app';

import { login, logout, signup } from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();


  const container = document.getElementById('root');
  const root = createRoot(container);

  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.signup = signup;
  window.logout = logout;


  root.render( <App store={store} /> );
});
