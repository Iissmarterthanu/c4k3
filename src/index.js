import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import App2 from './App2';
import './index.css'

ReactDOM.render(
  // <React.StrictMode>
    <Router>
      <App2 />
    </Router>,
  // </React.StrictMode>,
  document.getElementById('root')
);

