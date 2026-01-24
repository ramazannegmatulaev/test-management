import React from 'react';
import { Navigate } from 'react-router-dom';
import { authStore } from '../../features/auth/model/authStore';
interface PrivateRouteProps {
  children: JSX.Element;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  if (!authStore.isAuth()) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
