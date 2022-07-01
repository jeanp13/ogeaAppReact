import React from 'react';

import AuthRoute from './auth.routes';
import AppRoute from './app.routes';

import { useAuth } from '../hooks/auth';

const Routes: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <h1>Carregando</h1>;
  }

  return user ? <AppRoute /> : <AuthRoute />;
};

export default Routes;
