import React from 'react';
import { Container, Title, Subtitle, Description, HomeButton } from './NotFoundPage.styles';
import { useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleToMain = () => {
    navigate('/users');
  };
  return (
    <Container>
      <Title>404</Title>
      <Subtitle>Страница не найдена</Subtitle>
      <Description>Извините, запрашиваемая страница не существует.</Description>
      <HomeButton onClick={() => handleToMain()}>Вернуться на главную</HomeButton>
    </Container>
  );
};
