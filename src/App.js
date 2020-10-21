import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import CheckoutPage from './pages/checkout/checkout.component.jsx'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndUpPage from './pages/sign-in-and-up/sign-in-and-up.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import { setCurrentUser } from './redux/user/user.actions'

import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

// Prop tunneling or drilling is a bad pattern
// So use HOC withRouter()

class App extends React.Component {

  unsubscribeFromAuth = null 

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapshot => {
          setCurrentUser({       
            id: snapshot.id,
            ...snapshot.data()
          })          
        })
      }else setCurrentUser(userAuth)     
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/checkout' component={CheckoutPage}/>
        <Route exact path='/signin'
          render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndUpPage />)}
        />
      </Switch>       
    </div>
    );
  }  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
