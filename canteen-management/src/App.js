import React from 'react';
import Content from './components/Content';
import { BrowserRouter } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <div>
          <Content />
        </div>
    </BrowserRouter>


  );
}

export default App;
