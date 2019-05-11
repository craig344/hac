import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            number: '',
            dob: '',
            password: '',
            address: '',
            email: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        alert('A form was submitted: ' + this.state.name);
        event.preventDefault();
    }

    render() {
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
                                    <div className="col-md-6">

                                        <div className="form-group">
                                            <label> Name: </label>
                                            <input type="text" className="form-control" id="name" value={this.state.name} placeholder="Enter Your Name" onChange={this.handleChange} />
                                        </div>

                                        <div className="form-group">
                                            <label> Id Card Number: </label>
                                            <input type="text" className="form-control" id="number" value={this.state.number} placeholder="Enter Your Id Card Number" onChange={this.handleChange} />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label> DOB: </label>
                                            <input type="date" className="form-control" id="date" value={this.state.dob} placeholder="Enter Your Dob" onChange={this.handleChange} />
                                        </div>

                                        <div className="form-group">
                                            <label> Password: </label>
                                            <input type="password" className="form-control" id="password" value={this.state.password} placeholder="Enter Your password" onChange={this.handleChange} />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label> Address: </label>
                                            <input type="text" className="form-control" id="address" value={this.state.address} placeholder="Enter Your address" onChange={this.handleChange} />
                                        </div>

                                        <div className="form-group">
                                            <label> Email Address: </label>
                                            <input type="email" className="form-control" id="email" value={this.state.email} placeholder="Enter Your Email address" onChange={this.handleChange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary"> Sign Up </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default SignUp;