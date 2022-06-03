// holds all my app routes
import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import FrontPage from './front_page/front_page';
import FrontPageContainer from './front_page/front_page_container';
import Login from './session/login';
import LoginContainer from './session/login_container';
import Signup from './session/signup';

const App = () => (
  <div className="app-routes-wrapper">
    <Provider store={ store }>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontPageContainer />}>
            <Route path="login" element={<LoginContainer />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </div>
);

export default App;
