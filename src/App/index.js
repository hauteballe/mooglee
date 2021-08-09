import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomePage from '../pages/Home';
import Article from '../pages/Article';

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/article/:id'>
          <Article />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
