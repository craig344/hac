import React from 'react';
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import SignUp from './components/SignUp';
import Login from './components/Login';
import Navbar from "./components/Navbar";
import Menu from './components/Menu';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 card bg-light">

          <ul className="nav nav-tabs">
            <li className="nav-item">
              <NavLink exact to="/" activeClassName="nav-link  active" className="nav-link"> Login </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/signUp" activeClassName="nav-link  active" className="nav-link"> Sign Up </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/menu" activeClassName="nav-link  active" className="nav-link"> Menu </NavLink>
            </li>
          </ul>
          <Route exact path="/SignUp" component={SignUp}>

          </Route>

          <Route exact path="/" component={Login}>

          </Route>
          <Route exact path="/menu" component={Menu}>

          </Route>
        </div>
      </div>
    </BrowserRouter>


  );
}

export default App;
