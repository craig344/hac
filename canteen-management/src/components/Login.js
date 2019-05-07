import React, { Component } from 'react';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            number: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({name: event.target.value});
    }

    handleSubmit(event) {
        alert('A form was submitted: ' + this.state.number);
        event.preventDefault();
    }

    render() {
        return(
            <div className="container register-form">
            <div className="form-content">
                <form onSubmit={this.handlesubmit} className="form">
                <div className="row">
                    <div className="col-md-6">
                    <div className="form-group">
                        <label className=""> Id Card Number </label>
                        <input type="number" className="form-control" id="number" placeholder="Enter Your Id Card Number" onChange={this.handleChange} value={this.state.number} />
                    </div>

                    <div className="form-group">
                        <label> Password </label>
                        <input type="password" className="form-control" id="password" value={this.state.password} onChange={this.state.handleChange} placeholder="Enter The Password" />
                    </div>
                    </div>
                </div>

                    <div>
                        <button type="submit" className="btnSubmit"> Login </button>
                    </div>
                </form>
            </div>
            </div>
        )
    }
}

export default Login;