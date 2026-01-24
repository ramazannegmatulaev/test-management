import React from 'react';
import { Table, Button, Avatar } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { User } from '../../model/types';

interface UsersTableProps {
  users: User[];
  onEdit: (user: User) => void;
}

export const UsersTable = ({ users, onEdit }: UsersTableProps) => {
  const columns: ColumnsType<User> = [
    {
      dataIndex: 'avatar',
      render: (avatar: string) => <Avatar src={avatar} />,
      width: 80,
    },
    {
      dataIndex: 'name',
    },
    {
      dataIndex: 'createdAt',
      render: (createdAt: number) => new Date(createdAt).toLocaleDateString(),
    },
    {
      render: (_, user) => (
        <Button type="link" onClick={() => onEdit(user)}>
          Редактировать
        </Button>
      ),
    },
  ];

  return <Table pagination={false} rowKey="id" columns={columns} dataSource={users} />;
};
