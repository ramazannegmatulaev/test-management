import React from 'react';
import { Button, Input } from 'antd';

export const LoginPage = () => {
  return (
    <form action="">
      <Input type="text" placeholder="Введите логин" />
      <Input.Password type="password" placeholder="Введите пароль" />
      <Button>Войти</Button>
    </form>
  );
};
