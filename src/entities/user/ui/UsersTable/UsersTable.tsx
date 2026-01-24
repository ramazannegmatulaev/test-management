import React from 'react';
import { User } from '../../../model/types';
import { List, Row, StyledAvatar, Info, Name, Meta } from './UsersTable.styles';
import { formatDate } from '../../../../shared/lib/formatDate';

interface UsersTableProps {
  users: User[];
  onEdit: (user: User) => void;
}

export const UsersTable = ({ users, onEdit }: UsersTableProps) => {
  return (
    <List>
      {users.map((user) => (
        <Row key={user.id} onClick={() => onEdit(user)}>
          <StyledAvatar src={user.avatar} />
          <Info>
            <Name>{user.name}</Name>
            <Meta>Зарегистрирован: {formatDate(user.createdAt)}</Meta>
          </Info>
        </Row>
      ))}
    </List>
  );
};
