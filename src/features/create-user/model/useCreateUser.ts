import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { User } from '../../../entities/model/types';

interface CreateUser {
  name: string;
  avatar: string;
}

const API_URL = 'https://6970e8c278fec16a63ff713f.mockapi.io/api/users';

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (dto: CreateUser) => {
      const { data } = await axios.post<User>(API_URL, dto);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};
