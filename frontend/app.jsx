// holds all my app routes
import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import FrontPage from './front_page/front_page';
import Login from './session/login';
import Signup from './session/signup';

const App = () => (
  <div className="app-routes-wrapper">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
