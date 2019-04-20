import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';


function Content() {
    return (
        <div className="App">
            <div className="App__Aside"> </div>

            <div className="App__Form">

                <div className="PageSwitcher">
                    <NavLink to="/login" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item"> Login </NavLink>
                    <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item"> Sign Up </NavLink>
                </div>

                <div className="FormTitle">
                    <NavLink to="/login" activeClassName="FormTitle__Link--Active" className="FormTitle__Link"> Login </NavLink> or
  <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link"> Sign Up </NavLink>
                </div>

                <Route exact path="/" component={SignupForm}>

                </Route>

                <Route path="/login" component={LoginForm}>

                </Route>

            </div>
        </div>
    );
}

export default Content;

