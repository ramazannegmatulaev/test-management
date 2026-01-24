import { useMutation } from '@tanstack/react-query';
import { loginApi } from '../api/login';

export const useLoginMutation = () => {
  return useMutation<string, Error, { login: string; password: string }>({
    mutationFn: async ({ login, password }) => {
      return loginApi(login, password);
    },
  });
};
