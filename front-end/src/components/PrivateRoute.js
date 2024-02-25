import React from 'react';
import { Route, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => {
  const navigate = useNavigate();

  if (!loggedIn) {
    navigate('/login', { replace: true });
    return null; // Return null while redirecting to prevent rendering unauthorized components
  }

  return <Route {...rest} element={<Component />} />;
};

export default PrivateRoute;
