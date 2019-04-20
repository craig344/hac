import React, { Component } from 'react';
import { BrowserRouter} from "react-router-dom";
import Content from './components/Content';
import NavBar from './components/navBar';

class App extends Component {

  render() {

    return (
      <BrowserRouter>

          <div>
            <NavBar />
            <Content />
          </div>

      </BrowserRouter>
    );
  }
}

export default App;