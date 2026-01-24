import React from 'react';
import { Container, Title, Subtitle, Description, HomeButton } from './NotFoundPage.styles';
import { useNavigate } from 'react-router-dom';
import { Button, Result } from 'antd';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleToMain = () => {
    navigate('/users');
  };
  return (
    <Result
      status={'404'}
      title="404"
      subTitle="Несуществующая страница"
      extra={
        <Button onClick={() => handleToMain()} type="primary">
          Вернуться назад
        </Button>
      }
    />
  );
};
