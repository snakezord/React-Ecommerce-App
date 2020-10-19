import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; 
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store'

ReactDOM.render(
  <React.StrictMode>
  {/* It gives our App that's sitting between
   this Router component all of the functionality of Routing
   this library provides */}
   <Provider store={store}>
    <BrowserRouter>      
      <App />
    </BrowserRouter>
   </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);