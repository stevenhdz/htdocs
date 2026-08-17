import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

const AdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuth, isAdmin } = useAuth();
  if (!isAuth) return <Navigate to="/login" replace />;
  if (!isAdmin) return <Navigate to="/" replace />;
  return <>{children}</>;
};
export default AdminRoute;