import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component'
// Prop tunneling or drilling is a bad pattern
// So use HOC withRouter()

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>       
    </div>
  );
}

export default App;
