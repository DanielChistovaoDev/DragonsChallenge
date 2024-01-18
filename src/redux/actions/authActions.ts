import { Action } from 'redux';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export interface LoginAction extends Action<typeof LOGIN> {
  payload: {
    username: string;
    password: string;
  };
}

export const login = (username: string, password: string): LoginAction => ({
  type: LOGIN,
  payload: { username, password },
});

export interface LogoutAction extends Action<typeof LOGOUT> {}

export const logout = (): LogoutAction => ({
  type: LOGOUT,
});
