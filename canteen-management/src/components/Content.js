    
import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import TablePaginationActions from './TablePaginationActions';



function Content() {
    return (
        <div className="">
            <div className=""> </div>

            <div className="">

                <div className="">
                    <NavLink exact to="/" activeClassName="" className=""> Sign Up </NavLink>
                    <NavLink exact to="/login" activeClassName="" className=""> Login </NavLink>
                    <NavLink exact to="/tablePaginationActions" activeClassName="" className=""> TablePaginationActions </NavLink>
                </div>

                <Route exact path="/" component={SignUp}>

                </Route>

                <Route exact path="/login" component={Login}>

                </Route>

                <Route exact path="/tablePaginationActions" component={TablePaginationActions}>

                </Route>

            </div>
            




        </div>
    );
}

export default Content;