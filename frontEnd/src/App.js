import React, { Component } from 'react';
import { BrowserRouter, Route, } from "react-router-dom";
import "react-table/react-table.css";
import Content from './components/Content';
import NavBar from './components/navBar';
import table from './components/table'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Route path="/home" component={table}>
          </Route>
          <Route path="/welcome" component={Content}>
          </Route>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;