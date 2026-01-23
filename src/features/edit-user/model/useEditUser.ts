import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { User } from '../../../entities/model/types';

interface EditUser {
  id: number;
  name: string;
  avatar: string;
}

const API_URL = 'https://6970e8c278fec16a63ff713f.mockapi.io/api/users';

export const useEditUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, ...dto }: EditUser) => {
      const { data } = await axios.put<User>(`${API_URL}/${id}`, dto);

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};
