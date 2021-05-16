import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router history = 'history' basename={process.env.PUBLIC_URL}>
    <App/>
  </Router>,
  document.getElementById('root')
);
