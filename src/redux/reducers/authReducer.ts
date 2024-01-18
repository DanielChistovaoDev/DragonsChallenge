import { createReducer } from "@reduxjs/toolkit";
import { login, logout } from "../actions/authActions";

export interface AuthState {
  isLoggedIn: boolean;
  username: string;
  password: string;
}

const storedAuth = localStorage.getItem("auth");

const initialState: AuthState = storedAuth
  ? JSON.parse(storedAuth)
  : {
      isLoggedIn: false,
      username: "",
      password: "",
    };

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login, (state, action) => {
      state.isLoggedIn = true;
      state.username = action.payload.username;
      state.password = action.payload.password;
      localStorage.setItem("auth", JSON.stringify(state));
    })
    .addCase(logout, (state) => {
      state.isLoggedIn = false;
      state.username = "";
      state.password = "";
      localStorage.removeItem("auth");
    });
});

export default authReducer;
