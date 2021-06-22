import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

//renders App.js to the DOM
ReactDOM.render(
  <React.StrictMode>
  <HashRouter>
    <App />
  </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
