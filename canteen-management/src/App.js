import React from 'react';
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import SignUp from './components/SignUp';
import Login from './components/Login';
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 card bg-light">

          <ul class="nav nav-tabs">
            <li class="nav-item">
              <NavLink exact to="/" activeClassName="nav-link  active" className="nav-link"> Login </NavLink>
            </li>
            <li class="nav-item">
              <NavLink exact to="/signUp" activeClassName="nav-link  active" className="nav-link"> Sign Up </NavLink>
            </li>

          </ul>
          <Route exact path="/SignUp" component={SignUp}>

          </Route>

          <Route exact path="/" component={Login}>

          </Route>
        </div>
      </div>
    </BrowserRouter>


  );
}

export default App;
