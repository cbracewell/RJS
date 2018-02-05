import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from '../Pages/HomePage';

export default () => (
  <Switch>
    <Route exact path="/" component={HomePage}/>
  </Switch>
);
