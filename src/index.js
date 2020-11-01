import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

const path = window.location.pathname.slice(1);
const listPath = ['', 'servicios', 'nosotros']
localStorage.setItem('path', path);
if (listPath.includes(path)) {
    console.log('Existe')
} else {
    console.log('No existe')
    if (path != '/') {
        window.location.href = '/';
    }
}
window.location.oath = 'servicios'
console.log(this)

ReactDOM.render(
  <BrowserRouter history = 'history' basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
