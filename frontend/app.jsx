// holds all my app routes
import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import computer_background from './images/computer_background.png';

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
            {/* <Route path="signup" element={<Signup />} />
          <Route
          path="*"
          element={<Navigate to="/" replace />}
          />
          */}
          </Route>
          <Route path="api/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </div>
);

export default App;

// <Route path="signup" element={<Signup />} />
