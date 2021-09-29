import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Calculator from './Calculator';
import Quotes from './Quotes';

const App = () => (
  <>
    <Navigation />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/calculator">
        <Calculator />
      </Route>
      <Route path="/quotes">
        <Quotes />
      </Route>
    </Switch>
  </>
);

export default App;
