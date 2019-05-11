import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import SignUp from './components/SignUp';
import Login from './components/Login';
import Pages from './components/pages';

class App extends React.Component {



  render() {
    return (
      <BrowserRouter>

        <Route exact path="/SignUp" component={SignUp}></Route>
        <Route exact path="/menu" render={(props)=>(<Pages page={"menu"} {...props}/>)} ></Route>
        <Route exact path="/cart" render={(props)=>(<Pages page={"cart"} {...props}/>)} ></Route>
        <Route exact path="/orders" render={(props)=>(<Pages page={"orders"} {...props}/>)} ></Route>
        <Route exact path="/kitchen" render={(props)=>(<Pages page={"kitchen"} {...props}/>)} ></Route>
        <Route exact path="/" component={Login}></Route>       

      </BrowserRouter> 


    );
  }

}

export default App;
