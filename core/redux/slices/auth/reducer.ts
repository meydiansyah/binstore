/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createReducer } from "@reduxjs/toolkit";
import { addUser, editUser, deleteUser } from "@/core/redux/slices/auth";
import { RootState } from "../../store";

export interface UserType {
  user: {
    name: string;
    id: number;
  } | null;
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: UserType = {
  user: null,
  token: null,
  isAuthenticated: false,
};

export const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addUser, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isAuthenticated = true;
    })
    .addCase(editUser, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
    })
    .addCase(deleteUser, (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    });
});

export const selectAuth = (state: RootState) => state.auth;

export default authReducer;
