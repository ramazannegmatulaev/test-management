export const loginApi = (login: string, password: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (login === 'admin' && password === 'admin') {
        resolve('mok-token-321');
      } else {
        reject(new Error('Неверный логин или пароль'));
      }
    }, 2000);
  });
};
