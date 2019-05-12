import React from 'react';
import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom";
import SignUp from './components/SignUp';
import Login from './components/Login';
import Pages from './components/pages';

class App extends React.Component {
  state = {
    isLoggedIn: false,
    user:null
  }

  login = (user)=>{
    this.setState({isLoggedIn:true,user:user})
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/SignUp" component={SignUp}></Route>
          <Route exact path="/login" render={(props) => (<Login login={this.login} {...props} />)} ></Route>
          <PrivateRoute path="/" isLoggedIn={this.state.isLoggedIn} user={this.state.user} component={Pages} />)} />
        </Switch>
      </BrowserRouter>

    );
  }

}


const PrivateRoute = ({ component: Component, ...rest }) => ( 
  
  <Route {...rest} render={(props) => 
     (
    rest.isLoggedIn === true
      ? <Component {...props} />
       : <Redirect to='/login' />
   )
 
} />
)

export default App;
