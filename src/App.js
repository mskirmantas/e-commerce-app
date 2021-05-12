import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header.component'

import Homepage from './pages/Homepage/Homepage.component'
import ShopPage from './pages/Shop/ShopPage.component'

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>

        <Route exact path='/' component={Homepage} />

        <Route exact path='/shop' component={ShopPage} />
        
      </Switch>
    </div>
  );
}

export default App;
