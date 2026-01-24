import React from 'react';
import { useNavigate } from 'react-router-dom';
import { authStore } from '../auth/model/authStore';
import { Card, Input, Form, Button } from 'antd';
export const LoginForm = () => {
  const navigate = useNavigate();

  const handleFinish = () => {
    authStore.login();
    navigate('/users');
  };

  return (
    <Card title="Авторизация" style={{ width: 300 }}>
      <Form layout="vertical" onFinish={handleFinish}>
        <Form.Item
          label="Логин"
          name="login"
          rules={[{ required: true, message: 'Введите логин' }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[{ required: true, message: 'Введите пароль' }]}>
          <Input.Password />
        </Form.Item>

        <Button type="primary" htmlType="submit" block>
          Войти
        </Button>
      </Form>
    </Card>
  );
};
