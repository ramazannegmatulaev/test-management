import React from 'react';
import { Card, Input, Form, Button, notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../auth/model/useLoginMutation';
import { authStore } from '../auth/model/authStore';

interface LoginFormValues {
  login: string;
  password: string;
}

export const LoginForm = () => {
  const navigate = useNavigate();
  const loginMutation = useLoginMutation();

  const onFinish = ({ login, password }: LoginFormValues) => {
    loginMutation.mutate(
      { login, password },
      {
        onSuccess: (token) => {
          authStore.login(token);
          navigate('/users', { replace: true });
        },
        onError: (error) => {
          notification.error({
            message: 'Ошибка авторизации',
            description: error.message,
          });
        },
      },
    );
  };

  return (
    <Card title="Авторизация" style={{ width: 300 }}>
      <Form layout="vertical" onFinish={onFinish}>
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

        <Button
          type="primary"
          htmlType="submit"
          block
          loading={loginMutation.isPending}
          disabled={loginMutation.isPending}>
          Войти
        </Button>
      </Form>
    </Card>
  );
};

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { authStore } from '../auth/model/authStore';
// import { Card, Input, Form, Button, notification } from 'antd';
// import { useLoginMutation } from '../auth/model/useLoginMutation';

// interface LoginForm {
//   login: string;
//   password: string;
// }
// export const LoginForm = () => {
//   const navigate = useNavigate();
//   const loginMutation = useLoginMutation();

//   const onFinish = ({ login, password }: LoginForm) => {
//     loginMutation.mutate(
//       { login, password },
//       {
//         onSuccess: (token) => {
//           authStore.login(token);
//           navigate('/users', { replace: true });
//         },
//         onError: (error: Error) => {
//           notification.error({
//             message: 'Ошибка авторизации',
//             description: error.message,
//           });
//         },
//       },
//     );
//   };

//   const handleFinish = () => {
//     authStore.login();
//     navigate('/users');
//   };

//   return (
//     <Card title="Авторизация" style={{ width: 300 }}>
//       <Form layout="vertical" onFinish={handleFinish}>
//         <Form.Item
//           label="Логин"
//           name="login"
//           rules={[{ required: true, message: 'Введите логин' }]}>
//           <Input />
//         </Form.Item>

//         <Form.Item
//           label="Пароль"
//           name="password"
//           rules={[{ required: true, message: 'Введите пароль' }]}>
//           <Input.Password />
//         </Form.Item>

//         <Button type="primary" htmlType="submit" block>
//           Войти
//         </Button>
//       </Form>
//     </Card>
//   );
// };
