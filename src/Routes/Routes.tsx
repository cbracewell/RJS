import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Checkout from '../Containers/CheckoutContainer';
import Login from '../Containers/LoginContainer';
import Stepper from '../Containers/StepperContainer';
import Simple from '../Containers/SimpleFormContainer';
import SideBySide from '../Containers/SideBySideContainer';
import Home from '../Containers/HomeContainer';

export default () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/simple-form" component={Simple}/>
    <Route exact path="/side-by-side" component={SideBySide}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/checkout" component={Checkout}/>
    <Route exact path="/stepper" component={Stepper}/>
  </Switch>
);
