import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import Menu from './Menu';



function Content() {
    return (
        <div className="">
            <div className=""> </div>

            <div className="">

                <div className="">
                    <NavLink exact to="/" activeClassName="" className=""> Sign Up </NavLink>
                    <NavLink exact to="/login" activeClassName="" className=""> Login </NavLink>
                    <NavLink exact to="/menu" activeClassName="" className=""> Menu </NavLink>
                </div>

                <Route exact path="/" component={SignUp}>

                </Route>

                <Route exact path="/login" component={Login}>

                </Route>

                <Route exact path="/menu" component={Menu}>

                </Route>

            </div>
            




        </div>
    );
}

export default Content;