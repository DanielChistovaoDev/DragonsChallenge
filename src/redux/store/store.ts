// store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer, { AuthState } from '../reducers/authReducer';

export interface RootState {
  auth: AuthState;
}

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
