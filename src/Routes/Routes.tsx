import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from '../Containers/HomeContainer';
import Login from '../Containers/LoginContainer';
import Stepper from '../Containers/StepperContainer';

export default () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/basic-form" component={Home}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/checkout" component={Login}/>
    <Route exact path="/stepper" component={Stepper}/>
  </Switch>
);
