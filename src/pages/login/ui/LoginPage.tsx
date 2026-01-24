import React from 'react';
import { Button, Input } from 'antd';
import { LoginForm } from '../../../features/ui/LoginForm';

export const LoginPage = () => {
  return (
    <div
      style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <LoginForm />
    </div>
  );
};
