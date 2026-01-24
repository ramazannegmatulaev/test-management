const AUTH_KEY = 'token';

export const authStore = {
  getToken(): string | null {
    return localStorage.getItem(AUTH_KEY);
  },

  isAuth(): boolean {
    return Boolean(this.getToken());
  },

  login(token: string) {
    localStorage.setItem(AUTH_KEY, token);
  },

  logout() {
    localStorage.removeItem(AUTH_KEY);
  },
};
