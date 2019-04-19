import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import NavBar from './navBar/navBar';
import './App.css';

class App extends Component {
  
  render() {

    return (
   <BrowserRouter>
    <div className="App">

      <div>
       <NavBar/>
      </div>

    <div className="App__Aside"> </div>
    
    <div className="App__Form">
    
      <div className="PageSwitcher">
        <NavLink to="/login" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item"> Login </NavLink>
        <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item"> Sign Up </NavLink>
      </div>

      <div className="FormTitle">
        <NavLink to="/login" activeClassName="FormTitle__Link--Active" className="FormTitle__Link"> Login </NavLink> or 
        <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link"> Sign Up </NavLink>
      </div>

      <Route exact path="/" component={SignupForm}>

      </Route>

      <Route path="/login" component={LoginForm}>
      
      </Route>
  
    </div>
  
  </div>
  </BrowserRouter>
    );
  }
}

export default App;