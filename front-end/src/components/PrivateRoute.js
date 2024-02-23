import React from 'react';
import { Route, Link } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem('token')
      ? <Component {...props} />
      : <Link to="/login" />
  )} />
);

export default PrivateRoute;
