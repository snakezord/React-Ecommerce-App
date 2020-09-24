import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndUp from './pages/sign-in-and-up/sign-in-and-up.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

// Prop tunneling or drilling is a bad pattern
// So use HOC withRouter()
class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null 

  componentDidMount() {
    this.unsubscribeFromAuth=  auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
          console.log(this.state)
        })
      }else this.setState( {currentUser: userAuth} )
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
    <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndUp}/>
      </Switch>       
    </div>
    );
  }
  
}

export default App;
