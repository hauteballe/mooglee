import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from '../pages/Home';
import Article from '../pages/Article';
import Images from '../pages/Images';
import LoginForm from '../pages/LoginForm';

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
        <Route path='/mooglee/login'>
          <LoginForm />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
