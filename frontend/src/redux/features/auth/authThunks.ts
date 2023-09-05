import { createAsyncThunk } from "@reduxjs/toolkit";
import authService from "@services/auth/auth.service";
import { SignInType, User } from "@services/auth/types";

export const AuthThunks = {
  signIn: createAsyncThunk<User, SignInType>("auth/sign-in", async (signIn) => {
    return await authService.signIn(signIn);
  }),

  signOut: createAsyncThunk<User, any>("auth/sign-up", async (signUp) => {
    return await authService.signUp(signUp);
  }),

  signUp: createAsyncThunk<void, string>("auth/sign-out", async (id) => {
    return await authService.signOut(id);
  }),
}