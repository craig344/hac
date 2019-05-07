import React from 'react';
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expanded-sm bg-dark navbar-dark">
            <NavLink exact to="/" activeClassName="" className="navbar-brand"> GUCanteen </NavLink>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink exact to="#" activeClassName="" className="nav-link"> Link 1 </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact to="#" activeClassName="" className="nav-link"> Link 2 </NavLink>
                </li>
                <li className="nav-item dropdown">
                    <NavLink exact to="#" activeClassName="dropdown" className="nav-link dropdown-toggle" id="navbardrop">Dropdown</NavLink>
                    <div className="dropdown-menu">
                        <NavLink exact to="#" activeClassName="" className="dropdown-item"> Link 1 </NavLink>
                        <NavLink exact to="#" activeClassName="" className="dropdown-item"> Link 2 </NavLink>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;