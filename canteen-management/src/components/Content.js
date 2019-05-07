    
import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';



function Content() {
    return (
        <div className="">
            <div className=""> </div>

            <div className="">

                <div className="">
                    <NavLink exact to="/" activeClassName="" className=""> Sign Up </NavLink>
                    <NavLink exact to="/login" activeClassName="" className=""> Login </NavLink>
                </div>

                <Route exact path="/" component={SignUp}>

                </Route>

                <Route exact path="/login" component={Login}>

                </Route>

            </div>
            




        </div>
    );
}

export default Content;