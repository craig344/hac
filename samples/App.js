import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/dash" component={Dashboard}></Route>
    </BrowserRouter>
  );
}


class Login extends React.Component {
  state = {lstate:false}
  handleClick = () => {
    console.log("click");
    this.setState({lstate:true});
  };

  render() {
    if(!this.state.lstate){
      return (
        <div>
          <h2>Login</h2>        
          <button onClick={this.handleClick}>Login</button>
        </div>
      )
    }else{
      return (
        <Redirect to="/dash"/>
      )
    }
    
  }
}

class Dashboard extends React.Component{
  render(){
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  }
}


export default App;


