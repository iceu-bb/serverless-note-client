import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AppliedRoute from './components/AppliedRoute';
import NotFound from './containers/NotFound';
import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';

export default function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoute path='/' exact component={Home} appProps={appProps} />
      <AppliedRoute path='/login' exact component={Login} appProps={appProps} />
      <AppliedRoute
        path='/signup'
        exact
        component={Signup}
        appProps={appProps}
      />
      <Route component={NotFound} />
    </Switch>
  );
}
