const AUTH_KEY = 'isAuth';
export const authStore = {
  isAuth(): boolean {
    return localStorage.getItem(AUTH_KEY) === 'true';
  },

  login() {
    localStorage.setItem(AUTH_KEY, 'true');
  },

  logout() {
    localStorage.removeItem(AUTH_KEY);
  },
};
