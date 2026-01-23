import { Alert, Button, Spin } from 'antd';
import React, { useState } from 'react';
import { useUsersQuery } from '../../../entities/user/model/queries';
import { User } from '../../../entities/model/types';
import { UsersTable } from '../../../entities/user/ui/UsersTable';
import { CreateUserModal } from '../../../features/create-user/ui/CreateModal';

export const UsersPage = () => {
  const { data, isLoading, isError } = useUsersQuery();
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  if (isLoading) return <Spin />;
  if (isError) return <Alert type="error" message="Ошибка загрузки" />;

  return (
    <div>
      <Button type="primary" style={{ marginBottom: 16 }} onClick={() => setIsCreateOpen(true)}>
        Создать пользователя
      </Button>

      <UsersTable users={data ?? []} onEdit={(user) => setSelectedUser(user)} />

      <CreateUserModal open={isCreateOpen} onClose={() => setIsCreateOpen(false)} />
    </div>
  );
};
