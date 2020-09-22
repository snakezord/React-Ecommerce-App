import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; 
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
  {/* It gives our App that's sitting between
   this Router component all of the functionality of Routing
   this library provides */}
    <BrowserRouter>      
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);