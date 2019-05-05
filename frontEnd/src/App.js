import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactTable from "react-table";
import "react-table/react-table.css";
import ExportToExcel from './components/ExportToExcel';
import Content from './components/Content';
import NavBar from './components/navBar';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Content></Content>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;