import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f8f9fa;
  color: #333;
  font-family: Arial, sans-serif;
`;

export const Title = styled.h1`
  font-size: 8rem;
  margin: 0;
  color: #e74c3c;
`;

export const Subtitle = styled.h2`
  font-size: 2rem;
  margin-top: 0;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
`;

export const HomeButton = styled.div`
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #3498db;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;
