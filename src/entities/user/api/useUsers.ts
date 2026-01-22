import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useUsers = () =>
  useQuery(['users'], async () => {
    const res = await axios.get('https://6970e8c278fec16a63ff713f.mockapi.io/api/users');
    console.log(res);
    return res.data;
  });
