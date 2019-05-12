import React from 'react';
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
    logout = (event) => {
        event.preventDefault();
        this.props.logout();
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink exact to="/menu" activeClassName="nav-link  active" className="navbar-brand"> GU-Canteen </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav nav-fill">
                        <li className="nav-item active">
                            <NavLink exact to="/menu" activeClassName="nav-link  active" className="nav-link"> Menu </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/cart" activeClassName="nav-link  active" className="nav-link"> Cart </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/orders" activeClassName="nav-link  active" className="nav-link"> Orders </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/kitchen" activeClassName="nav-link  active" className="nav-link"> Kitchen </NavLink>
                        </li>
                    </ul>

                </div>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link active"  href="#">Welcome {this.props.user.name}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={this.logout} href="#">Logout</a>
                    </li>
                </ul>
            </nav>
        );

    }

}

export default Navbar;