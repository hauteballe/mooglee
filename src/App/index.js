import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from '../pages/Home';
import Article from '../pages/Article';
import Images from '../pages/Images';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/mooglee'>
          <HomePage />
        </Route>
        <Route path='/mooglee/article/:id'>
          <Article />
        </Route>
        <Route path='/mooglee/images'>
          <Images />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
