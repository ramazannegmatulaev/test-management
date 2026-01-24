import { Alert, Button, Spin } from 'antd';
import React, { useState } from 'react';
import { useUsersQuery } from '../../../entities/user/model/queries';
import { User } from '../../../entities/model/types';
import { UsersTable } from '../../../entities/user/ui/UsersTable/UsersTable';
import { CreateUserModal } from '../../../features/create-user/ui/CreateModal';
import { EditUserModal } from '../../../features/edit-user/ui/EditUserModal';
import { useNavigate } from 'react-router-dom';
import { authStore } from '../../../features/auth/model/authStore';
import { UsersPageWrapper, UsersPageContainer } from './UsersPage.styles';
export const UsersPage = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useUsersQuery();

  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleExit = () => {
    authStore.logout();
    navigate('/login', { replace: true });
  };

  if (isLoading) return <Spin />;
  if (isError) return <Alert type="error" message="Ошибка загрузки" />;

  return (
    <UsersPageWrapper>
      <UsersPageContainer>
        <UsersTable users={data ?? []} onEdit={(user) => setSelectedUser(user)} />

        <Button type="primary" style={{ marginTop: 24 }} onClick={() => setIsCreateOpen(true)}>
          Создать пользователя
        </Button>

        <CreateUserModal open={isCreateOpen} onClose={() => setIsCreateOpen(false)} />

        <EditUserModal
          user={selectedUser}
          open={!!selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      </UsersPageContainer>
      <Button type="primary" onClick={handleExit}>
        Выход
      </Button>
    </UsersPageWrapper>
  );
};
