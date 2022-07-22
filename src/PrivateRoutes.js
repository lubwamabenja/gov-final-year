import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { getToken } from './common';

const useAuth = () => {
  const user = getToken();
  return user;
};

// handle the private routes
function PrivateRoute() {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
