import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from '../../pages/login/ui/LoginPage';
import { UsersPage } from '../../pages/users/ui/UsersPage';
import { NotFoundPage } from '../../pages/notFound/ui/NotFoundPage';
export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
