import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from '../navigation/Navigation';
import Home from '../home/Home';
import Calculator from '../calculator/Calculator';
import Quotes from '../quotes/Quotes';

const App = () => (
  <Router>
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
  </Router>
);

export default App;
