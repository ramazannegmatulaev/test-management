import axios from 'axios';
import { User } from '../../model/types';

const USERS_API = 'https://6970e8c278fec16a63ff713f.mockapi.io/api/users';
export const fetchUsers = async (): Promise<User[]> => {
  const { data } = await axios.get(USERS_API);
  return data;
};
