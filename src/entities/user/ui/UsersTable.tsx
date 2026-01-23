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
      title: 'Аватар',
      dataIndex: 'avatar',
      render: (avatar: string) => <Avatar src={avatar} />,
      width: 80,
    },
    {
      title: 'Имя',
      dataIndex: 'name',
    },
    {
      title: 'Создан',
      dataIndex: 'createdAt',
      render: (createdAt: number) => new Date(createdAt).toLocaleDateString(),
    },
    {
      title: 'Действия',
      render: (_, user) => (
        <Button type="link" onClick={() => onEdit(user)}>
          Редактировать
        </Button>
      ),
    },
  ];

  return <Table rowKey="id" columns={columns} dataSource={users} />;
};

// import React from 'react';
// import { User } from '../../model/types';
// import Table, { ColumnsType } from 'antd/es/table';
// import { Avatar, Button } from 'antd';

// interface UsersOnTableProps {
//   users: User[];
//   onEdit: (user: User) => void;
// }

// export const UsersTable = ({ users, onEdit }: UsersOnTableProps) => {
//   const columns: ColumnsType<User> = [
//     {
//       title: 'Имя',
//       dataIndex: 'avatar',
//       render: (avatar: string) => <Avatar src={avatar} />,
//       width: 80,
//     },
//     { title: 'Имя', dataIndex: 'name' },
//     {
//       title: 'Дата создания',
//       dataIndex: 'createdAt',
//       render: (createdAt: number) => new Date(createdAt).toLocaleDateString(),
//     },
//     {
//       title: 'Действия',
//       render: (_, user) => (
//         <Button type="link" onClick={() => onEdit(user)}>
//           Редактирование пользователя
//         </Button>
//       ),
//     },
//   ];
//   return <Table rowKey="id" columns={columns} dataSource={users} />;
// };
