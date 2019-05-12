import React, { Component } from 'react';
import { withRouter, NavLink } from "react-router-dom";

import Axios from 'axios';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            number: '',
            pass: '',
            loggedIn: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        Axios.post('http://localhost:4000/api/users/login', {
            id_card_no: this.state.number,
            password: this.state.pass
        })
            .then((response)=> {
                console.log(response);
                var data = response.data;               
                if(data.success){
                    this.props.login(data.data.user);
                    this.props.history.push("/pages/menu")
                } else {
                    alert("wrong credentials")
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        //this.setState({ loggedIn: true });
        
        // this.props.fn();

    }


    render() {
        if (!this.state.loggedIn) {
            return (
                <div>
                    <h1 className="display-3 text-center my-4">Canteen Ordering</h1>
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
                            </ul>
                            <div className="form-content">
                                <form onSubmit={this.handleSubmit} className="form">
                                    <div className="row">
                                        <div className="col-3"></div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className=""> Id Card Number: </label>
                                                <input type="text" className="form-control" id="number" placeholder="Enter Your Id Card Number" onChange={this.handleChange} value={this.state.number} />
                                            </div>

                                            <div className="form-group">
                                                <label> Password: </label>
                                                <input type="password" className="form-control" id="pass" value={this.state.password} onChange={this.handleChange} placeholder="Enter The Password" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-3"></div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <button type="submit" className="btn btn-primary"> Login </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

    }
}

export default withRouter(Login);