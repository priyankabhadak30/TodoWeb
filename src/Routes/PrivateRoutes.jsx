import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoutes({ children }) {
  const reg = JSON.parse(localStorage.getItem('userlist'));
  const login = JSON.parse(localStorage.getItem('login'));

  if (!reg) {
    return <Navigate to="/reg"  replace/>;
  }

  if (!login) {
    return <Navigate to="/login" replace/>;
  }

  return children;
}

export default PrivateRoutes;
