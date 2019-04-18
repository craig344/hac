import React, { Component } from 'react';
import NavBar from './navBar/navBar';
import './App.css';

class App extends Component {
  
  render() {

    return (
  
  <div>
  <NavBar/>
    <div className="App">
    <div className="App__Aside"> </div>
    <div className="App__Form">
      <div className="PageSwitcher">
        <a href="#" className="PageSwitcher__Item"> Sign In </a>
        <a href="#" className="PageSwitcher__Item PageSwitcher__Item--Active"> Sign Up </a>
      </div>

      <div className="FormCenter">
        <form className="FormFields" onSubmit={this.handleSubmit}>

        <div className="FormField">
          <label className="FormField__Label" htmlFor="fname"> First Name </label>
          <input type="text" id="fname" className="FormField__Input" placeholder="Enter your first name" name="fname" />
        </div>

        <div className="FormField">
          <label className="FormField__Label" htmlFor="lname"> Last Name </label>
          <input type="text" className="FormField__Input" id="lname" placeholder="Enter your last name" name="lname" />
        </div>
        

        <div className="FormField">
          <label className="FormField__Label" htmlFor="number"> ID Card Number </label>
          <input id="number" className="FormField__Input" placeholder="Enter your id card number" name="number" />
        </div>

        <div className="FormField">
          <label className="FormField__Label" htmlFor="password"> Password </label>
          <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" />
        </div>

        <div className="FormField">
          <label className="FormField__Label" htmlFor="email"> E-mail Address </label>
          <input type="email" id="email" className="FormField__Input" placeholder="Enter your e-mail address" name="email" />
        </div>

        <div className="FormField">
          <button className="FormField__Button mr-20"> Sign Up </button>
        </div>

        </form>
      </div>

    </div>
    </div>
  </div>
    );
  }
}

export default App;