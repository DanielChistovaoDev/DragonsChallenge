import { Reducer, Action } from 'redux';
import { LOGIN, LOGOUT, LoginAction, LogoutAction } from '../actions/authActions';

export interface AuthState {
  isLoggedIn: boolean;
  username: string;
  password: string;
}

const initialState: AuthState = {
  isLoggedIn: false,
  username: '',
  password: '',
};

const authReducer: Reducer<AuthState, Action<string>> = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        username: (action as LoginAction).payload.username,
        password: (action as LoginAction).payload.password,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
