import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends Component {
    constructor() {
        super();

        this.state={
            number: '',
            password: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form is submitted');
        console.log(this.state);
    }

    render() {
        return (
        <div className="FormCenter">
         
         <form onSubmit={this.handleSubmit} className="FormFields">
         
            <div className="FormField">
            <label className="FormField__Label" htmlFor="number"> ID Card Number </label>
            <input id="number" className="FormField__Input" placeholder="Enter your id card number" name="number" value={this.state.number} onChange={this.handleChange} />
          </div>
  
          <div className="FormField">
            <label className="FormField__Label" htmlFor="password"> Password </label>
            <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
          </div>


          <div className="FormField">
            <button className="FormField__Button mr-20"> Login </button>  <Link to="/" className="FormField__Link">Create an account</Link>
          </div>
        
         </form>
        
        </div>
        );
    }
}

export default LoginForm;