import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import table from './table'


function Content() {
    return (
        <div>
        <div className="App">
            
                <div className="App__Aside"> </div>

                <div className="App__Form">

                    <div className="PageSwitcher">
                        <NavLink to="/welcome/login" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item"> Login </NavLink>
                        <NavLink exact to="/welcome" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item"> Sign Up </NavLink>
                    </div>

                    <div className="FormTitle">
                        <NavLink to="/welcome/login" activeClassName="FormTitle__Link--Active" className="FormTitle__Link"> Login </NavLink> or
<NavLink exact to="/welcome" activeClassName="FormTitle__Link--Active" className="FormTitle__Link"> Sign Up </NavLink>
                    </div>

                    <Route exact path="/welcome" component={SignupForm}>

                    </Route>

                    <Route path="/welcome/login" component={LoginForm}>

                    </Route>



                </div>
            </div>
        </div>


    );
}

export default Content;

