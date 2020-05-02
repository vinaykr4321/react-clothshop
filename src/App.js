import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/shop.component' ;
import Header from './components/header/Header.component';

import './App.css';

// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE</h1>
//   </div>
// )

// const HatsPages = (props) => (
//   <div>
//     <h1>MULTI HAT PAGES WITH ID: {props.match.params.hatid}</h1>
//   </div>
// )

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
