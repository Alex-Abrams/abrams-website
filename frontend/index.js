import React from 'react';
import ReactDOM from "react-dom/client";

import { createRoot } from 'react-dom/client';

import configureStore from './store/store';

import App from './app';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();


  const container = document.getElementById('root');
  const root = createRoot(container);

  window.store = store;
  window.getState = store.getState;

  root.render( <App store={store} /> );
});
