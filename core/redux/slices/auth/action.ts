import { createAction } from "@reduxjs/toolkit";

export type UserPayload = {
  user: {
    name: string;
    id: number;
  };
  token: string;
};

export const addUser = createAction<UserPayload>("auth/addUser");
export const editUser = createAction<UserPayload>("auth/editUser");
export const deleteUser = createAction("auth/deleteUser");
