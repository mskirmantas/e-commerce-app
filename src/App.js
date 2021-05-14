import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import Header from './components/Header/Header.component'

import Homepage from './pages/Homepage/Homepage.component'
import ShopPage from './pages/Shop/ShopPage.component'
import SignInSignUpPage from './pages/SignInSignUp/SignInSignUp.component'

import './App.css';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        // update current user state with snapshot data on log in
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }
      // otherwise, is user signs out:
      this.setState({currentUser: userAuth}); // which will be null

    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/sign-in' component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
